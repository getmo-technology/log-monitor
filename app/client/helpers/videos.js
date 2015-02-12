Template.Videos.helpers({
	list: function(){
		console.log('list');
		return Videos.find();
	}
});