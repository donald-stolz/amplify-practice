// eslint-disable
// this is an auto generated file. This will be overwritten

export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    note
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      note
    }
    nextToken
  }
}
`;
export const searchNotes = `query SearchNotes(
  $filter: SearchableNoteFilterInput
  $sort: SearchableNoteSortInput
  $limit: Int
  $nextToken: Int
) {
  searchNotes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      note
    }
    nextToken
  }
}
`;
