$(function() {
	var $UserregisterForm = $("#userRegister");
	$UserregisterForm.validate({
		rules : {

			fullName : {
				required : true,
				lettersonly : true
			},
			lastName : {
				required : true,
				lettersonly : true
			},
			dob : {
				required : true,
			},
			mobNo : {
				required : true,
				space : true,
				numericOnly : true,
				minlength : 10,
				maxlength : 10,
				noZero:true

			},
			email : {
				required : true,
				space : true,
				email : true,
				invalidemails: '@hotmail.com'
				
			},
			password : {
				required : true,
				space : true

			},
			confirmpassword : {
				required : true,
				space : true,
				equalTo : '#psw'

			},
			role : {
				required : true
			},

			address : {
				required : true,
				all : true

			},
			city : {
				required : true,
				all : true
			},
			state : {
				required : true,
				all : true
			},
			pincode : {
				required : true,
				numericOnly : true,
				minlength : 5,
				maxlength : 6

			},
			file : {
				required : true
			}

		},
		messages : {
			fullName : {
				required : 'full name must be required',
				lettersonly : 'invalid name'

			},
			lastName : {
				required : "last name must be required",
				lettersonly : "invalid name"
			},
			dob : {
				required : "date of birth must be required"
			},
			mobNo : {
				required : 'mob no must be required',
				space : 'space not allowed',
				numericOnly : 'invalid mob no',
				minlength : 'min 10 digit',
				maxlength : 'max 10 digit',
				noZero:'Invalid',
				mobnum:'Invalid mobno'
			},
			email : {
				required : 'email name must be required',
				space : 'space not allowed',
				email : 'Invalid email',
				invalidemails:'Dont use @hotmail.com'
			},

			password : {
				required : 'password must be required',
				space : 'space not allowed'

			},
			confirmpassword : {
				required : 'confirm password must be required',
				space : 'space not allowed',
				equalTo : 'password mismatch'

			},
			role : {
				required : "Role must be required"
			},
			address : {
				required : 'address must be required',
				all : 'invalid'

			},
			city : {
				required : 'city must be required',
				all : 'invalid'
			},
			state : {
				required : 'state must be required',
				all : 'invalid'
			},
			pincode : {
				required : 'pincode must be required',
				numericOnly : 'invalid pincode',
				minlength : 'min 5 digit',
				maxlength : 'max 6 digit'

			},
			file:{
				required : 'certificate required',
			}
		}
	})

	jQuery.validator.addMethod('lettersonly', function(value, element) {
		return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
	});

	jQuery.validator.addMethod('space', function(value, element) {
		return /^[^-\s]+$/.test(value);
	});

	jQuery.validator.addMethod('all', function(value, element) {
		return /^[^-\s][a-zA-Z0-9_,.\s-]+$/.test(value);
	});

	jQuery.validator.addMethod('numericOnly', function(value, element) {
		return /^[0-9]+$/.test(value);
	});
	
	jQuery.validator.addMethod('noZero', function(value, element) {
		return /^(?=.*\d)(?=.*[1-9]).{1,10}$/.test(value);
	});
	
	
	
	jQuery.validator.addMethod('myemail', function(value, element) {
		return /^[a-z@]+\./.test(value);
	});
	
	
	jQuery.validator.addMethod('mobnum', function(value, element) {
		return /^[0]?[6789]\d{9}$/.test(value);
	});
	
	
	
	
})


function newFunction_1() {
    return ^;
}

function newFunction() {
}

function appoinment_date(){
	var date= new Date();
	
}






// jQuery code
$('#userRegistration').submit(function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  var email = $('#emailInput').val();
  
  // Check if the email is in a valid format and is not invalid
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !isInvalidEmail(email)) {
    // Valid email
    // Perform further actions, e.g., submit the form or process the data
    $('#userRegistration')[0].submit(); // Submit the form progr
  } else {
    // Invalid email
    alert('Please enter a valid email address.');
  }
});

function isInvalidEmail(email) {
  // List of invalid email addresses
  var invalidEmails = ["test@example.com", "foo@hotmail.com"]; // Add more if needed

  // Check if the email is in the list of invalid emails
  if (invalidEmails.includes(email)) {
    return true;
  } else {
    return false;
  }
}