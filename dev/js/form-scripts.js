/*!
 * restaurant-lambda -  v1.0.0 (https://github.com/jeremgg/restaurant#readme)
 */

//VERIFY THAT THE FORM CONTAINS ERRORS
$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "the form has errors !!!");
    } else {
        event.preventDefault();
        submitForm();
    }
});




/**
 *  SEND THE FORM
 */
function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var date = $("#date").val();
    var number = $("#number").val();

    $.ajax({
        type: "POST",
        url: "php/post.php",
        data: "name=" + name + "&email=" + email + "&date=" + date + "&number=" + number,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}




/**
 *  VALIDATION OF THE FORMAIRE WITH SUCCESS
 */
function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}




/**
 *  IN CASE OF FORM ERRORS
 */
function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}




/**
 *  CHECK THAT THE FORM DOES NOT CONTAIN ANY ERRORS
 */
function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
