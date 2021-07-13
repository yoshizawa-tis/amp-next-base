/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
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
export const onCreateImageTag = /* GraphQL */ `
  subscription OnCreateImageTag {
    onCreateImageTag {
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
export const onUpdateImageTag = /* GraphQL */ `
  subscription OnUpdateImageTag {
    onUpdateImageTag {
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
export const onDeleteImageTag = /* GraphQL */ `
  subscription OnDeleteImageTag {
    onDeleteImageTag {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
