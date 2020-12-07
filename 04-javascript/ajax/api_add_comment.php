<?php

include_once('database/connection.php');
include_once('database/comments.php');

$newsitem_id = $_POST['newsitem_id'];
$comment_id = $_POST['comment_id'];
$username = $_POST['username'];
$comment_text = $_POST['comment_text'];

addComment($newsitem_id, $username, time(), $comment_text);

echo json_encode(fecthAfterComments($newsitem_id, $comment_id));

?>