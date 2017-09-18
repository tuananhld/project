function isValidForm() {
	var isValid = true;
	// Handle form.
	var videoId = document.getElementById("video-id").value;
	if(videoId.length < 10){
		document.getElementById("video-id-error").innerHTML = "* Vui lòng nhập video id có độ dài lớn hơn 10 ký tự.";
		//alert("Vui lòng nhập video id có độ dài lớn hơn 10 ký tự.");
		isValid = false;
	} else {
		document.getElementById("video-id-error").innerHTML = "Hợp lệ.";
		document.getElementById("video-id-error").className = "msg-success";
	}
	return isValid;

}

function isValNameForm() {
	var isValName = true;
	var videoName = document.getElementById("video-name").value;
	// alert("Độ dài video name " + videoName.length);
	if (videoName.length < 3) {
		document.getElementById("video-name-error").innerHTML = "* Tên quá ngắn(Vui lòng nhập tên trong khoảng 3 - 50 ký tự).";
	}
	else if (videoName.length > 50) {
		isValName = false;
		document.getElementById("video-name-error").innerHTML = "* Tên quá dài(Vui lòng nhập tên trong khoảng 3 - 50 ký tự).";
	}
	else {
		document.getElementById("video-name-error").innerHTML = "Hợp lệ.";
		document.getElementById("video-name-error").className = "msg-success";
	}
	return isValName;
}

function isValueForm() {
	var isValid = isValidForm();
	var isValName = isValNameForm();

	var isValue = (isValid && isValName);

	return isValue;
}