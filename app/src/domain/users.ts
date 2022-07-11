
import _foreach from 'lodash.foreach'

class User {

	id: number

	displayName: string

	screenName: string

	age: number

	gender: string

	email: string

	constructor(obj: Object) {

		this.id = 0

		this.displayName = ''

		if (obj) {
			_foreach(this, (_value, key) => {
				if (obj.hasOwnProperty(key)) {
					this[key] = obj[key]
				}
			})
		}
	}
}


export default User