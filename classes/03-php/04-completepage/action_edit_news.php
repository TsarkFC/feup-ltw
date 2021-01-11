<?php
	session_start();

	if (empty($_SESSION) || !array_key_exists('username', $_SESSION)){
			header('Location: index.php');
	}

	include_once('database/connection.php');
	include_once('database/news.php');
	$id = $_POST['id'];
	updateArticle($id, $_POST['title'], $_POST['introduction'], $_POST['fulltext']);
	header("Location: news_item.php?id=$id");
?>