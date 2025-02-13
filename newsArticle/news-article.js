var xhr = new XMLHttpRequest();

var url = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=3eabf42e47654069a43cbbedd68b3052';

xhr.open("GET", url, true);

xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var source = document.createElement('h2');
        source.textContent = article.source.name;

        var title = document.createElement('h2');
        title.textContent = article.title;
        
        var author = document.createElement('h3');
        author.textContent = article.author;

        var articleUrl = document.createElement('p');
        articleUrl.textContent = article.url;

        var description = document.createElement('p');
        description.textContent = article.description;

        var content = document.createElement('p');
        content.textContent = article.content;

        articleDiv.appendChild(source);
        articleDiv.appendChild(title);
        articleDiv.appendChild(author);
        articleDiv.appendChild(articleUrl);
        articleDiv.appendChild(description);
        articleDiv.appendChild(content);
        articleDiv.appendChild(waysList);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();