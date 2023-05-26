interface GraphQLResponse<T> {
  allDataJson: {
    edges: {
      node: { [key: string]: T };
    }[];
  };
}

export function queryNormalizer<T>(data: GraphQLResponse<T>, page: string): T {
  const result = data.allDataJson.edges[0].node[page];
  return result;
}
