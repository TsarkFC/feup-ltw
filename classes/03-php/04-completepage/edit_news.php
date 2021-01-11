<?php
  session_start();

  include_once('database/connection.php');
  include_once('database/news.php');
  include_once('database/comments.php');

  if (!isset($_GET['id']))
    die("No id!");

  $article = getNewsById($_GET['id']);
  $comments = getCommentsByNewId($_GET['id']);
	$tags = explode(',', $article['tags']);

	include_once('templates/common/header.php');
	include_once('templates/news/edit_news.php');
	include_once('templates/common/footer.php');
?>