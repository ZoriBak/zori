<?php include 'config/db.php'; ?>
<?php include 'includes/header.php'; ?>

<?php
$id = $_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM articles WHERE id = ?");
$stmt->execute([$id]);
$article = $stmt->fetch();

if (!$article) {
    echo "Article not found.";
    exit;
}

echo "<h1>{$article['title']}</h1>";
echo "<p>Date: {$article['created_at']}</p>";
echo "<img src='{$article['image']}' width='400'>";
echo "<p>{$article['content']}</p>";

// Previous/next article
$prev = $pdo->prepare("SELECT id FROM articles WHERE id < ? ORDER BY id DESC LIMIT 1");
$prev->execute([$id]);
$prev_id = $prev->fetchColumn();

$next = $pdo->prepare("SELECT id FROM articles WHERE id > ? ORDER BY id ASC LIMIT 1");
$next->execute([$id]);
$next_id = $next->fetchColumn();

if ($prev_id) echo "<a href='article.php?id=$prev_id'>Previous</a> ";
if ($next_id) echo "<a href='article.php?id=$next_id'>Next</a>";
?>

<?php include 'includes/footer.php'; ?>