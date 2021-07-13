import { Box, Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Title from '../../lib/parts/Title';
import { CreateImageInput } from '../../src/API';
import { postImage } from './api';

const RegisterImage: React.FC = () => {
  const [name, setName] = useState<String>("")
  
  const onClick = () => {
    if (name !== "") {
      const input = {
        code: "001",
        name: name,
        key: name,
      } as CreateImageInput
      postImage(input)
    }
  }
  return (
    <>
      <Title>テスト用画像データ登録</Title>
      <Box mt={4}>
        <TextField required id="FileName" label="FileName" onChange={(e)=>{setName(e.target.value)}} />
      </Box>
      <Box mt={4}>
        <Button variant="contained" onClick={() => onClick()}>登録</Button>
      </Box>
    </>
  );
}

export default RegisterImage;




// const RegisterImage: React.FC = () => {
//   const [name, setName] = useState<String>("")
//   const [upload, setUpload] = useState<String>("")
//   const [create, setCreate] = useState<String>("")
//   const [tag1a, setTag1a] = useState<String>("")
//   const [tag1b, setTag1b] = useState<String>("")
//   const [tag1c, setTag1c] = useState<String>("")
//   const [tag2a, setTag2a] = useState<String>("")
//   const [tag2b, setTag2b] = useState<String>("")
//   const [tag2c, setTag2c] = useState<String>("")
//   
//   const onClick = () => {
//     if (
//       name !== ""
//       && upload !== ""
//       && create !== ""
//       && tag1a !== ""
//       && tag2a !== ""
//     ) {
//       const input = {
//         name: name,
//         key: name,
//         uploadDate: upload,
//         createDate: create,
//         tag1: [tag1a, tag1b, tag1c],
//         tag2: [tag2a, tag2b, tag2c],
//       } as CreateImageInput
//       postImage(input)
//     }
//   }
//   return (
//     <>
//       <Title>テストデータ登録</Title>
//       <Box mt={4}>
//         <TextField required id="name" label="FileName" onChange={(e)=>{setName(e.target.value)}} />
//       </Box>
//       <Box mt={4}>
//         <TextField required id="upload" label="Upload" onChange={(e)=>{setUpload(e.target.value)}} />
//       </Box>
//       <Box mt={4}>
//         <TextField required id="create" label="Create" onChange={(e)=>{setCreate(e.target.value)}} />
//       </Box>
//       <Box mt={4}>
//         <TextField id="tag1a" onChange={(e)=>{setTag1a(e.target.value)}} label="Tag1" />
//         <TextField id="tag1b" onChange={(e)=>{setTag1b(e.target.value)}} />
//         <TextField id="tag1c" onChange={(e)=>{setTag1c(e.target.value)}} />
//       </Box>
//       <Box mt={4}>
//         <TextField id="tag2a" onChange={(e)=>{setTag2a(e.target.value)}} label="Tag2" />
//         <TextField id="tag2b" onChange={(e)=>{setTag2b(e.target.value)}} />
//         <TextField id="tag2c" onChange={(e)=>{setTag2c(e.target.value)}} />
//       </Box>
//       <Box mt={4}>
//         <Button variant="contained" onClick={() => onClick()}>登録</Button>
//       </Box>
//     </>
//   );
// }
// 
// export default RegisterImage;