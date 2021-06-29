<?php

$servername='localhost';
$user='root';
$password='';
$db='contactusform';

$conn=mysqli_connect($servername,$user,$password,$db);

if($conn){
	?>

<script type="text/javascript">
	// alert("connection successful");
</script>
	<?php
}else{
	?>

	<script type="text/javascript">
	alert("connection unsuccessful");
</script>
	<?php
}

?>