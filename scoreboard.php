<?php
include('session.php');
?>

<html>
   <head>
   <title>Score Board</title>
   <link rel="stylesheet" type="text/css" href="scoreboard.css">
   </head>
   <body>
<h2>Score Board</h2>
<div class="table-wrapper">
<?php $results = mysqli_query($db, "SELECT * FROM account"); ?>
    <table class="fl-table">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Generation</th>
          <th>Population</th>
          <th>Last Login</th>
        </tr>
</thead>
      <tbody>
      <?php while ($row = mysqli_fetch_array($results)) { ?>
        <tr>
               <td><?php echo $row['fullName']; ?></td>
               <td><?php echo $row['email']; ?></td>
               <td><?php echo $row['generation']; ?></td>
               <td><?php echo $row['population']; ?></td>
               <td><?php echo $row['d_t']; ?></td>

        </tr>
        <?php } ?>
      </tbody>
</table> 
      </div>
      <a href="index.php"><h3>Go Back!</h3></a> 
      </body>
      </html>
      