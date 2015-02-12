Router.route('/videos', function () {
	this.layout('MasterLayout');
  	this.render('Videos');
}, {
	name: 'videos.list'
});

Router.route('/videos/new', function () {
	this.layout('MasterLayout');
	this.render('VideosNew');
}, {
	name: 'videos.new'
});

Router.route('/videos/:_id', function () {
	this.layout('MasterLayout');
  	this.render('VideosItem');
  	console.log(this.params._id);
}, {
	name: 'videos.show'
});