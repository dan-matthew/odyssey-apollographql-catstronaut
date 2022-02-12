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
	Mutation: {
		// Increments a track's view count
		incrementTrackViews: async (_parent, { id }, { dataSources }) => {
			try {
				const track = await dataSources.trackAPI.incrementTrackViews(id);

				return {
					code: 200,
					success: true,
					message: `Successfully, incremented the nos of views for track ${id}`,
					track
				}
			} catch(error) {
				return {
					code: error.extensions.response.status,
					success: false,
					message: error.extensions.response.body,
					track: null
				}
			}
			
		}
	},
	Track: {
		author: ({ authorId }, _args, { dataSources }) => dataSources.trackAPI.getAuthor(authorId),
		// We are renaming this field from the REST API
		nosOfViews: ({numberOfViews}) => numberOfViews,
		modules: ({ id }, _args, { dataSources }) => dataSources.trackAPI.getModule(id),
	}
}

module.exports = resolvers;