Router.route('/videos', {
	name: 'videos.list',
	template: 'Videos'
});

Router.route('/videos/new', {
	name: 'videos.net',
	template: 'VideosNew'
});

Router.route('/videos/:_id', {
	name: 'videos.show',
	template: 'VideosItem',
	data: function(){
		return Videos.findOne({_id: this.params._id});
	}
});