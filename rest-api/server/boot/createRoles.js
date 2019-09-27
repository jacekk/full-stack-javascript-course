const ADMIN_EMAILS = ['admin@local.com']

const assignRoleAdmin = (app, cb, role) => {
	const { Account, RoleMapping, Role } = app.models

	Account.find(
		{
			where: { email: { inq: ADMIN_EMAILS } },
		},
		(err, accounts) => {
			if (err) {
				console.error('searching for admins', err)
				return cb(err)
			}
			accounts.forEach((account) => {
				Role.isInRole(
					role.name,
					{ principalType: RoleMapping.USER, principalId: account.id },
					(err, roleCheck) => {
						if (err) {
							return cb(err)
						}
						if (roleCheck) {
							return
						}
						role.principals.create(
							{
								principalType: RoleMapping.USER,
								principalId: account.id,
							},
							(err) => {
								if (err) {
									return cb(err)
								}
								console.log(`Role "${role.name}" assigned to user "${account.username}".`)
							}
						)
					}
				)
			})
			cb()
		}
	)
}

module.exports = (app, cb) => {
	const { Role } = app.models
	const adminRole = { name: 'admin' }
	const clientRole = { name: 'client' }

	Role.findOrCreate(clientRole, (err) => {
		if (err) {
			return cb(err)
		}
		Role.findOrCreate(adminRole, (err, role) => {
			if (err) {
				console.error('searching for admin role', err)
				return cb(err)
			}
			assignRoleAdmin(app, cb, role)
		})
	})
}
