const ACCOUNT_ROLES = ['admin', 'client', 'editor']

module.exports = async (app, cb) => {
	const { Role } = app.models

	for await (name of ACCOUNT_ROLES) {
		try {
			await Role.findOrCreate({ name })
		} catch (err) {
			cb(err)
		}
	}

	cb()
}
