<html>
  <head>
    <title>Recomendacion de lugares en PHP</title>
  </head>
  <body>

<?php

$weather = array("Bogotá" => "Frio", 
                "Monteria" => "Cálido", 
                "Medellin" => "Templado");

$location = array("Guajira" => "Norte", 
                  "Leticia"=>"Sur", 
                  "SAntander"=>"Este", 
                  "Antioquia"=>"Oeste");

$tourism = array("Santa Marta"=>"Mar", 
                "Villavicencio"=>"Llano",
                "Rioacha"=>"Desierto", 
                "Quindio"=>"Valle" );

$busqueda = readline("Seleccione la opción de su interes: 
                        1. `Clima` 2. `Ubicación` 3. `Turismo`: ");

switch ($busqueda){
  case "1":
    $clima = readline("Seleccione el tipo de clima qué desea: 
                        1. `Frio` 2. `Cálido` 3. `Templado`: ");
    switch ($clima){
      case "Frio":
        $recomen = array_search($clima, $weather);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      case "Cálido":
        $recomen = array_search($clima, $weather);
        echo "El lugar recomendado es: ", "<p>", $recomen;   
      break;
      case "Templado":
        $recomen = array_search($clima, $weather);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      default:
        echo "No se encontraron recomendaciones que se ajusten a ti";
      }
  break;
  
  case "2":
    $ubica = readline("Seleccione la ubicación de su interes :
                        Norte - Sur - Este - Oeste ");
    switch($ubica){
      case "Norte":
        $recomen = array_search($ubica, $location);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      case "Sur":
        $recomen = array_search($ubica, $location);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      case "Este":
        $recomen = array_search($ubica, $location);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      case "Oeste":
        $recomen = array_search($ubica, $location);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      default:
        echo "No se encontraron recomendaciones que se ajusten a ti";
    }
  break;
  case "3":
    $turism = readline("Seleccione lugar turístico de interes :
                        Mar - Llano - Desierto - Valle ");
    switch($turism){
      case "Mar":
        $recomen = array_search($turism, $tourism);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      case "Llano":
        $recomen = array_search($turism, $tourism);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      case "Desierto":
        $recomen = array_search($turism, $tourism);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      case "Valle":
        $recomen = array_search($turism, $tourism);
        echo "El lugar recomendado es: ", "<p>", $recomen;
      break;
      default:
        echo "No se encontraron recomendaciones que se ajusten a ti";
    }
  break;
  default:
    echo "No se encontraron recomendaciones que se ajusten a ti";

}
?>

/* 1. Aquí definimos los array asociativos
$clima = array("frio" =>"Bogotá", 
               "caliente" => "Montería", 
               "templado" => "Medellín");

$ubicacion = array("norte" => "Guajira",
                   "sur" => "Leticia",
                   "este" => "Santander",
                   "oeste" => "Antioquia");

$turismo = array("mar" => "Santa Marta",
                 "llano" => "Villavicencio", 
                 "desierto" => "Riohacha", 
                 "valle" => "Quindio");

// 2. Pedimos el interes del usuario
$interes = readline("¿Para su viaje esta interesado en el clima, la ubicacion o turismo?: ");

// 3. A partir del interes expresado por teclado hacemos un switch para abarcar todos los casos
switch ($interes){
  // 3.1. Si el interes es "clima" le pedimos que clima desea por teclado
  case $interes == "clima":
    $recomendacionClima = readline("¿El clima que le interesa es frio, caliente o templado?: ");
  // 3.1.1 Hacemos uso de if / else if (Por que si, pudo ser un nuevo switch) para diferenciar de mejor manera cada subcaso y la recomendacion se da por pantalla
    if ($recomendacionClima == "frio"){
      echo "Te recomendamos ir a ";echo $clima["frio"];
    }else if($recomendacionClima == "caliente"){
      echo "Te recomendamos ir a ";echo $clima["caliente"];
    }else if($recomendacionClima == "templado"){
      echo "Te recomendamos ir a ";echo $clima["templado"];
    }
    // 3.1.2. Este else es en el caso de que el usuario tecle casos que no esten cubiertos
    else{
      echo "Lo que busca no lo tenemos en nuestras recomendaciones, lo sentimos";
    }
    break;
  // Y así con los demás casos
  case $interes == "ubicacion":
    $recomendacionUbicacion = readline("¿La ubicacion que desea es al norte, sur, este u oeste?: ");
    if ($recomendacionUbicacion == "norte"){
      echo "Te recomendamos ir a ";echo $ubicacion["norte"];
    }else if($recomendacionUbicacion == "sur"){
      echo "Te recomendamos ir a ";echo $ubicacion["sur"];
    }else if($recomendacionUbicacion == "este"){
      echo "Te recomendamos ir a ";echo $ubicacion["este"];
    }else if($recomendacionUbicacion == "oeste"){
      echo "Te recomendamos ir a ";echo $ubicacion["oeste"];
    }else{
      echo "Lo que busca no lo tenemos en nuestras recomendaciones, lo sentimos";
    }
    break;

  case $interes == "turismo":
    $recomendacionUbicacion = readline("¿El tipo de turismo que busca es mar, llano, desierto o valle?: ");
    if ($recomendacionUbicacion == "mar"){
      echo "Te recomendamos ir a ";echo $turismo["mar"];
    }else if($recomendacionUbicacion == "llano"){
      echo "Te recomendamos ir a ";echo $turismo["llano"];
    }else if($recomendacionUbicacion == "desierto"){
      echo "Te recomendamos ir a ";echo $turismo["desierto"];
    }else if($recomendacionUbicacion == "valle"){
      echo "Te recomendamos ir a ";echo $turismo["valle"];
    }else{
      echo "Lo que busca no lo tenemos en nuestras recomendaciones, lo sentimos";
    }
    break;
  default:
    echo "Lo que busca no lo tenemos en nuestras recomendaciones, lo sentimos";
}
// 4. ¡¡Y listo!!
?>
*/
    </form>
    <script src="https://replit.com/public/js/replit-badge.js" theme="dark" defer></script> 
  </body>
</html>