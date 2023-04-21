function goto_home(){

    document.getElementsByClassName("home_page")[0].style.top = "0vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "1";

    document.getElementsByClassName("character_page")[0].style.left = "-100vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "0";

}

function goto_character(character){

    document.getElementsByClassName("home_page")[0].style.top = "-100vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "0";
    

    document.getElementsByClassName("character_page")[0].style.left = "0vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "1";

}


let char_page_no = 1;
let curr_char = 0;
function character_select(character)
{
    if(curr_char != character){

        if(char_page_no == 1){

            curr_char = character;
            const myNode = document.getElementsByClassName("character_details_set_1")[0];
            while (myNode.firstChild)
                myNode.removeChild(myNode.lastChild);
            
            fetch('./data/data.json')
            .then(response => response.json())
            .then(json => { 
            let x = json.filter((item) => {return item.name == `${character}`;});

                let div = document.createElement("div");
                div.className="name_box";
                div.innerHTML=`${x[0].fullname}`;
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div);

                let div1 = document.createElement("div");
                div1.className="about_box";
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div1);

                let div2 = document.createElement("div");
                div2.className="about_text";
                div2.innerHTML=`${x[0].about}`
                document.getElementsByClassName("about_box")[0].appendChild(div2);

                let div3 = document.createElement("div");
                div3.className="build_button";
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div3);

                for (let num in x[0].build_type){
                    let div4 = document.createElement("div");
                    div4.className="build_button_item";
                    div4.setAttribute("type","submit");
                    div4.setAttribute("onclick",`build_detail_show("${num}")`);
                    div4.innerHTML = `${x[0].build_type[num].built}`
                    document.getElementsByClassName("build_button")[0].appendChild(div4);
                }


                    

                
                





                let div10 = document.createElement("img");
                div10.className="character_image";
                div10.setAttribute("src",`${x[0].img[1]}`);
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div10);
            
            });

            setTimeout(() => { 
                document.getElementsByClassName("character_details_set_1")[0].style.top = "0vh";
                document.getElementsByClassName("character_details_set_1")[0].style.opacity = "1";

                document.getElementsByClassName("character_details_set_1")[1].style.top = "100vh";
                document.getElementsByClassName("character_details_set_1")[1].style.opacity = "0";

            }, 10);

            char_page_no = 2;
        }

        else if(char_page_no == 2)
        {
            curr_char = character;
            const myNode = document.getElementsByClassName("character_details_set_1")[1];
            while (myNode.firstChild)
                myNode.removeChild(myNode.lastChild);

            fetch('./data/data.json')
            .then(response => response.json())
            .then(json => { 
            let x = json.filter((item) => {return item.name == `${character}`;});

                let div = document.createElement("div");
                div.className="name_box";
                div.innerHTML=`${x[0].fullname}`;
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div);

                let div1 = document.createElement("div");
                div1.className="about_box";
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div1);

                let div2 = document.createElement("div");
                div2.className="about_text";
                div2.innerHTML=`${x[0].about}`
                document.getElementsByClassName("about_box")[1].appendChild(div2);

                let div3 = document.createElement("div");
                div3.className="build_button";
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div3);

                for (let num in x[0].build_type){
                    let div4 = document.createElement("div");
                    div4.className="build_button_item";
                    div4.setAttribute("type","submit");
                    div4.setAttribute("onclick",`build_detail_show("${num}")`);
                    div4.innerHTML = `${x[0].build_type[num].built}`
                    document.getElementsByClassName("build_button")[1].appendChild(div4);
                }


                    

                
                





                let div10 = document.createElement("img");
                div10.className="character_image";
                div10.setAttribute("src",`${x[0].img[1]}`);
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div10);
            
            });

            setTimeout(() => { 
                document.getElementsByClassName("character_details_set_1")[0].style.top = "100vh";
                document.getElementsByClassName("character_details_set_1")[0].style.opacity = "0";

                document.getElementsByClassName("character_details_set_1")[1].style.top = "0vh";
                document.getElementsByClassName("character_details_set_1")[1].style.opacity = "1";

            }, 10);

            char_page_no = 1;
        }
    }
}
















//Build Detail Swapper
function build_detail_show(num){
    console.log();
}


//Scroller Element
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






















// ONLY FOR TESTING BELOW

fetch('./data/data.json')
.then(response => response.json())
.then(json => { 
    let x = json.filter((item) => { return item.name == "Bennett";});

    // if(x[0] != null)
        
    //     console.log(x[0].build_type);

    // for (let key in x[0].build_type)
    //     console.log(key);

});


// console.log(json);
// console.log(json.filter((item) => { return item.id == 2;}));
