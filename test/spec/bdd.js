describe('BDD example', function () {
	//runs once before all test start
	before(function () {
		console.info('Called from before');
		this.hello = function() {
			return 'Hello world!';
		};
	});

	beforeEach(function() {
		console.info('Called from before - each');
	});

	after(function () {
		console.info('Called from after');
		this.hello = null;
	});

	afterEach(function() {
		console.info('Called from after - each');
	});

	it('should return expected string result', function (done) {
		
		expect(this.hello()).to.be.a('string').and.equal('Hello world!');
		done();
	});
	
	it('should do nothing', function (done) {
		done();
	});
});