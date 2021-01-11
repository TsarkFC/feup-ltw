const reset = document.getElementsByName("reset")[0];
const text = document.querySelector("input[type=text]");
const ul = document.querySelector("ul");
const send = document.getElementsByName("send")[0];
const game = document.getElementById("game");

//26
for (const li of ul.children) {
    li.addEventListener("click", function () {
        if (li.classList.contains("used"))
            return;
        li.classList.add("used");
        text.value += li.innerHTML;
    });
}

//27
reset.addEventListener("click", function (event) {
    event.preventDefault();
    text.value = "";
    for (const li of ul.children)
        li.classList = li.classList.remove("used");
});

//28
function encodeForAjax(data) {
    return Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

send.addEventListener("click", function (event) {
    event.preventDefault();

    let request = new XMLHttpRequest();
    request.addEventListener("load", function(){
        const res = JSON.parse(this.responseText);
        console.log(res["result"]);
        if (res.result == "wrong") alert("WRONG");
        else if (res.result == "correct") correct(res.word);
    });
    request.open("post", "is_guess_correct.php", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(encodeForAjax({answer: text.value}));
});

function correct(word) {
    text.value = "";
    ul.innerHTML = "";
    for (const letter of word) {
        const li = document.createElement("li");
        li.innerHTML = letter;
        ul.appendChild(li);
    }
}
