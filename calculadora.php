<html>
  <head>
    <title>Calculadora en PHP</title>
  </head>
  <body>
    <?php echo '<p>Bienvenido a la nueva calculadora que estara disponible para ti los 365 dias</p>'; ?> 
    <h1>Calculadora en PHP</h1>
    <h3>Ingrese 2 numeros</h3>
    <form action="calculadora.php" method="get">
        <p>Seleccione la operacion a realizar</p>
            <input type="radio" name="operacion" value="suma"><label for="suma">Suma</label>
            <input type="radio" name="operacion" value="resta"><label for="resta">Resta</label>
            <input type="radio" name="operacion" value="multiplicacion"><label for="multiplicacion">Multiplicacion</label>
            <input type="radio" name="operacion" value="division"><label for="division">Division</label>
        <p>Numero 1: <input type="number" name="num1"></p>
        <p>Numero 2: <input type="number" name="num2"></p>
        <p><input type="submit" value="Enviar"></p>
<?php

$operacion=$_GET['operacion'];
$num1=$_GET['num1'];
$num2=$_GET['num2'];

if ($operacion=="suma"){
  $res=$num1+$num2;
  echo("La suma de los numeros ".$num1. " y ".$num2. " es: ".$res);
}
else if ($operacion=="resta"){
  $res=$num1-$num2;
  echo("La suma de los numeros ".$num1. " y ".$num2. " es: ".$res);
}
else if ($operacion=="multiplicacion"){
  $res=$num1*$num2;
  echo("La suma de los numeros ".$num1. " y ".$num2. " es: ".$res);
}
else if ($operacion=="division"){
  if ($num2>0){
    $res=$num1/$num2;
    echo("La suma de los numeros ".$num1. " y ".$num2. " es: ".$res);
  }
  else {
    echo("no es posible dividir por 0 ");
  }
  
}
else {
  echo("Debe completar el formulario correctamente");
}
?>
    </form>
    <script src="https://replit.com/public/js/replit-badge.js" theme="dark" defer></script> 
  </body>
</html>
