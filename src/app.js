const feedDisplay = document.querySelector('.mangaList') //selected tag to inject scrapped obj

fetch('http://localhost:8000')
    .then(response => response.json())
    .then(data => {
        data.forEach(manga => {
            const mangaItem = `<ul id="list"><li><a href="` + manga.url + `">` + manga.title + `</a></li></ul>` //builds overall look of scrapped obj prop
            feedDisplay.insertAdjacentHTML('beforeend', mangaItem)
        })
    })
    .catch(err => console.log(err))


// DEV NOTES: Need to figure out a way to reduce the size of the list to only a few.
// Another thing I want to do is to tag and/or include an additional property to each title like 'type':'sad' so 
// it can be used with the search function.