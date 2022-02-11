const resolvers = {
	Query: {
		/**
		 * Returns an array of tracks that will populate
		 * the home page of our app.
		 */
		tracksForHomePage: (_parent, _args, { dataSources }) => dataSources.trackAPI.getTracks(),
		// Get a single track by id
		track: (_parent, { id }, { dataSources }) => dataSources.trackAPI.getTrack(id)
	},
	Track: {
		author: ({ authorId }, _args, { dataSources }) => dataSources.trackAPI.getAuthor(authorId),
		// We are renaming this field from the REST API
		nosOfViews: ({numberOfViews}) => numberOfViews,
		modules: ({ id }, _args, { dataSources }) => dataSources.trackAPI.getModule(id),
	}
}

module.exports = resolvers;