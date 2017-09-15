$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "index2.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){

                formSuccess();
            }
        }
    });
}
function formSuccess(){

    $( "#msgSubmit" ).removeClass( "hidden" );
}

var confirmSubmit = true;

$('form').submit(function(e) {
  if (confirmSubmit) {
    e.stopPropagation();

    if (confirm('Are you sure you want to send this form?')) {
      confirmSubmit = false;

      $('form').submit();
    }else{
      alert("The form was not submitted.");
    }
  }
});