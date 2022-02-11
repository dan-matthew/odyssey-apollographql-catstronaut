import React from 'react';
import { gql, useQuery } from '@apollo/client';

import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '../components';

export const TRACKS = gql`
query getTracks {
  tracksForHomePage {
    id
    title
    author {
      name
      id
      photo
    }
    length
    modulesCount
    thumbnail
  }
}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  
  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
      {data?.tracksForHomePage.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
