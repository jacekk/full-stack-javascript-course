const slugify = require('slugify')

module.exports = function(Post) {
	Post.observe('before save', (ctx, next) => {
		ctx.instance.slug = slugify(ctx.instance.title)
		ctx.instance.createdAt = new Date()
		next()
	})
}
