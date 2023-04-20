function goto_home(){

    document.getElementsByClassName("home_page")[0].style.top = "0vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "1";

    document.getElementsByClassName("character_page")[0].style.left = "-100vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "0";

}

function goto_character(character){

    character_select(character);

    document.getElementsByClassName("home_page")[0].style.top = "-100vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "0";
    

    document.getElementsByClassName("character_page")[0].style.left = "0vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "1";

}


function character_select(character)
{


    
}




















































function character_page_scroll_element(){

    let max_char=0;

    fetch('./data/data.json')
    .then(response => response.json())
    .then(json => { 
        let x = json.filter((item) => {return item});

        for(let num in x)
            max_char = num;

        for(let i=0 ; i <= max_char ; i++){

            let div = document.createElement("div");
            div.className="charcter_scroller_item";
            div.setAttribute("type","submit");
            div.setAttribute("onclick",`character_select("${x[i].name}")`);
            document.getElementsByClassName("charcter_scroller")[0].appendChild(div);

            let div1 = document.createElement("img");
            div1.className="scroller_img";
            div1.setAttribute("src",`${x[i].img[0]}`)
            document.getElementsByClassName("charcter_scroller_item")[i].appendChild(div1);

            let spa = document.createElement("span");
            spa.className="tooltip";
            spa.innerHTML=`${x[i].name}`;
            document.getElementsByClassName("charcter_scroller_item")[i].appendChild(spa);
        }
    });
}
character_page_scroll_element();


const images = [
  "./Images/Home_Page/Monstadt.jpg",
  "./Images/Home_Page/Liyue.png", 
  "./Images/Home_Page/Inazuma.png",
  "./Images/Home_Page/Sumeru.jpg"
];
function bg_change(){
    const temp = setInterval(() =>{
        document.getElementsByClassName("background_image")[0].style.backgroundImage = `url(${images[Math.floor(Math.random() * 4)]})`;
    }, 5000);
}
bg_change();





















fetch('./data/data.json')
.then(response => response.json())
.then(json => { 
    let x = json.filter((item) => { return item.name == "Amber";});

    // if(x[0] != null)
        
    //     console.log(x[0].build_type);

    // for (let key in x[0].build_type)
    //     console.log(key);

});


// console.log(json);
// console.log(json.filter((item) => { return item.id == 2;}));
