<?php
	session_start();

	if (empty($_SESSION) || !array_key_exists('username', $_SESSION)){
			header('Location: index.php');
	}

	include_once('database/connection.php');
	include_once('database/news.php');
	addArticle($_POST['title'], $_POST['tags'], $_SESSION['username'], $_POST['introduction'], $_POST['fulltext']);
	header("Location: list_news.php");
?>