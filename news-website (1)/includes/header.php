<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <title>News Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
    <a href="index.php">News</a> |
    <?php if (!isset($_SESSION['user'])): ?>
        <a href="login.php">Login</a> |
        <a href="register.php">Register</a>
    <?php else: ?>
        <a href="profile.php">Profile (<?= $_SESSION['user']['email'] ?>)</a> |
        <a href="logout.php">Logout</a>
    <?php endif; ?>
</header>
<hr>