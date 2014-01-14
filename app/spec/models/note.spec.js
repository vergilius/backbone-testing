describe('App.Models.Note', function () {
	it('has default values', function (done) {
		var model = new App.Models.Note();

		expect(model).to.be.ok;
		expect(model.get('title')).to.equal('');
		expect(model.get('text')).to.equal('*Edit your note*');
		expect(model.get('createdAt')).to.be.a('Date');

		done();
	});

	it('sets passed attributes', function (done) {

		var model = new App.Models.Note({
			title : 'Browar',
			text : 'Idziemy na browara'
		});

		expect(model.get('title')).to.equal('Browar');
		expect(model.get('text')).to.equal('Idziemy na browara');
		done();
	});
});