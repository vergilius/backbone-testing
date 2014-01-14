try {
	expect = require('chai').expect;
} catch (e) {
	expect = chai.expect;
}

describe('BDD example', function () {
	

	//runs once before all test start
	before(function () {
		// console.info('Called from before');
		this.hello = function() {
			return 'Hello world!';
		};
	});
/*
	beforeEach(function() {
		console.info('Called from before - each');
	});
*/
	after(function () {
		// console.info('Called from after');
		this.hello = null;
	});
/*
	afterEach(function() {
		console.info('Called from after - each');
	});
*/
	it('should return expected string result', function (done) {
		
		expect(this.hello()).to.be.a('string').and.equal('Hello world!');
		done();
	});
	
	it('should check equality of objects', function (done) {
		var foo, bar;
		foo = bar = {foo : 'bar'};

		expect(foo).to.be.equal(bar);
		expect({foo : 'bar'}).to.be.deep.equal({foo : 'bar'});
		
		// does not work! not the same object
		// expect({foo : 'bar'}).to.be.equal({foo : 'bar'});
		done();
	});

	it('should check valid string with helpers', function (done) {
		expect('foo')
			.to.be.a('string').and
			.to.be.equal('foo').and
			.to.have.length(3).and
			.to.match(/f[o]{2}/);
		done();
	});

	it('should test truthy values - ok', function (done) {
		
		expect('foo').to.be.ok;
		expect({}).to.be.ok;
		expect(undefined).to.be.not.ok;
		expect(false).to.be.not.ok;
		expect(true).to.be.ok;
		expect(null).to.be.not.ok;

		done();
	});

	it('should check for existence - exist', function (done) {
		// var no_value;

		expect(false).to.exist;
		expect(null).to.not.exist;
		expect(undefined).to.not.exist;
		// eee wtf?
		// expect(no_value).to.exist;

		done();
	});

	it('should compare numbers', function (done) {
		
		expect(5).to.be.above(2);
		expect(1).to.be.above(1/2);
		expect(1).to.be.at.least(1/2);
		expect(1).to.be.not.below(1/2);
		expect(1).to.be.within(0,2);

		expect(42).to.satisfy(function (value) {
			return value === 6 * 7;
		});

		done();
	});
});