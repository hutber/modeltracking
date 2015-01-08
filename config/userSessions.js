/**
 * Created by Hutber on 13/10/2014.
 */

module.exports = function () {
    if(typeof req.user === typeof undefined) {
        res.locals.user = req.user;
    }else{
        res.locals.user = {
            email: null,
            admin: null
        };
    }
}