<section id="news">
  <article>
    <header>
      <h1><a href="news_item.php"><?=$article['title']?></a></h1>
    </header>
    <img src="https://picsum.photos/600/300/" alt="">
    <p><?=$article['introduction'] ?></p>
    <p><?=$article['text'] ?></p>
    
    <?php include_once('templates/comments/list_comments.php') ?>

    <footer>
      <span class="author"><?=$article['username']?></span>
      <span class="tags">
        <?php foreach($tags as $tag) {?>
          <a href="list_news.php">#<?=$tag?> </a>
        <?php } ?>
      </span>
      <span class="date"><?=date('Y-m-d', $article['published']);?></span>
			<a class="comments" href="news_item.php?id=<?=$article['id'] ?>#comments"><?=count($comments)?></a>
    </footer>

  </article>
</section>