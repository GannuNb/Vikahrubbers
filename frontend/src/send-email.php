<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

error_reporting(E_ALL);
ini_set('display_errors',1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        "status"=>"error",
        "message"=>"Method not allowed"
    ]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

if(!$input){
    echo json_encode([
        "status"=>"error",
        "message"=>"Invalid JSON input"
    ]);
    exit;
}

function sanitize($data){
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

$name = sanitize($input['name'] ?? '');
$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = sanitize($input['phone'] ?? '');
$subject = sanitize($input['subject'] ?? '');
$message = sanitize($input['message'] ?? '');

if(!$name || !$email || !$subject || !$message){
    echo json_encode([
        "status"=>"error",
        "message"=>"Required fields missing"
    ]);
    exit;
}

try {

    $mail = new PHPMailer(true);

    // SMTP configuration for Hostinger
    $mail->isSMTP();
    $mail->Host = "smtp.hostinger.com";
    $mail->SMTPAuth = true;

    $mail->Username = "support@vikahrubbers.com";   // SMTP email
    $mail->Password = "Vikahrubbers@123";        // replace with real password

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Sender
    $mail->setFrom("support@vikahrubbers.com","Vikah Rubbers Website");

    // Receiver (admin)
    $mail->addAddress("support@vikahrubbers.com");

    // Reply to customer
    $mail->addReplyTo($email,$name);

    $mail->isHTML(false);

    $mail->Subject = "New Enquiry: $subject";

    $mail->Body =
"You have received a new enquiry from vikahrubbers.com

Name: $name
Email: $email
Phone: $phone
Subject: $subject

Message:
$message
";

    $mail->send();

    echo json_encode([
        "status"=>"success",
        "message"=>"Email sent successfully"
    ]);

}
catch (Exception $e) {

    echo json_encode([
        "status"=>"error",
        "message"=>$mail->ErrorInfo
    ]);
}