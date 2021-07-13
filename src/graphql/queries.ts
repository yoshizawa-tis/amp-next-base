/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      code
      name
      tags {
        items {
          id
          code
          imageId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      key
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        key
        tags {
          items {
            id
            tag {
              id
              name
              category {
                id
                name
              }
            }
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImageTag = /* GraphQL */ `
  query GetImageTag($id: ID!) {
    getImageTag(id: $id) {
      id
      code
      imageId
      tagId
      image {
        id
        code
        name
        tags {
          nextToken
        }
        key
        createdAt
        updatedAt
      }
      tag {
        id
        code
        categoryId
        name
        category {
          id
          code
          name
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listImageTags = /* GraphQL */ `
  query ListImageTags(
    $filter: ModelImageTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        imageId
        tagId
        image {
          id
          code
          name
          key
          createdAt
          updatedAt
        }
        tag {
          id
          code
          categoryId
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      code
      categoryId
      name
      category {
        id
        code
        name
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      users {
        items {
          id
          code
          imageId
          tagId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        categoryId
        name
        category {
          id
          code
          name
          createdAt
          updatedAt
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      code
      name
      tags {
        items {
          id
          code
          categoryId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tags {
          items {
            id
            name
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
