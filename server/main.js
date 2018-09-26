import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

AccountsTemplates.configure({
	postSignUpHook: function(userId, info) {
		Meteor.users.update(userId, {
			$set: {
				"profile.followers": [],
				"profile.following": []
			}
		});
	}
});
//proximo método filtra os posts que vão aparecer no feed de usuário x
Meteor.publish("posts", function() { //por ter excluído o autopublish, precisamos falar para o servidor o que vai ser publicado
	var user = Meteor.users.findOne({_id: Meteor.userId()});
	var following = user.profile.following;
	var authors = following;
	authors.push(Meteor.userId()); //o push adiciona algo a variável, nesse caso essa linha adiciona o id do usuário na lista dos autores que vão aparecer no feed

	return Posts.find({userId: {$in: authors}}); //$in significa tem que estar dentro de tal lista
});

Meteor.publish("users", function(){ //isso é basicamente para filtrar informações e deixar o meteortoys sem tanta info desnecessária ou privada
	return Meteor.users.find({}, {fields: {
		"username": 1, //1 é o jeito de indicar que você quer receber esse campo
		"_id": 1,
		"profile": 1
	}});
});

Meteor.publish("Comments", function(postId){
	return Comments.find({post: postId});
});