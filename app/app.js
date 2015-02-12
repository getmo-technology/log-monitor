if (Meteor.isClient) {

  accountsUIBootstrap3.setLanguage('pt-BR');

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
