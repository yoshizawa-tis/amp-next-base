import { Box, CircularProgress, Grid, Link } from "@material-ui/core";
import { Storage } from "aws-amplify";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import FileBase64 from './react-file-base64';
import ConfirmationDialog from "../../lib/parts/ConfirmationDialog";

type Props = {
  path: string,
  height: string
  contents: AxiosResponse["data"] | null
  setContents: Function
}

const ViewMode = {
  INIT: 'init',
  FILE: 'fileview',
  UPLOAD: 'upload'
} as const
type ViewMode = typeof ViewMode[keyof typeof ViewMode]

const FileViewer: React.FC<Props> = ({path, height, contents, setContents}) => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.INIT)

  // 削除確認ダイアログ
  const [open, setOpen] = useState<boolean>(false)

  // contents更新
  const getFile = async () => {
    if (!contents) {
      await Storage.get(path)
        .then(s3url => axios.get(s3url as string)
          .then(res => setContents(res.data))
        )
        .catch(() => setContents(null))
    }
  }
  const put = async (data) => {
    await Storage.put(path, data)
      .then (() => getFile())
      .catch(err => console.log(err))
  }
  const remove = async () => {
    await Storage.remove(path)
      .then(() => {
        setContents(null)
      })
      .catch(err => console.log(err));
  }

  // viewMode更新Event
  const fileSelectEvent = (data) => {
    setViewMode(ViewMode.FILE)
    put(data)
  }
  const fileDeleteEvent = () => {
    remove().then(() => setViewMode(ViewMode.UPLOAD))
  }

  // Effect
  useEffect(() => {
    if (contents) {
      setViewMode(ViewMode.FILE)
    } else {
      Storage.list(path)
        .then((r) => {
          if (r.length > 0) {
            setViewMode(ViewMode.FILE)
            getFile()
          } else {
            setViewMode(ViewMode.UPLOAD)
          }
        })
    }
  }, [])

  // PDF表示参考
  // https://qiita.com/katzueno/items/c490361c3274d0108e7d
  return (
    <React.Fragment>
      {
        (viewMode === ViewMode.FILE) ? (
          (contents) ? (
            <Box>
              <Box height={"calc(" + height + " - 20px)"}>
                <object data={contents.base64} type={contents.type} width="100%" height="100%" />
              </Box>
              <Box display="flex"  height="20px">
                <Box flexGrow={1}>
                  <a download={contents.name} href={contents.base64}>
                    <Link component="button">ダウンロード</Link>
                  </a>
                </Box>
                <Box>
                  <Link component="button" onClick={() => setOpen(true)}>ファイル削除</Link>
                  <ConfirmationDialog 
                    title="ファイル削除確認"
                    text="ファイルを削除してよいですか？"
                    open={open}
                    setOpen={setOpen}
                    execFunc={fileDeleteEvent}
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            <Grid container alignItems="center" justify="center" >
              <Grid item>
                <Box mt={8}>
                  <CircularProgress />
                </Box>
              </Grid>
            </Grid>
          ) 
        ) : (
          (viewMode === ViewMode.UPLOAD) && (
            <Box p={4}>
              <FileBase64 muliple={ false } onDone={(e: any) => fileSelectEvent(e)} />
            </Box>
          )
        )

      }
    </React.Fragment>
  )
}

export default FileViewer
