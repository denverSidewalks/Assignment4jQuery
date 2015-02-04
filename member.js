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
			}
		
/*			        $('#phone').keyup(function(event){
        if(isNaN(String.fromCharCode(event.which))){
            var value = $(this).val();

            $(this).val(value.substr(0,value.length-1));
      }
    });
 */ 			// validate the requested start date (regular expression)
			//$("#start_date").next().text("");
			
			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submiy
}); // end ready


/*$('phone').keyup(function() {
    var $th = $(this);
    $th.val( $th.val().replace(/[^a-zA-Z0-9]/g, function(str) 
    { alert('You typed " ' + str + ' ".\n\nPlease use only letters and numbers.'); return ''; } ) );
});
*/


function keyupResponse()
{  
  			if ($("#phone").val() == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
			} 
}
