import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Title from '../../lib/parts/Title';
import { CreateTagInput, ModelCategoryFilterInput } from '../../src/API';
import { allCategories, postTag } from './api';

const RegisterTag: React.FC = () => {
  const [categoryList, setCategoryList] = useState([])
  const [categoryId, setCategoryId] = useState<String>("")
  const [name, setName] = useState<String>("")
  
  const onClick = () => {
    if (name !== "" && categoryId !== "" ) {
      const input = {
        code: "001",
        name: name,
        categoryId: categoryId,
      } as CreateTagInput
      postTag(input)
    }
  }

  useEffect(() => {
    console.log("allCategories")
    allCategories({code: {eq:"001"}}).then(items => {
      setCategoryList(items)
    }).catch(e => {
      console.log("no data")
      setCategoryList([])
    })
  }, [])

  return (
    <>
      <Title>タグ登録</Title>
      <Box mt={4}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={categoryId}
          onChange={e => {
            setCategoryId(e.target.value as string)
          }}
        >
          {categoryList.map((item, index) => {
            return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
          })}
        </Select>
      </Box>
      <Box mt={4}>
        <TextField required id="TagName" label="TagName" onChange={(e)=>{setName(e.target.value)}} />
      </Box>
      <Box mt={4}>
        <Button variant="contained" onClick={() => onClick()}>登録</Button>
      </Box>
    </>
  );
}

export default RegisterTag;
