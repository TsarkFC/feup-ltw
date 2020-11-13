<?php
  session_start();
  include_once('database/connection.php');
  include_once('database/news.php');

  include_once('templates/common/header.php');
  include_once('templates/authentication/login.php');
  include_once('templates/common/footer.php');
?>