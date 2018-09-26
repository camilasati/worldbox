Template.Feed.onCreated(function(){ //isso é pra fazer com que os posts carreguem ao usuário entrar no feed
	Meteor.subscribe("posts"); //por ter excluído o autopublish, precisamos falar para o client o que vai ser exibido
});

Meteor.subscribe("users");

Template.Feed.helpers({
	posts: function() {
		var collectionposts = Posts.find().fetch().reverse();
		return collectionposts;
	}
});