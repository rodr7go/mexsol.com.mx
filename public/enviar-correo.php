<?php
// Destinatario
$to  = 'rodrigo@controlmas.mx';

// asunto
$subject = 'Mexsol web';

// mensaje
$message = '
<html>
<head>
  <title>Correo desde Mexsol Web</title>
  <meta charset="utf-8" />
</head>
<body>
	<h1>Mexsol Energía Solar - Correo desde web</h1>
	<p>
		Nombre: <strong> '. $_POST['full_name'] .' </strong> 
	</p>

	<p>
		E-mail: <strong> '. $_POST['email'] .' </strong> 
	</p>

	<p>
		Telefono: <strong> '. $_POST['phone_number'] .' </strong> 
	</p>

	<p>
		Mensaje: <strong> '. $_POST['message'] .' </strong> 
	</p>


</body>
</html>
';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: <'. $_POST['email'] .'>' . "\r\n";

// Cabeceras adicionales
// $cabeceras .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
// $cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
// $cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Enviarlo
$send = mail($to, $subject, $message, $headers);
?>

<script type="text/javascript">
	alert('hola');
	// var enviado = <?= $send ?>;
	
	// if(enviado == true)
	// {
	// 	location.href='/gracias-por-confiar.php';
	// }
	// else
	// {
	// 	alert("El mensaje no se ha podido enviar por favor contactanos por Telefono. Gracias");
	// 	setTimeout("location.href='/'", 0);
	// }

</script>