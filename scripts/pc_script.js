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


function character_select()
{




    
}





































let x = 0;
fetch('./data/data.json')
.then(response => response.json())
.then(json => { 
    x = json.filter((item) => { return item.name == "Albedo";});
    // if(x[0] != null)
        // console.log(x[0].img[0]);

    // document.getElementsByClassName("image")[0].src = x[0].img[0];
});

const images = [
  "../Images/Home_Page/Monstadt.jpg",
  "../Images/Home_Page/Liyue.png", 
  "../Images/Home_Page/Inazuma.png",
  "../Images/Home_Page/Sumeru.jpg"
];
let ch = 0;
function bg_change(){
    const temp = setInterval(() =>{
        ch = Math.floor(Math.random() * 4);
        document.getElementsByClassName("background_image")[0].style.backgroundImage = `url(${images[ch]})`;
    }, 5000);
}
bg_change();
























// console.log(json);
// console.log(json.filter((item) => { return item.id == 2;}));







