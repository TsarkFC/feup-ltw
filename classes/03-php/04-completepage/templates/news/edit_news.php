<form action="action_edit_news.php" method="post">
	<input type="hidden" name ="id" value="<?=$_GET['id']?>">
	<label>Title 
		<input type="text" name="title" value="<?=$article['title']?>">
	</label>
	<label>Introduction
		<textarea name="introduction"> <?=$article['introduction']?> </textarea>
	</label>
	<label>Fulltext
		<textarea name="fulltext"> <?=$article['fulltext']?> </textarea>            
	</label>
	<input type="submit" value="Submit">
</form>