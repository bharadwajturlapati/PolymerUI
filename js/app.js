

(function init_login(){
	var body = document.querySelector("body");
	body.addEventListener("load", init, true);
})();

var init=function(){
	
	var login = document.getElementById("login_page");
	var args = ["label"];
	var vals = ["input label"];
	login.innerHTML = $MG.loginpage.input_render(args,vals);
}