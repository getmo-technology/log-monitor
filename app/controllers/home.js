HomeListController = RouteController.extend({
	template: 'Home'
});
HomeListController.helpers({
	list: function(){
		return Logs.find({}, {sort: {created_at: -1}});
	}	
});