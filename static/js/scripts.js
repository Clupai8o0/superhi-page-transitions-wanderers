barba.init({
	debug: true,
	transitions: [
		{
			name: "next",
			leave({ current, next, trigger }) {
				return new Promise((resolve) => {
					resolve();
				});
			},
			next({ current, next, trigger }) {
				return new Promise((resolve) => {
					resolve();
				});
			},
		},
	],
	views: [],
});
