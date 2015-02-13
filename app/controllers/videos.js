VideosListController = RouteController.extend({
	template: 'Videos'
});
VideosListController.helpers({
	list: function(){
		return Videos.find();
	}	
});

VideosNewController = RouteController.extend({
	template: 'VideosNew'
});

VideoShowController = RouteController.extend({
	template: 'VideoShow',
	data: function(){
		return Videos.findOne({_id: this.params._id});
	}
});	