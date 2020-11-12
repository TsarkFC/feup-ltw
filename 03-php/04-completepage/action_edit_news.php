<?php
include_once('database/connection.php');
include_once('database/news.php');
$id = $_POST['id'];
updateArticle($id, $_POST['title'], $_POST['introduction'], $_POST['fulltext']);
header("Location: news_item.php?id=$id");
?>