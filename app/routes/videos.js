Router.route('/videos', function () {
	this.layout('MasterLayout');
  	this.render('Videos');
});

Router.route('/videos/new', function () {
	this.layout('MasterLayout');
	this.render('VideosNew');
});

Router.route('/videos/:_id', function () {
	this.layout('MasterLayout');
  	this.render('VideosItem');
  	console.log(this.params._id);
});