Comments = new Mongo.Collection("comments");

Meteor.methods({
		"insertcomment": function(CommentText, postId) {
			if(Meteor.userId() !== null) { //método de proteção, para que só um usuário com id possa comentar
				Comments.insert({
					text: CommentText,
					post: postId,
					user: Meteor.userId()
				});
			}
		}
});