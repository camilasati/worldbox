Posts= new Mongo.Collection("posts");

Meteor.methods({ //método de como se cria o post
	"inserirPost": function(textform, imagesURL) {
        if(Meteor.userId() !==null && textform) { //&& para mostrar as duas condições que devem ser avaliadas para validar o post
            Posts.insert({
			    text: textform,
			    userId: Meteor.userId(),
			    likes: [],
			    image: imagesURL
		    });	
        }
	},
	"likepost": function(postId) {
		Posts.update(postId, {
			$addToSet: { //set é uma lista de elementos que não pode se repetir
				likes: Meteor.userId() //em qual set estamos add, o que estamos add nesse set, que é a lista de curtidas
			}
		});
	},
	"dislikepost": function(postId) {
		Posts.update(postId, {
			$pull: { //pull remove o elemento que está lá dentro, é o contrário de set
				likes: Meteor.userId() //de onde vai ser removido
			}
		});
	},
	"removePost": function(postId) {
		var post = Posts.findOne({_id: postId});
		var userId = post.userId;

		if(userId === Meteor.userId()) {
		  Posts.remove(postId);
	    }
	}
});