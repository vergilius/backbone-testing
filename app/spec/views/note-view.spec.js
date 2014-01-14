describe('App.Views.NoteView', function () {
	before(function () {
		this.$fixture = $('<div id="note-view-fixture"></div>')
	});

	beforeEach(function() {
		this.$fixture.empty().appendTo('#fixtures');

		this.view = new App.Views.NoteView({
			el : this.$fixture,
			model : new App.Models.Note()
		});
	});

	afterEach(function () {
		this.view.model.destroy();
	});

	after(function () {
		$('#fixtures').empty();
	});


	it('can render an empty note', function (done) {
		var $title = $('#pane-title'),
			$text = $('#pane-text');

		expect($title.text()).to.be.equal('');
		expect($text.text()).to.be.equal('');

		done();
	});

	it('can render more complicated markdown', function (done) {
		
		this.view.model.once('change', function() {
			var $title = $('#pane-title'),
				$text = $('#pane-text');

			expect($title.text()).to.equal("yayaya!");
			expect($text.html())
				.to.contain("oy</h2>").and
				.to.contain("<ul>").and
				.to.contain("<li>arrr</li>");
			
			done();
		});

		this.view.model.set({
			title : 'yayaya!',
			text : '## oy\n* item arr\n* arrr'
		});
		
	});
});