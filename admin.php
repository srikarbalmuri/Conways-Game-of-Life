<?php
include('session.php');
            if (isset($_GET['edit'])) {
                $id = $_GET['edit'];
                $update = true;
                $record = mysqli_query($db, "SELECT * FROM account WHERE id=$id");
                if (count($record) == 1 ) {
                    $n = mysqli_fetch_array($record);
                    $fullName = $n['fullName'];
                    $email = $n['email'];
                    $password = $n['password'];
           }
           }
           if (isset($_GET['scores'])) {
            $id = $_GET['scores'];
            $results = mysqli_query($db, "SELECT * FROM account where id=$id");
            if (count($results) == 1 ) {
                $row = mysqli_fetch_array($results);
                $fullName1 = $row['fullName'];
                $generation = $row['generation'];
                $population = $row['population'];
                $d_t = $row['d_t'];
            }
                

       } ?>

    <!DOCTYPE html>
   <html>
   <head>
   <title>Admin Page</title>
   <link rel="stylesheet" type="text/css" href="adminstyle.css">
   </head>
   <body>
       <?php if (isset($_SESSION['message'])): ?>
   <div class="msg">
       <?php 
           echo $_SESSION['message']; 
           unset($_SESSION['message']);
       ?>
   </div>
   <?php endif ?>
   <?php $results = mysqli_query($db, "SELECT * FROM account"); ?>
   <table>
       <thead>
           <tr>
               <th> Full Name</th>
               <th>Email</th>
               <th colspan="3">Action</th>
           </tr>
       </thead>
       <?php while ($row = mysqli_fetch_array($results)) { ?>
           <tr>
               <td><?php echo $row['fullName']; ?></td>
               <td><?php echo $row['email']; ?></td>

               <td>
                   <a href="admin.php?edit=<?php echo $row['id']; ?>" class="edit_btn" >Edit</a>
               </td>
               <td>
                   <a href="session.php?del=<?php echo $row['id']; ?>" class="del_btn">Delete</a>
               </td>
               <td>
                   <a href="admin.php?scores=<?php echo $row['id']; ?>" class="score_btn">View Scores</a>
               </td>
           </tr>
       <?php } ?>
   </table>
   <form method="post" action="session.php" >
       <input type="hidden" name="id" value="<?php echo $id; ?>">
       <div class="input-group">
           <label> Full Name</label>
           <input type="text" name="fullName" value="<?php echo $fullName; ?>" required>
       </div>
       <div class="input-group">
           <label>email</label>
           <input type="text" name="email" value="<?php echo $email; ?>" required>
       </div>
       <div class="input-group">
           <label>password</label>
           <input type="text" name="password" disabled value="<?php echo $password; ?>" required>
       </div>
       <div class="input-group">
       <?php if ($update == true): ?>
           <button class="btn" type="submit" name="update" style="background: #556B2F;" >update</button>
           <?php else: ?>
               <button class="btn" type="submit" name="save" >Save</button>
               <?php endif ?>
       </div>
   </form>
  
   <table>
       <thead>
           <tr>
               <th> Full Name</th>
               <th>Generation</th>
               <th>Population</th>
               <th>Last Login</th>
               
           </tr>
       </thead>
           <tr>
               <td><?php echo $fullName1; ?></td>
               <td><?php echo $generation; ?></td>
               <td><?php echo $population; ?></td>
               <td><?php echo $d_t; ?></td>
       </tr>
   </table>
</body>
</html> 
