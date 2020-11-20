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
    request.addEventListener('load', receiveComment)

    request.open('post', 'api_add_comment.php', true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send(encodeForAjax({id: newsitem_id, comment_id: comment_id, username: username, text: comment_text}))
}

function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function receiveComment() {

}