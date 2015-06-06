Router.configure({
	layoutTemplate: 'MasterLayout'
});

Router.onBeforeAction(function() {
	if (Meteor.userId()) {
		this.next();
	}
});