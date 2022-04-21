import { gql } from '@apollo/client'


export const ADD_NEW_VOCAB_CATEGORY = gql`
    mutation addCategory($data: CategoryCreateInput!) {
        createCategory(data: $data) {
            id
        }
    }
`

export const PUBLISH_NEW_CATEGORY = gql`
    mutation publishCategory($id: ID!) {
        publishCategory(where: {id: $id}) {
            name
        }
            
    }
`

export const ADD_NEW_VOCAB_CARD = gql`
        mutation addCard($data: CardCreateInput!) {
            createCard(data: $data) {
                id
            }
        }
`

export const PUBLISH_NEW_CARD = gql`
        mutation publishCard($id: ID!) {
            publishCard(where: {id: $id}) {
                spName
            }
                
        }
`