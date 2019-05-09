const router = require('koa-router')()

let data = require('../mock/homeworkList.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2 by horan!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/api/homework/getHomeworkForStudent', async (ctx, next) => {
  ctx.body = {
    ...data
  }
})

module.exports = router
