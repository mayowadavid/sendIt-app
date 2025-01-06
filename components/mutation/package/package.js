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
      images {
        id
        image 
        name
      }
      receiverEmail
      receiverGender
      destination
      pickUp
      status
      createdAt
      updatedAt
    }
  }`


  export const UPDATE_PACKAGE = gql`
  mutation UPDATE_PACKAGE($packageData: UpdatePackageInput!){
    updatePackage(updatePackageInput: $packageData){
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
      worth
      quantity
      measurement
      images {
        id
        image 
        name
      }
      size
      serviceFee
      description
      createdAt
      updatedAt
 }
}`


export const DELETE_PACKAGE = gql`
mutation DELETE_PACKAGE($packageData: UpdatePackageInput!){
  deleteImage(updatePackageInput: $packageData){
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
    worth
    quantity
    measurement
    images {
      id
      image 
      name
    }
    size
    serviceFee
    description
    createdAt
    updatedAt
}
}`