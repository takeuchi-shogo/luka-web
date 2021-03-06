
import User from "../../domain/users"
import api from "../../infrastructure/api"

class user_repository {

	_api: api

	constructor() {
		this._api = new api
	}


	get(id: number, callback: (error: any, message: string, data: any) => void) {
		this._api.get('/users/' + id, null, (error, message, data) => {
			if (error) {
				callback(error, message, new User(null))
				return
			}
			callback(error, message, new User(data))
		})
	}


	create(user: User, callback: (error: any, message: string, data: User) => void) {
		this._api.post('/users', user, (error, message, data) => {
			if (error) {
				callback(error, message, new User(null))
				return
			}
			callback(error, message, new User(data))
		})
	}


	signin(params: Object, callback: (error: any, message: string, data: User) => void) {
		this._api.post('/tokens', params, (error, message, data) => {
			if (error) {
				callback(error, message, null)
				return
			}
			// set cookie
		})
	}
}


export default user_repository