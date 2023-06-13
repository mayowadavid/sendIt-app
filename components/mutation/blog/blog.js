import { gql } from "@apollo/client"

export const CREATE_BLOG = gql `
mutation CREATE_BLOG ($blogInput: CreateBlogInput!){
    createBlog(createBlogInput: $blogInput){
      id
      name
      description
      descriptionMarkDown
      status
      category {
        id
        name
      }
      slug
      type
      user {
        id
        userName
      }
    }
  }`
  

  export const UPDATE_BLOG = gql`
  mutation UPDATE_BLOG($updateBlog: UpdateBlogInput!){
    updateBlog(updateBlogInput: $updateBlog){
      id
      name
      description
      categoryId
      fileId
      type
      descriptionMarkDown
      slug
      status
    }
  }`


  export const DELETE_BLOG = gql `
  mutation DELETE_BLOG($deleteBlogData: String!){
    removeBlog(id: $deleteBlogData){
      id
      name
      description
      descriptionMarkDown
      createdAt
      slug
      status
    }
  }`

  export const CREATE_COMMENT = gql `
  mutation CREATE_COMMENT($commentData: CreateCommentInput!){
    createComment(createCommentInput: $commentData){
      id
      description
      name
      email
      child {
        id
        description
      }
      parentId
      createdAt
      updatedAt
    }
  }`