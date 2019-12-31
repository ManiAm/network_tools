
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
		
		if (isNaN(num_dec) || num_dec > 4294967295) {
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
		
		if (isNaN(num_dec)) {
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
		
		if (isNaN(num_dec)) {
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
		
		if (isNaN(num_dec)) {
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

function binWithSeperators(x) {
    return x.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
}

function octWithSeperators(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function decWithSeperators(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
