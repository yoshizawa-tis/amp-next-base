import { API, graphqlOperation } from 'aws-amplify'
import { createImage } from '../../src/graphql/mutations';
import { CreateImageInput, ModelImageFilterInput } from '../../src/API'
import { listImages } from '../../src/graphql/queries';

export const postImage = async (input:CreateImageInput) => {
  const res = await API.graphql(graphqlOperation(
    createImage, {
      input: input
    }
  )); 
  console.log(res)
}

export const getlist = async (input:ModelImageFilterInput) => {
  const list:any = await API.graphql(graphqlOperation(
    listImages, {
      filter: input
    }
  ));
  return list.data.listImages.items
}
