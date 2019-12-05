<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $account = $_POST['account'];
    $message = $_POST['message'];
    $to = 'info@cahircu.ie'; 
    $subject = 'Credit Union Online Enquiry';

    $body = "\n From: $name\n Email: $email\n Phone: $phone\n Account No.: $account\n \n Enquiry:\n $message";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $email)) { 
        echo '<center><img src="img/formLogo.png" border="0" /></center><br /><h1 style="font-family: arial; text-align: center; color: #CCC; margin-top: 10%;">Thank you for your email! We\'ll be in touch asap. </h1><br /> <center><a style="text-align: center; color: #000;" href="index.html">BACK TO THE CREDIT UNION SITE</a></center>';
    } else { 
        echo '<p style="font-family: arial; text-align: center; color: #CCC;">Oops! An error occurred. Pesky gremlins! Try sending your message again.</p> <br /> <center><a style="text-align: center; color: #000;" href="index.html">BACK TO THE CREDIT UNION SITE</a></center>'; 
    }
}
?>