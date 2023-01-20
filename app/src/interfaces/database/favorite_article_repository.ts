
import Api from 'api/api'

import Favorite from 'models/favorite_articles'

class favorite_article_repository {

	_api: Api

	constructor() {
		this._api = new Api
	}


	create(params: Object, callback:(error: any, message: string, data: Favorite) => any) {
		this._api.post('/favoriteArticles', params, (error, message, data) => {
			if (error) {
				callback(error, message, new Favorite(null))
				return
			}
			callback(error, message, new Favorite(data))
		})
	}


	delete(id: number, callback:(error: any, message: string) => void) {
		this._api.delete('/favoriteArticles/' + id, null, (error, message) => {
			if (error) {
				callback(error, message)
				return
			}
			callback(error, message)
		})
	}

}

export default favorite_article_repository
