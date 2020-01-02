
function convert(b) {
	
	document.getElementById("not_valid_bin").innerHTML = "";
	document.getElementById("not_valid_oct").innerHTML = "";
	document.getElementById("not_valid_dec").innerHTML = "";
	document.getElementById("not_valid_hex").innerHTML = "";
			
	switch(b) {
	
    case "bin":    
        var a = document.getElementById("bin").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 2);
		
		if (isNaN(num_dec) || num_dec < 0) {
			document.getElementById("not_valid_bin").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("oct").value = "";
	        document.getElementById("dec").value = "";
	        document.getElementById("hex").value = "";
            return;
		}	
		
		document.getElementById("not_valid_bin").innerHTML = "";
					
        document.getElementById("oct").value = octWithSeperators(num_dec.toString(8));
		document.getElementById("dec").value = decWithSeperators(num_dec.toString(10));
	    document.getElementById("hex").value = num_dec.toString(16).toUpperCase();					
		
        break;
  
    case "oct":
	    var a = document.getElementById("oct").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 8);
		
		if (isNaN(num_dec) || num_dec < 0) {
			document.getElementById("not_valid_oct").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("bin").value = "";
	        document.getElementById("dec").value = "";
	        document.getElementById("hex").value = "";
            return;
		}		
		
		document.getElementById("not_valid_oct").innerHTML = "";
					
        document.getElementById("bin").value = binWithSeperators(num_dec.toString(2));
		document.getElementById("dec").value = decWithSeperators(num_dec.toString(10));
	    document.getElementById("hex").value = num_dec.toString(16).toUpperCase();
		
        break;
  
    case "dec":
	    var a = document.getElementById("dec").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 10);
		
		if (isNaN(num_dec) || num_dec < 0) {
			document.getElementById("not_valid_dec").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("bin").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("hex").value = "";
            return;
		}	
		
		document.getElementById("not_valid_dec").innerHTML = "";
					
        document.getElementById("bin").value = binWithSeperators(num_dec.toString(2));
		document.getElementById("oct").value = octWithSeperators(num_dec.toString(8));
	    document.getElementById("hex").value = num_dec.toString(16).toUpperCase();
		
        break;
		
    case "hex":
	    var a = document.getElementById("hex").value;
        a = a.replace(/^\s+|\s+$/g, "");
		
		// remove all spaces
		a = a.replace(/ /g,'');
		
		num_dec = parseInt(a, 16);
		
		if (isNaN(num_dec) || num_dec < 0) {
			document.getElementById("not_valid_hex").innerHTML = "<b>Invalid format!</b>";
	        document.getElementById("bin").value = "";
	        document.getElementById("oct").value = "";
	        document.getElementById("dec").value = "";
            return;
		}	
		
		document.getElementById("not_valid_hex").innerHTML = "";
					
        document.getElementById("bin").value = binWithSeperators(num_dec.toString(2));
		document.getElementById("oct").value = octWithSeperators(num_dec.toString(8));
	    document.getElementById("dec").value = decWithSeperators(num_dec.toString(10));
		
        break;  
	}		
}

function convert_neg() {
    var a = document.getElementById("neg_dec").value;
    a = a.replace(/^\s+|\s+$/g, "");
		
	// remove all spaces
	a = a.replace(/ /g,'');
		
	num_dec = parseInt(a, 10);
		
	if (isNaN(num_dec) || num_dec < 0) {
		document.getElementById("neg_not_valid_dec").innerHTML = "<b>Invalid number!</b>";
	    document.getElementById("bin_1").value = "";
	    document.getElementById("bin_2").value = "";
	    document.getElementById("bin_sign_mag").value = "";
        return;
	}
	
	if(num_dec > 2147483647) {
		document.getElementById("neg_not_valid_dec").innerHTML = "<b>Number cannot excced 2147483647</b>";
	    document.getElementById("bin_1").value = "";
	    document.getElementById("bin_2").value = "";
	    document.getElementById("bin_sign_mag").value = "";
        return;
	}
	
	document.getElementById("neg_not_valid_dec").innerHTML = "";
			
	document.getElementById("bin_1").innerHTML = binWithSeperators((~num_dec >>> 0).toString(2));
	
	var twos = (~num_dec + 1 >>> 0).toString(2);
	document.getElementById("bin_2").innerHTML = binWithSeperators(FormatNumberLength(twos,32));
	
	var mag = FormatNumberLength(num_dec.toString(2), 32);
	sign_mag = "<span style='color: red;'>1</span>" + mag.slice(1);
	document.getElementById("bin_sign_mag").innerHTML = binWithSeperators(sign_mag);	
}

function binWithSeperators(x) {
    return x.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
}

function octWithSeperators(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function decWithSeperators(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function start() {
	convert_neg();
	convert("dec");
}

window.onload = start;