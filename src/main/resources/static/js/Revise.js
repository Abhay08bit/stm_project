
function openModal(message) {
			const modal = document.getElementById('modal');
			const modalMessage = document.getElementById('modalMessage');
			modalMessage.textContent = message;
			modal.style.display = 'block';
		}

		function closeModal() {
			const modal = document.getElementById('modal');
			modal.style.display = 'none';
		}

		function openModal(modalId) {
			const modal = document.getElementById(modalId);
			modal.style.display = 'flex';
		}

		function closeModal(modalId) {
			const modal = document.getElementById(modalId);
			modal.style.display = 'none';
		}

		function updatePdfFileName(textInputId, fileInputId, errorElementId) {
			const textInput = document.getElementById(textInputId);
			const fileInput = document.getElementById(fileInputId);
			const errorElement = document.getElementById(errorElementId);

			if (fileInput.files.length > 0) {
				const fileName = fileInput.files[0].name;
				const fileExtension = fileName.split('.').pop().toLowerCase();

				if (fileExtension !== 'pdf') {
					textInput.value = '';
					openModal(errorElementId);
				} else {
					textInput.value = fileName;
					closeModal(errorElementId);
				}
			} else {
				textInput.value = '';
				closeModal(errorElementId);
			}
		}

		function updateWordFileName(textInputId, fileInputId, errorElementId) {
			const textInput = document.getElementById(textInputId);
			const fileInput = document.getElementById(fileInputId);
			const errorElement = document.getElementById(errorElementId);

			if (fileInput.files.length > 0) {
				const fileName = fileInput.files[0].name;
				const fileExtension = fileName.split('.').pop().toLowerCase();

				if (fileExtension !== 'doc' && fileExtension !== 'docx') {
					textInput.value = '';
					openModal(errorElementId);
				} else {
					textInput.value = fileName;
					closeModal(errorElementId);
				}
			} else {
				textInput.value = '';
				closeModal(errorElementId);
			}
		}
		
		function confirmRevise() {
		    console.log("Confirming revise...");
		    closeModal('reviseConfirmation');		    
		    document.getElementById('reviseForm').submit();
		}
		
		
		function validateDateFormat(inputField) {
	        var enteredDate = inputField.value;
	        var dateFormat = /^(\d{4})\/(\d{2})\/(\d{2})$/;

	        if (!dateFormat.test(enteredDate)) {
	            alert("Invalid date format. Please enter the date in yyyy/MM/dd format.");
	            // Clear the input field or perform any other actions as needed
	            inputField.value = "";
	        }
	    }
		
		// Set the duration for the messages to be displayed in milliseconds (e.g., 5000 for 5 seconds)
		  var messageDuration = 5000;

		  // Function to hide the success message after a certain duration
		  function hideSuccessMessage() {
		    var successMessageDiv = document.getElementById('successMessageDiv');
		    if (successMessageDiv) {
		      successMessageDiv.style.display = 'none';
		    }
		  }
		  
		  // Function to hide the error message after a certain duration
		  function hideErrorMessage() {
		    var errorMessageDiv = document.getElementById('errorMessageDiv');
		    if (errorMessageDiv) {
		      errorMessageDiv.style.display = 'none';
		    }
		  }

		  // Set timeouts to hide messages after the specified duration
		  setTimeout(hideSuccessMessage, messageDuration);
		  setTimeout(hideErrorMessage, messageDuration);