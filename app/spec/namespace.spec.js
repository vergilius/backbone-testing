
describe('Namespace', function () {
	it('provides App object', function (done) {
		expect(App).to.be.an('object');
		
		expect(App).to.include.keys(
			'Config',
			'Models',
			'Collections',
			'Views',
			'Routers',
			'Templates'
		);

		done();
	});

	it('provides app instance', function (done) {
		expect(app).to.be.an('object');
		done();
	});
});