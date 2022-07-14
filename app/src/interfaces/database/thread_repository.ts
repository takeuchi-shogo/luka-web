
import { forEach } from 'lodash'

import Thread from 'src/domain/threads'
import api from 'src/infrastructure/api'


class ThreadRepository {

	_api: api

	constructor() {
		this._api = new api
	}


	get(id: number, callback: (error: any, message: string, data: any) => void) {
		this._api.get('/threads/' + id, null, (error, message, data) => {
			if (error) {
				callback(error, message, new Thread(null))
				return
			}
			callback(error, message, new Thread(data))
		})
	}


	getList(params: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.get('/threads/', params, (error, message, data) => {
			let lists = []
			if (error) {
				callback(error, message, new Thread(null))
				return
			}
			forEach(data.lists, (list) => {
				lists.push(new Thread(list))
			})
			callback(error, message, new Thread(data))
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