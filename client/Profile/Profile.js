Template.Profile.helpers({
	profile: function() {
		var userId = FlowRouter.getParam("id");
		var info = Meteor.users.findOne({_id: userId});
		return info;
	},
	posts: function() {
		var userId = FlowRouter.getParam("id");
		var profilePosts = Posts.find({userId: userId}).fetch().reverse();
		return profilePosts;
	},
	follow: function() {
		var userId = FlowRouter.getParam("id");
		var user = Meteor.users.findOne({_id: userId});
		var followers = user.profile.followers;

		var position = followers.indexOf(Meteor.userId());
		return position !== -1;
	},
	myself: function() {
		var userId = FlowRouter.getParam("id");
		return userId === Meteor.userId();
	}
});

Template.Profile.events({
	"click .follow": function(event, template) {
		var userId = FlowRouter.getParam("id");
		Meteor.call("followUser", userId);
	}, 
	"click .unfollow": function(event, template) {
		var userId = FlowRouter.getParam("id");
		Meteor.call("unfollowUser", userId);
	}
});