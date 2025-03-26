<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $service = $_POST['Service'];
    $date = $_POST['Date'];
    $guests = $_POST['Guests'];
    $message = $_POST['Message'];

    $to = "razishah918@gmail.com";
    $subject = "New Booking Request from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nEvent Date: $date\nGuests: $guests\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Booking submitted successfully! We will contact you soon.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to submit booking. Please try again.'); window.history.back();</script>";
    }
} else {
    http_response_code(405); // Explicitly set 405 if method isn’t POST
    echo "Method Not Allowed";
}
?>