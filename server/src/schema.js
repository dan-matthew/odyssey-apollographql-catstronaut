const { gql } = require('apollo-server');

const typeDefs = gql`
	"""
	Query to get the list of tracks
	for the home page.
	"""
	type Query {
		tracksForHomePage: [Track!]!
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