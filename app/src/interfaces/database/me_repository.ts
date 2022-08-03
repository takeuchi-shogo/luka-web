
import cookie from 'js-cookie'

import User from 'domain/users'
import api from 'infrastructure/api'


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


	create(user: User, callback: (error: any, message: string, data: User) => void) {
		this._api.post('/me', user, (error, message, data) => {
			if (error) {
				callback(error, message, new User(null))
				return
			}
			callback(error, message, new User(data))
		})
	}


	save(user: User, callback: (error: any, message: string, data: any) => void) {
		this._api.patch('/me', user, (error, message, data) => {
			if (error) {
				callback(error, message, new User(null))
				return
			}
			callback(error, message, new User(data))
		})
	}


	signin(params: Object, callback: (error: any, message: string, data: any) => void) {
		this._api.post('/tokens', params, (error, message, data) => {
			if (error) {
				callback(error, message, null)
				return
			}
			// set cookie
			cookie.set('token', data.token)
			cookie.set('tokenExpireAt', data.tokenExpireAt)
			cookie.set('refreshToken', data.refreshToken)
			cookie.set('refreshTokenExpireAt', data.refreshTokenExpireAt)
		})
	}
}


export default me_repository