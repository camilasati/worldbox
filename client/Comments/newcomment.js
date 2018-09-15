Template.newcomment.events({
	"submit form": function(event, template) {
		event.preventDefault();
		var text = event.target.text.value;
		var postId = template.data._id; //o id do post está no data do post 

		Meteor.call("insertcomment", text, postId);

		event.target.text.value = "";
	}
});