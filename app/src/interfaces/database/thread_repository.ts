
import { forEach } from 'lodash'

import Thread from 'models/threads'
import api from 'api/api'


class ThreadRepository {

	_api: api

	constructor() {
		this._api = new api
	}


	get(id: string, callback: (error: any, message: string, data: any) => any) {
		this._api.get('/threads/' + id, null, (error, message, data) => {
			if (error) {
				callback(error, message, new Thread(null))
				return
			}
			callback(error, message, new Thread(data))
		})
	}


	getList(params: Object, callback: (error: any, message: string, data: any) => any) {
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


	save(id: number, params: Object, callback:(error, message, data) => any) {
		this._api.patch('/threads/' + id, params, (error, message, data) => {
			if (error) {
				callback(error, message, new Thread(null))
				return
			}
			callback(error, message, new Thread(data))
		})
	}


	delete(id:number, callback: (error: any, message: string) => any) {
		this._api.delete('/threads/' + id, null, (error, message, _data) => {
			if (error) {
				callback(error, message)
				return
			}
			callback(error, message)
		})
	}

}


export default ThreadRepository
