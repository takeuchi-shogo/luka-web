
import { forEach } from 'lodash'

import Thread from 'domain/threads'
import api from 'infrastructure/api'


class ThreadRepository {

	_api: api

	constructor() {
		this._api = new api
	}


	get(id: string, callback: (error: any, message: string, data: any) => void) {
		this._api.get('/threads/' + id, null, (error, message, data) => {
			if (error) {
				callback(error, message, new Thread(null))
				return
			}
			callback(error, message, new Thread(data))
		})
	}


	getList(params: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.get('/threads', params, (error, message, data) => {
			let lists = []
			if (error) {
				callback(error, message, { lists: lists })
				return
			}
			forEach(data.lists, (list) => {
				lists.push(new Thread(list))
			})
			callback(error, message, { lists: lists })
		})
	}


	post(params: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.post('/threads', params, (error, message, data) => {
			if (error) {
				callback(error, message, new Thread(null))
				return
			}
			callback(error, message, new Thread(data))
		})
	}
}


export default ThreadRepository
