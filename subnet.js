
function calculate() {
	
	document.getElementById("not_valid_ip").innerHTML = ""
	document.getElementById("not_valid_mask").innerHTML = ""
	
    var f = document.getElementById("ip").value;
    f = f.replace(/^\s+|\s+$/g, "");
    if (!validateIP(f)) {
		document.getElementById("not_valid_ip").innerHTML = "<b>The IP address looks invalid!</b>";
        return
    }
    f = f.split(".");
	
    var a = document.getElementById("mask").value;
    a = a.replace(/^\s+|\s+$/g, "");
	
    a = clean_mask(a);
	if (a === undefined) {
		return;
	}
	
    if (!validate_mask(a)) {
		document.getElementById("not_valid_mask").innerHTML = "<b>That mask does not look valid!</b>";
		return
    }
	
	document.getElementById("not_valid_ip").innerHTML = "";
    document.getElementById("not_valid_mask").innerHTML = "";
			
    var c = mask_to_slash(a);
    var e = find_wildcard(a);
    var b = find_net_add(f, a);
    var d = find_broadcast(e, f);
	
	document.getElementById("netadd").innerHTML = print_ip(b);
    document.getElementById("slash").innerHTML = "/" + c;
	document.getElementById("netmask").innerHTML = print_ip(a);
	document.getElementById("wild").innerHTML = print_ip(e);
	document.getElementById("hosts").innerHTML = decWithSeperators(find_hosts(c).toString(10));
    document.getElementById("first").innerHTML = print_ip(next_add(b));
    document.getElementById("last").innerHTML = print_ip(prev_add(d));
	document.getElementById("broad").innerHTML = print_ip(d);
}

function clean_mask(c) {
    if (c.substring(0, 1) == "/") {
        var b = c.substring(1);
        if (b > 32 || b < 1 || isNaN(b)) {
			document.getElementById("not_valid_mask").innerHTML = "<b>That slash seems to be invalid!</b>";
            return
        }
        var a = find_mask(parseInt(b))
    } else {
        if (!validateIP(c)) {
			document.getElementById("not_valid_mask").innerHTML = "<b>That does not look like a valid netmask!</b>";
            return
        } else {
            var a = c.split(".")
        }
    }
    return a
}

function validateIP(a) {
    var b = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (a.match(b)) {
        return true
    }
    return false
}

function validate_mask(b) {
    var c = [255, 254, 252, 248, 240, 224, 192, 128, 0];
    var e = 0;
    for (var d = 0; d < 3; d++) {
        if (b[d] < b[d + 1]) {
            return false
        }
    }
    for (var d = 0; d < 4; d++) {
        for (var a = 0; a < 10; a++) {
            if (b[d] == c[a]) {
                e++
            }
        }
    }
    if (e == 4) {
        return true
    }
    return false
}

function find_mask(c) {
    var a = new Array();
    for (var b = 0; b < 4; b++) {
        a[b] = 0
    }
    if (c < 8) {
        a[0] = 256 - Math.pow(2, (32 - (c + 24)))
    } else {
        if (c < 16) {
            a[0] = 255;
            a[1] = 256 - Math.pow(2, (32 - (c + 16)))
        } else {
            if (c < 24) {
                a[0] = 255;
                a[1] = 255;
                a[2] = 256 - Math.pow(2, (32 - (c + 8)))
            } else {
                a[0] = 255;
                a[1] = 255;
                a[2] = 255;
                a[3] = 256 - Math.pow(2, (32 - c))
            }
        }
    }
    return a
}

function find_net_add(a, b) {
    var c = new Array();
    for (var d = 0; d < 4; d++) {
        c[d] = a[d] & b[d]
    }
    return c
}

function find_wildcard(a) {
    var c = new Array();
    for (var b = 0; b < 4; b++) {
        c[b] = 255 - a[b]
    }
    return c
}

function find_broadcast(b, a) {
    var d = new Array();
    for (var c = 0; c < 4; c++) {
        d[c] = b[c] | parseInt(a[c])
    }
    return d
}

function print_ip(a) {
    return a[0] + "." + a[1] + "." + a[2] + "." + a[3]
}

function mask_to_slash(a) {
    var d = 0;
    if (a[1] == 0) {
        for (var c = 0; c < 9; c++) {
            var b = 256 - Math.pow(2, c);
            if (a[0] == b) {
                return 8 - c
            }
        }
    } else {
        if (a[2] == 0) {
            for (var c = 0; c < 9; c++) {
                var b = 256 - Math.pow(2, c);
                if (a[1] == b) {
                    return 16 - c
                }
            }
        } else {
            if (a[3] == 0) {
                for (var c = 0; c < 9; c++) {
                    var b = 256 - Math.pow(2, c);
                    if (a[2] == b) {
                        return 24 - c
                    }
                }
            } else {
                for (var c = 0; c < 9; c++) {
                    var b = 256 - Math.pow(2, c);
                    if (a[3] == b) {
                        return 32 - c
                    }
                }
            }
        }
    }
}

function find_hosts(a) {
    return (Math.pow(2, (32 - a)) - 2)
}

function next_add(a) {
    if (a[3] < 255) {
        a[3]++
    } else {
        if (a[2] < 255) {
            a[3] = 0;
            a[2]++
        } else {
            if (a[1] < 255) {
                a[3] = 0;
                a[2] = 0;
                a[1]++
            } else {
                a[3] = 0;
                a[2] = 0;
                a[1] = 0;
                a[0]++
            }
        }
    }
    return a
}

function prev_add(a) {
    if (a[3] > 0) {
        a[3]--
    } else {
        if (a[2] > 0) {
            a[3] = 255;
            a[2]--
        } else {
            if (a[1] > 0) {
                a[3] = 255;
                a[2] = 255;
                a[1]--
            } else {
                a[3] = 255;
                a[2] = 255;
                a[1] = 255;
                a[0]--
            }
        }
    }
    return a
};

function decWithSeperators(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}