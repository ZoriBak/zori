<?php include '../config/db.php'; ?>
<?php include '../includes/header.php'; ?>

<?php
if (!isset($_SESSION['user']) || $_SESSION['user']['is_admin'] != 1) {
    echo "Access denied.";
    exit;
}
?>

<h1>Admin Dashboard</h1>
<ul>
    <li><a href="articles.php">Manage Articles</a></li>
    <li><a href="users.php">Manage Users</a></li>
    <li><a href="admins.php">Admin List</a></li>
</ul>

<?php include '../includes/footer.php'; ?>