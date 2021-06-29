import { Box, Divider, FormControlLabel, Switch, Typography } from '@material-ui/core';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useState } from 'react';
import Title from '../../lib/parts/Title';
import { ModelImageFilterInput, ModelStringInput } from '../../src/API';
import { getlist } from './api';

const Query: React.FC = () => {

  const [uploadItems, setUploadItems] = useState([])
  const [tag1Items, setTag1Items] = useState([])
  const [tag2Items, setTag2Items] = useState([])

  const [outputList, setOutputList] = useState([])

  useEffect(() => {

    const filter = []

    const uploadFilter: ModelImageFilterInput[] = []
    uploadItems.map(item => {
      uploadFilter.push({uploadDate: {eq: item}} as ModelImageFilterInput)
    })
    if (uploadFilter.length) filter.push({or: uploadFilter})

    const tag1Filter: ModelImageFilterInput[] = []
    tag1Items.map(item => {
      tag1Filter.push({tag1: {contains: item}} as ModelImageFilterInput)
    })
    if (tag1Filter.length) filter.push({or: tag1Filter})

    const tag2Filter: ModelImageFilterInput[] = []
    tag2Items.map(item => {
      tag2Filter.push({tag2: {contains: item}} as ModelImageFilterInput)
    })
    if (tag2Filter.length) filter.push({or: tag2Filter})

    console.log(filter)
    const input = {
      and: filter,
    } as ModelImageFilterInput

    getlist(input).then(value => {
      setOutputList(value)
    }).catch(err => {
      setOutputList([])
      console.log(err)
    })

  },[uploadItems, tag1Items, tag2Items])

  return (
    <>
      <Title>検索</Title>
      <Box>
        <Tags
          names={["2021/6/23","2021/6/24"]}
          setSelectTags={setUploadItems}
        />
      </Box>
      <Box>
        <Tags
          names={["tag1a","tag1b","tag1c","tag1d"]}
          setSelectTags={setTag1Items}
        />
      </Box>
      <Box>
        <Tags
          names={["tag2a","tag2b","tag2c","tag2d"]}
          setSelectTags={setTag2Items}
        />
      </Box>
      <Divider />
      <Box>
        {outputList.map((item, index) => {
          return (
            <Box key={index}>
              <Typography variant="h5">{item.name}</Typography>
              <Box ml={2}>
                <Typography>{item.uploadDate}</Typography>
                <Typography>{item.tag1.toString()}</Typography>
                <Typography>{item.tag2.toString()}</Typography>
              </Box>
            </Box>
          )
        })}
      </Box>
    </>
  );
}
export default Query;


type TagsProps = {
  names: string[]
  setSelectTags: Dispatch<SetStateAction<string[]>>
}
const Tags: React.FC<TagsProps> = ({names, setSelectTags}) => {
  const [checkedItems, setCheckedItems] = useState({})
  const checked = (tagName) => {
    return (checkedItems[tagName]) ? checkedItems[tagName] : false
  }
  const handleChange = e => {
    //checkedItemsのstateをセット
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked
    })
  }
  useEffect(() => {
    const tags: string[] = []
    Object.keys(checkedItems).forEach((key) => {
      if (checkedItems[key]) tags.push(key)
    })
    setSelectTags(tags)
  }, [checkedItems])
  return (
    <>
      {names.map((tag, index) => {
        return (
          <TagSwitch
            key={index}
            name={tag}
            checked={checked(tag)}
            onChange={handleChange}
          />
        )
      })}
    </>
  )
}

type SwitchProps = {
  name: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}
const TagSwitch: React.FC<SwitchProps> = ({name, checked, onChange}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          name={name}
          color="primary"
        />
      }
      label={name}
    />
  )
}
