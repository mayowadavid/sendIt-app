import { gql } from "@apollo/client"

export const CURRENT_PACKAGE = gql`
query CURRENT_PACKAGE{
    currentUserpackage{
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
          status
    }
  }
` 