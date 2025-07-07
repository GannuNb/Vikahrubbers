<?php
// Headers for CORS and JSON response
header("Access-Control-Allow-Origin: *");  // Adjust origin for security in production
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Enable error reporting (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON input']);
    exit();
}

// Validate required fields
$required = ['name', 'email', 'subject', 'message'];
foreach ($required as $field) {
    if (empty(trim($input[$field] ?? ''))) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => "Field '$field' is required."]);
        exit();
    }
}

// Sanitize inputs safely
function sanitize($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

$name = sanitize($input['name']);
$email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
$phone = sanitize($input['phone'] ?? '');
$subject = sanitize($input['subject']);
$message = sanitize($input['message']);

if (!$email) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
    exit();
}

// Prepare email
$to = "support@lgindustry.in";  // Your recipient
$email_subject = "New Enquiry: $subject";
$email_body = "You have received a new enquiry from your website contact form.\n\n"
    . "Details:\n"
    . "Name: $name\n"
    . "Email: $email\n"
    . "Phone: $phone\n"
    . "Subject: $subject\n"
    . "Message:\n$message\n";

// Headers — use your domain email in From to avoid spoofing
$headers = "From: no-reply@vikahrubbers.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
}
?>
