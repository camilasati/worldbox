Template.Feed.helpers({
	posts: function() {
		var collectionposts = Posts.find().fetch().reverse();
		return collectionposts;
	}
});