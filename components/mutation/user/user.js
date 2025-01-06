import { gql } from "@apollo/client"
export const SignUp = gql `mutation userSignUp($userSignUp: CreateUserInput!){
    createUser(createUser: $userSignUp){
      userName
      email
      password
      createdAt
    }
  }`

  export const UPDATE_PASSWORD = gql`mutation UPDATE_PASSWORD($userDatas: UpdateUserInput!){
    updatePassword(updateUserInput: $userDatas){
      id
      userName
      password
      userName
      id
    }
  }`