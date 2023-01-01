<html>
  <head>
    <title>Calculadora en PHP</title>
  </head>
  <body>
    <?php echo '<p>Bienvenido a la nueva calculadora que estara disponible para ti los 365 dias</p>'; ?> 
    
    <form action="calculadora.php" method="get">
    <p>Selecciona la operaci&oacute;n a realizar</p>

    <input type="radio" name="operacion" value="suma"><label for="suma">suma</label>
    <input type="radio" name="operacion" value="resta"><label for="resta">resta</label>
    <input type="radio" name="operacion" value="multiplicacion"><label for="multiplicacion">multiplicacion</label>
    <input type="radio" name="operacion" value="division"><label for="division">division</label>

    

    </form>

    <script src="https://replit.com/public/js/replit-badge.js" theme="dark" defer></script> 
  </body>
</html>
