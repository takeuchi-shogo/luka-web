
import { forEach } from 'lodash'


class Thread {

	id: number

	userId: number

	title: string

	description: string


	constructor(obj: Object) {

		this.id = 0

		this.userId = 0

		this.title = ''

		this.description = ''

		if (obj) {
			forEach(this, (_value, key) => {
				if (obj.hasOwnProperty(key)) {
					this[key] = obj[key]
				}
			})
		}
	}
}

export default Thread