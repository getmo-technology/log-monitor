FailedjobsListController = RouteController.extend({
	template: 'OldRoutes'
});
FailedjobsListController.helpers({
	list: function(){
		return Logs.find({'type': 'failed:job'}, {sort: {created_at: -1}});
	}	
});