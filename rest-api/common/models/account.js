'use strict'

const app = require('../../server/server')

const ADMIN_EMAILS = ['admin@local.com']

const ROLE_ADMIN = 'admin'
const ROLE_CLIENT = 'client'

module.exports = function(Account) {
	Account.afterRemote('create', (ctx, entity, next) => {
		const { Role, RoleMapping } = app.models
		const roleName = ADMIN_EMAILS.includes(entity.email) ? ROLE_ADMIN : ROLE_CLIENT

		Role.find({ where: { name: roleName } }, (err, result) => {
			if (err) {
				return next(err)
			}
			const [clientRole] = result
			if (!clientRole) {
				return next(new Error('Could not find "client" role in DB.'))
			}
			clientRole.principals.create(
				{
					principalType: RoleMapping.USER,
					principalId: entity.id,
				},
				(err) => {
					if (err) {
						return next(err)
					}
					console.log(`Role "${clientRole.name}" assigned to user "${entity.username}".`)
					next()
				}
			)
		})
	})
}
