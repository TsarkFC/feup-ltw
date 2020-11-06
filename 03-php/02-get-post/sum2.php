<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>sum2.php</title>
</head>
<body> 
    <p>
    <?php
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        echo $num1 + $num2;
    ?>
    </p>
    <a href="form2.html">form2</a>
</body>
</html>