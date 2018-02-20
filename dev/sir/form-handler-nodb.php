<?php
// Emails form data to you and the person submitting the form
// This version requires no database.
// Set your email below
$myemail = "info@salaintimariservata.com";
$data = $_POST;

// Receive and sanitize input
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$message = $data['message'];

// set up email
$msg = "Nuovo messaggio dal sito Sala Intima Riservata!\n\nNome: " . $name . "\n\nEmail: " . $email . "\n\nTelefono: " . $phone . "\n\nMessaggio: " . $message;
$msg = wordwrap($msg,70);
mail($myemail,"Nuovo Messaggio dal Sito Sala Intima Riservata",$msg);
//mail($email,"Thank you for your form submission",$msg);
echo json_encode(array('r'=>1));

?>
