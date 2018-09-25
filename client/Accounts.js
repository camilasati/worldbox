AccountsTemplates.configure({
	defaultLayoutType: "blaze", //Optional, the default is 'blaze'
	defaultLayout: "PrincipalLayout",
	defaultLayoutRegions: {
		nav: "header",
	},
	defaultContentRegion: "main"
});

AccountsTemplates.configureRoute("signIn");

var pwd = AccountsTemplates.removeField("password");
AccountsTemplates.removeField("email");
AccountsTemplates.addFields([
  {
    _id: "name",
    type: "text",
    displayName: "Full Name",
    required: true,
  },
  {
    _id: "email",
    type: "email",
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: "Invalid email",
  },
  pwd,
  {
    _id: "username",
    type: "text",
    displayName: "usernameDoAutor",
    required: true,
    minLength: 3,
  },
]);
 