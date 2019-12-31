
function generate() {
	
	var startIp = document.getElementById("ip_start").value;
	if (!validateIP(startIp)) {
		document.getElementById("not_valid_ip_start").innerHTML = "<b>The IP address looks invalid!</b>";
        return
	}
	
	var endIp = document.getElementById("ip_end").value;
	if (!validateIP(endIp)) {
		document.getElementById("not_valid_ip_end").innerHTML = "<b>The IP address looks invalid!</b>";
        return
	}
	
	var howMany = document.getElementById("count").value;
	var countVal = parseInt(howMany, 10)
	if(countVal <= 0) {
		document.getElementById("not_valid_count").innerHTML = "<b>Invalid value!</b>";
        return
	}
	
	document.getElementById("not_valid_ip_start").innerHTML = "";
	document.getElementById("not_valid_ip_end").innerHTML = "";
	document.getElementById("not_valid_count").innerHTML = "";
	
	var str = '';
    for (var i = 0; i < howMany; i++) {
        var r1 = randRange(startIp.split('.')[0], endIp.split('.')[0]);
        var r2 = randRange(startIp.split('.')[1], endIp.split('.')[1]);
        var r3 = randRange(startIp.split('.')[2], endIp.split('.')[2]);
        var r4 = randRange(startIp.split('.')[3], endIp.split('.')[3]);
        str += r1 + '.' + r2 + '.' + r3 + '.' + r4;
        if (i != howMany-1) 
			str += "<br>";
    }
			
	document.getElementById("ans").innerHTML = str
}

function randRange (low, high) {
    return parseInt(parseInt(low,10) + Math.random() * (parseInt(high,10)-parseInt(low,10)+1), 10).toString();
}

function validateIP(a) {
    var b = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (a.match(b)) {
        return true
    }
    return false
}