Template.newpost.onCreated(function() {
	this.imagesURL = new ReactiveVar(); //faz com que o comando seja válido em qualquer parte do código, e não só em um evento
});

Template.newpost.events({
	"submit form": function(event, template) {
		event.preventDefault();
		var textform = event.target.text.value;
		var imagesURL = template.imagesURL.get();

		console.log(textform);
		console.log(imagesURL); //get pega o valor

		Meteor.call("inserirPost", textform, imagesURL);

		event.target.text.value="";
	},
   "change .myFileInput": function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             template.imagesURL.set("/cfs/files/images/" + fileObj._id); //set muda o valor
          }
        });
    });
   }
});