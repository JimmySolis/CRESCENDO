<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>Crescendo</title>
</head>
<!----css for signup/login--->
<style>

body,html{
    overflow-x: hidden;
    background: rgb(63,251,151);
  background: radial-gradient(circle, rgba(63,251,151,1) 0%, rgba(43,75,58,1) 44%, rgba(0,0,0,1) 100%);
  height: 100%;
  background-position: center;
}
#centered1{
    position:absolute;
    font-size:10vw;
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
}

#centered2{
    position:absolute;
    font-size:10vw;
    top: 50%;
    left: 32%;
    transform: translate(-50%, -50%);
}

#centered3{
    position:absolute;
    font-size:10px;
    top: 70%;
    left: 25%;
    transform: translate(-50%, -50%);
}

#signup{
    width: 60%;
    border-radius: 30px;
}

#login{
    width: 60%;
    border-radius: 30px;
    background: #fff;
    border: 1px solid #1da1f2;
    color: aquamarine;
    
}

#login:hover{
    width: 60%;
    border-radius: 30px;
    background: #fff;
    border: 1px solid #0d4669;
    color: rgb(44, 143, 110);
}

.well{
    background-color: #6ed47f;
}
</style>

<body>
    <!---navbar
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Crescendo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>-->

    <!------>
    <div class="row">
        <div class="col-sm-6" style="left:0.5%;">
       

        <div id="centered1" class="centered"><h3 style="color: rgb(206, 206, 206);"><span class=></span>&nbsp&nbsp<strong> </strong></h3></div>
        <div id="centered2" class="centered"><h3 style="color: rgb(206, 206, 206);"><span class=></span>&nbsp&nbsp<strong></strong></h3></div>
        <div id="centered3" class="centered"><h3 style="color: rgb(206, 206, 206);"><span class=></span>&nbsp&nbsp<strong></strong></h3></div>
        </div>

        <div class="col-sm-6" style="position:absolute;right: 47%; color: white;">
            <br><br><br><br><br><br><br><br><br><br><br><br>
        <h2><strong>See whats happening on <br> right now</strong></h2><br><br>
        <h4><strong>join Crescendo today</strong></h4>

<!----form for login and signup-->
        <form method="post" action="">
            <p id="fill">Please fill in this form to create an account</p>
            <button id="signup" class="btn btn-info btn-large" name="signup">Sign up</button><br><br>
            <?php
            if(isset($_POST['signup'])){
                echo "<script>window.open('signup.php','_self')</script>";
            }
            ?>
            <button id="login" class="btn btn-info btn-large" name="login">Login</button><br><br>
            <?php
            if(isset($_POST['login'])){
                echo "<script>window.open('signin.php','_self')</script>";
            }
            ?>
            <!--- 
                <div class="container">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required>
            
            <label for="Password"><b>Password</b></label>
            <input type="text" placeholder="Password" name="psw" id="psw" required>
            
            <hr> 
            <p>By creating an account agree to our <a href='#'>Terms & Privacy</a>.</p>
            
            <button type="button" id="submitData" name="submitData" class="registerbtn">Register</button>
            </div>
            
            <div class="container signin">
              <p>Already have an account? <a href='./signin.html'>Sign in</a>.</p>
            </div>--->
              </form>
        </div>
    </div>

</body>
</html>