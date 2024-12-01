<?php
include 'db.php';
session_start();
// Credenciais de exemplo (não use em produção sem um banco de dados)
$validUsername = 'usuario';
$validPassword = 'senha123';

// Obtém os dados do formulário
$username = $_POST['username'];
$senha = $_POST['password'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];



// Valida as credenciais
if ($username === $validUsername && $senha === $validPassword) {
    // Login bem-sucedido
    header('Location: index.php'); // Redireciona para uma página protegida
    exit();
} else {
    // Credenciais inválidas
    header('Location: index.html?error=1');
    exit();
}

