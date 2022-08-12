
import axios, { AxiosResponse } from 'axios'
import cookie from 'js-cookie'

import config from 'infrastructure/config'
import { forEach } from 'lodash'

class Api{

	_config: config

	constructor() {
		this._config = new config
	}

	
	get(endpoint: string, params: Object, callback: (error: any, message: string, data: any) => void) {
		let sendParams : any = (params == null) ? {} : params

		if (cookie.get('token')) {
			sendParams.accessToken = cookie.get('token')
		}

		axios({
			method: 'get',
			baseURL: this._config.url.api,
			url: endpoint,
			params: sendParams,
		})
			.then((response: AxiosResponse) => {
				callback(null, response.data.result, response.data.data)
			})
			.catch((error) => {
				if (error.response) {
					if (error.response.status == 406) {
						this._refreshToken((err, message) => {
							if (err) {
								callback(error.response.status, error.response.data.result, error.response.data.data)
								return
							}
							this.get(endpoint, params, (error, message, data) => {
								callback(error, message, data)
							})
						})
						return
					}
					console.log(error.response)
					callback(error.response.status, error.response.data.result, error.response.data.data)
					return
				}
				callback(503, error.message, null)
			})
			.finally(() => {
				
			})
	}


	post(endpoint: string, params: Object, callback: (error: any, message: string, data: any) => void) {

		let sendParams = (params == null) ? {} : params
		const formData = new FormData()

		if (cookie.get('token')) {
			// キーと値の組の追加
			formData.append('accessToken', cookie.get('token'))
		}

		forEach(sendParams, (value, key) => {
			if (Array.isArray(value)) {
				forEach(value, (v, _) => {
					formData.append(key + '[]', v)
				})
			} else {
				formData.append(key, value)
			}
		})

		axios({
			method: 'post',
			baseURL: this._config.url.api,
			url: endpoint,
			data: formData,
		})
			.then((res) => {
				console.log("data1", res)
				callback(null, res.data.result, res.data.data)
			})
			.catch((error) => {
				console.log("res", error.response)
				if (error.response) {
					if (error.response.status == 406) {
						this._refreshToken((err, message) => {
							if (err) {
								callback(error.response.status, error.response.data.result, error.response.data.data)
								return
							}
							this.post(endpoint, params, (error, message, data) => {
								callback(error, message, data)
							})
						})
						return
					}
					callback(error.response.status, error.response.data.result, error.response.data.data)
					return
				}
				callback(503, error.message, null)
			})
			.finally(() => {
				
			})
	}


	patch(endpoint: string, params: Object, callback: (error: any, message: string, data: Object) => void) {

		let sendParams = (params == null) ? {} : params
		const formData = new FormData()

		if (cookie.get('token')) {
			// キーと値の組の追加
			formData.append('accessToken', cookie.get('token'))
		}

		forEach(sendParams, (value, key) => {
			if (Array.isArray(value)) {
				forEach(value, (v, _) => {
					formData.append(key + '[]', v)
				})
			} else {
				formData.append(key, value)
			}
		})

		axios({
			method: 'post',
			baseURL: this._config.url.api,
			url: endpoint,
			data: formData,
		})
			.then((response: AxiosResponse) => {
				callback(null, response.data.result, response.data.data)
			})
			.catch((error) => {
				if (error.response) {
					if (error.response.status == 406) {
						this._refreshToken((err, message) => {
							if (err) {
								callback(error.response.status, error.response.data.result, error.response.data.data)
								return
							}
							this.patch(endpoint, params, (error, message, data) => {
								callback(error, message, data)
							})
						})
						return
					}
					callback(error.response.status, error.response.data.result, error.response.data.data)
					return
				}
				callback(503, error.message, null)
			})
			.finally(() => {
				
			})
	}


	_refreshToken(callback: (error: any, message: string) => void) {

		const refreshToken = (cookie.get('refreshToken')) ? cookie.get('refreshToken') : ''

		this.post('/token/refresh', { refreshToken: cookie.get('refreshToken') }, (error, message, data) => {
			if (!error) {
				// set cookie
				cookie.set('token', data.token)
				cookie.set('tokenExpireAt', data.tokenExpireAt)
				cookie.set('refreshToken', data.refreshToken)
				cookie.set('refreshTokenExpireAt', data.refreshTokenExpireAt)
			}
			callback(error, message)
		})
	}
}

export default Api