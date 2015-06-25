var colours = ['Red', 'Green', 'Blue', 'Purple'];

function readyForCount() {
	var ul = document.getElementById("countResults");
	ul.innerHTML = '';
	
	colours.forEach(function(colour) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(colour + ": " + countColours(colour)));
		ul.appendChild(li);
	});
}

function countColours(searchTerm) {
	searchExpression = new RegExp(searchTerm, 'gi');

	if (document.getElementById("colourText").value.match(searchExpression)) {
		result = document.getElementById("colourText").value.match(searchExpression).length;
	} else {
		result = 0;
	}
	;
	return result;
}

function getParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||false
}