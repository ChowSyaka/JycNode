module.exports = async (ctx) => {
    const title = 'home'
    
    ctx.cookies.set("cid","asdad",{
        httpOnly:false
    })

    await ctx.render('index',{
        title
    })
}
