
<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $senha = password_hash($_POST['senha'], algo: PASSWORD_BCRYPT);
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

    try {
        $stmt = $conn->prepare("INSERT INTO users (username, senha, email, telefone) VALUES (:username, :senha, :email, :telefone)");
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':senha', $senha);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':telfone', $telefone);
        $stmt->execute();
        echo "Usuário cadastrado com sucesso!";
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}
?>