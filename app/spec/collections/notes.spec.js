describe('App.Collections.Notes', function () {

	before(function () {
		this.notes = new App.Collections.Notes();

		this.notes.localStorage._clear();
	});

	after(function () {
		this.notes = null;
	});


	describe('creation', function () {

		it('has default value', function (done) {
			expect(this.notes).to.be.ok;
			expect(this.notes).to.have.length(0);
			done();
		});

		it('should be empty on fetch', function (done) {
			var notes = new App.Collections.Notes();

			notes.once('reset', function() {
				expect(notes).to.have.length(0);

				done();
			});

			notes.fetch({reset: true});
		});
		
	});
	describe('modification', function () {
		
		beforeEach(function () {
			this.notes.create({
				title : 'Test note #1',
				text : 'Testing Testing testing just testing.'
			});
		});

		afterEach(function () {
			this.notes.localStorage._clear();
			this.notes.reset();
		});

		it('has a single note', function (done) {
			
			var notes = this.notes,
				note;

			notes.once('reset', function() {

				expect(notes).to.have.length(1);
				note = notes.at(0);
				expect(note).to.be.ok;
				expect(note.get('title')).to.contain('#1');
				expect(note.get('text')).to.contain('just testing');

				done();
			});

			notes.fetch({reset: true});
		});

		it('can delete a note', function (done) {
			var notes = this.notes,
				note;

			notes.once('remove', function() {
				expect(notes).to.have.length(0);
				done();
			});

			note = notes.shift();
			expect(note).to.be.ok;
		});

		it('can create a second note', function (done) {
			var notes = this.notes;

			notes.once('add', function() {
				expect(notes).to.have.length(2);
				done();
			});

			notes.create({
				title : 'Test note #2',
				text : 'Lorem ipsum dolor lalala lala la.'
			});
		});
	});
});