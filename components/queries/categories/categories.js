import { gql } from "@apollo/client"

export const GET_CATEGORIES = gql`
query {
    allCategories {
      id
      name
      subCategory {
        name
        id
      }
      }
  }`

  export const SINGLE_CATEGORY = gql`
  query FIND_CATEGORY($id: String!){
    category(id: $id){
      id
      name
      status
      description
      subCategory{
        id
        name
      }
    }
  }
  `