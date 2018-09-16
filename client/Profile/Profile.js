Template.Profile.helpers({
	profile: function() {
		var userId = FlowRouter.getParam("id");
		var info = Meteor.users.findOne({_id: userId});
		return info;
	},
	posts: function() {
		var userId = FlowRouter.getParam("id");
		var profilePosts = Posts.find({userId: userId}).fetch();
		return profilePosts;
	}
});