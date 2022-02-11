const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
	}

	getTracks() {
		return this.get('tracks');
	}

	getTrack(id) {
		return this.get(`track/${id}`);
	}

	getAuthor(authorId) {
		return this.get(`author/${authorId}`);
	}

	getModule(trackId) {
		return this.get(`track/${trackId}/modules`);
	}
}

module.exports = TrackAPI;