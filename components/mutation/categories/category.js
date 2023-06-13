import { gql } from "@apollo/client"

export const CREATE_CATEGORY = gql `
mutation CREATE_CATEGORY($categoryParams: CreateCategoryInput!){
    createCategory(createCategoryInput: $categoryParams){
      id
      name
      description
      status
    }
  }`

  export const SUB_CATEGORY = gql `
  # Write your query or mutation here
  mutation CREATE_SUBCATEGORY($subCategoryParams: CreateSubCategoryInput!){
    createSubCategory(createSubCategoryInput: $subCategoryParams){
      name
      categoryId
    }
  }`

  export const UPDATE_CATEGORY = gql`
  mutation UPDATE_CATEGORY($categoryInput: UpdateCategoryInput!){
    updateCategory(updateCategoryInput: $categoryInput){
      id
      blogId
    }
  }`