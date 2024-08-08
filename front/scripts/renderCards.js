const renderCads = data => {
    data.forEach(movie => {
        let containerRow = document.getElementById("containerRow");
    
        // card movie
        let card = document.createElement("div");
        card.classList.add("card")
        card.classList.add("card-size")
        card.classList.add("col")
    
        // image card
        let image = document.createElement("img");
        image.src = movie.poster;
        image.alt = movie.title;
        image.classList.add("card-img-top")
    
        // div title
        let divTitle = document.createElement("div")
        divTitle.classList.add("card-body")
        
        // title
        let title = document.createElement("h5")
        title.classList.add("card-title")
        title.innerHTML = movie.title
    
        // create ul
        let ul = document.createElement("ul")
        ul.classList.add("list-group")
        ul.classList.add("list-group-flush")
        
        // create li - director
        let liDirector = document.createElement("li")
        liDirector.classList.add("list-group-item")
        liDirector.innerHTML = movie.director
    
        // create li - duration
        let liDuration = document.createElement("li")
        liDuration.classList.add("list-group-item")
        liDuration.innerHTML = movie.duration
    
        // create li - genre
        let liGenre = document.createElement("li")
        liGenre.classList.add("list-group-item")
        liGenre.innerHTML = movie.genre
    
        // create li - rate
        let spanRate = document.createElement("span")
        spanRate.classList.add("badge")
        spanRate.classList.add("rounded-pill")
        if(movie.rate >= 7) spanRate.classList.add("text-bg-success")
        if(movie.rate >= 4 && movie.rate < 7) spanRate.classList.add("text-bg-warning")
        if(movie.rate < 4) spanRate.classList.add("text-bg-danger")
        spanRate.innerHTML = movie.rate
    
        let liRate = document.createElement("li")
        liRate.classList.add("list-group-item")
        
        // links bottoms card
        let linksCard = document.createElement("div")
        linksCard.classList.add("card-body")
        
        let view = document.createElement("a")
        let download = document.createElement("a")
    
        view.classList.add("card-link")
        view.innerHTML = "Ver"
        view.href = "#"
    
        download.classList.add("card-link")
        download.innerHTML = "Descargar"
        download.href = "#"
        
        // all appends
        containerRow.appendChild(card)
    
        card.appendChild(image)
        card.appendChild(divTitle)
        card.appendChild(ul)
        card.appendChild(linksCard)
    
        divTitle.appendChild(title)
        ul.appendChild(liDirector)
        ul.appendChild(liDuration)
        ul.appendChild(liGenre)
        ul.appendChild(liRate)
            liRate.appendChild(spanRate)
        linksCard.appendChild(view)
        linksCard.appendChild(download)
    
    });
}

module.exports = renderCads;

// model
//    <div class="card card-size">
//      <img src="https://mb.cision.com/Public/14247/2902071/856b720fb81856ec_800x800ar.jpg" class="card-img-top" alt="...">
//      <div class="card-body">
//        <h5 class="card-title">Card title</h5>
//      </div>
//      <ul class="list-group list-group-flush">
//        <li class="list-group-item">Director</li>
//        <li class="list-group-item">Duración</li>
//        <li class="list-group-item">Género</li>
//        <li class="list-group-item">
//         <span class="badge rounded-pill text-bg-success">7.7</span>
//        </li>
//      </ul>
//      <div class="card-body">
//        <a href="#" class="card-link">Ver</a>
//        <a href="#" class="card-link">Descargar</a>
//      </div>
//    </div>
