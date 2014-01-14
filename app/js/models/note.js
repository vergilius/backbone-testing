App.Models.Note = Backbone.Model.extend({
	defaults : {
		title : "",
		text : "*Edit your note*",
		createdAt : new Date()
	}
});