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
	$name = $_POST["Name"];
	$number = $_POST["Number"];
	$sender = $_POST["Email"];
	$subject = $_POST["Subject"];
	$email_content = $_POST["Message"];

	$admin = "contact@rainmakersents.co.uk";
	$recipient = "geanyb2713@gmail.com";

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
exit;

?>