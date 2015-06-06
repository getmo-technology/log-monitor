Router.route('/', {
	name: 'home.list',
    template: 'Home'
});

Router.route('/all', {
	name: 'all.list',
    template: 'All'
});

Router.route('/performance', {
	name: 'performance.list',
    template: 'Performance'
});

Router.route('/failedjobs', {
	name: 'failedjobs.list',
    template: 'Failedjobs'
});

Router.route('/oldroutes', {
	name: 'oldroutes.list',
    template: 'OldRoutes'
});
