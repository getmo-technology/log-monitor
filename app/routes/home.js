Router.route('/', function () {
	this.layout('MasterLayout');
  	this.render('Home');
}, {
	name: 'home.list'
});