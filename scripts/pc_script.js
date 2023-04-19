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





































fetch('./data/data.json')
.then(response => response.json())
.then(json => { 
    let x = json.filter((item) => { return item.name == "Amber";});

    if(x[0] != null)
        
        
        console.log(x[0].build_type);

        // console.log(typeof((x[0].build_type[0])));




    // for (let key in x[0].build_type) {
    //     console.log(key);
    //     // console.log(x[0].build_type[key]);
    // }



});







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
























// console.log(json);
// console.log(json.filter((item) => { return item.id == 2;}));







