
function sort() {
	
    var text = document.getElementById("ip-sort-text").value;
	text = text.replace(/\r\n/g, '\n');
	var ips = text.split('\n');
	
	for(let i = 0; i < ips.length; i++) {
		ips[i] = ips[i].replace(/ /g,'');
        if (!isEmpty(ips[i]) && !validateIP(ips[i])) {
		    document.getElementById("ans").innerHTML = "<b>Invalid IPv4 address format!</b>";
            return
	    }
    };	
	
	var dir = document.getElementById("select_path").value;
	
    ips.sort(function (a, b) {
        var ip1 = a.split('.');
        var ip2 = b.split('.');	
        var compa = parseInt(ip1[0],10) * 256 * 256 * 256 + parseInt(ip1[1],10) * 256 * 256 + parseInt(ip1[2],10) * 256 + parseInt(ip1[3],10);
        var compb = parseInt(ip2[0],10) * 256 * 256 * 256 + parseInt(ip2[1],10) * 256 * 256 + parseInt(ip2[2],10) * 256 + parseInt(ip2[3],10);
	   	if(dir == "ascending")
		    return compa-compb;
	    else
		    return compb-compa;
    });
	
	document.getElementById("ans").innerHTML = ips.join("<br>")
}

function validateIP(b) {
    var a = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (b.match(a)) {
        return (true)
    }
    return (false)
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

