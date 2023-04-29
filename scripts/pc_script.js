function goto_home(){

    document.getElementsByClassName("home_page")[0].style.top = "0vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "1";

    document.getElementsByClassName("character_page")[0].style.left = "-100vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "0";

}

function goto_character(character){

    if(character == 'Alhaitham')
        character_select(character);
    
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

                //CHARCTER NAME AND ABOUT
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

                //BUILD BUTTONS 
                let div3 = document.createElement("div");
                div3.className="build_button";
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div3);

                for (let num in x[0].build_type){
                    let div4 = document.createElement("div");
                    div4.className="build_button_item";
                    div4.setAttribute("type","submit");
                    div4.setAttribute("onclick",`build_detail_show('${x[0].name}','${num}', 0)`);
                    div4.innerHTML = `${x[0].build_type[num].built}`
                    document.getElementsByClassName("build_button")[0].appendChild(div4);
                }

                let div5 = document.createElement("div");
                div5.className="build_detail";
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div5);


                //WEAPON LIST
                let div6 = document.createElement("div");
                div6.className="build_detail_text";
                div6.innerHTML=`${x[0].build_type[0].built}`;
                document.getElementsByClassName("build_detail")[0].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="weapon_list_text";
                div6.innerHTML="Weapons";
                document.getElementsByClassName("build_detail")[0].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="weapon_list";
                document.getElementsByClassName("build_detail")[0].appendChild(div6);

                let weapon_count = 0;
                for(let num in x[0].build_type[0]){
                    if(num.includes('weapon'))
                        if(x[0].build_type[0][num][0] != ""){

                            div6 = document.createElement("div");
                            div6.className="weapon_list_item";          
                            document.getElementsByClassName("weapon_list")[0].appendChild(div6);

                            div6 = document.createElement("img");
                            div6.className="weapon_list_item_img";  
                            div6.setAttribute("src",`${x[0].build_type[0][num][1]}`);

                            let weapon_quality = `${x[0].build_type[0][num][0]}`;
                            if(weapon_quality.includes('(5☆'))
                                div6.style.backgroundImage='var(--star5)';
                            else if(weapon_quality.includes('(4☆'))
                                div6.style.backgroundImage='var(--star4)';
                            else if(weapon_quality.includes('(3☆'))
                                div6.style.backgroundImage='var(--star3)';
                            document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);

                            div6 = document.createElement("span");
                            div6.className="weapon_name";
                            div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                            document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);
                           
                            weapon_count++;
                            if(weapon_count == 6){
                                var ele=document.getElementsByClassName("weapon_list")[0];
                                ele.style.width = "27.6vw";
                            }
                        }
                        else{
                            weapon_count++;

                            div6 = document.createElement("div");
                            div6.className="weapon_list_item";     
                            div6.style.width="0vw"; 
                            div6.style.margin="0px";    
                            document.getElementsByClassName("weapon_list")[0].appendChild(div6);
                        }
                }            
                
                let artifact_count = 0;
                for(let num in x[0].build_type[0]){
                    if(num.includes('artifact')){









                        


                    }
                }














                
                //CHARACTER IMAGE
                let div20 = document.createElement("img");
                div20.className="character_image";
                div20.setAttribute("src",`${x[0].img[1]}`);
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div20);

                //VISION AND WEAPON TYPE
                let div21 = document.createElement("div");
                div21.className="character_type_weapon";
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div21);

                let div22 = document.createElement("img");
                div22.className="vision_icon";
                div22.setAttribute("src",`${x[0].vision[1]}`);
                document.getElementsByClassName("character_type_weapon")[0].appendChild(div22);

                let div23 = document.createElement("div");
                div23.className="character_type_text";
                div23.innerHTML=`${x[0].vision[0]}`;
                document.getElementsByClassName("character_type_weapon")[0].appendChild(div23);

                let div24 = document.createElement("img");
                div24.className="weapon_icon";
                div24.setAttribute("src",`${x[0].weapon[1]}`);
                document.getElementsByClassName("character_type_weapon")[0].appendChild(div24);

                let div25 = document.createElement("div");
                div25.className="character_type_text";
                div25.innerHTML=`${x[0].weapon[0]}`;
                document.getElementsByClassName("character_type_weapon")[0].appendChild(div25);
            
            });

            setTimeout(() => { 
                document.getElementsByClassName("character_details_set_1")[0].style.top = "0vh";
                document.getElementsByClassName("character_details_set_1")[0].style.opacity = "1";

                document.getElementsByClassName("character_details_set_1")[1].style.top = "100vh";
                document.getElementsByClassName("character_details_set_1")[1].style.opacity = "0";

            }, 10);
            char_page_no = 2;
        }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

                //CHARCTER NAME AND ABOUT
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

                //BUILD BUTTONS 
                let div3 = document.createElement("div");
                div3.className="build_button";
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div3);

                for (let num in x[0].build_type){
                    let div4 = document.createElement("div");
                    div4.className="build_button_item";
                    div4.setAttribute("type","submit");
                    div4.setAttribute("onclick",`build_detail_show('${x[0].name}','${num}', 1)`);
                    div4.innerHTML = `${x[0].build_type[num].built}`
                    document.getElementsByClassName("build_button")[1].appendChild(div4);
                }

                let div5 = document.createElement("div");
                div5.className="build_detail";
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div5);

                //WEAPON LIST
                let div6 = document.createElement("div");
                div6.className="build_detail_text";
                div6.innerHTML=`${x[0].build_type[0].built}`;
                document.getElementsByClassName("build_detail")[1].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="weapon_list_text";
                div6.innerHTML="Weapons";
                document.getElementsByClassName("build_detail")[1].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="weapon_list";
                document.getElementsByClassName("build_detail")[1].appendChild(div6);

                let weapon_count = 10;
                for(let num in x[0].build_type[0]){
                    if(num.includes('weapon'))
                        if(x[0].build_type[0][num][0] != ""){

                            div6 = document.createElement("div");
                            div6.className="weapon_list_item";          
                            document.getElementsByClassName("weapon_list")[1].appendChild(div6);

                            div6 = document.createElement("img");
                            div6.className="weapon_list_item_img";  
                            div6.setAttribute("src",`${x[0].build_type[0][num][1]}`);
                            
                            let weapon_quality = `${x[0].build_type[0][num][0]}`;
                            if(weapon_quality.includes('(5☆'))
                                div6.style.backgroundImage='var(--star5)';
                            else if(weapon_quality.includes('(4☆'))
                                div6.style.backgroundImage='var(--star4)';
                            else if(weapon_quality.includes('(3☆'))
                                div6.style.backgroundImage='var(--star3)';
                            document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);
                            

                            div6 = document.createElement("span");
                            div6.className="weapon_name";
                            div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                            document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);
                           
                            weapon_count++;
                            if(weapon_count == 16){
                                var ele=document.getElementsByClassName("weapon_list")[1];
                                ele.style.width = "27.6vw";
                            }
                        }
                        else{
                            weapon_count++;

                            div6 = document.createElement("div");
                            div6.className="weapon_list_item";  
                            div6.style.width="0vw";
                            div6.style.margin="0px";        
                            document.getElementsByClassName("weapon_list")[1].appendChild(div6);
                        }
                }

                

                
















                    
                //CHARACTER IMAGE
                let div20 = document.createElement("img");     
                div20.className="character_image";
                div20.setAttribute("src",`${x[0].img[1]}`);
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div20);

                //VISION AND WEAPON TYPE
                let div21 = document.createElement("div");
                div21.className="character_type_weapon";
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div21);

                let div22 = document.createElement("img");
                div22.className="vision_icon";
                div22.setAttribute("src",`${x[0].vision[1]}`);
                document.getElementsByClassName("character_type_weapon")[1].appendChild(div22);

                let div23 = document.createElement("div");
                div23.className="character_type_text";
                div23.innerHTML=`${x[0].vision[0]}`;
                document.getElementsByClassName("character_type_weapon")[1].appendChild(div23);

                let div24 = document.createElement("img");
                div24.className="weapon_icon";
                div24.setAttribute("src",`${x[0].weapon[1]}`);
                document.getElementsByClassName("character_type_weapon")[1].appendChild(div24);

                let div25 = document.createElement("div");
                div25.className="character_type_text";
                div25.innerHTML=`${x[0].weapon[0]}`;
                document.getElementsByClassName("character_type_weapon")[1].appendChild(div25);
            
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
function build_detail_show(char_name ,build_no, set_no){

    




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

//BACKGROUND CHANGE
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
