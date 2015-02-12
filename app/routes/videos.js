Router.route('/videos', function () {
  	this.render('Videos');
}, {
	name: 'videos.list'
});

Router.route('/videos/new', function () {
	this.render('VideosNew');
}, {
	name: 'videos.new'
});

Router.route('/videos/:_id', function () {
  	this.render('VideosItem', {
  		data: function() {
  			return Videos.findOne({_id: this.params._id});
  		}
  	});
}, {
	name: 'videos.show'
});