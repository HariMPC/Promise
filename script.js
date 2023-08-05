let element= document.querySelector(".blog-container");

async function post(){
   try{
    let array=[];
    let data = await fetch("https://api-thirukkural.vercel.app/api?num=1")
    let response= await data.json();
    array.push(response);
    array.forEach((value)=>{
        element.innerHTML=`
        <div>
        <div> <h1> Thirukural Tamil Verse</h1> </div>    
            <div><h4>Section:</h4>${value.sect_tam}</div>
            <div><h4>Group:</h4>${value.chapgrp_tam}</div>
            <div><h4>Chapter:</h4>${value.chap_tam}</div>
            <div> <h4> Thirukural:</h4> </div>  
            <div>${value.line1}</div>
            <div>${value.line2}</div>
            <div> <h4>Explanation:</h4> ${value.tam_exp}</div>
        </div>
        <div>
            <div> <h1> Thirukural English Verse</h1> </div>
            <div><h4>Section:</h4>${value.sect_eng}</div>
            <div><h4>Group:</h4>${value.chapgrp_eng}</div>
            <div><h4>Chapter:</h4>${value.chap_eng}</div>
            <div> <h4> Thirukural:</h4>${value.eng}</div>
            <div> <h4>Explanation:</h4> ${value.eng_exp}</div>
        </div>`
        })
   }catch(error){
    alert("Error")
   }
} 

post();