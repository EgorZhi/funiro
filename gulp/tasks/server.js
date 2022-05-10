export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			index: "main.html",
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000,
	});
}