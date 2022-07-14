
import _foreach from 'lodash.foreach'


class Comment {

	id: number

	threadId: number

	userId: number

	content: string


	constructor(obj: Object) {

		this.id = 0

		this.threadId = 0

		this.userId = 0

		this.content = ''


		if (obj) {
			_foreach(this, (_value, key) => {
				if (obj.hasOwnProperty(key)) {
					this[key] = obj[key]
				}
			})
		}
	}
}

export default Comment