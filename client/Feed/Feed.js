Template.Feed.events({
	"submit form": function(event, Template) {
		event.preventDefault();
		var textform = event.target.text.value;
		console.log(textform);
		Posts.insert({
			text: textform
		});

		event.target.text.value="";
	}
});

Template.Feed.helpers({
	posts: function() {
		var collectionposts = Posts.find().fetch();
		return collectionposts;
	}
});