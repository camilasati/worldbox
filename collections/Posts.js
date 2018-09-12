Posts= new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textform) {
     Posts.insert({
			text: textform,
			userId: Meteor.userId()
		});
	}
});