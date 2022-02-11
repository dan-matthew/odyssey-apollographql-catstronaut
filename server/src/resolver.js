const resolvers = {
	Query: {
		/**
		 * Returns an array of tracks that will populate
		 * the home page of our app.
		 */
		tracksForHomePage: (_parent, _args, { dataSources }) => dataSources.trackAPI.getTracks()
	},
	Track: {
		author: ({ authorId }, _args, { dataSources }) => dataSources.trackAPI.getAuthor(authorId)
	}
}

module.exports = resolvers;