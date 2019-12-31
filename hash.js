
function calculate() {

    var text = document.getElementById("input_str").value;

    document.getElementById("md2").innerHTML = md2(text).toUpperCase();
	document.getElementById("md4").innerHTML = md4(text).toUpperCase();
	document.getElementById("md5").innerHTML = CryptoJS.MD5(text).toString().toUpperCase();	
	var md6 = new md6hash();	
	document.getElementById("md6-128").innerHTML = md6.hex(text, 128).toUpperCase();	
	var md6 = new md6hash();
	document.getElementById("md6-256").innerHTML = md6.hex(text, 256).toUpperCase();	
	var md6 = new md6hash();
	document.getElementById("md6-512").innerHTML = md6.hex(text, 512).toUpperCase();
	
	document.getElementById("sha1").innerHTML = CryptoJS.SHA1(text).toString().toUpperCase();
	document.getElementById("sha224").innerHTML = CryptoJS.SHA224(text).toString().toUpperCase();
	document.getElementById("sha256").innerHTML = CryptoJS.SHA256(text).toString().toUpperCase();
	document.getElementById("sha384").innerHTML = CryptoJS.SHA384(text).toString().toUpperCase();
	document.getElementById("sha512").innerHTML = CryptoJS.SHA512(text).toString().toUpperCase();
	document.getElementById("sha3-224").innerHTML = sha3_224(text).toUpperCase();
	document.getElementById("sha3-256").innerHTML = sha3_256(text).toUpperCase();
	document.getElementById("sha3-384").innerHTML = sha3_384(text).toUpperCase();
	document.getElementById("sha3-512").innerHTML = sha3_512(text).toUpperCase();
	
	document.getElementById("ripemd-128").innerHTML = CryptoJS.RIPEMD128(text).toString().toUpperCase();
	document.getElementById("ripemd-160").innerHTML = CryptoJS.RIPEMD160(text).toString().toUpperCase();
	document.getElementById("ripemd-256").innerHTML = CryptoJS.RIPEMD256(text).toString().toUpperCase();
	document.getElementById("ripemd-320").innerHTML = CryptoJS.RIPEMD320(text).toString().toUpperCase();
	
	document.getElementById("whirlpool").innerHTML = Whirlpool(text).toUpperCase();	
	
	var utf16le = text.split('').join('\x00') + '\x00';
    document.getElementById("ntlm").innerHTML = md4(utf16le).toUpperCase();

}

window.onload = calculate;
	