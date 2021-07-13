import { API, graphqlOperation } from 'aws-amplify'
import { createCategory, createImage, createImageTag, createTag } from '../../src/graphql/mutations';
import { CreateCategoryInput, CreateImageInput, CreateImageTagInput, CreateTagInput, ModelCategoryFilterInput, ModelImageFilterInput, ModelTagFilterInput } from '../../src/API'
import { listCategorys, listImages, listTags } from '../../src/graphql/queries';

export const postCategory = async (input:CreateCategoryInput) => {
  const res = await API.graphql(graphqlOperation(
    createCategory, {
      input: input
    }
  )); 
  console.log(res)
}
export const allCategories = async (input:ModelCategoryFilterInput) => {
  const list:any = await API.graphql(graphqlOperation(
    listCategorys, {
      filter: input
    }
  ));
  return list.data.listCategorys.items
}

export const postTag = async (input:CreateTagInput) => {
  const res = await API.graphql(graphqlOperation(
    createTag, {
      input: input
    }
  )); 
  console.log(res)
}
export const allTags = async (input:ModelTagFilterInput) => {
  const list:any = await API.graphql(graphqlOperation(
    listTags, {
      filter: input
    }
  ));
  return list.data.listTags.items
}

export const postImage = async (input:CreateImageInput) => {
  const res = await API.graphql(graphqlOperation(
    createImage, {
      input: input
    }
  )); 
  console.log(res)
}
export const allImages = async (input:ModelImageFilterInput) => {
  const list:any = await API.graphql(graphqlOperation(
    listImages, {
      filter: input
    }
  ));
  console.log(list)
  return list.data.listImages.items
}

export const postImageTag = async (input:CreateImageTagInput) => {
  const res = await API.graphql(graphqlOperation(
    createImageTag, {
      input: input
    }
  )); 
  console.log(res)
}