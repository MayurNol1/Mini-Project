let inp=document.querySelector('input');
let unli=document.querySelector('#UnorderList');
let url="http://universities.hipolabs.com/search?country=";
let btn=document.querySelector('button');

btn.addEventListener("click",async ()=>{
    let country=inp.value;
    console.log(country);

    let clg1= await getClg(country);
    // console.log(clg)
    displayClg(clg1);
})

async function getClg(country){
   try{
    unli.innerText="";
    let clg= await axios.get(url+country);
    console.log(clg.data)
    return clg.data;
   }catch(e){
        console.log("Error is :",e);
   }
}

function displayClg(clg){

    for(col of clg){
        // console.log(col.name);

        let listItem=document.createElement('li');
        listItem.innerText=col.name;
        unli.appendChild(listItem);
    }
}


// const fetch = require('node-fetch');

// async function getUniversitiesByStateProvince(stateProvince) {
//     const country = 'India';
//     const apiUrl = `http://universities.hipolabs.com/search?country=${country}&state-province=${stateProvince}`;

//     try {
//         const response = await fetch(apiUrl);
//         const universities = await response.json();

//         if (universities.length === 0) {
//             console.log(`No universities found in ${stateProvince}, ${country}.`);
//         } else {
//             console.log(`Universities in ${stateProvince}, ${country}:`);
//             universities.forEach((university, index) => {
//                 console.log(`${index + 1}. ${university.name} (${university.web_pages[0]})`);
//             });
//         }
//     } catch (error) {
//         console.error('Error fetching universities:', error);
//     }
// }

// // Example usage
// getUniversitiesByStateProvince('Gujarat');
