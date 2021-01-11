<?php
	session_start();

	if (empty($_SESSION) || !array_key_exists('username', $_SESSION)){
			header('Location: index.php');
	}

	include_once('database/connection.php');
	include_once('database/news.php');
	$id = $_GET['id'];
	deleteArticle($id);
	header("Location: list_news.php");
?>