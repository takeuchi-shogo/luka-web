
import axios, { AxiosResponse } from 'axios'

import config from 'infrastructure/config'

class api{

	_config: config

	constructor() {
		this._config = new config
	}

	
	get(endpoint: string, params: Object, callback: (error: any, message: string, data: any) => void) {
		let sendParams : Object = (params == null) ? {} : params

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
					callback(error.response.status, error.response.data.result, error.response.data.data)
					return
				}
				callback(503, error.message, null)
			})
			.finally(() => {
				
			})
	}


	post(endpoint: string, params: Object, callback: (error: any, message: string, data: Object) => void) {

		let sendParams = (params == null) ? {} : params
		const formData = new FormData()

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

	}
}

export default api