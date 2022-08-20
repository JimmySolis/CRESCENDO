<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crescendo | Signup</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<!---styling-->

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
  height:70vh;
    margin:10px auto;
    background-color:#fff;
    border:2px solid#e6e6e6;
    padding:40px 50px;
    background: rgba(255, 255, 255, 0.733);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    text-align: center;
    margin-top: 100px;
}

.header{
    border: transparent;
    margin-bottom: 5px;
}

.well{
    background-color: #6ed47f;
}

#signup{
width:60%;
border:none;
border-radius: 30px;
background-color: #6ed47f;
}

</style>

<body>
   <!---navbar
   <nav  class="navbar navbar-expand-lg ">
    <a style= "color: white;" class="navbar-brand" href="#">Crescendo</a>
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
  <div class="row">
    <div class="col-sm-12">
        <div class="main-content">
            <div class="header">
                <br> <h3 style="text-align:center;"><strong>Join Crescendo</strong></h3><br><br>
            </div>
            <!----start of signup form-->
            <div class="l-part">
            <form action="" method="post">
                <!----first name div-->
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                    <input type="text" class="form-control" placeholder="First Name" name="first_name" required="required">
                </div><br>

                <!----last name div-->
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                    <input type="text" class="form-control" placeholder="Last Name" name="last_name" required="required">
                </div><br>

                <!----password div-->
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input id="password" type="password" class="form-control" placeholder="Password" name="u_pass" required="required">
                </div><br>

                <!----email div-->
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input id="email" type="email" class="form-control" placeholder="Email" name="u_email" required="required">
                </div><br>

                <!----country select-->
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-down"></i></span>
                    <select class="form-control" name="u_country" required="required">
                    <option disabled>Select your Country</option>
                        <option>United States of America</option>
                        <option>Canada</option>
                        <option>India</option>
                        <option>Japan</option>
                        <option>UK</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                </div><br>
                <!----gender-->
                <span class="input-group-addon"><i class="glyphicon glyphicon-chevron-down"></i></span>
                <select class="form-control input-md" name="u_gender" required="required">
                <option disabled>Gender?</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                </select>
            </div><br>
            <!----calendar div-->
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                <input type="date" class="form-control input-md" placeholder="Email" name="u_birthday" required="required">
            </div><br>
            <a style="text-decoration: none; float:right; color: blue;"data-toggle="tooltip" title="signin.php" href="signin.php"> Already have an account?</a><br><br>

            <center><button id="signup" class="btn btn-info btn-lg" name="sign_up">Signup</button></center>
            <?php include ("insert_user.php"); ?> <!---uses information from the php and pulls it in--->
            </form>

        </div>
        </div>
    </div>
  </div>
</body>
</html>