<?php
function userExists($username, $password){
    global $db;
    $passwordSha1 = sha1($password);

	$stmt = $db->prepare('SELECT * FROM users WHERE username = ? AND password = ?');
    $stmt->execute(array($username, $passwordSha1));
    $userDetails = $stmt->fetchAll();

    return (count($userDetails) == 1);
}
?>