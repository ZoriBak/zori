<?php include 'includes/header.php'; ?>
<h2>User Profile</h2>
<?php
if (!isset($_SESSION['user'])) {
    echo "You must be logged in.";
    exit;
}
echo "<p>Email: " . $_SESSION['user']['email'] . "</p>";
?>
<?php include 'includes/footer.php'; ?>