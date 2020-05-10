module.exports = {
	getCheckoutPage(req, res) {
		return res.render(
			'checkout', {
				data: {
					title: 'Chekcout page'
				}
			}
		);
	},
};