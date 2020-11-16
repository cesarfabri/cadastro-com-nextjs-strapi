const GET_ACCOUNTS = /* GraphQl */`
query GET_ACCOUNTS {
  accounts {
    id
    name
    description
  }
}

fragment sections on Account {
  sections {
    id
    name
    description
  }
}
`

export default GET_ACCOUNTS
