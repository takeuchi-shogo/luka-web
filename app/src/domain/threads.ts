
import { forEach } from 'lodash'


import User from 'domain/users'
import { formatDate } from 'utils/format'

class Thread {

	id: number

	userId: number

	title: string

	description: string

	user:User

	commentCnt: number

	favoriteCnt: number

	createdAt: number


	constructor(obj: Object) {

		this.id = 0

		this.userId = 0

		this.title = ''

		this.description = ''

		this.user = null

		this.commentCnt = 0

		this.favoriteCnt = 0

		this.createdAt = 0

		if (obj) {
			forEach(this, (_value, key) => {
				if (obj.hasOwnProperty(key)) {
					switch (key) {
						case 'user':
							this[key] = new User(obj[key])
							break
						default:
							this[key] = obj[key]
							break
						}
				}
			})
		}
	}

	get formatCreatedAt() {
		console.log(this.createdAt)
		return formatDate(this.createdAt)
	}
}

export default Thread
