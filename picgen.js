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

function RandomPic() {
	var randomIndex = Math.floor(Math.random() * 370)
	var encodedIndex = EncodeID(randomIndex);
	var indexString = "data/" + randomIndex.toString() + ".png";
	document.getElementById("pic1").src = indexString;
	document.getElementById("idnum").innerHTML += encodedIndex;
}
window.onload=RandomPic;