Template.post.helpers({ //helper é tudo que usamos para mostrar algo no template
	usernameDoAutor: function() {
		var userId = this.userId;
		var autor = Meteor.users.findOne({_id: userId});
        return autor.username;
	},
	likenumbers: function() {
		return this.likes.length; // já temos o local de onde vai ser feita a contagem, o likes, lista de um dos métodos do post
		// length representa quantidade, e a função return mostra a informação no template
	},
	userliked: function() { //criamos a function userliked pq o meteor não tem a função como o current user que mostra quem está logado e nesse caso quem curtiu, por isso nós mesmos implementamos a função
		var likes = this.likes; //1= mostra que o que tem do lado direito significa o que está do esquerdo
		var position = likes.indexOf(Meteor.userId()); //jeito que procuramos pelo id do usuário dentro da lista de likes
// position pq é a posição na qual meu id se encontra na lista de curtidas, em programação começa a contar a partir do 0, o -1 é um jeito qu javascript tem de mostrar que o seu id não está na lista, significando que vc não curtiu
		if(position === -1) { //os 3= é pra mostrar que  a coisa é realment igual, comparar // -1 significa que o id não está na lista de curtidas, significando que o usuário não curtiu o post
			return false; //retornar que ele não curtiu
		} else {
            return true; // se o id dele estiver lá, retornar true
	    }
	}
});

Template.post.events({ // events são reações a interações que aconteceram com o template
	"click .like-button": function(event, template) { // colocar o ponto mostra que o click naquele botão vai executar tal função
        Meteor.call("likepost", template.data._id); // o meteor chama a função likepost criada no arquivo posts.js que deve acessar o template e pegar na data o id do post
	},
	"click .dislike-button": function(event, template) {
		Meteor.call("dislikepost", template.data._id);
	}
});