/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
export const createImageTag = /* GraphQL */ `
  mutation CreateImageTag(
    $input: CreateImageTagInput!
    $condition: ModelImageTagConditionInput
  ) {
    createImageTag(input: $input, condition: $condition) {
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
export const updateImageTag = /* GraphQL */ `
  mutation UpdateImageTag(
    $input: UpdateImageTagInput!
    $condition: ModelImageTagConditionInput
  ) {
    updateImageTag(input: $input, condition: $condition) {
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
export const deleteImageTag = /* GraphQL */ `
  mutation DeleteImageTag(
    $input: DeleteImageTagInput!
    $condition: ModelImageTagConditionInput
  ) {
    deleteImageTag(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
