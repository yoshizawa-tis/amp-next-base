import {
  Box,
  Chip,
  createStyles,
  Divider,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core"
import React, { useEffect } from "react"
import { useState } from "react"
import { allCategories, allImages } from "./api"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      // justifyContent: 'center',
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
)

const Query: React.FC = () => {
  const classes = useStyles()
  const [categories, setCategories] = useState([])

  const [outputList, setOutputList] = useState([])

  useEffect(() => {
    allCategories({ code: { eq: "001" } })
      .then((items) => {
        console.log(items)
        setCategories(items)
      })
      .catch((e) => {
        console.log("no data")
        setCategories([])
      })

    allImages({ code: { eq: "001" } })
      .then((value) => {
        setOutputList(value)
      })
      .catch((err) => {
        setOutputList([])
        console.log(err)
      })
  }, [])

  return (
    <>
      <Box className={classes.root}>
        <Chip label="aaa" />
        <Chip
          label="Deletable secondary"
          onDelete={() => {}}
          color="secondary"
        />
      </Box>
      <Box>
        {categories.map((category, index) => {
          return <CategorySelect key={index} category={category} />
        })}
      </Box>
      <Divider />
      <Box>
        {outputList.map((item, index) => {
          return (
            <Box key={index}>
              <Typography variant="h5">{item.name}</Typography>
              <Box ml={2} className={classes.root}>
                {item.tags.items.map((i, index) => {
                  return <Chip key={index} label={i.tag.name} />
                })}
              </Box>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
export default Query

const CategorySelect: React.FC<{
  category: {
    id: string
    name: string
    tags: {
      items: [
        {
          id: string
          name: string
        }
      ]
    }
  }
}> = ({ category }) => {
  return (
    <>
      <Autocomplete
        multiple
        options={category.tags.items}
        getOptionLabel={(option) => option.name}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={category.name}
            placeholder="Favorites"
          />
        )}
      />
    </>
  )
}

// const Query: React.FC = () => {
//
//   const [uploadItems, setUploadItems] = useState([])
//   const [tag1Items, setTag1Items] = useState([])
//   const [tag2Items, setTag2Items] = useState([])
//
//   const [outputList, setOutputList] = useState([])
//
//   useEffect(() => {
//
//     const filter = []
//
//     const uploadFilter: ModelImageFilterInput[] = []
//     uploadItems.map(item => {
//       uploadFilter.push({uploadDate: {eq: item}} as ModelImageFilterInput)
//     })
//     if (uploadFilter.length) filter.push({or: uploadFilter})
//
//     const tag1Filter: ModelImageFilterInput[] = []
//     tag1Items.map(item => {
//       tag1Filter.push({tag1: {contains: item}} as ModelImageFilterInput)
//     })
//     if (tag1Filter.length) filter.push({or: tag1Filter})
//
//     const tag2Filter: ModelImageFilterInput[] = []
//     tag2Items.map(item => {
//       tag2Filter.push({tag2: {contains: item}} as ModelImageFilterInput)
//     })
//     if (tag2Filter.length) filter.push({or: tag2Filter})
//
//     console.log(filter)
//     const input = {
//       and: filter,
//     } as ModelImageFilterInput
//
//     allImages(input).then(value => {
//       setOutputList(value)
//     }).catch(err => {
//       setOutputList([])
//       console.log(err)
//     })
//
//   },[uploadItems, tag1Items, tag2Items])
//
//   return (
//     <>
//       <Title>検索</Title>
//       <Box>
//         <Tags
//           names={["2021/6/23","2021/6/24"]}
//           setSelectTags={setUploadItems}
//         />
//       </Box>
//       <Box>
//         <Tags
//           names={["tag1a","tag1b","tag1c","tag1d"]}
//           setSelectTags={setTag1Items}
//         />
//       </Box>
//       <Box>
//         <Tags
//           names={["tag2a","tag2b","tag2c","tag2d"]}
//           setSelectTags={setTag2Items}
//         />
//       </Box>
//       <Divider />
//       <Box>
//         {outputList.map((item, index) => {
//           return (
//             <Box key={index}>
//               <Typography variant="h5">{item.name}</Typography>
//               <Box ml={2}>
//                 <Typography>{item.uploadDate}</Typography>
//                 <Typography>{item.tag1.toString()}</Typography>
//                 <Typography>{item.tag2.toString()}</Typography>
//               </Box>
//             </Box>
//           )
//         })}
//       </Box>
//     </>
//   );
// }
// export default Query;
//
//
// type TagsProps = {
//   names: string[]
//   setSelectTags: Dispatch<SetStateAction<string[]>>
// }
// const Tags: React.FC<TagsProps> = ({names, setSelectTags}) => {
//   const [checkedItems, setCheckedItems] = useState({})
//   const checked = (tagName) => {
//     return (checkedItems[tagName]) ? checkedItems[tagName] : false
//   }
//   const handleChange = e => {
//     //checkedItemsのstateをセット
//     setCheckedItems({
//       ...checkedItems,
//       [e.target.name]: e.target.checked
//     })
//   }
//   useEffect(() => {
//     const tags: string[] = []
//     Object.keys(checkedItems).forEach((key) => {
//       if (checkedItems[key]) tags.push(key)
//     })
//     setSelectTags(tags)
//   }, [checkedItems])
//   return (
//     <>
//       {names.map((tag, index) => {
//         return (
//           <TagSwitch
//             key={index}
//             name={tag}
//             checked={checked(tag)}
//             onChange={handleChange}
//           />
//         )
//       })}
//     </>
//   )
// }
//
// type SwitchProps = {
//   name: string
//   checked: boolean
//   onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
// }
// const TagSwitch: React.FC<SwitchProps> = ({name, checked, onChange}) => {
//   return (
//     <FormControlLabel
//       control={
//         <Switch
//           checked={checked}
//           onChange={onChange}
//           name={name}
//           color="primary"
//         />
//       }
//       label={name}
//     />
//   )
// }
