<?php 
if($_POST["age"]>18){
 echo "<h1>✅ Welcome ".$_POST["name"]." to this slide.</h1>";   
}
else{
    echo "<h1>❌ Hello ".$_POST["name"].", You are not authorized to visit this site” </h1>";
}
?>