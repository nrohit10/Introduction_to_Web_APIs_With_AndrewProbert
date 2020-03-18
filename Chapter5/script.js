var request = new XMLHttpRequest()

request.open('GET', 'https://hplussport.com/api/product1');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
};

request.onerror = function() {
	console.log("There seems to be a problem");
};
request.send();