
function convert(b) {
	
	document.getElementById("not_valid_addr").innerHTML = "";
	document.getElementById("not_valid_bin").innerHTML = "";
	document.getElementById("not_valid_oct").innerHTML = "";
	document.getElementById("not_valid_dec").innerHTML = "";
	document.getElementById("not_valid_hex").innerHTML = "";
			
	switch(b) {
		
	case "addr":
	    var a = document.getElementById("addr").value;
        a = a.replace(/^\s+|\s+$/g, "");	
		
        if (!validateIP(a)) {
			document.getElementById("not_valid_addr").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("bin").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("dec").value = "";
	        document.getElementById("hex").value = "";
            return
        }
					
		ipParts = a.split(".");
		
		// convert to decimal
        var converted_dec = parseInt(ipParts[3]) +
                    parseInt(ipParts[2]) * 256 +
                    parseInt(ipParts[1]) * 256 * 256 +
                    parseInt(ipParts[0]) * 256 * 256 * 256;		
		
		document.getElementById("not_valid_addr").innerHTML = "";
				
		document.getElementById("bin").value = converted_dec.toString(2);
		document.getElementById("oct").value = converted_dec.toString(8);
		document.getElementById("dec").value = converted_dec.toString(10);
		document.getElementById("hex").value = converted_dec.toString(16).toUpperCase();
        
		break;
	
    case "bin":    
        var a = document.getElementById("bin").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 2);
		
		if (isNaN(num_dec) || num_dec > 4294967295) {
			document.getElementById("not_valid_bin").innerHTML = "<b>Invalid format!</b>";
		    document.getElementById("addr").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("dec").value = "";
	        document.getElementById("hex").value = "";
            return;
		}
		
		var converted_ip = dec_to_ip(num_dec);
					
		if (!validateIP(converted_ip)) {
			document.getElementById("not_valid_bin").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("addr").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("dec").value = "";
	        document.getElementById("hex").value = "";
            return;
        }		
		
		document.getElementById("not_valid_bin").innerHTML = "";
					
	    document.getElementById("addr").value = converted_ip;
        document.getElementById("oct").value = num_dec.toString(8);
		document.getElementById("dec").value = num_dec.toString(10);
	    document.getElementById("hex").value = num_dec.toString(16).toUpperCase();					
		
        break;
  
    case "oct":
	    var a = document.getElementById("oct").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 8);
		
		if (isNaN(num_dec) || num_dec > 4294967295) {
			document.getElementById("not_valid_oct").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("addr").value = "";
	        document.getElementById("bin").value = "";
	        document.getElementById("dec").value = "";
	        document.getElementById("hex").value = "";
            return;
		}
		
		var converted_ip = dec_to_ip(num_dec);
					
		if (!validateIP(converted_ip)) {
			document.getElementById("not_valid_oct").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("addr").value = "";
	        document.getElementById("bin").value = "";
	        document.getElementById("dec").value = "";
	        document.getElementById("hex").value = "";
            return
        }		
		
		document.getElementById("not_valid_oct").innerHTML = "";
					
	    document.getElementById("addr").value = converted_ip;
        document.getElementById("bin").value = num_dec.toString(2);
		document.getElementById("dec").value = num_dec.toString(10);
	    document.getElementById("hex").value = num_dec.toString(16).toUpperCase();
		
        break;
  
    case "dec":
	    var a = document.getElementById("dec").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 10);
		
		if (isNaN(num_dec) || num_dec > 4294967295) {
			document.getElementById("not_valid_dec").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("addr").value = "";
	        document.getElementById("bin").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("hex").value = "";
            return;
		}
		
		var converted_ip = dec_to_ip(num_dec);
					
		if (!validateIP(converted_ip)) {
			document.getElementById("not_valid_dec").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("addr").value = "";
	        document.getElementById("bin").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("hex").value = "";
            return
        }		
		
		document.getElementById("not_valid_dec").innerHTML = "";
					
	    document.getElementById("addr").value = converted_ip;
        document.getElementById("bin").value = num_dec.toString(2);
		document.getElementById("oct").value = num_dec.toString(8);
	    document.getElementById("hex").value = num_dec.toString(16).toUpperCase();
		
        break;
		
    case "hex":
	    var a = document.getElementById("hex").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 16);
		
		if (isNaN(num_dec) || num_dec > 4294967295) {
			document.getElementById("not_valid_hex").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("addr").value = "";
	        document.getElementById("bin").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("dec").value = "";
            return;
		}
		
		var converted_ip = dec_to_ip(num_dec);
					
		if (!validateIP(converted_ip)) {
			document.getElementById("not_valid_hex").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("addr").value = "";
	        document.getElementById("bin").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("dec").value = "";
            return
        }		
		
		document.getElementById("not_valid_hex").innerHTML = "";
					
	    document.getElementById("addr").value = converted_ip;
        document.getElementById("bin").value = num_dec.toString(2);
		document.getElementById("oct").value = num_dec.toString(8);
	    document.getElementById("dec").value = num_dec.toString(10);
		
        break;  
	}		
}

function validateIP(b) {
    var a = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (b.match(a)) {
        return (true)
    }
    return (false)
}

function dec_to_ip(num_dec) {	
	return ((num_dec>>24)&0xff) + '.' +
           ((num_dec>>16)&0xff) + '.' +
           ((num_dec>>8)&0xff) + '.' + 
           (num_dec&0xff);		
}

window.onload = convert("addr");