<?php
  // Make connection with database
  include('config.php');

session_start();// Starting Session
$db = mysqli_connect('localhost', 'sbalmuri1', 'sbalmuri1', 'sbalmuri1');
$fullName = "";
$email = "";
$id = 0;
$update = false;

if (isset($_SESSION['login_id'])) {
      $user_id = $_SESSION['login_id'];

$Squery = "SELECT fullName from account where id = ? LIMIT 1";

// To protect MySQL injection for Security purpose
$stmt = $conn->prepare($Squery);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$stmt->bind_result($fullName);
$stmt->store_result();

if($stmt->fetch()) //fetching the contents of the row
        {
        	$session_fullName = $fullName;
          $stmt->close();
          $conn->close();
        }      
}
if (isset($_POST['save'])) {
  $fullName = $_POST['fullName'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $hash = password_hash($password, PASSWORD_DEFAULT);

  mysqli_query($db, "INSERT INTO account (fullName,email,password) VALUES ('$fullName', '$email','$hash')"); 
  $_SESSION['message'] = "Changes saved successfully"; 
  header('location: admin.php');
}

if (isset($_POST['update'])) {
	$id = $_POST['id'];
	$fullName = $_POST['fullName'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  

	mysqli_query($db, "UPDATE account SET fullName='$fullName', email='$email' WHERE id=$id");
	$_SESSION['message'] = "Record updated!"; 
	header('location: admin.php');
}
if (isset($_GET['del'])) {
	$id = $_GET['del'];
	mysqli_query($db, "DELETE FROM account WHERE id=$id");
	$_SESSION['message'] = "Record deleted!"; 
	header('location: admin.php');
}


