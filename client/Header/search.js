Template.search.rendered = function() { //o template irá rodar essa função assim que aparecer o template na teLA
	Meteor.typeahead.inject();
};

Template.search.helpers({
	items: function() { //definir quais são os itens dentro dos quais uma pessoa pode pesquisar
		return Meteor.users.find().fetch().map(function(object){ //map passa pela lista de todos os usuários e transforma cada um deles em algo mais fácil de ser lido pelo typeahead
			return {id: object._id, value: object.profile.name};
		}); //tá pegando uma plista com todos os usuários e transformando em algo mais simples
	},
	selected: function(event, suggestion, datasetName) { //indica o que vai acontecer quando uma pessoa clicar
		//redirecionar para a página do usuário
		FlowRouter.go("/profiles/" + suggestion.id);
	}
});