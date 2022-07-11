
import axios, { AxiosResponse } from 'axios'

import config from 'src/infrastructure/config'

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


	_refreshToken(callback: (error: any, message: string) => void) {

	}
}

export default api