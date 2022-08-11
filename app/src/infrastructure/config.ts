
class Config
{
	url: {
		api: string,
		web: string,
	}

	constructor() {
		this.url = {
			api: "http://api.luka.lv/v1/product",
			web: "http://luka.lv",
		}
	}
}

export default Config