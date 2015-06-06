AllListController = RouteController.extend({
	template: 'Home'
});
AllListController.helpers({
	list: function(){
		return Logs.find({}, {sort: {created_at: -1}});
	}	
});