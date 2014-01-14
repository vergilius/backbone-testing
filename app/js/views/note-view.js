App.Views.NoteView = Backbone.View.extend({
	template : _.template(App.Templates['template-note-view']),
	converter : new Showdown.converter(),
	initialize : function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render : function() {
		this.$el.html(
			this.template(_.extend(this.model.toJSON(), {
				text : this.converter.makeHtml(this.model.get('text'))
			})
		));

		return this;
	}
});