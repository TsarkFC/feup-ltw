let commentForum = document.querySelector('#comments form')

commentForum.addEventListener('submit', function(event) {
    submitComment(event)}
);

function submitComment(event) {
    event.preventDefault()

    let newsitem_id = event.target.querySelector('input[name="id"]').value
    let comment_id = document.querySelector('#comments article:last-of-type').attributes['id'].value
    let username = event.target.querySelector('input[name="username"]').value
    let comment_text = event.target.querySelector('textarea').value

    console.log(newsitem_id)
    console.log(comment_id)
    console.log(username)
    console.log(comment_text)

    let request = new XMLHttpRequest()
    request.addEventListener('load', receiveComments)

    request.open('post', 'api_add_comment.php', true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send(encodeForAjax({newsitem_id: newsitem_id, comment_id: comment_id, username: username, comment_text: comment_text}))
}

function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function receiveComments() {
    const comments_after = JSON.parse(this.responseText)

    for (const comment of comments_after) {

        const article = document.createElement('article')
        article.classList.add('comment')
        article.setAttribute('id', comment.id)

        const user = document.createElement('span')
        user.classList.add('user')
        user.innerHTML = comment.username
        article.appendChild(user)

        const date = document.createElement('span')
        date.classList.add('date')
        date.innerHTML = comment.published
        article.appendChild(date)

        const text = document.createElement('p')
        text.innerHTML = comment.text
        article.appendChild(text)

        const comments = document.querySelector('#comments')
        comments.insertBefore(article, document.querySelector('#comments form'))

        const comments_header = document.querySelector('#comments > h1')
        comments_header.innerHTML = comments.childNodes.length - 2 + ' comments'
    }
}