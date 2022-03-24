module.exports.profile=function(req,res)
{
    return res.render('profile');
}
module.exports.signup=function(req,res)
{
    return res.render('user_sign_up',{title:'signup'});
}
module.exports.signin=function(req,res)
{
    return res.render('user_sign_in',{title:'signin'});
}
