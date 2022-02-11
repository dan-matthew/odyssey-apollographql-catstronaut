const { gql } = require('apollo-server');

const typeDefs = gql`
	"""
	Query to get the list of tracks
	for the home page.
	"""
	type Query {
		tracksForHomePage: [Track!]!
		track(id: ID!): Track
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