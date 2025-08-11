<?php include 'config/db.php'; ?>
<?php include 'includes/header.php'; ?>

<h1>News Website</h1>

<form method="GET" action="search.php">
    <input type="text" name="query" placeholder="Search articles">
    <button type="submit">Search</button>
</form>

<?php
$page = $_GET['page'] ?? 1;
$limit = 5;
$offset = ($page - 1) * $limit;

$stmt = $pdo->prepare("SELECT * FROM articles WHERE published = 1 ORDER BY created_at DESC LIMIT $limit OFFSET $offset");
$stmt->execute();
$articles = $stmt->fetchAll();

foreach ($articles as $article) {
    echo "<h2><a href='article.php?id={$article['id']}'>{$article['title']}</a></h2>";
    echo "<p>Published: {$article['created_at']}</p>";
}

echo "<div class='pagination'>";
echo "<a href='?page=".($page+1)."'>Next</a>";
if ($page > 1) echo " | <a href='?page=".($page-1)."'>Previous</a>";
echo "</div>";
?>

<?php include 'includes/footer.php'; ?>