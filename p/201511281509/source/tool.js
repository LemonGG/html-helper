
function post(url,params){
	var temp = document.createElement("form")
	temp.action = url
	temp.method = "post"
	temp.style.display = "none"
	for(var i in params){
		var _ = document.createElement("textarea")
		_.name = i
		_.value = params[i]
		temp.appendChild(_)
	}
	document.body.appendChild(temp)
	temp.submit()
	return temp
}