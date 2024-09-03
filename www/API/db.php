<?php

require '../vendor/autoload.php'; // Composer 오토로더 포함

use Dotenv\Dotenv;

// .env 파일의 경로를 지정하여 Dotenv 객체 생성
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

?>