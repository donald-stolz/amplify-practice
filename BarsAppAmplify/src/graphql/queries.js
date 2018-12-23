// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBar = `query GetBar($id: ID!) {
  getBar(id: $id) {
    id
    createdAt
    updatedAt
    name
    phone
    location
    lat
    lng
    url
    addedBy
    users {
      id
      createdAt
      updatedAt
      name
      phone
      location
      lat
      lng
      url
      addedBy
      users {
        id
        createdAt
        updatedAt
        name
        phone
        location
        lat
        lng
        url
        addedBy
      }
    }
  }
}
`;
export const listBars = `query ListBars($filter: ModelBarFilterInput, $limit: Int, $nextToken: String) {
  listBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      name
      phone
      location
      lat
      lng
      url
      addedBy
      users {
        id
        createdAt
        updatedAt
        name
        phone
        location
        lat
        lng
        url
        addedBy
        users {
          id
          createdAt
          updatedAt
          name
          phone
          location
          lat
          lng
          url
          addedBy
        }
      }
    }
    nextToken
  }
}
`;
export const getBarMember = `query GetBarMember($id: ID!) {
  getBarMember(id: $id) {
    id
    createdAt
    updatedAt
    userId
    barId
  }
}
`;
export const listBarMembers = `query ListBarMembers(
  $filter: ModelBarMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listBarMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      userId
      barId
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    createdAt
    updatedAt
    username
    bars {
      id
      createdAt
      updatedAt
      name
      phone
      location
      lat
      lng
      url
      addedBy
      users {
        id
        createdAt
        updatedAt
        name
        phone
        location
        lat
        lng
        url
        addedBy
        users {
          id
          createdAt
          updatedAt
          name
          phone
          location
          lat
          lng
          url
          addedBy
        }
      }
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      username
      bars {
        id
        createdAt
        updatedAt
        name
        phone
        location
        lat
        lng
        url
        addedBy
        users {
          id
          createdAt
          updatedAt
          name
          phone
          location
          lat
          lng
          url
          addedBy
          users {
            id
            createdAt
            updatedAt
            name
            phone
            location
            lat
            lng
            url
            addedBy
          }
        }
      }
    }
    nextToken
  }
}
`;
