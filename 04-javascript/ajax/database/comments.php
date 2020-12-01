<?php
  function getCommentsByNewId($id) {
    global $db;
    $stmt = $db->prepare('SELECT * FROM comments JOIN users USING (username) WHERE news_id = ?');
    $stmt->execute(array($id));
    return $stmt->fetchAll();
  }

  function addComment($newsitem_id, $comment_id, $username, $comment_text) {
    global $db;
    $stmt = $db->prepare('INSERT INTO comments VALUES(NULL, ?, ?, ?, ?)');
    $stmt->execute(array($newsitem_id, $comment_id, $username, $comment_text));
  }

  function fecthAfterComments($newsitem_id, $comment_id) {
    global $db;
    $stmt = $db->prepare('SELECT * FROM comments WHERE news_id = ? AND id > ?');
    $stmt->execute(array($newsitem_id, $comment_id));
    return $stmt->fetchAll();
  }
?>
