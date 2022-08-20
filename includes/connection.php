<?php 
    //$con = mysqli_connect("localhost", "root", "","social_crescendo"); 

    //mysql://b6784176c81cb4:5b963e1c@us-cdbr-east-06.cleardb.net/heroku_9f6937316412c85?reconnect=true

    $servername = "us-cdbr-east-06.cleardb.net";
    $username = "b6784176c81cb4";
    $password = "5b963e1c";
    $db = "heroku_9f6937316412c85";
    
    // Create connection
    $con = mysqli_connect($servername, $username, $password,$db);
    //
    //// Check connection
    if (!$con) {
      die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";

    ?>




