const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const TrackAPI = require('./datasource/track-api');

/*
const mocks = {
	Query: () => ({
		tracksForHomePage: () => [...new Array(10)],
	}),
	Track: () => ({
		id: () => 'track_01',
		title: () => 'Astro Kitty, Space Explorer',
		author: () => {
		return {
			name: 'Grumpy Cat',
			photo:
			'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
		};
		},
		thumbnail: () =>
		'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
		length: () => 1210,
		modulesCount: () => 6,
	}),
};
*/


const server = new ApolloServer({ 
	typeDefs,
	resolvers,
	// This is how the trackAPI is made 
	// available to the resolver's context
	dataSources: () => ({
		trackAPI: new TrackAPI()
	}) 
});

server.listen().then(() => {
	console.log(`
		🚀  Server is running!
		🔉  Listening on port 4000
		📭  Query at https://studio.apollographql.com/dev
	`);
})