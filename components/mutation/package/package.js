import { gql } from "@apollo/client"

export const CREATE_PACKAGE = gql`
# Write your query or mutation here
mutation CREATE_PACKAGE($packageData: CreatePackageInput!){
    createPackage(createPackageInput: $packageData){
      id
      senderName
      senderEmail
      senderGender
      senderPhoneNumber
      receiverName
      receiverAddress
      receiverPhoneNumber
      receiverEmail
      receiverGender
      destination
      pickUp
      createdAt
      updatedAt
    }
  }`