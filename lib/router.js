FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("PrincipalLayout", {main: "Home"});
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
