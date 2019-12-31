
var t = "<table border='1'><tr> <td><b>Slash</b></td> <td><b>Decimal</b></td> <td><b>Wildcard</b></td> <td><b>Host ID Length</b></td> <td><b>Available Host Addresses</b></td> </tr>";

for (var slash = 0; slash <= 32; slash++) {
	
	var u = find_mask(slash);
	var l = find_wildcard(u);
	var host_addr = Math.max(0,(Math.pow(2,((32-slash)))-2));
	
    t += "<tr><td>" + "/" + slash + "</td>";
    t += "<td>" + u[0] + "." + u[1] + "." + u[2] + "." + u[3] + "</td>";
    t += "<td>" + l[0] + "." + l[1] + "." + l[2] + "." + l[3] + "</td>";
    t += "<td>" + (32-slash) + "</td>";
	t += "<td>" + numberWithCommas(host_addr) + "</td>";
}

t += "</table>";
document.getElementById("mask_table").innerHTML = t


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

function find_wildcard(a) {
    var c = new Array();
    for (var b = 0; b < 4; b++) {
        c[b] = 255 - a[b]
    }
    return c
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}