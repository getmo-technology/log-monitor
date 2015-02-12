Router.route('/contato', function () {
	this.layout('MasterLayout');
  	this.render('Contact');
}, {
	name: 'contact.list'
});