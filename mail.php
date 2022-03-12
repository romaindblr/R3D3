<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Sur Mesure</title>
</head>
<body>
    
<?php
$retour = mail("romaindv71@gmail.com", "Sur_mesure", $_POST[message], "");
if ($retour){
    echo "<p>email envoyer</p>";
}
?>

</body>
</html>