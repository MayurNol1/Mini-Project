let url = "https://dog.ceo/api/breeds/image/random"
let url2="https://cataas.com/cat";

let image=document.querySelector('img');
let btn=document.querySelector('button');

btn.addEventListener("click",async ()=>{
    let link= await catPic();
    console.log(link)
    image.setAttribute("src",url2+"/"+link);
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


// async function dogPic(){
//     try{
//     let img= await axios.get(url);
//     console.log(img)
//     return img.data.message;
//     }
//     catch(e){
//         console.log(e);;
//     }
// }



