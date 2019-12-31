
function get() {
	
	document.getElementById("not_valid_ip").innerHTML = ""
	
    var f = document.getElementById("ip").value;
    f = f.replace(/^\s+|\s+$/g, "");
    if (!validateIP(f)) {
		document.getElementById("not_valid_ip").innerHTML = "<b>The IP address looks invalid!</b>";
        return
    }
    f = f.split(".");

	
	document.getElementById("not_valid_ip").innerHTML = "";			

    document.getElementById("private").innerHTML = "Yes"
}

function validateIP(a) {
    var b = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (a.match(b)) {
        return true
    }
    return false
}

