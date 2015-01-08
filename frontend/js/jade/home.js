function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"header\"><h1>Login</h1></div><div class=\"content\"><div><input placeholder=\"Username\" name=\"uname\" type=\"text\"/><input placeholder=\"Password\" name=\"pword\" type=\"password\"/></div></div><div class=\"footer\"><a href=\"/signup\"><span>Create an Account " + (jade.escape((jade_interp = locals.jamie) == null ? '' : jade_interp)) + "a</span></a></div>");;return buf.join("");
}