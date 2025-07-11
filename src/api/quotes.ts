import { gql } from "@apollo/client";

export const GET_QUOTES = gql`
  query LatestQuotes($base: String!, $quotes: [String!]!) {
    latest(baseCurrency: $base, quoteCurrencies: $quotes) {
      baseCurrency
      quoteCurrency
      quote
    }
  }
`;