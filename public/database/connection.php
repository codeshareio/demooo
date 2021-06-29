<?php

include 'dbcon.php';

if (isset($_POST['submit'])) {

 $username =$_POST['name'];
 $email =$_POST['email'];
 $mobile =$_POST['mobile'];
 $symp =$_POST['symptoms']
 $message =$_POST['described'];

 $chk="";

 foreach ($symp as $chk1 ) {
 	$chk .= $chk1. ",";
 }
  $insertquery= "insert into  contactdetails(username,email,mobile,symp,message) values('$username','$email','$mobile','$chk','$message')";
  $query= mysqli_query( $conn,$insertquery);
  if($query){
	?>
<script type="text/javascript">
	// alert("inserted successful");
</script>

	<?php
}else{
	?>

	< <script type="text/javascript">
	alert("no inserted ");
 </script>
	<?php
} 

}

?>