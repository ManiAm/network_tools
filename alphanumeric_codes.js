
var non_printable_ascii_map = new Map([
                                [0, "NULL"], 
                                [1, "SOH (Start of Heading)"],
                                [2, "STX (Start of Text)"],
								[3, "ETX (End of Text)"],
								[4, "EOT (End of Transmission)"],
								[5, "ENQ (Enquiry)"],
								[6, "ACK (Acknowledgment)"],
								[7, "BEL (Bell)"],
								[8, "BS (Back Space)"],
								[9, "HT (Horizontal Tab)"],
								[10, "LF (Line Feed)"],
								[11, "VT (Vertical Tab)"],
								[12, "FF (Form Feed)"],
								[13, "CR (Carriage Return)"],
								[14, "SO (Shift Out)"],
								[15, "SI (Shift In)"],
								[16, "DLE (Data Line Escape)"],
								[17, "DC1 (Device Control 1)"],
								[18, "DC2 (Device Control 2)"],
								[19, "DC3 (Device Control 3)"],
								[20, "DC4 (Device Control 4)"],
								[21, "NAK (Negative Acknowledgement)"],
								[22, "SYN (Synchronous Idle)"],
								[23, "ETB (End of Transmit Block)"],
								[24, "CAN (Cancel)"],
								[25, "EM (End of Medium)"],
								[26, "SUB (Substitute)"],
								[27, "ESC (Escape)"],
								[28, "FS (File Separator)"],
								[29, "GS (Group Separator)"],
								[30, "RS (Record Separator)"],
								[31, "US (Unit Separator)"],
								[127, "DEL"],
                               ]); 

var ascii_t = "<table border='1'><tr align='center'>";

ascii_t += "<td><b>Dec</b></td>"
ascii_t += "<td><b>Hex</b></td>"
ascii_t += "<td><b>Oct</b></td>"
ascii_t += "<td><b>Bin</b></td>"

ascii_t += "<td><b>US-ASCII</b></td>"

ascii_t += "<td><b>IA5</b></td>"
ascii_t += "<td><b>IA5 German</b></td>"
ascii_t += "<td><b>IA5 Swedish</b></td>"
ascii_t += "<td><b>IA5 Norwegian</b></td>"

ascii_t += "</tr>";

for (var dec = 0; dec <= 127; dec++) {
	
	var oct = dec.toString(8);
	var hex = dec.toString(16).toUpperCase();
	var bin = FormatNumberLength(dec.toString(2), 7);
	
    ascii_t += "<tr class='mono'><td align='center'>" + dec + "</td>";
    ascii_t += "<td align='center'>" + hex + "</td>";
    ascii_t += "<td align='center'>" + oct + "</td>";
	ascii_t += "<td align='center'>" + bin + "</td>";
	
	if(non_printable_ascii_map.has(dec)) {
        ascii_t += "<td><span style='color: red;'>" + non_printable_ascii_map.get(dec) + "</span></td>";
	}
	else {
		ascii_t += "<td align='center' class='font_size'>" + String.fromCharCode(dec) + "</td>";
	}
	
	if(non_printable_ascii_map.has(dec)) {
        ascii_t += "<td><span style='color: red;'>" + non_printable_ascii_map.get(dec) + "</span></td>";
	}
	else {
	    ascii_t += "<td align='center' class='font_size'>" + cptable[20105].dec[dec] + "</td>";
	}
	
	if(non_printable_ascii_map.has(dec)) {
        ascii_t += "<td><span style='color: red;'>" + non_printable_ascii_map.get(dec) + "</span></td>";
	}
	else {
	    ascii_t += "<td align='center' class='font_size'>" + cptable[20106].dec[dec] + "</td>";
	}
	
	if(non_printable_ascii_map.has(dec)) {
        ascii_t += "<td><span style='color: red;'>" + non_printable_ascii_map.get(dec) + "</span></td>";
	}
	else {
	    ascii_t += "<td align='center' class='font_size'>" + cptable[20107].dec[dec] + "</td>";
	}
	
	if(non_printable_ascii_map.has(dec)) {
        ascii_t += "<td><span style='color: red;'>" + non_printable_ascii_map.get(dec) + "</span></td>";
	}
	else {
	    ascii_t += "<td align='center' class='font_size'>" + cptable[20108].dec[dec] + "</td>";
	}
}

ascii_t += "</table>";
document.getElementById("ascii_table").innerHTML = ascii_t

// ---------------------------------------------------------------------
							   
var extended_ascii_t = "<table border='1' class='scroll_table'><tr align='center'>";

extended_ascii_t += "<colgroup><col span='4' style='background-color:white'><col span='10' style='background-color:lightyellow'></colgroup>";
	
extended_ascii_t += "<td><b>Dec</b></td>"
extended_ascii_t += "<td><b>Hex</b></td>"
extended_ascii_t += "<td><b>Oct</b></td>"
extended_ascii_t += "<td><b>Bin</b></td>"

extended_ascii_t += "<td><b>Windows-874  <br> Windows Thai </b></td>"
extended_ascii_t += "<td><b>Windows-1250 <br> Windows Central Europe </b></td>"
extended_ascii_t += "<td><b>Windows-1251 <br> Windows Cyrillic </b></td>"
extended_ascii_t += "<td><b>Windows-1252 <br> Windows Latin I </b></td>"
extended_ascii_t += "<td><b>Windows-1253 <br> Windows Greek </b></td>"
extended_ascii_t += "<td><b>Windows-1254 <br> Windows Turkish </b></td>"
extended_ascii_t += "<td><b>Windows-1255 <br> Windows Hebrew </b></td>"
extended_ascii_t += "<td><b>Windows-1256 <br> Windows Arabic </b></td>"
extended_ascii_t += "<td><b>Windows-1257 <br> Windows Baltic </b></td>"
extended_ascii_t += "<td><b>Windows-1258 <br> Windows Vietnam </b></td>"

extended_ascii_t += "<td><b>ISO 8859-1  <br> Western European </b></td>" 
extended_ascii_t += "<td><b>ISO 8859-2  <br> Central European </b></td>"
extended_ascii_t += "<td><b>ISO 8859-3  <br> South European </b></td>"
extended_ascii_t += "<td><b>ISO 8859-4  <br> North European </b></td>"
extended_ascii_t += "<td><b>ISO 8859-5  <br> Latin/Cyrillic </b></td>"
extended_ascii_t += "<td><b>ISO 8859-6  <br> Latin/Arabic </b></td>"
extended_ascii_t += "<td><b>ISO 8859-7  <br> Latin/Greek </b></td>"
extended_ascii_t += "<td><b>ISO 8859-8  <br> Latin/Hebrew </b></td>"
extended_ascii_t += "<td><b>ISO 8859-9  <br> Latin/Turkish </b></td>"
extended_ascii_t += "<td><b>ISO 8859-10 <br> Nordic </b></td>"
extended_ascii_t += "<td><b>ISO 8859-11 <br> Latin/Thai </b></td>"
extended_ascii_t += "<td><b>ISO 8859-13 <br> Baltic Rim </b></td>"
extended_ascii_t += "<td><b>ISO 8859-14 <br> Celtic </b></td>"
extended_ascii_t += "<td><b>ISO 8859-15 <br> Latin-9 </b></td>"
extended_ascii_t += "<td><b>ISO 8859-16 <br> South-Eastern European </b></td>"

extended_ascii_t += "</tr>";

for (var dec = 128; dec <= 255; dec++) {
	
	var oct = dec.toString(8);
	var hex = dec.toString(16).toUpperCase();
	var bin = FormatNumberLength(dec.toString(2), 8);
	
    extended_ascii_t += "<tr class='mono' align='center'><td>" + dec + "</td>";
    extended_ascii_t += "<td>" + hex + "</td>";
    extended_ascii_t += "<td>" + oct + "</td>";
	extended_ascii_t += "<td>" + bin + "</td>";
	
	var unicode = String.fromCharCode(dec);
	
	extended_ascii_t += "<td class='font_size'>" + windows874.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1250.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1251.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1252.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1253.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1254.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1255.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1256.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1257.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + windows1258.decode(unicode) + "</td>";
	
	extended_ascii_t += "<td class='font_size'>" + unicode + "</td>";	// ISO 8859-1
	extended_ascii_t += "<td class='font_size'>" + iso88592.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso88593.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso88594.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso88595.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso88596.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso88597.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso88598.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + cptable[28599].dec[dec] + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso885910.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + cptable[28601].dec[dec] + "</td>";	
	extended_ascii_t += "<td class='font_size'>" + iso885913.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso885914.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso885915.decode(unicode) + "</td>";
	extended_ascii_t += "<td class='font_size'>" + iso885916.decode(unicode) + "</td>";
}

extended_ascii_t += "</table>";
document.getElementById("extended_ascii_table").innerHTML = extended_ascii_t

// ---------------------------------------------------------------------

var non_printable_ebcdic_map = new Map([
                                [0, "NULL"], 
                               ]); 

var ebcdic_t = "<table border='1'><tr align='center'>";

ebcdic_t += "<td><b>Dec</b></td>";
ebcdic_t += "<td><b>Hex</b></td>";
ebcdic_t += "<td><b>Oct</b></td>";
ebcdic_t += "<td><b>Bin</b></td>";

ebcdic_t += "<td><b>EBCDIC US-Canada</b></td>";
ebcdic_t += "<td><b>EBCDIC International</b></td>";

ebcdic_t += "</tr>";

for (var dec = 0; dec <= 255; dec++) {
	
	var oct = dec.toString(8);
	var hex = dec.toString(16).toUpperCase();
	var bin = FormatNumberLength(dec.toString(2), 8);
	
    ebcdic_t += "<tr class='mono'><td align='center'>" + dec + "</td>";
    ebcdic_t += "<td align='center'>" + hex + "</td>";
    ebcdic_t += "<td align='center'>" + oct + "</td>";
	ebcdic_t += "<td align='center'>" + bin + "</td>";
	
	if(non_printable_ebcdic_map.has(dec)) {
        ebcdic_t += "<td><span style='color: red;'>" + non_printable_ebcdic_map.get(dec) + "</span></td>";
	}
	else {
		ebcdic_t += "<td align='center' class='font_size'>" + cptable[37].dec[dec] + "</td>";
	}
	
	if(non_printable_ebcdic_map.has(dec)) {
        ebcdic_t += "<td><span style='color: red;'>" + non_printable_ebcdic_map.get(dec) + "</span></td>";
	}
	else {
		ebcdic_t += "<td align='center' class='font_size'>" + cptable[500].dec[dec] + "</td>";
	}
}

ebcdic_t += "</table>";
document.getElementById("ebcdic_table").innerHTML = ebcdic_t

// ---------------------------------------------------------------------

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}


