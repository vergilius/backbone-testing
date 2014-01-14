App.Collections.Notes = Backbone.Collection.extend({
	model : App.Models.Note,
	localStorage: new Backbone.LocalStorage(App.Config.storeName)
});