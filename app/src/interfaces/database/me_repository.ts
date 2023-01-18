
import cookie from 'js-cookie'

import User from 'models/users'
import api from 'api/api'


class me_repository {

	_api: api

	constructor() {
		this._api = new api
	}

	get(callback: (error: any, message: string, data: any) => void) {
		this._api.get('/me', null, (error, message, data) => {
			if (error) {
				callback(error, message, new User(null))
				return
			}
			callback(error, message, new User(data))
		})
	}


	create(user: Object, callback: (error: any, message: string, data: User) => void) {
		this._api.post('/me', user, (error, message, data) => {
			if (error) {
				callback(error, message, new User(null))
				return
			}
			callback(error, message, new User(data))
		})
	}


	save(user: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.patch('/me', user, (error, message, data) => {
			if (error) {
				callback(error, message, new User(null))
				return
			}
			callback(error, message, new User(data))
		})
	}


	signin(params: Object, callback: (error: any, message: string, data: any) => void) {
		console.log(params)
		this._api.post('/tokens', params, (error, message, data) => {
			if (error) {
				callback(error, message, null)
				return
			}
			console.log(data)
			// set cookie
			cookie.set('token', data.token)
			cookie.set('tokenExpireAt', data.tokenExpireAt)
			cookie.set('refreshToken', data.refreshToken)
			cookie.set('refreshTokenExpireAt', data.refreshTokenExpireAt)
		})
	}

	
	signout(callback) {
		cookie.remove('token')
		cookie.remove('tokenExpireAt')
		cookie.remove('refreshToken')
		cookie.remove('refreshTokenExpireAt')
		callback(null, 'success')
	}
}


export default me_repository
