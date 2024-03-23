document.addEventListener("DOMContentLoaded", function (event) {

	RunMainSetValueAppendInDom();

	commnetcode();

	worker();

});

function commnetcode() {
	// if(prova) == if(prova !== undefined)
	// hai value ed è diverso undefined 

	// if(!prova) == if(prova == undefined) 
	// non hai value ed è  undefined 
	// da verificare un attimo 
}

function RunMainSetValueAppendInDom() {
	let x = 0;
	(function Main() {
		x = setValue(5);
		x = setValue();
		appendVariableDom(x);
	})();

	function setValue(value) {
		if (!value) {
			return 8
		}
		return 5
	}

	function appendVariableDom(x) {
		let div = document.createElement("div");
		div.classList += "val-x";
		div.textContent = "il valore di x è: " + x;
		document.body.append(div);
	}
}

function worker() {
	const result = document.querySelector('.result');
	const numbers = [10, 20]

	if (window.Worker) {
		const myWorker = new Worker("./worker.js");

		myWorker.postMessage(numbers);
		console.log('Message posted to worker');

		myWorker.onmessage = function (e) {
			result.textContent = e.data;
			console.log('Message received from worker');
			myWorker.terminate();
		}

	} else {
		console.log('Your browser doesn\'t support web workers.');
	}

}



// fermo a Terminating a worker  from url mozzilla(https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)



