function toastDone() {
	console.log("Ping! Your toast is done!!!");
}
function makeToast(seconds=60,frozen=false) {
	if (frozen === true) {
		seconds= seconds + 60;
	}
let milliseconds = seconds * 1000;
	setTimeout(() => {toastDone()}, milliseconds);
}

makeToast(2);
