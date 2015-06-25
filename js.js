
function countColours(searchTerm) {
	searchExpression = new RegExp(searchTerm, 'gi');
	return document.getElementById("colourText").value.match(searchExpression).length;
}

function getParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||false
}
