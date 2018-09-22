FlowRouter.route("/", {
    action: function(params, queryParams) {
        if(Meteor.userId() === null) {
          BlazeLayout.render("PrincipalLayout", {main: "Home"});    
        } else {
            FlowRouter.go("/feed");
        }
    }
});
FlowRouter.route("/About", {
 action: function(params, queryParams) {
        BlazeLayout.render("PrincipalLayout", {main: "About"});
    }
});
FlowRouter.route("/Contact", {
 action: function (params, queryParams) {
		BlazeLayout.render("PrincipalLayout", {main: "Contact"});
}
});
FlowRouter.route("/feed", {
	triggersEnter: [AccountsTemplates.ensureSignedIn],
	action: function(params, queryParams) {
		   BlazeLayout.render("PrincipalLayout", {main: "Feed"});
    }
});
FlowRouter.route("/profiles/:id", { //:id é um parametro, vai levar para o profile de pessoas diferentes dependendo do id
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
           BlazeLayout.render("PrincipalLayout", {main: "Profile"});
    }
});

