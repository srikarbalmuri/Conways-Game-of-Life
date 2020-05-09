<?php
$servername   = "localhost";
$database = "sbalmuri1";
$dbaseusername = "";
$dbasepassword = "";
if (isset($_POST['signIn'])) {   
    if (empty($_POST['username']) || empty($_POST['password'])) {
      echo "<h3>User Name & Password should not be empty</h3>";
    }
    else
    {
        $dbaseusername = $_POST['username'];
        $dbasepassword = $_POST['password'];
        $conn1 = new mysqli($servername, $dbaseusername, $dbasepassword, $database);
        
    }
// Check connection
if ($conn1->connect_error) {
   echo "<h3> You are not an admin!!!</h3>";
}
  else{
      header('Location:admin.php');
}}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Admin Login</title>
  <link rel="stylesheet" href="auth.css">
</head>
<body>
 <div class="rlform">
  <div class="rlform rlform-wrapper">
   <div class="rlform-box">
    <div class="rlform-box-inner">
   <form method="post">
    <p>Sign in</p>

    <div class="rlform-group">
     <label>User Name</label>
     <input type="name" name="username" class="rlform-input" required>
    </div>

    <div class="rlform-group password-group">
     <label>Password</label>
     <input type="password" name="password" class="rlform-input" required>
    </div>

    <button type="submit" class="rlform-btn" name="signIn">Sign In
    </button>
    </form>
  </div>
 </div>
</div>
</div>
</body>
</html>


