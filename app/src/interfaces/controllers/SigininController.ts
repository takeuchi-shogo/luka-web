
import Index from "../presenters/pages/signin/Index.svelte"


export default class SigininController {

	constructor() {

	}

	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
			props: {
				category: 'siginin',
				article: 'index',
			}
		})
	}
}