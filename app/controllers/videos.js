VideosListController = RouteController.extend({
	template: 'Videos',
	data: function(){
		return {
			videos: function(){
				return Videos.find();
			}
		}
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