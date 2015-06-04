PerformanceListController = RouteController.extend({
	template: 'Performance'
});
PerformanceListController.helpers({
	list: function(){
		return Logs.find({'type': 'performance'}, {sort: {created_at: -1}});
	}	
});