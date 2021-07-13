import { Box, Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Title from '../../lib/parts/Title';
import { CreateCategoryInput } from '../../src/API';
import { postCategory } from './api';

const RegisterCategory: React.FC = () => {
  const [name, setName] = useState<String>("")
  
  const onClick = () => {
    if (name !== "") {
      const input = {
        code: "001",
        name: name,
      } as CreateCategoryInput
      postCategory(input)
    }
  }
  return (
    <>
      <Title>カテゴリ登録</Title>
      <Box mt={4}>
        <TextField required id="CategoryName" label="CategoryName" onChange={(e)=>{setName(e.target.value)}} />
      </Box>
      <Box mt={4}>
        <Button variant="contained" onClick={() => onClick()}>登録</Button>
      </Box>
    </>
  );
}

export default RegisterCategory;
