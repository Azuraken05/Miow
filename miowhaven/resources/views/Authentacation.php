<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>MIOW</title>
  <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
  <link href="CSS\Template.css" rel="stylesheet" type="text/css" /> <!-- TEMPLATE CSS -->
  <link href="CSS\Hamburger.css" rel="stylesheet" type="text/css" /> <!-- NAVIGATION CSS -->

  <link href="CSS\Authentacations.css" rel="stylesheet" type="text/css" /> <!-- MAIN CONTENT CSS-->
</head>

<body>

  <div class="Main">
    <!--START FORMS-->
    <div class="Authentacation-form">
      <img src="Assets\Hamburger\Logo.png">
      <form class="forms-login">
        <label class="Email" for="email">EMAIL</label>
        <input type="text" placeholder="Enter your email address" name="email" required>

        <p>
          <label class="Password" for="password">PASSWORD</label>
              <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
              <i class="bi bi-eye-slash" id="togglePassword"></i>
        </p>
      
        <button class="submit" type="submit"><a href="HomePage.html">Sign In</a></button>
        <div class="form-bottom">  <a  class="link-left" href="SignUp.html">Sign Up</a> <a class="link-right">Forgot Password?</a> </div>
      </form>
        
    </div>
  </div>
  <!--END FORMS-->

  <script src="SCIRPT\Authentacation.js"></script>
  <script src="SCIRPT\Hambruger.js"></script>
</body>

</html>