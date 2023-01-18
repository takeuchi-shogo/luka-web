
import { forEach } from 'lodash'


import User from 'models/users'
import Comment from 'models/comments'

import { formatDate } from 'utils/format'

class Thread {

	id: number

	userId: number

	title: string

	description: string

	user:User

	comments: Comment[]

	commentCnt: number

	favoriteCnt: number

	createdAt: number


	constructor(obj: Object) {

		this.id = 0

		this.userId = 0

		this.title = ''

		this.description = ''

		this.user = null

		this.comments = []

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
						case 'comments':
							forEach(obj[key], (list) => {
								this[key].push(new Comment(list))
							})
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
		return formatDate(this.createdAt)
	}
}

export default Thread
