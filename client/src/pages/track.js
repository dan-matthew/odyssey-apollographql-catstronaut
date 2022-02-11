import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult, TrackDetail } from '../components';

export const GET_TRACK = gql`
	query getTrack($trackId: ID!) {
		track(id: $trackId) {
			title
			length
			modulesCount
			description
			nosOfViews
			modules {
				title
				length
				id
			}
			author {
				id
				name
				photo
			}
			id
			thumbnail
		}
	}
`;

const Track = ({ trackId }) => {
	const { loading, error, data } = useQuery(GET_TRACK, { variables: { trackId } });

	return (
		<Layout>
			<QueryResult loading={loading} error={error} data={data}>
				<TrackDetail track={data?.track}/>
			</QueryResult>
		</Layout>
	)
};

export default Track;