/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateImageInput = {
  id?: string | null,
  code: string,
  name: string,
  key: string,
};

export type ModelImageConditionInput = {
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  key?: ModelStringInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateImageInput = {
  id: string,
  code?: string | null,
  name?: string | null,
  key?: string | null,
};

export type DeleteImageInput = {
  id?: string | null,
};

export type CreateImageTagInput = {
  id?: string | null,
  code: string,
  imageId: string,
  tagId: string,
};

export type ModelImageTagConditionInput = {
  code?: ModelStringInput | null,
  imageId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelImageTagConditionInput | null > | null,
  or?: Array< ModelImageTagConditionInput | null > | null,
  not?: ModelImageTagConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateImageTagInput = {
  id: string,
  code?: string | null,
  imageId?: string | null,
  tagId?: string | null,
};

export type DeleteImageTagInput = {
  id?: string | null,
};

export type CreateTagInput = {
  id?: string | null,
  code: string,
  categoryId: string,
  name: string,
};

export type ModelTagConditionInput = {
  code?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  code?: string | null,
  categoryId?: string | null,
  name?: string | null,
};

export type DeleteTagInput = {
  id?: string | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  code: string,
  name: string,
};

export type ModelCategoryConditionInput = {
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  code?: string | null,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  key?: ModelStringInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
};

export type ModelImageTagFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  imageId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelImageTagFilterInput | null > | null,
  or?: Array< ModelImageTagFilterInput | null > | null,
  not?: ModelImageTagFilterInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  categoryId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage:  {
    __typename: "Image",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    key: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage:  {
    __typename: "Image",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    key: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage:  {
    __typename: "Image",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    key: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImageTagMutationVariables = {
  input: CreateImageTagInput,
  condition?: ModelImageTagConditionInput | null,
};

export type CreateImageTagMutation = {
  createImageTag:  {
    __typename: "ImageTag",
    id: string,
    code: string,
    imageId: string,
    tagId: string,
    image:  {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag:  {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageTagMutationVariables = {
  input: UpdateImageTagInput,
  condition?: ModelImageTagConditionInput | null,
};

export type UpdateImageTagMutation = {
  updateImageTag:  {
    __typename: "ImageTag",
    id: string,
    code: string,
    imageId: string,
    tagId: string,
    image:  {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag:  {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageTagMutationVariables = {
  input: DeleteImageTagInput,
  condition?: ModelImageTagConditionInput | null,
};

export type DeleteImageTagMutation = {
  deleteImageTag:  {
    __typename: "ImageTag",
    id: string,
    code: string,
    imageId: string,
    tagId: string,
    image:  {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag:  {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag:  {
    __typename: "Tag",
    id: string,
    code: string,
    categoryId: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag:  {
    __typename: "Tag",
    id: string,
    code: string,
    categoryId: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag:  {
    __typename: "Tag",
    id: string,
    code: string,
    categoryId: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage:  {
    __typename: "Image",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    key: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetImageTagQueryVariables = {
  id: string,
};

export type GetImageTagQuery = {
  getImageTag:  {
    __typename: "ImageTag",
    id: string,
    code: string,
    imageId: string,
    tagId: string,
    image:  {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag:  {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImageTagsQueryVariables = {
  filter?: ModelImageTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImageTagsQuery = {
  listImageTags:  {
    __typename: "ModelImageTagConnection",
    items:  Array< {
      __typename: "ImageTag",
      id: string,
      code: string,
      imageId: string,
      tagId: string,
      image:  {
        __typename: "Image",
        id: string,
        code: string,
        name: string,
        key: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tag:  {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag:  {
    __typename: "Tag",
    id: string,
    code: string,
    categoryId: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateImageSubscription = {
  onCreateImage:  {
    __typename: "Image",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    key: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageSubscription = {
  onUpdateImage:  {
    __typename: "Image",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    key: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageSubscription = {
  onDeleteImage:  {
    __typename: "Image",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    key: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImageTagSubscription = {
  onCreateImageTag:  {
    __typename: "ImageTag",
    id: string,
    code: string,
    imageId: string,
    tagId: string,
    image:  {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag:  {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageTagSubscription = {
  onUpdateImageTag:  {
    __typename: "ImageTag",
    id: string,
    code: string,
    imageId: string,
    tagId: string,
    image:  {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag:  {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageTagSubscription = {
  onDeleteImageTag:  {
    __typename: "ImageTag",
    id: string,
    code: string,
    imageId: string,
    tagId: string,
    image:  {
      __typename: "Image",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      key: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag:  {
      __typename: "Tag",
      id: string,
      code: string,
      categoryId: string,
      name: string,
      category:  {
        __typename: "Category",
        id: string,
        code: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      users:  {
        __typename: "ModelImageTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag:  {
    __typename: "Tag",
    id: string,
    code: string,
    categoryId: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag:  {
    __typename: "Tag",
    id: string,
    code: string,
    categoryId: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag:  {
    __typename: "Tag",
    id: string,
    code: string,
    categoryId: string,
    name: string,
    category:  {
      __typename: "Category",
      id: string,
      code: string,
      name: string,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    users:  {
      __typename: "ModelImageTagConnection",
      items:  Array< {
        __typename: "ImageTag",
        id: string,
        code: string,
        imageId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    code: string,
    name: string,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        code: string,
        categoryId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
