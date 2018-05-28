<?php
    // INITIALIZE THE VARIABLES THAT CONTAIN ERRORS
    $errorMSG = "";




    // CHECK THAT THE FIELDS NAME DOES NOT CONTAIN ERRORS
    if (empty($_POST["name"])) {
        $errorMSG = "Name is required ";
    }
    else {
        $name = $_POST["name"];
    }




    // CHECK THAT THE FIELDS EMAIL DOES NOT CONTAIN ERRORS
    if (empty($_POST["email"])) {
        $errorMSG .= "Email is required ";
    }
    else {
        $email = $_POST["email"];
    }




    // CHECK THAT THE FIELDS DATE DOES NOT CONTAIN ERRORS
    if (empty($_POST["date"])) {
        $errorMSG .= "Date is required ";
    }
    else {
        $date = $_POST["date"];
    }




    // CHECK THAT THE FIELDS NUMBER DOES NOT CONTAIN ERRORS
    if (empty($_POST["number"])) {
        $errorMSG .= "Number is required ";
    }
    else {
        $number = $_POST["number"];
    }




    // INITIALIZE THE MAIL
    $EmailTo = "j.33@hotmail.fr";
    $Subject = "New Message Received";

    $Body = "";
    $Body .= "Name: ";
    $Body .= $name;
    $Body .= "\n";
    $Body .= "Email: ";
    $Body .= $email;
    $Body .= "\n";
    $Body .= "Date: ";
    $Body .= $date;
    $Body .= "\n";
    $Body .= "number: ";
    $Body .= $number;
    $Body .= "\n";




    // SEND EMAIL
    $success = mail($EmailTo, $Subject, $Body, "From:".$email);




    // POST A MESSAGE OF SUCCESS
    if ($success && $errorMSG == ""){
        echo "success";
    }
    else{
        if($errorMSG == ""){
            echo "Something went wrong :(";
        }
        else {
            echo $errorMSG;
        }
    }
?>
