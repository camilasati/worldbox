Template.comment.helpers({
	usernameDoAutor: function() {
		var user = this.user;
		var autor = Meteor.users.findOne({_id: user});
		return autor.username;
	}
});