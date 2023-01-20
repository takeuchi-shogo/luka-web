
import { forEach } from 'lodash'

import Article from 'models/articles'
import api from 'api/api'


class ArticleRepository {

	_api: api

	constructor() {
		this._api = new api
	}


	get(id: string, callback: (error: any, message: string, data: any) => any) {
		this._api.get('/articles/' + id, null, (error, message, data) => {
			if (error) {
				callback(error, message, new Article(null))
				return
			}
			callback(error, message, new Article(data))
		})
	}


	getList(params: Object, callback: (error: any, message: string, data: any) => any) {
		this._api.get('/articles', params, (error, message, data) => {
			let lists = []
			if (error) {
				callback(error, message, { lists: lists })
				return
			}
			forEach(data.lists, (list) => {
				lists.push(new Article(list))
			})
			callback(error, message, { lists: lists })
		})
	}


	post(params: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.post('/articles', params, (error, message, data) => {
			if (error) {
				callback(error, message, new Article(null))
				return
			}
			callback(error, message, new Article(data))
		})
	}


	save(id: number, params: Object, callback:(error, message, data) => any) {
		this._api.patch('/articles/' + id, params, (error, message, data) => {
			if (error) {
				callback(error, message, new Article(null))
				return
			}
			callback(error, message, new Article(data))
		})
	}


	delete(id:number, callback: (error: any, message: string) => any) {
		this._api.delete('/articles/' + id, null, (error, message, _data) => {
			if (error) {
				callback(error, message)
				return
			}
			callback(error, message)
		})
	}

}


export default ArticleRepository
