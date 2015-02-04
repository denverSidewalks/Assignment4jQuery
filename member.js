/**
 * @author Eric
 */
$(document).ready(function() {
	// add span element after each input element
	$(":text, #verify").after("<span>*</span>");
	
	// move focus to first text box
	$("#first_name").focus();
	

	// the handler for the click event of a regular button
	$("#member_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			} 		
			// validate the first name entry
			var firstName = $("#first_name").val().trim();
			if (firstName.length == 0) {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#first_name").val(firstName);
				$("#first_name").next().text("");
			}
			// validate the last name entry
			var lastName = $("#last_name").val().trim();
			if (lastName.length == 0) {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#last_name").val(lastName);
				$("#last_name").next().text("");
			}
			// validate the address
			var street_address = $("#street_address").val().trim();
			if (street_address.length == 0) {
				$("#street_address").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#street_address").val(street_address);
				$("#street_address").next().text("");
			}	

			// validate the phone number (regular expression)
			if ($("#phone").val() == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
				// Here we now need to rewrite the phone number value to the correct format
				var phoneNumber = $("#phone").val();
				
				// Now we're going to recronstruct this phone number to the right format.
				// For example, if the phone number value is currently 7203082280
				// then we're going to create a new string that rewrites it as (720) 308-2280.
				// We can access each digit of the number by calling phoneNumber[index], where index
				// is the character position of the number.
				var formattedNumber = '(' + phoneNumber[0] + phoneNumber[1] + [phoneNumber[2] + ') ' +
					phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + '-' + phoneNumber[6] +
					phoneNumber[7] + phoneNumber[8] + phoneNumber[9];
				
				// Now we set it on the form to the right format.
				$('#phone').val(formatterNumber);
			}
		
			// validate the requested start date (regular expression)
			//$("#start_date").next().text("");
			
			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submiy

	// We want to set this up to run every time, not just on submit	
        $('#phone').keyup(function(event){
	        var value = $(this).val();
	        if(value.length != 10){
	        	$(this).addClass('error');
	        	$(this).removeClass('validated');
	        } else {
	        	$(this).removeClass('error');
	        	$(this).addClass('validated');
	        }
        });
}); // end ready


$('#phone').keyup(function() {
    var $th = $(this);
    $th.val( $th.val().replace(/[^a-zA-Z0-9]/g, function(str) 
    { alert('You typed " ' + str + ' ".\n\nPlease use only letters and numbers.'); return ''; } ) );
});


function keyupResponse()
{  
  			if ($("#phone").val() == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
			} 
}
