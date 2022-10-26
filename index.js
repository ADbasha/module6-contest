let globalIsSubmitted = false 

function validate(isSubmitted = false) {
	let firstName = document.getElementById('full-name').value
	let state = document.getElementById('state').value
	let tnC = document.getElementById('t-and-c').checked
	let error = false

	if(isSubmitted) {
		globalIsSubmitted = true
	}

	if(globalIsSubmitted) {
		if(firstName.length >= 5) {
			document.getElementById('full-name-valid').style.display = 'block'
			document.getElementById('full-name-invalid').style.display = 'none'
		} else {
			document.getElementById('full-name-invalid').style.display = 'block'
			document.getElementById('full-name-valid').style.display = 'none'
			error = true
		}




		if(state != 'None') {
			document.getElementById('state-valid').style.display = 'block'
			document.getElementById('state-invalid').style.display = 'none'
		} else {
			document.getElementById('state-invalid').style.display = 'block'
			document.getElementById('state-valid').style.display = 'none'
			error = true
		}

		
		if(tnC) {
			document.getElementById('t-and-c-invalid').style.display = 'none'
		} else {
			document.getElementById('t-and-c-invalid').style.display = 'block'
			error = true
		}

		if(!error && isSubmitted) {
			alert('Your details have been saved successfully!')

			document.getElementById('registration-form').reset()

			let validFeedbacks = document.getElementsByClassName('valid-feedback')
			for(let i = 0; i < validFeedbacks.length; i++) {
				validFeedbacks[i].style.display = 'none'
			}
			let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
			for(let i = 0; i < invalidFeedbacks.length; i++) {
				invalidFeedbacks[i].style.display = 'none'
			}
		}
	}
}
