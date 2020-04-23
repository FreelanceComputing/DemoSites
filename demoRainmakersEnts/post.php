<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';
require_once 'PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    // Grab form info //var_dump($_POST);
	$name = validateInput("/[a-zA-Z\s]{5,}/", $_POST["Name"]);
	$number = validateInput("/[0][1-9][0-9]{9}/", $_POST["Number"]);
	$sender = validateInput("/[^@\s]+@[^@\s]+\.[^@\s]+/", $_POST["Email"]);
	$subject = validateInput("/.{5,}/", $_POST["Subject"]);
	$message = validateInput("/.{5,}/", $_POST["Message"]);

	$admin = "contact@rainmakersents.co.uk";
	$recipient = "geanyb2713@gmail.com";
	$email_content = $message;

	// Configure mail client
	$mail = new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host = "server242.web-hosting.com";
	$mail->SMTPAuth = true;
    $mail->Username = "rainchxq";
    $mail->Password = "qWCytTYUvGa7";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
	$mail->setFrom($admin, "rainmakersents webmail");
    $mail->addAddress($recipient, "Admin");
    $mail->addReplyTo($sender, $name);
	$mail->Subject = $subject;
    $mail->Body    = $email_content;

	// Send the email
	try
	{
	    $mail->send();
        http_response_code(200);
        //echo "Thank You! Your message has been sent.";
    }
	catch(Exception $e)
	{
        http_response_code(500);
        echo "\nOops! Something went wrong and we couldn't send your message. \nError: " .$mail->ErrorInfo;
    }
}
else
{
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

function validateInput($pattern, $input)
{
    if(preg_match($pattern, trim($input)) < 1)
	{
	    http_response_code(500);
		exit;
	}
	return $input;
}
exit;

?>