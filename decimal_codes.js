
function convert(b) {
	
	document.getElementById("not_valid_dec").innerHTML = "";
	document.getElementById("not_valid_bcd").innerHTML = "";
	document.getElementById("not_valid_aiken").innerHTML = "";
	document.getElementById("not_valid_642-3").innerHTML = "";	
	document.getElementById("not_valid_5421").innerHTML = "";
	document.getElementById("not_valid_gray").innerHTML = "";
	document.getElementById("not_valid_e3_gray").innerHTML = "";
	document.getElementById("not_valid_e3_bcd").innerHTML = "";
	document.getElementById("not_valid_johnson").innerHTML = "";
			
	switch(b) {
	
	case "dec":    					
		
		var line = document.getElementById("dec").value;

		var bcd_lookup = [
			'0000',
			'0001',
			'0010',
			'0011',
			'0100',
			'0101',
			'0110',
			'0111',
			'1000',
			'1001'
		];
		
		var aiken_lookup = [
			'0000',
			'0001',
			'0010',
			'0011',
			'0100',
			'1011',
			'1100',
			'1101',
			'1110',
			'1111'
		];
		
		var w6423_lookup = [
			'0000',
			'0101',
			'0010',
			'1001',
			'0100',
			'1011',
			'0110',
			'1101',
			'1010',
			'1111'
		];
		
		var w5421_lookup = [
			'0000',
			'0001',
			'0010',
			'0011',
			'0100',
			'0101',
			'0110',
			'0111',
			'1011',
			'1100'
		];
		
		var e3_bcd_lookup = [
			'0011',
			'0100',
			'0101',
			'0110',
			'0111',
			'1000',
			'1001',
			'1010',
			'1011',
			'1100'
		];
		
		var e3_gray_lookup = [
			'0010',
			'0110',
			'0111',
			'0101',
			'0100',
			'1100',
			'1101',
			'1111',
			'1110',
			'1010'
		];
		
		var johnson_lookup = [
			'00000',
			'00001',
			'00011',
			'00111',
			'01111',
			'11111',
			'11110',
			'11100',
			'11000',
			'10000'
		];
		
		document.getElementById("bin").value = binWithSeperators(parseInt(line, 10).toString(2));
		document.getElementById("bcd").value = binWithSeperators(getWeightedCode(line, bcd_lookup));
		document.getElementById("aiken").value = binWithSeperators(getWeightedCode(line, aiken_lookup));
		document.getElementById("642-3").value = binWithSeperators(getWeightedCode(line, w6423_lookup));
		document.getElementById("5421").value = binWithSeperators(getWeightedCode(line, w5421_lookup));
		document.getElementById("e3_bcd").value = binWithSeperators(getWeightedCode(line, e3_bcd_lookup));
		document.getElementById("e3_gray").value = binWithSeperators(getWeightedCode(line, e3_gray_lookup));
		document.getElementById("johnson").value = binJohnsonWithSeperators(getWeightedCode(line, johnson_lookup));
		
		var ret = '';
		var line_3 = line.replace(/^\s+/, '');
		line_3 = line_3.replace(/\s+$/, '');
		if (/(\d+)/.test(line_3)) {
			var num = parseInt(line_3, 10);
			var gray = (num ^ (num >> 1)).toString(2);
			while (gray.length < 8) {
				gray = "0" + gray;
			}
			ret += gray;
		}
		
		document.getElementById("gray").value = binWithSeperators(ret);		
		
        break;
		
    case "bcd":    					
		
        break;
  
    case "aiken":
		
        break;
  
    case "642-3":
		
        break;
		
    case "5421":
		
        break;  
		
    case "gray":
		
        break;  
		
	case "e3_gray":
		
        break;  
		
	case "e3_bcd":
		
        break;  
		
	case "johnson":
		
        break;  
	}		
}

function binWithSeperators(x) {
    return x.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
}

function binJohnsonWithSeperators(x) {
    return x.replace(/\B(?=(\d{5})+(?!\d))/g, " ");
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

function getWeightedCode(line, lookup) {
    var ret = '';	
	line = line.replace(/^\s+/, '');
	line = line.replace(/\s+$/, '');
	if (/(\d+)/.test(line)) {
		var digits = line.split('');
		for (var j = 0; j < digits.length; j++) {
			ret += lookup[digits[j]].toString();
		}
	}
	else {
		ret += line;
	}
	return ret;
}

function gray_generate() {
	
    var val = document.getElementById("gray_bits").value;
	var bits = parseInt(val, 10);
	
	if (isNaN(bits) || bits <= 0) {
		document.getElementById("not_valid_gray_bits").innerHTML = "<b>Invalid number of bits!</b>";
		return;
	}	
	
	if (bits > 10) {
		document.getElementById("not_valid_gray_bits").innerHTML = "<b>Do not use more than 10 bits for performance reasons!</b>";
		return;
	}	
	
	var arr = ["0<br>", "1<br>"];
	
	for (var r = 1; r < bits; r++) {	
		var result = arr.concat(arr.slice().reverse());
		for (var i = 0; i < arr.length; i++) {
			result[i] = "0" + result[i];
		}
		for (var i = arr.length; i < result.length; i++) {
			result[i] = "1" + result[i];
		}	
		arr = result;
	}
	
	document.getElementById("ans").innerHTML = arr.join(' ');
}

window.onload = convert("dec");