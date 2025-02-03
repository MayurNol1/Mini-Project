const API_KEY ="1cd1cdcdb8184aa99bd228f4e98c908a";
const url="https://newsapi.org/v2/everything?q=";
window.addEventListener("load",() => fetchNews("India"));

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

    clone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank");
    })
}

let currSelectedItem=null;
function onNavItemClick(id){
    searchText.value=null;
    fetchNews(id);
    const navItem=document.getElementById(id);
    currSelectedItem?.classList.remove('active');
    currSelectedItem= navItem;
    currSelectedItem.classList.add('active');
   
}

const searchText =document.getElementById('news-input');
const searchBtn=document.getElementById('search-button');

searchBtn.addEventListener('click',()=>{
    const query=searchText.value;
    // console.log(query);
    if(!query) return;
    fetchNews(query);
    currSelectedItem?.classList.remove('active');
})