function resetcall() {
	var x = document.getElementById('searchTable');

	x.style.display = "none";
	document.getElementById('stmNumber').focus();
	document.getElementById('recordDisplay').style.display = 'none';
};

function searchcall() {
	var x = document.getElementById('searchTable');
	var y = document.getElementById('vis');

	{
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}

		if (y.style.display === "none") {
			y.style.display = "block";
		} else {
			y.style.display = "none";
		}

	}
};

function onLoadcall(value) {
	console.log("Value is : " + value);
	var x = document.getElementById('searchTable');
	if (value == "1" || value == null) {
		x.style.display = "none";
		console.log(value);
	}
	document.getElementById('stmNumber').focus();
};

// Function to show and hide the popup 
function togglePopup() {
	$(".content").toggle();
}

$(document).ready(function submitData() {
	$(".content").click(function() {
		$(this).toggle();
	});
});

//Doubleclick Function
$(function() {
	$("table tr").dblclick(function() {
		console.log("on Double Click")
		console.log(this.rowIndex);

		var formData = {
			rowIndex: this.rowIndex

		}
		console.log("Start")
		$.ajax(
			{
				type: 'POST',
				contentType: 'application/json; charset=utf-8',
				url: contextPath + '/doubleClickTableRow',
				data: JSON.stringify(formData),
				datatype: 'json',
				success: function() {
					window.open(contextPath + "/Modify?");

				}
			}
		);
	})
});

//PDF Download function
function downloadPDF() {
	var pdf = document.getElementById("pdfFileNameHid").value;
	console.log("File name " + pdf);

	if (!pdf || pdf === " ") {
		// Disable the button and return
		downloadPDF.disabled = true;
		return;
	}
	fetch(contextPath + "/downloadattachmentpdf?file=" + pdf)
		.then(response => response.blob())
		.then(blob => {
			var link = document.createElement('a');

			var blobUrl = window.URL.createObjectURL(blob);

			link.href = blobUrl;
			link.download = 'downloaded_file.pdf';
			link.download = pdf;
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
			window.URL.revokeObjectURL(blobUrl);

			downloadPDF.disabled = false;

		})
		.catch(error => console.error('Error downloading file:', error));

	downloadPDF.disabled = false;
}

//Word Document Download
function downloadDocument() {
	var word = document.getElementById("docFileNameHid").value;
	console.log("File name: " + word);
	if (!word || word === " ") {
		// Disable the button and return
		downloadDocument.disabled = true;
		return;
	}
	fetch(contextPath + "/downloadattachmentpdf?file=" + word)
		.then(response => response.blob())
		.then(blob => {
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = word;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			downloadDocument.disabled = false;

		})
		.catch(error => console.error('Error:', error));
	downloadDocument.disabled = false;
}

// ADD[S]Enterkey order for Search page
$(document).ready(function() {
	$(window).keydown(function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});
});

//Enter order for Search page
function enterClick(value, event) {
	let key = event.key;
	if (key == "Enter") {
		if (value == '1') {
			document.getElementById('Revision number').focus();
		}
		else if (value == '2') {
			document.getElementById('Link destination').focus();
		}
		else if (value == '3') {
			document.getElementById('Japanese').focus();
		}
		else if (value == '4') {
			document.getElementById('English').focus();
		}
		else if (value == '5') {
			document.getElementById('draft_start_date').focus();
		}
		else if (value == '6') {
			document.getElementById('draft_end_date').focus();
		}
		else if (value == '7') {
			document.getElementById('finalDrafterName').focus();
		}
		else if (value == '8') {
			document.getElementById('oldSTMnumber').focus();
		}
		else if (value == '9') {
			document.getElementById('searchbtn').focus();
		}
		else if (value == '10') {
			document.getElementById("searchbtn").click();
		}
	}
};

//Admin login Function
function disEnableBtn(x) {
	console.log("Values is : " + x)
	if (x == '1') {
		document.getElementById("clkBtn").disabled = false;
	}
	else {
		document.getElementById("clkBtn").style.color = '#999';
		document.getElementById("clkBtn").disabled = true;
	}
	if (x == '1') {
		document.getElementById("Btn").disabled = false;
	}
	else {
		document.getElementById("Btn").style.color = '#999';
		document.getElementById("Btn").disabled = true;
	}
	if (x == '1') {
		document.getElementById("clkBtns").disabled = false;
	}
	else {
		document.getElementById("clkBtns").style.color = '#999';
		document.getElementById("clkBtns").disabled = true;
	}
}

//Drafting date Function
function formatDraftingDate(input) {
	// Remove any non-numeric characters from the input
	var numericInput = input.value.replace(/\D/g, '');

	// Check if the input has at least 8 characters (yyyymmdd)
	if (numericInput.length >= 8) {
		// Extract year, month, and day
		var year = numericInput.substring(0, 4);
		var month = numericInput.substring(4, 6);
		var day = numericInput.substring(6, 8);

		// Format the date as yyyy/mm/dd
		var formattedDate = year + '/' + month + '/' + day;
		// Set the formatted date back to the input
		input.value = formattedDate;
	}
}

//click fucntion
$(document).ready(function() {

  //Highlight clicked row
  $('.table-layout td').on('click', function() {
  
    // Remove previous highlight class
    $(this).closest('table').find('tr.clickedrow').removeClass('clickedrow');
    
    // add highlight to the parent tr of the clicked td
    $(this).parent('tr').addClass("clickedrow");
  });
});

// ADD[E]