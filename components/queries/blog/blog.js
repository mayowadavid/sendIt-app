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
  query findAllUserBlogPost {
      allBlogPost {
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
  }`

  export const FETCH_ALL_BLOG_PAGE = gql`
  query findAllUserBlogPage {
      allBlogPage {
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
  }`


  export const FIND_BLOG_BY_NAME = gql`
  fragment childFragment on Comment {
    id
    name
    description
    createdAt
  }
  query FIND_BLOG_BY_NAME($blogName: String!) {
    findBlogByName(name: $blogName) {
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
          ...childFragment
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