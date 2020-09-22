fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=f276170e5529425cbd9f5dc5a16ed55a')
// fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=in&apiKey=f276170e5529425cbd9f5dc5a16ed55a',{headers:new Headers({"X-Requested-With":"sdffdtytrtytr"})})
.then(res => {
return res.json();
})
.then(function(data){
    let container = document.getElementById('container');
    let design = "";
    for(i = 0;i<data.articles.length;++i){
        let title = data.articles[i].title;
        let description = data.articles[i].description;
        let image = data.articles[i].urlToImage;
        let readmore = data.articles[i].url;
        design += 
        `<div class="content">
            <div class="heading">
            <img src="${image}" alt="Loading....">
            ${title}
            </div>
                <div class="fold">
                    <p>${description}</p>
                    <a href="${readmore}" target = "_blank">Read More....</a>
                </div>
        </div>`;
    }
    container.innerHTML += design;
    whole = document.getElementsByClassName('content');
    for (i = 0; i < whole.length; ++i) {
        whole[i].addEventListener('click', function () {
            this.classList.toggle('active');
        })
    }
});
