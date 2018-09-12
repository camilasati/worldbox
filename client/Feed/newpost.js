Template.newpost.events({
	"submit form": function(event, Template) {
		event.preventDefault();
		var textform = event.target.text.value;

		Meteor.call("inserirPost", textform);

		event.target.text.value="";
	}
});