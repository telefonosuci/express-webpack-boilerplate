module.exports = {
	getPartyPage(req, res) {
		return res.render(
			'party', {
				data: {
					title: 'Lets party' 
				}
			}
		);
	},
};