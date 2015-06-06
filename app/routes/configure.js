Router.configure({
	layoutTemplate: 'MasterLayout'
});

Router.onBeforeAction(function() {
	if (!Meteor.userId()) {
		this.render('Home');
	}else{
		this.next();
	}
});