function EncodeID(id) {
	var newNum = id * 8543;
	newNum = newNum << 13;
	newNum -= 198532455;
	newNum = ~newNum;
	newNum = newNum >>> 8;
	newNum += 4782647467;
	newNum = newNum & 0xFFFFF;

	var c0 = String.fromCharCode(65 + ((newNum & 0x00F0) >>> 4));
	var c1 = String.fromCharCode(65 + ((newNum & 0x00F00) >>> 8));
	var c2 = String.fromCharCode(65 + ((newNum & 0x0F000) >>> 12));
	var c3 = String.fromCharCode(65 + ((newNum & 0xF0000) >>> 16));
	var eID = c3 + c2 + c1 + c0;
	return eID;
}

function Decode() {
	for (i = 0; i < 370; i++) {
			document.write(i.toString() + " = " + EncodeID(i));
			document.write("<br>");
	}
	document.title = "ID Reference";
}
window.onload=Decode;