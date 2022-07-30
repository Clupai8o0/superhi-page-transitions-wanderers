barba.init({
	debug: true,
	transitions: [
		{
			name: "next",
			leave({ current, next, trigger }) {
				return new Promise((resolve) => {
					const timeline = gsap.timeline({
						onComplete() {
							current.container.remove();
							resolve();
						},
					});

					const navigation = current.container.querySelectorAll(
						"header, a.next, a.previous"
					);
					const photos = current.container.querySelectorAll("div.photos");

					timeline
						.to(navigation, { opacity: 0 }, 0)
						.to(photos, { opacity: 0.25, x: 500 }, 0);
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
					const photos = current.container.querySelectorAll("div.photos");

					timeline
						.set(navigation, { opacity: 0 })
						.set(photos, { opacity: 0.25, x: -500 })
						.to(navigation, { opacity: 1 }, 0)
						.to(photos, { opacity: 1, x: 0 }, 0);
				});
			},
		},
	],
	views: [],
});
