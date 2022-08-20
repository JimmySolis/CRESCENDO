<?php
include("includes/connection.php");

if(isset($_POST['sign_up'])){
    $first_name = htmlentities(mysqli_real_escape_string($con, $_POST['first_name']));
    $last_name = htmlentities(mysqli_real_escape_string($con, $_POST['last_name']));
    $pass = htmlentities(mysqli_real_escape_string($con, $_POST['u_pass']));
    $email = htmlentities(mysqli_real_escape_string($con, $_POST['u_email']));
    $country = htmlentities(mysqli_real_escape_string($con, $_POST['u_country']));
    $gender = htmlentities(mysqli_real_escape_string($con, $_POST['u_gender']));
    $birthday = htmlentities(mysqli_real_escape_string($con, $_POST['u_birthday']));
    $status = "verified";
    $posts = "no";
    $newgid = sprintf('%05d', rand(0, 999999)); //creates a number after the 1st and last name between 0 and 999999 (makes a user unique...)

    $username = strtolower($first_name . "_" . $last_name . "_" . $newgid);
    $check_username_query = "select user_name from users where user_email='$email'";
    $run_username = mysqli_query($con,$check_username_query);

    //$check = mysqli_number_rows($run_email);

    if($check == 1){
        echo "<script>alert('Email already exists, please use a different email')</script>";
        echo "<script>window.open('signup.php','_self')</script>";
        exit();
    }

    $rand = rand(1,3); //random number between 1 and 3 

    //for pfp (gives different profile pictures to new users at random)
    if($rand == 1)
    $profile_pic = "noprofile.jpg.png";
    else if($rand == 2)
    $profile_pic = "sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg";
    else if($rand == 3)
    $profile_pic = "generic-profile-icon-6.jpg";

    $insert = "insert into users (f_name, l_name,user_name,describe_user,Relationship,user_pass,user_email,user_country,user_gender,user_birthday,user_image,user_cover,user_reg_date,status,posts,recovery_account)
    
    values('$first_name','$last_name','$username','My default status','...','$pass','$email','$country','$gender','$birthday','$profile_pic','image holder.png',NOW(),'$status', '$posts','YEEHAw')";
    $query = mysqli_query($con, $insert);

    if($query){
        echo "<script>alert('Well done $first_name, you are good to go.')</script>";
        echo "<script>window.open('signin.php','_self')</script>";
    } else {
        echo "<script>alert('Registration failed, please try again.')</script>";
        echo "<script>window.open('signup.php','_self')</script>";
    }

}

?>