import { gql } from "@apollo/client"

export const FETCH_ALL_BLOG = gql`
query findAllUserBlog {
    allBlog {
      id
      name
      createdAt
      description
      descriptionMarkDown
      status
      slug
      file {
        image
      }
      commentId
      categoryId
      comments {
        description
      }
      category {
        id
        name
      }
      userId
      user {
        id
        userName
        profile {
          file {
            image
          }
        }
      }
    }
  }`

  export const FETCH_ALL_BLOG_POST = gql`
  query FIND_ALL_BLOG_POST($data: CreateBlogInput){
    allBlogPost(pagination: $data) {
     		posts{
           id
        name
        createdAt
        description
        descriptionMarkDown
        status
        slug
        type
        file {
          image
        }
        commentId
        categoryId
        comments {
          description
        }
        category {
          id
          name
        }
        userId
        user {
          id
          userName
          profile {
            file {
              image
            }
          }
        }
        }
    hasNextPage
    }
  }
  `

  export const FETCH_ALL_BLOG_PAGE = gql`
  query FIND_ALL_BLOG_PAGE($data: CreateBlogInput){
    allBlogPage(pagination: $data) {
     		pages{
           id
        name
        createdAt
        description
        descriptionMarkDown
        status
        slug
        type
        file {
          image
        }
        commentId
        categoryId
        comments {
          description
        }
        category {
          id
          name
        }
        userId
        user {
          id
          userName
          profile {
            file {
              image
            }
          }
        }
        }
    hasNextPage
    }
  }
  `


  export const FIND_BLOG_BY_NAME = gql`
  fragment childFragment on Comment {
    id
    name
    description
    createdAt
  }
  query FIND_BLOG_BY_NAME($slugName: String!) {
    findBlogBySlug(name: $slugName) {
      name
      id
      name
      description
      descriptionMarkDown
      categoryId
      createdAt
      status
      slug
      type
      comments {
        id
        name
        description
        createdAt
        child {
          ...childFragment,
        }
      }
      file {
        id
        image
      }
      category {
        name
      }
    }
  }`