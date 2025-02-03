let url = "https://dog.ceo/api/breeds/image/random"
let url2="https://cataas.com/cat";

let imageD=document.querySelector('.Dogimg');
let imageC=document.querySelector('.Catimg');
let btns=document.querySelectorAll('button');

btns[0].addEventListener('click',async function(){
    let link= await dogPic();
    console.log(link)
    imageD.setAttribute("src",link);
})

btns[1].addEventListener('click',async function(){
    let link= await catPic();
    console.log(link)
    imageC.setAttribute("src",`https://cataas.com/cat/${link}`);
})

async function catPic(){
    try{
    let img= await axios.get(url2);
    console.log(img)
    return img.data._id;
    }
    catch(e){
        console.log(e);
    }
}


async function dogPic(){
    try{
    let img= await axios.get(url);
    console.log(img)
    return img.data.message;
    }
    catch(e){
        console.log(e);;
    }
}