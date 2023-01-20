

export const urls = {
	public: {
		index: {
			path: '',
		},
		service: {
			path: '/service',
		},
		about_luka: {
			path: '/about_luka',
		},
		safty: {
			path: '/safty',
		},
		support: {
			path: '/support',
		},
		signin: {
			path: '/signin',
		},
		signup: {
			path: 'signup',
		},
	},
	private: {
		index: {
			path: '/',
		},
		accounts: {
			path: '/:screen_name',
		},
		articles: {
			listPath: '/articles',
			singlePath: '/articles/:id',
		},
		comments: {
			path: '/comments',
		},
		communities: {
			path: '/communities',
		},
		settings: {
			path: '/settings',
			detailPath: '/settings/:category',
		},
		serch: {
			path: '/serches',
		},
	},
	// index: {},
}
