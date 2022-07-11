
class Config
{
	url: {
		api: string,
		web: string,
	}

	constructor() {
		this.url = {
			api: "http://localhost:8080/v1/product",
			web: "http://localhost:3000",
		}
	}
}

export default Config