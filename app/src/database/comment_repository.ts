
import { forEach } from 'lodash'

import Comment from 'models/comments'
import api from 'api/api'


class CommentRepository {

	_api: api

	constructor() {
		this._api = new api
	}


	get(id: number, callback: (error: any, message: string, data: any) => void) {
		this._api.get('/comments/' + id, null, (error, message, data) => {
			if (error) {
				callback(error, message, new Comment(null))
				return
			}
			callback(error, message, new Comment(data))
		})
	}


	getList(params: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.get('/comments', params, (error, message, data) => {
			let lists = []
			if (error) {
				callback(error, message, { lists: lists })
				return
			}
			forEach(data.lists, (list) => {
				lists.push(new Comment(list))
			})
			callback(error, message, { lists: lists })
		})
	}


	post(params: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.post('/comments', params, (error, message, data) => {
			if (error) {
				callback(error, message, new Comment(null))
				return
			}
			callback(error, message, new Comment(data))
		})
	}
}


export default CommentRepository
