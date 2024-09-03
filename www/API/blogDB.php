<?php

require './vendor/autoload.php'; // Composer 오토로더 포함

use Dotenv\Dotenv;

// .env 파일의 경로를 지정하여 Dotenv 객체 생성
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$servername = $_ENV['DB_HOST'];
$port = $_ENV['DB_PORT'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['BLOG_DB_DATABASE'];

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("연결 실패: " . $conn->connect_error);
}

?>