module.exports = {

	//Home Page
	home: function (req, res, data) {
		if(typeof data === typeof object){
			data.title = 'Add a Model';
			res.render('add', data);
		}else {
			res.render('add', {
				title: 'Add a Model',
				name: '',
				army: ''
			});
		}
	}
};
