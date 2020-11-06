let form = document.getElementsByTagName('form')
console.log(form.outerHTML)

let second_input = document.querySelector('form :nth-child(2) > input')
console.log(second_input.outerHTML)

let form_inputs = document.querySelectorAll('form input')
for (const input of form_inputs)
    console.log(input.outerHTML)

let firstForm = form[0]
let products = document.getElementById('products')
firstForm.addEventListener('submit', function(event) {
    event.preventDefault()

    let description = event.target[0].value
    let quantity = event.target[1].value

    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')

    let quantInput = document.createElement('input')
    quantInput.setAttribute('type', 'number')
    quantInput.setAttribute('value', quantity)
    quantInput.addEventListener('change', function(e){
        e.preventDefault()
        quantInput.setAttribute('value', e.target.value)
        updateTotal()
    })

    let removeButton = document.createElement('input')
    removeButton.setAttribute('type', 'button')
    removeButton.setAttribute('value', 'Remove')
    removeButton.addEventListener('click', function(e){
        e.preventDefault()
        tr.remove()
        updateTotal()
    })

    td1.innerHTML = description
    td2.append(quantInput)
    td3.append(removeButton)

    tr.append(td1)
    tr.append(td2)
    tr.append(td3)

    products.append(tr)
    updateTotal()
})

function updateTotal() {
    let total = 0
    let products = document.querySelectorAll('#products tr')

    for (const product of products){
        let input = product.children[1]
        if (input.tagName == 'TD'){
            total += parseInt(input.children[0].getAttribute('value'))
        }
    }

    let footer = document.getElementById('total')
    footer.innerHTML = total
}

