OldroutesListController = RouteController.extend({
	template: 'OldRoutes'
});
OldroutesListController.helpers({
	list: function(){
		return Logs.find({'type': 'old-route'}, {sort: {created_at: -1}});
	}	
});