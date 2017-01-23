<?php

$EmailFrom = "ariel.s.levy1@gmail.com";
$EmailTo = "aslevy@mit.edu";
$Subject = "Message from arielslevy.com";
$Name = Trim(stripslashes($_POST['name']));
$Email = Trim(stripslashes($_POST['email']));
$Message = Trim(stripslashes($_POST['message']));

// validation
$validationOk = true;
if (!validationOk) {
	print "<meta http-equiv=\"refresh\"content=\"0;URL=error.htm\">";
	exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\nEmail: ";
$Body .= $Email;
$Body .= "\nMessage: ";
$Body .= $Message; 

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
	//print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
	echo "<p>Thanks!</p>";
}
else{
	//print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
	echo "<p>Error</p>";
}

?>

