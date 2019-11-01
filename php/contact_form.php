<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $form_content = "From: $name Message: $message";
  $recipient = 'rese_m@web.de';
  $mail_subject = 'Contact form';
  $mail_header = "From: $email":

  @mail($recipient, $mail_subject, $form_content, $mail_header) or die("Sorry, something went wrong and your mail could not be send");

  echo "Thank you, I have received your email"."<a href='#contact-section'";
?>
