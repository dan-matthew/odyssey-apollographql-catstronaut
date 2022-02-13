import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult, ModuleDetail } from '../components';

export const GET_MODULE_AND_PARENT_TRACK = gql`
	query getModule($moduleId: ID!, $trackId: ID!) {
		module(id: $moduleId) {
			id
			title
			length
			videoUrl
			content
		}
		track(id: $trackId) {
			id
			title
			length
			modules {
				id
				title
				length
			}
		}
	}
`;

const Track = ({ moduleId, trackId }) => {
	const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, { variables: { trackId, moduleId } });

	return (
		<Layout fullWidth>
			<QueryResult loading={loading} error={error} data={data}>
				<ModuleDetail track={data?.track} module={data?.module} />
			</QueryResult>
		</Layout>
	)
};

export default Track;