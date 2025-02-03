const API_KEY ="1cd1cdcdb8184aa99bd228f4e98c908a";
const url="https://newsapi.org/v2/everything?q=";
window.addEventListener("load",() => fetchNews("india"));

async function fetchNews(query) {
    const res=await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data=await res.json();
    bindData(data.articles)
}

function bindData(articles){
   const cardsC=document.getElementById('cards-container');
   const newsT=document.getElementById('template-news-card');

   cardsC.innerHTML="";

   articles.forEach((article)=>{
   
    if(!article.urlToImage) return;
    // console.log(article);
    const clone = newsT.content.cloneNode(true);
    fillDataInCard(clone,article);
    cardsC.appendChild(clone);
   });
}

function fillDataInCard(clone,article){
    const newsImg=clone.querySelector('#news-img');
    const newsTitle=clone.querySelector('#news-title');
    const newsSource=clone.querySelector('#news-source');
    const newsDesc=clone.querySelector('#news-desc');
    const date= new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    });
    
    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;
    newsSource.innerHTML=`${article.source.name} • ${date}`;
}