<?php
$host = 'localhost';
$dbname = 'login_db';
$username = 'root'; // padrão do XAMPP
$password = '';     // padrão do XAMPP


$conexao = mysqli_connect("localhost", "root","","login_db");

if(!$conexao){
    die("Erro de conexão com o banco de dados");
}

$username = $_POST['username'];
$senha = $_POST['senha'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

$sql = "INSERT INTO users (username, senha, email, telefone)
            VALUES ('$username','$senha', '$email', '$telefone')";

$resultado = mysqli_query($conexao,$sql);

mysqli_close($conexao);


try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}
?>
