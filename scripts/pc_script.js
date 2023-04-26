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

                let div6 = document.createElement("div");
                div6.className="build_detail_text";
                div6.innerHTML=`${x[0].build_type[0].built}`;
                document.getElementsByClassName("build_detail")[0].appendChild(div6);

                //WEAPON LIST
                let div7 = document.createElement("div");
                div7.className="weapon_list";
                document.getElementsByClassName("build_detail")[0].appendChild(div7);

                let div8 = document.createElement("div");
                div8.className="weapon_list_text";
                div8.innerHTML="Weapons";
                document.getElementsByClassName("weapon_list")[0].appendChild(div8);

                for (let num in x[0].build_type[0]){
                    let div9 = document.createElement("div");
                    div9.className="weapon_item";
                    if(num.includes("weapon")){
                        div9.innerHTML = `${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("weapon_list")[0].appendChild(div9);
                    }
                }
                
                //ARTIFACT LIST
                let div10 = document.createElement("div");
                div10.className="artifact_list";
                document.getElementsByClassName("build_detail")[0].appendChild(div10);   
                
                let div11 = document.createElement("div");
                div11.className="artifact_list_text";
                div11.innerHTML="Artifacts";
                document.getElementsByClassName("artifact_list")[0].appendChild(div11);

                for (let num in x[0].build_type[0]){
                    let div12 = document.createElement("div");
                    div12.className="artifact_item";
                    if(num.includes("artifact")){
                        div12.innerHTML = `${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("artifact_list")[0].appendChild(div12);
                    }
                }  

                //ARTIFACT STAT AND TALENT
                let div13 = document.createElement("div");
                div13.className ="artifact_stat_talent_list";
                document.getElementsByClassName("build_detail")[0].appendChild(div13);

                let div14 = document.createElement("div");
                div14.className="artifact_stat_talent_list_text";
                div14.innerHTML="Artifact Stat & Talent Order";
                document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div14);

                for (let num in x[0].build_type[0]){

                    if(num.includes("main_stat")){
                        let div15 = document.createElement("div");
                        div15.className="artifact_stat_talent_list_item";
                        div15.innerHTML=`Sands: ${x[0].build_type[0][num][0]} <br>Goblet: ${x[0].build_type[0][num][1]} <br>Circlet: ${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div15);
                    }

                    if(num.includes("stat_priority")){
                        let temp = 0;
                        for(let num1 in x[0].build_type[0][num]){
                            if(`${x[0].build_type[0][num][num1]}`=="")
                                break;
                            temp = num1;  
                        }
                        if(temp == 0){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div15);
                        }
                        else if(temp == 1){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div15);
                        }
                        else if(temp == 2){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-2]} > ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div15);
                        }
                        else if(temp == 3){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-3]} > ${x[0].build_type[0][num][temp-2]} > ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div15);
                        }
                        else if(temp == 4){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-4]} > ${x[0].build_type[0][num][temp-3]} > ${x[0].build_type[0][num][temp-2]} > ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div15);
                        }
                    }
        
                    if(num.includes("talent_order")){
                        let div15 = document.createElement("div");
                        div15.className="artifact_stat_talent_list_item";
                        div15.innerHTML=`Talent Priority: ${x[0].build_type[0][num][0]} > ${x[0].build_type[0][num][1]} > ${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("artifact_stat_talent_list")[0].appendChild(div15);
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

                let div6 = document.createElement("div");
                div6.className="build_detail_text";
                div6.innerHTML=`${x[0].build_type[0].built}`;
                document.getElementsByClassName("build_detail")[1].appendChild(div6);

                //WEAPON LIST
                let div7 = document.createElement("div");
                div7.className="weapon_list";
                document.getElementsByClassName("build_detail")[1].appendChild(div7);

                let div8 = document.createElement("div");
                div8.className="weapon_list_text";
                div8.innerHTML="Weapon";
                document.getElementsByClassName("weapon_list")[1].appendChild(div8);

                for (let num in x[0].build_type[0]){
                    let div9 = document.createElement("div");
                    div9.className="weapon_item";
                    if(num.includes("weapon")){
                        div9.innerHTML = `${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("weapon_list")[1].appendChild(div9);
                    }
                }
                
                //ARTIFACT LIST
                let div10 = document.createElement("div");
                div10.className="artifact_list";
                document.getElementsByClassName("build_detail")[1].appendChild(div10);   
                
                let div11 = document.createElement("div");
                div11.className="artifact_list_text";
                div11.innerHTML="Artifacts";
                document.getElementsByClassName("artifact_list")[1].appendChild(div11);

                for (let num in x[0].build_type[0]){
                    let div12 = document.createElement("div");
                    div12.className="artifact_item";
                    if(num.includes("artifact")){
                        div12.innerHTML = `${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("artifact_list")[1].appendChild(div12);
                    }
                }

                //ARTIFACT STAT AND TALENT
                let div13 = document.createElement("div");
                div13.className ="artifact_stat_talent_list";
                document.getElementsByClassName("build_detail")[1].appendChild(div13);

                let div14 = document.createElement("div");
                div14.className="artifact_stat_talent_list_text";
                div14.innerHTML="Artifact Stat & Talent Order";
                document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div14);

                for (let num in x[0].build_type[0]){

                    if(num.includes("main_stat")){
                        let div15 = document.createElement("div");
                        div15.className="artifact_stat_talent_list_item";
                        div15.innerHTML=`Sands: ${x[0].build_type[0][num][0]} <br>Goblet: ${x[0].build_type[0][num][1]} <br>Circlet: ${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div15);
                    }

                    if(num.includes("stat_priority")){
                        let temp = 0;
                        for(let num1 in x[0].build_type[0][num]){
                            if(`${x[0].build_type[0][num][num1]}`=="")
                                break;
                            temp = num1;  
                        }
                        if(temp == 0){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div15);
                        }
                        else if(temp == 1){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div15);
                        }
                        else if(temp == 2){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-2]} > ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div15);
                        }
                        else if(temp == 3){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-3]} > ${x[0].build_type[0][num][temp-2]} > ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div15);
                        }
                        else if(temp == 4){
                            let div15 = document.createElement("div");
                            div15.className="artifact_stat_talent_list_item";
                            div15.innerHTML=`Sub Stat Priority: ${x[0].build_type[0][num][temp-4]} > ${x[0].build_type[0][num][temp-3]} > ${x[0].build_type[0][num][temp-2]} > ${x[0].build_type[0][num][temp-1]} > ${x[0].build_type[0][num][temp]}`;
                            document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div15);
                        }
                    }
        
                    if(num.includes("talent_order")){
                        let div15 = document.createElement("div");
                        div15.className="artifact_stat_talent_list_item";
                        div15.innerHTML=`Talent Priority: ${x[0].build_type[0][num][0]} > ${x[0].build_type[0][num][1]} > ${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("artifact_stat_talent_list")[1].appendChild(div15);
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

    let myNode = document.getElementsByClassName("build_detail_text")[set_no];
    myNode.remove();

    myNode = document.getElementsByClassName("weapon_list")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

    myNode = document.getElementsByClassName("artifact_list")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

    myNode = document.getElementsByClassName("artifact_stat_talent_list")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

    fetch('./data/data.json')
    .then(response => response.json())
    .then(json => { 
    let x = json.filter((item) => {return item.name == `${char_name}`;});

    //BUILD DETAIL TEXT
    let div6 = document.createElement("div");
    div6.className="build_detail_text";
    div6.innerHTML=`${x[0].build_type[build_no].built}`;
    document.getElementsByClassName("build_detail")[set_no].appendChild(div6);

    // WEAPON LIST
    let div8 = document.createElement("div");
    div8.className="weapon_list_text";
    div8.innerHTML="Weapon";
    document.getElementsByClassName("weapon_list")[set_no].appendChild(div8);

    for (let num in x[0].build_type[build_no]){
        let div9 = document.createElement("div");
        div9.className="weapon_item";
        if(num.includes("weapon")){
            div9.innerHTML = `${x[0].build_type[build_no][num][0]}`;
            document.getElementsByClassName("weapon_list")[set_no].appendChild(div9);
        }
    }

    //ARTIFACT LIST                
    let div11 = document.createElement("div");
    div11.className="artifact_list_text";
    div11.innerHTML="Artifacts";
    document.getElementsByClassName("artifact_list")[set_no].appendChild(div11);

    for (let num in x[0].build_type[build_no]){
        let div12 = document.createElement("div");
        div12.className="artifact_item";
        if(num.includes("artifact")){
            div12.innerHTML = `${x[0].build_type[build_no][num][0]}`;
            document.getElementsByClassName("artifact_list")[set_no].appendChild(div12);
        }
    }








    


    });

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
