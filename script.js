const myForm = document.getElementById('myForm')
const overlay = document.getElementById('overlay')
const icon = document.querySelector('.icon')
let formData;

myForm.addEventListener('submit', function(e) {
    e.preventDefault()

    formData = new FormData(this)
    const nameAndValues = [...formData.entries()]

    let languagesAndCode = nameAndValues.filter((item) => {
        if (item[0] === 'code') {
            return item
        }
    })
    // Just the languages
    let languages = languagesAndCode.join().replaceAll('code,', ' ')

    // All values except the languages
    let nameAndValuesNotLangs = nameAndValues.filter(([name, value]) => {
        if (name !== 'code') {
            return [name, value]
        }
    })

    overlay.style.display = 'block'
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
    const results = document.querySelector('.results')
    nameAndValuesNotLangs.forEach(function(value) {
        let [name, val] = value
        results.innerHTML += '<div class="result"><div class="cell">'
        + name + '</div><div class="cell">' + val + '</div></div>'
    })
    results.innerHTML += '<div class="result"><div class="cell">languages</div><div class="cell">'
    + languages.toString() + '</div></div>'
})

icon.addEventListener('click', () => {
    setTimeout(function() {
        location.reload()
    }, 500)
    

    overlay.classList.add('fade-out')
    overlay.classList.remove('fade-in')
})

