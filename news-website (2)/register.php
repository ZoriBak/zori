<?php include 'config/db.php'; ?>
<?php include 'includes/header.php'; ?>

<h2>Register</h2>
<form method="POST">
    Email: <input type="email" name="email" required><br><br>
    Password: <input type="password" name="password" required><br><br>
    <button type="submit">Register</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    try {
        $stmt->execute([$email, $password]);
        $_SESSION['user'] = ['email' => $email];
        header("Location: profile.php");
    } catch (PDOException $e) {
        echo "Registration failed: " . $e->getMessage();
    }
}
?>

<?php include 'includes/footer.php'; ?>