barba.init({
	debug: true,
	transitions: [
		{
			name: "next",
			leave({ current, next, trigger }) {
				return new Promise((resolve) => {
					const timeline = gsap.timeline({
						onComplete() {
							resolve();
						},
					});

					const navigation = current.container.querySelectorAll(
						"header, a.next, a.previous"
					);
					timeline.to(navigation, { opacity: 0 });
				});
			},
			next({ current, next, trigger }) {
				return new Promise((resolve) => {
					const timeline = gsap.timeline({
						onComplete() {
							resolve();
						},
					});

					const navigation = next.container.querySelectorAll(
						"header, a.next, a.previous"
					);
					timeline
						.set(navigation, { opacity: 0 })
						.to(navigation, { opacity: 1 });
				});
			},
		},
	],
	views: [],
});
