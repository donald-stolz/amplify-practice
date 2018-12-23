// eslint-disable
// this is an auto generated file. This will be overwritten

export const createBar = `mutation CreateBar($input: CreateBarInput!) {
  createBar(input: $input) {
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
export const updateBar = `mutation UpdateBar($input: UpdateBarInput!) {
  updateBar(input: $input) {
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
export const deleteBar = `mutation DeleteBar($input: DeleteBarInput!) {
  deleteBar(input: $input) {
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
export const createBarMember = `mutation CreateBarMember($input: CreateBarMemberInput!) {
  createBarMember(input: $input) {
    id
    createdAt
    updatedAt
    userId
    barId
  }
}
`;
export const updateBarMember = `mutation UpdateBarMember($input: UpdateBarMemberInput!) {
  updateBarMember(input: $input) {
    id
    createdAt
    updatedAt
    userId
    barId
  }
}
`;
export const deleteBarMember = `mutation DeleteBarMember($input: DeleteBarMemberInput!) {
  deleteBarMember(input: $input) {
    id
    createdAt
    updatedAt
    userId
    barId
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
