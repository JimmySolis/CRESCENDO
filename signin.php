<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crescendo | Login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<style>
    body,html {
      overflow-x: hidden;
      background: rgb(63,251,151);
      background-image: linear-gradient(to top, #244435, #26593f, #296e47, #30834d, #3a9951, #43a356, #4dac5a, #56b65f, #5cb567, #63b56f, #69b477, #70b37e);
      height: 100%;
      background-position: center;
    }
    
    .main-content{
        width:30vw;
        height:40vh;
        margin:10px auto;
        border:2px solid#e6e6e6;
        padding:40px 50px;
        background: rgba(255, 255, 255, 0.733);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        text-align: center;
        margin-top: 200px;
    }
    
    .header{
        border: transparent;
        margin-bottom: 5px;
    }
    
    .well{
        background-color: #6ed47f;
    }
    
    #signin{
    width:60%;
    border-radius: 30px;
    background: #fff;
    border:none;
    color: rgb(44, 143, 110);
    }

    .overlap-text{
      position: relative;
    }
    
    .overlap-text a{
    position: absolute;
    top:8px;
    right: 10px;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: -1px;
    }
    </style>
<body>
    
 <!---navbar
 <nav  class="navbar navbar-expand-lg ">
    <a style= "color: grey;" class="navbar-brand" href="#">Crescendo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"  id="navbarNav">
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
  </nav>--><br><br>

<!----header-->
  <div  class="row">
    <divclass="col-sm-12">
        <div  class="main-content">
                <div class="header">
                    <br> <h3 style="text-align:center;"><strong>Log in to Crescendo</strong></h3><br><br>
                </div>

                <div class="l-part">
                    <form action="" method="post">
        
                        <!----email div-->
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input id="email" type="email" class="form-control input-md" placeholder="Email" name="email" required="required"><br>
        <div class="overlap-text">
        <input type="password" name="pass" placeholder="Password" required="required" class="form-control input-md"><br>
        <a style="text-decoration:none; float: right; color: blue;" href="forgot_password.php" data-toggle="tooltip" title="Reset Password">Forgot?</a>
        </div>
    </div><br>
    <a style="text-decoration: none; float:right; color: blue;"data-toggle="tooltip" title="Create Account!" href="signup.php"> Don't have an account?</a><br><br>
    <center><button id="signin" class="btn btn-info btn-lg" name="login">Login</button></center>

    <?php include ("login.php"); ?> <!---uses information from the php and pulls it in--->
                    </form>
                </div>
            </div>
</body>
</html>