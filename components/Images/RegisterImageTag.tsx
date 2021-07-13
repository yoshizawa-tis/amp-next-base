import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Title from '../../lib/parts/Title';
import { CreateImageTagInput, ModelImageFilterInput } from '../../src/API';
import { allImages, allTags, postImageTag } from './api';

const RegisterImageTag: React.FC = () => {
  const [imageList, setImageList] = useState([])
  const [imageId, setImageId] = useState<String>("")

  const [tagList, setTagList] = useState([])
  const [tagId, setTagId] = useState<String>("")
  
  const onClick = () => {
    if (imageId !== "") {
      const input = {
        code: "001",
        imageId: imageId,
        tagId: tagId,
      } as CreateImageTagInput
      postImageTag(input)
    }
  }

  useEffect(() => {
    allImages({code: {eq:"001"}}).then(items => {
      setImageList(items)
    }).catch(e => setImageList([]))
    allTags({code: {eq:"001"}}).then(items => {
      setTagList(items)
    }).catch(e => setTagList([]))
  }, [])

  return (
    <>
      <Title>タグ付け</Title>
      <Box mt={4}>
        <InputLabel id="file-label">FileName</InputLabel>
        <Select
          labelId="file-label"
          value={imageId}
          onChange={e => {
            setImageId(e.target.value as string)
          }}
        >
          {imageList.map((item, index) => {
            return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
          })}
        </Select>
      </Box>
      <Box mt={4}>
        <InputLabel id="tag-label">TagName</InputLabel>
        <Select
          labelId="tag-label"
          value={tagId}
          onChange={e => {
            setTagId(e.target.value as string)
          }}
        >
          {tagList.map((item, index) => {
            return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
          })}
        </Select>
      </Box>
      <Box mt={4}>
        <Button variant="contained" onClick={() => onClick()}>登録</Button>
      </Box>
    </>
  );
}

export default RegisterImageTag;
