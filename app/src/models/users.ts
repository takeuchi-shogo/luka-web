
import { forEach } from 'lodash'

class User {

	id: number

	displayName: string

	screenName: string

	age: number

	gender: number

	email: string

	prefecture: number

	threadCnt: number

	followingCnt: number

	followerCnt: number

	constructor(obj: Object) {

		this.id = 0

		this.displayName = ''

		this.screenName = ''

		this.age = 0

		this.gender = 0

		this.email = ''

		this.prefecture = 0

		this.threadCnt = 0

		this.followingCnt = 0

		this.followerCnt = 0

		if (obj) {
			forEach(this, (_value, key) => {
				if (obj.hasOwnProperty(key)) {
					this[key] = obj[key]
				}
			})
		}
	}
}


export default User
