/*! https://mths.be/iso-8859-10 v1.0.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js/io.js or Browserified code,
	// and use it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var object = {};
	var hasOwnProperty = object.hasOwnProperty;
	var stringFromCharCode = String.fromCharCode;

	var INDEX_BY_CODE_POINT = {'128':0,'129':1,'130':2,'131':3,'132':4,'133':5,'134':6,'135':7,'136':8,'137':9,'138':10,'139':11,'140':12,'141':13,'142':14,'143':15,'144':16,'145':17,'146':18,'147':19,'148':20,'149':21,'150':22,'151':23,'152':24,'153':25,'154':26,'155':27,'156':28,'157':29,'158':30,'159':31,'160':32,'167':39,'173':45,'176':48,'183':55,'193':65,'194':66,'195':67,'196':68,'197':69,'198':70,'201':73,'203':75,'205':77,'206':78,'207':79,'208':80,'211':83,'212':84,'213':85,'214':86,'216':88,'218':90,'219':91,'220':92,'221':93,'222':94,'223':95,'225':97,'226':98,'227':99,'228':100,'229':101,'230':102,'233':105,'235':107,'237':109,'238':110,'239':111,'240':112,'243':115,'244':116,'245':117,'246':118,'248':120,'250':122,'251':123,'252':124,'253':125,'254':126,'256':64,'257':96,'260':33,'261':49,'268':72,'269':104,'272':41,'273':57,'274':34,'275':50,'278':76,'279':108,'280':74,'281':106,'290':35,'291':51,'296':37,'297':53,'298':36,'299':52,'302':71,'303':103,'310':38,'311':54,'312':127,'315':40,'316':56,'325':81,'326':113,'330':47,'331':63,'332':82,'333':114,'352':42,'353':58,'358':43,'359':59,'360':87,'361':119,'362':46,'363':62,'370':89,'371':121,'381':44,'382':60,'8213':61};
	var INDEX_BY_POINTER = {'0':'\x80','1':'\x81','2':'\x82','3':'\x83','4':'\x84','5':'\x85','6':'\x86','7':'\x87','8':'\x88','9':'\x89','10':'\x8A','11':'\x8B','12':'\x8C','13':'\x8D','14':'\x8E','15':'\x8F','16':'\x90','17':'\x91','18':'\x92','19':'\x93','20':'\x94','21':'\x95','22':'\x96','23':'\x97','24':'\x98','25':'\x99','26':'\x9A','27':'\x9B','28':'\x9C','29':'\x9D','30':'\x9E','31':'\x9F','32':'\xA0','33':'\u0104','34':'\u0112','35':'\u0122','36':'\u012A','37':'\u0128','38':'\u0136','39':'\xA7','40':'\u013B','41':'\u0110','42':'\u0160','43':'\u0166','44':'\u017D','45':'\xAD','46':'\u016A','47':'\u014A','48':'\xB0','49':'\u0105','50':'\u0113','51':'\u0123','52':'\u012B','53':'\u0129','54':'\u0137','55':'\xB7','56':'\u013C','57':'\u0111','58':'\u0161','59':'\u0167','60':'\u017E','61':'\u2015','62':'\u016B','63':'\u014B','64':'\u0100','65':'\xC1','66':'\xC2','67':'\xC3','68':'\xC4','69':'\xC5','70':'\xC6','71':'\u012E','72':'\u010C','73':'\xC9','74':'\u0118','75':'\xCB','76':'\u0116','77':'\xCD','78':'\xCE','79':'\xCF','80':'\xD0','81':'\u0145','82':'\u014C','83':'\xD3','84':'\xD4','85':'\xD5','86':'\xD6','87':'\u0168','88':'\xD8','89':'\u0172','90':'\xDA','91':'\xDB','92':'\xDC','93':'\xDD','94':'\xDE','95':'\xDF','96':'\u0101','97':'\xE1','98':'\xE2','99':'\xE3','100':'\xE4','101':'\xE5','102':'\xE6','103':'\u012F','104':'\u010D','105':'\xE9','106':'\u0119','107':'\xEB','108':'\u0117','109':'\xED','110':'\xEE','111':'\xEF','112':'\xF0','113':'\u0146','114':'\u014D','115':'\xF3','116':'\xF4','117':'\xF5','118':'\xF6','119':'\u0169','120':'\xF8','121':'\u0173','122':'\xFA','123':'\xFB','124':'\xFC','125':'\xFD','126':'\xFE','127':'\u0138'};

	// https://encoding.spec.whatwg.org/#error-mode
	var error = function(codePoint, mode) {
		if (mode == 'replacement') {
			return '\uFFFD';
		}
		if (codePoint != null && mode == 'html') {
			return '&#' + codePoint + ';';
		}
		// Else, `mode == 'fatal'`.
		throw Error();
	};

	// https://encoding.spec.whatwg.org/#single-byte-decoder
	var decode = function(input, options) {
		var mode;
		if (options && options.mode) {
			mode = options.mode.toLowerCase();
		}
		// “An error mode […] is either `replacement` (default) or `fatal` for a
		// decoder.”
		if (mode != 'replacement' && mode != 'fatal') {
			mode = 'replacement';
		}
		var length = input.length;
		var index = -1;
		var byteValue;
		var pointer;
		var result = '';
		while (++index < length) {
			byteValue = input.charCodeAt(index);
			// “If `byte` is in the range `0x00` to `0x7F`, return a code point whose
			// value is `byte`.”
			if (byteValue >= 0x00 && byteValue <= 0x7F) {
				result += stringFromCharCode(byteValue);
				continue;
			}
			// “Let `code point` be the index code point for `byte − 0x80` in index
			// `single-byte`.”
			pointer = byteValue - 0x80;
			if (hasOwnProperty.call(INDEX_BY_POINTER, pointer)) {
				// “Return a code point whose value is `code point`.”
				result += INDEX_BY_POINTER[pointer];
			} else {
				// “If `code point` is `null`, return `error`.”
				result += error(null, mode);
			}
		}
		return result;
	};

	// https://encoding.spec.whatwg.org/#single-byte-encoder
	var encode = function(input, options) {
		var mode;
		if (options && options.mode) {
			mode = options.mode.toLowerCase();
		}
		// “An error mode […] is either `fatal` (default) or `HTML` for an
		// encoder.”
		if (mode != 'fatal' && mode != 'html') {
			mode = 'fatal';
		}
		var length = input.length;
		var index = -1;
		var codePoint;
		var pointer;
		var result = '';
		while (++index < length) {
			codePoint = input.charCodeAt(index);
			// “If `code point` is in the range U+0000 to U+007F, return a byte whose
			// value is `code point`.”
			if (codePoint >= 0x00 && codePoint <= 0x7F) {
				result += stringFromCharCode(codePoint);
				continue;
			}
			// “Let `pointer` be the index pointer for `code point` in index
			// `single-byte`.”
			if (hasOwnProperty.call(INDEX_BY_CODE_POINT, codePoint)) {
				pointer = INDEX_BY_CODE_POINT[codePoint];
				// “Return a byte whose value is `pointer + 0x80`.”
				result += stringFromCharCode(pointer + 0x80);
			} else {
				// “If `pointer` is `null`, return `error` with `code point`.”
				result += error(codePoint, mode);
			}
		}
		return result;
	};

	var iso885910 = {
		'encode': encode,
		'decode': decode,
		'labels': [
			'csisolatin6',
			'iso-8859-10',
			'iso-ir-157',
			'iso8859-10',
			'iso885910',
			'l6',
			'latin6'
		],
		'version': '1.0.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return iso885910;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js, io.js or RingoJS v0.8.0+
			freeModule.exports = iso885910;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in iso885910) {
				iso885910.hasOwnProperty(key) && (freeExports[key] = iso885910[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.iso885910 = iso885910;
	}

}(this));