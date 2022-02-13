const { gql } = require('apollo-server');

const typeDefs = gql`
	
	"""
	List of all read operations
	available in this graphQL
	"""
	type Query {
		"Query to get the list of tracks for the home page."
		tracksForHomePage: [Track!]!
		"Query to return a track for the details page."
		track(id: ID!): Track
		"Query a particular module"
		module(id: ID!): Module!
	}

	"""
	List of all write operations
	available in this graphQL
	"""
	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	"""
	We could have just returned the updated Track as a response
	to the incrementTrackView mutation. But, we create a custom 
	type to return more info
	"""
	type IncrementTrackViewsResponse {
		"Similar to HTTP response code. Rep the status of the mutation"
		code: Int!
		"Indicates if the mutation was successful"
		success: Boolean!
		"Human readable message for the UI"
		message: String!
		"Newly updated track"
		track: Track
	}

	"""
	A track is a group of modules 
	that teaches a specifuc topic
	"""
	type Track {
		id: ID!
		"The track's title"
		title: String!
		"The track's author's info"
		author: Author!
		"The track's thumbnail img link"
		thumbnail: String
		"Approx time to complete module"
		length: Int
		"Total number of modules in the track"
		modulesCount: Int
		"The track's description. This can be in MD format"
		description: String
		"No of times a track is viewed"
		nosOfViews: Int
		"The modules in each track"
		modules: [Module!]!
	}

	"""
	A module is a single unit of teaching
	Multiple modules makes a track.
	"""
	type Module {
		id: ID!
		"The module's title"
		title: String!
		"The module's length in mins"
		length: Int
		"Link to the module's video"
		videoUrl: String!
		"The module's text based content, can be in markdown format."
		content: String!
	}

	"""
	A track authors details goes here
	"""
	type Author {
		id: ID!
		"The author's name"
		name: String!
		"The author's img link"
		photo: String
	}
`;

module.exports = typeDefs;