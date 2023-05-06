function goto_home(){

    document.getElementsByClassName("home_page")[0].style.top = "0vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "1";

    document.getElementsByClassName("character_page")[0].style.left = "-100vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "0";

    document.getElementsByClassName("custom_filter_page")[0].style.top = "-80vh";
    document.getElementsByClassName("custom_filter_page")[0].style.opacity = "0";
}

function goto_character(character){

    if(character == 'Alhaitham')
        character_select(character);
    
    document.getElementsByClassName("home_page")[0].style.top = "-100vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "0";
    
    document.getElementsByClassName("character_page")[0].style.left = "0vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "1";
}

function goto_custom(){

    document.getElementsByClassName("home_page")[0].style.top = "-100vh";
    document.getElementsByClassName("home_page")[0].style.opacity = "0";
    
    document.getElementsByClassName("character_page")[0].style.left = "0vw";
    document.getElementsByClassName("character_page")[0].style.opacity = "1";

    document.getElementsByClassName("custom_filter_page")[0].style.top = "12.5vh";
    document.getElementsByClassName("custom_filter_page")[0].style.opacity = "1";

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                
                let button_select = 0;
                for (let num in x[0].build_type){
                    let div4 = document.createElement("div");
                    div4.className="build_button_item";
                    div4.setAttribute("type","submit");
                    div4.setAttribute("onclick",`build_detail_show('${x[0].name}','${num}', 0)`);
                    div4.innerHTML = `${x[0].build_type[num].built}`;
                    if(button_select == 0)
                        div4.style.backgroundImage = 'var(--selection)';
                    document.getElementsByClassName("build_button")[0].appendChild(div4);
                    button_select++;
                }

                let div5 = document.createElement("div");
                div5.className="build_detail";
                document.getElementsByClassName("character_details_set_1")[0].appendChild(div5);

                // WEAPON LIST
                let div6 = document.createElement("div");
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

                            div6 = document.createElement("div");
                            div6.className="weapon_number";
                            div6.innerHTML=weapon_count+1;  
                            document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);

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
                                ele.style.width = "28.8vw";
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
                
                
                // ARTIFACT LIST
                div6 = document.createElement("div");
                div6.className="artifact_list_text";
                div6.innerHTML="Artifacts";
                document.getElementsByClassName("build_detail")[0].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="artifact_list";
                document.getElementsByClassName("build_detail")[0].appendChild(div6);
                
                let artifact_count = 0;
                for(let num in x[0].build_type[0]){
                    if(num.includes('artifact')){
                        if(x[0].build_type[0][num][0] != ""){
                            let artifact_length = x[0].build_type[0][num].length;

                            if(artifact_length == 2){

                                div6 = document.createElement("div");
                                div6.className="artifact_list_item";
                                document.getElementsByClassName("artifact_list")[0].appendChild(div6);

                                div6 = document.createElement("img");
                                div6.className="artifact_list_item_img";
                                div6.setAttribute("src",`${x[0].build_type[0][num][1]}`);
                                div6.style.backgroundImage='var(--artifact_bg)';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_number";
                                div6.innerHTML='4';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_name";
                                div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                artifact_count++;
                            }
                            else if(artifact_length == 3){
                                div6 = document.createElement("div");
                                div6.className="artifact_list_item";
                                document.getElementsByClassName("artifact_list")[0].appendChild(div6);

                                div6 = document.createElement("img");
                                div6.className="artifact_list_item_img";
                                div6.setAttribute("src",`${x[0].build_type[0][num][1]}`);
                                div6.style.backgroundImage='var(--artifact_bg)';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("img");
                                div6.className="artifact_list_item_img";
                                div6.setAttribute("src",`${x[0].build_type[0][num][2]}`);
                                div6.style.backgroundImage='var(--artifact_bg)';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_number";
                                div6.innerHTML='2';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_number";
                                div6.innerHTML='2';
                                div6.style.left='4.1vw';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_name";
                                div6.style.left='0.5vw';
                                div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                artifact_count++;
                            }
                        }
                        else{
                            div6 = document.createElement("div");
                            div6.className="artifact_list_item";
                            div6.style.margin='0px';
                            div6.style.padding='0px';
                            document.getElementsByClassName("artifact_list")[0].appendChild(div6);

                            artifact_count++;
                        }
                    }
                }

                //ARTIFACT & SUB STAT DETAILS LIST
                div6 = document.createElement("div");
                div6.className="sub_stat_list_text";
                div6.innerHTML="Artifact & Sub Stats Details"
                document.getElementsByClassName("build_detail")[0].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="sub_stat_list";
                document.getElementsByClassName("build_detail")[0].appendChild(div6);

                for(let num in x[0].build_type[0]){
                    if(num.includes('main_stat')){
                        //SANDS
                        div6 = document.createElement("div");
                        div6.className="sub_artifact_detail";
                        document.getElementsByClassName("sub_stat_list")[0].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="sub_artifact_img";
                        div6.setAttribute("src",`./Images/Artifact_Icon/Sands_of_Eon.webp`);
                        document.getElementsByClassName("sub_artifact_detail")[0].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="sub_artifact_text";
                        div6.innerHTML=`: ${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("sub_artifact_detail")[0].appendChild(div6);

                        div6 = document.createElement("span");
                        div6.className="artifact_logo_name";
                        div6.innerHTML="Sands of Eon";
                        document.getElementsByClassName("sub_artifact_detail")[0].appendChild(div6);

                        //GOBLET
                        div6 = document.createElement("div");
                        div6.className="sub_artifact_detail";
                        div6.style.top='5vh';
                        document.getElementsByClassName("sub_stat_list")[0].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="sub_artifact_img";
                        div6.setAttribute("src",`./Images/Artifact_Icon/Goblet_of_Eonothem.webp`);
                        document.getElementsByClassName("sub_artifact_detail")[1].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="sub_artifact_text";
                        div6.innerHTML=`: ${x[0].build_type[0][num][1]}`;
                        document.getElementsByClassName("sub_artifact_detail")[1].appendChild(div6);

                        div6 = document.createElement("span");
                        div6.className="artifact_logo_name";
                        div6.innerHTML="Goblet of Enothem";
                        document.getElementsByClassName("sub_artifact_detail")[1].appendChild(div6);

                        //CIRCLET
                        div6 = document.createElement("div");
                        div6.className="sub_artifact_detail";
                        div6.style.top='10vh';
                        document.getElementsByClassName("sub_stat_list")[0].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="sub_artifact_img";
                        div6.setAttribute("src",`./Images/Artifact_Icon/Circlet_of_Logos.webp`);
                        document.getElementsByClassName("sub_artifact_detail")[2].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="sub_artifact_text";
                        div6.innerHTML=`: ${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("sub_artifact_detail")[2].appendChild(div6);

                        div6 = document.createElement("span");
                        div6.className="artifact_logo_name";
                        div6.innerHTML="Circlet of Logos";
                        document.getElementsByClassName("sub_artifact_detail")[2].appendChild(div6);
                    }

                    else if(num.includes('stat_priority')){
                        div6 = document.createElement("div");
                        div6.className="sub_stat_priority";
                        div6.innerHTML="Sub Stat Priority";
                        document.getElementsByClassName("sub_stat_list")[0].appendChild(div6);

                        for(i=0 ; i< x[0].build_type[0][num].length ; i++){
                            if(x[0].build_type[0][num][i] != ""){
                                div6 = document.createElement("div");
                                div6.className="sub_stat_priority_text";
                                div6.innerHTML=`${i+1}) ${x[0].build_type[0][num][i]}`;
                                document.getElementsByClassName("sub_stat_priority")[0].appendChild(div6);
                            }
                        }
                    }

                    else if(num.includes('talent_order')){

                        div6 = document.createElement("div");
                        div6.className="talent_list_text";
                        div6.innerHTML="Talent Order";
                        document.getElementsByClassName("build_detail")[0].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_list";
                        document.getElementsByClassName("build_detail")[0].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item";
                        div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("talent_priority_list")[0].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item_separator";
                        div6.innerHTML=" >  ";
                        document.getElementsByClassName("talent_priority_list")[0].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item";
                        div6.innerHTML=`${x[0].build_type[0][num][1]}`;
                        document.getElementsByClassName("talent_priority_list")[0].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item_separator";
                        div6.innerHTML=" >  ";
                        document.getElementsByClassName("talent_priority_list")[0].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item";
                        div6.innerHTML=`${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("talent_priority_list")[0].appendChild(div6);


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

                let button_select = 0;
                for (let num in x[0].build_type){
                    let div4 = document.createElement("div");
                    div4.className="build_button_item";
                    div4.setAttribute("type","submit");
                    div4.setAttribute("onclick",`build_detail_show('${x[0].name}','${num}', 1)`);
                    div4.innerHTML = `${x[0].build_type[num].built}`;
                    if(button_select == 0)
                        div4.style.backgroundImage = 'var(--selection)';
                    document.getElementsByClassName("build_button")[1].appendChild(div4);
                    button_select++;
                }

                let div5 = document.createElement("div");
                div5.className="build_detail";
                document.getElementsByClassName("character_details_set_1")[1].appendChild(div5);


                //WEAPON LIST
                let div6 = document.createElement("div");
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

                            div6 = document.createElement("div");
                            div6.className="weapon_number";
                            div6.innerHTML=weapon_count-9;  
                            document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);

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
                                ele.style.width = "28.8vw";
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


                // ARTIFACT LIST
                div6 = document.createElement("div");
                div6.className="artifact_list_text";
                div6.innerHTML="Artifacts";
                document.getElementsByClassName("build_detail")[1].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="artifact_list";
                document.getElementsByClassName("build_detail")[1].appendChild(div6);
                
                let artifact_count = 5;
                for(let num in x[0].build_type[0]){
                    if(num.includes('artifact')){
                        if(x[0].build_type[0][num][0] != ""){
                            let artifact_length = x[0].build_type[0][num].length;

                            if(artifact_length == 2){

                                div6 = document.createElement("div");
                                div6.className="artifact_list_item";
                                document.getElementsByClassName("artifact_list")[1].appendChild(div6);

                                div6 = document.createElement("img");
                                div6.className="artifact_list_item_img";
                                div6.setAttribute("src",`${x[0].build_type[0][num][1]}`);
                                div6.style.backgroundImage='var(--artifact_bg)';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_number";
                                div6.innerHTML='4';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("span");
                                div6.className="artifact_name";
                                div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                artifact_count++;
                            }
                            else if(artifact_length == 3){
                                div6 = document.createElement("div");
                                div6.className="artifact_list_item";
                                document.getElementsByClassName("artifact_list")[1].appendChild(div6);

                                div6 = document.createElement("img");
                                div6.className="artifact_list_item_img";
                                div6.setAttribute("src",`${x[0].build_type[0][num][1]}`);
                                div6.style.backgroundImage='var(--artifact_bg)';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("img");
                                div6.className="artifact_list_item_img";
                                div6.setAttribute("src",`${x[0].build_type[0][num][2]}`);
                                div6.style.backgroundImage='var(--artifact_bg)';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_number";
                                div6.innerHTML='2';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("div");
                                div6.className="artifact_number";
                                div6.innerHTML='2';
                                div6.style.left='4.1vw';
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                div6 = document.createElement("span");
                                div6.className="artifact_name";
                                div6.style.left='0.5vw';
                                div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                                document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                                artifact_count++;
                            }
                        }
                        else{
                            div6 = document.createElement("div");
                            div6.className="artifact_list_item";
                            div6.style.margin='0px';
                            div6.style.padding='0px';
                            document.getElementsByClassName("artifact_list")[1].appendChild(div6);

                            artifact_count++;
                        }
                    }
                }

                //ARTIFACT & SUB STAT DETAILS LIST
                div6 = document.createElement("div");
                div6.className="sub_stat_list_text";
                div6.innerHTML="Artifact & Sub Stats Details"
                document.getElementsByClassName("build_detail")[1].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="sub_stat_list";
                document.getElementsByClassName("build_detail")[1].appendChild(div6);

                for(let num in x[0].build_type[0]){
                    if(num.includes('main_stat')){
                        //SANDS
                        div6 = document.createElement("div");
                        div6.className="sub_artifact_detail";
                        document.getElementsByClassName("sub_stat_list")[1].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="sub_artifact_img";
                        div6.setAttribute("src",`./Images/Artifact_Icon/Sands_of_Eon.webp`);
                        document.getElementsByClassName("sub_artifact_detail")[3].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="sub_artifact_text";
                        div6.innerHTML=`: ${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("sub_artifact_detail")[3].appendChild(div6);

                        div6 = document.createElement("span");
                        div6.className="artifact_logo_name";
                        div6.innerHTML="Sands of Eon";
                        document.getElementsByClassName("sub_artifact_detail")[3].appendChild(div6);

                        //GOBLET
                        div6 = document.createElement("div");
                        div6.className="sub_artifact_detail";
                        div6.style.top='5vh';
                        document.getElementsByClassName("sub_stat_list")[1].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="sub_artifact_img";
                        div6.setAttribute("src",`./Images/Artifact_Icon/Goblet_of_Eonothem.webp`);
                        document.getElementsByClassName("sub_artifact_detail")[4].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="sub_artifact_text";
                        div6.innerHTML=`: ${x[0].build_type[0][num][1]}`;
                        document.getElementsByClassName("sub_artifact_detail")[4].appendChild(div6);

                        div6 = document.createElement("span");
                        div6.className="artifact_logo_name";
                        div6.innerHTML="Goblet of Enothem";
                        document.getElementsByClassName("sub_artifact_detail")[4].appendChild(div6);

                        //CIRCLET
                        div6 = document.createElement("div");
                        div6.className="sub_artifact_detail";
                        div6.style.top='10vh';
                        document.getElementsByClassName("sub_stat_list")[1].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="sub_artifact_img";
                        div6.setAttribute("src",`./Images/Artifact_Icon/Circlet_of_Logos.webp`);
                        document.getElementsByClassName("sub_artifact_detail")[5].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="sub_artifact_text";
                        div6.innerHTML=`: ${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("sub_artifact_detail")[5].appendChild(div6);

                        div6 = document.createElement("span");
                        div6.className="artifact_logo_name";
                        div6.innerHTML="Circlet of Logos";
                        document.getElementsByClassName("sub_artifact_detail")[5].appendChild(div6);
                    }
                    else if(num.includes('stat_priority')){
                        div6 = document.createElement("div");
                        div6.className="sub_stat_priority";
                        div6.innerHTML="Sub Stat Priority";
                        document.getElementsByClassName("sub_stat_list")[1].appendChild(div6);

                        for(i=0 ; i< x[0].build_type[0][num].length ; i++){
                            if(x[0].build_type[0][num][i] != ""){
                                div6 = document.createElement("div");
                                div6.className="sub_stat_priority_text";
                                div6.innerHTML=`${i+1}) ${x[0].build_type[0][num][i]}`;
                                document.getElementsByClassName("sub_stat_priority")[1].appendChild(div6);
                            }
                        }
                    }
                    else if(num.includes('talent_order')){

                        div6 = document.createElement("div");
                        div6.className="talent_list_text";
                        div6.innerHTML="Talent Order";
                        document.getElementsByClassName("build_detail")[1].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_list";
                        document.getElementsByClassName("build_detail")[1].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item";
                        div6.innerHTML=`${x[0].build_type[0][num][0]}`;
                        document.getElementsByClassName("talent_priority_list")[1].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item_separator";
                        div6.innerHTML=" >  ";
                        document.getElementsByClassName("talent_priority_list")[1].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item";
                        div6.innerHTML=`${x[0].build_type[0][num][1]}`;
                        document.getElementsByClassName("talent_priority_list")[1].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item_separator";
                        div6.innerHTML=" >  ";
                        document.getElementsByClassName("talent_priority_list")[1].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="talent_priority_item";
                        div6.innerHTML=`${x[0].build_type[0][num][2]}`;
                        document.getElementsByClassName("talent_priority_list")[1].appendChild(div6);

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Build Detail Swapper
function build_detail_show(char_name ,build_no, set_no){
    // console.log(char_name ,build_no, set_no);

    fetch('./data/data.json')
    .then(response => response.json())
    .then(json => { 
        let x = json.filter((item) => {return item.name == char_name});

        let myNode = document.getElementsByClassName("build_button")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

        let button_select = 0;
        for (let num in x[0].build_type){
            let div4 = document.createElement("div");
            div4.className="build_button_item";
            div4.setAttribute("type","submit");
            div4.setAttribute("onclick",`build_detail_show('${x[0].name}','${num}','${set_no}')`);
            div4.innerHTML = `${x[0].build_type[num].built}`;
            if(button_select == build_no)
                div4.style.backgroundImage = 'var(--selection)';
            document.getElementsByClassName("build_button")[set_no].appendChild(div4);
            button_select++;
        }

        myNode = document.getElementsByClassName("weapon_list")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

        let weapon_count = 0;
        if(set_no == 0)
            weapon_count = 0;
        else
            weapon_count = 10;

        for(let num in x[0].build_type[build_no]){
            if(num.includes('weapon'))
                if(x[0].build_type[build_no][num][0] != ""){

                    div6 = document.createElement("div");
                    div6.className="weapon_list_item";          
                    document.getElementsByClassName("weapon_list")[set_no].appendChild(div6);

                    div6 = document.createElement("div");
                    div6.className="weapon_number";
                    if(set_no == 0)
                        div6.innerHTML=weapon_count+1;
                    else
                        div6.innerHTML=weapon_count-9; 
                    document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);

                    div6 = document.createElement("img");
                    div6.className="weapon_list_item_img";  
                    div6.setAttribute("src",`${x[0].build_type[build_no][num][1]}`);

                    let weapon_quality = `${x[0].build_type[build_no][num][0]}`;
                    if(weapon_quality.includes('(5☆'))
                        div6.style.backgroundImage='var(--star5)';
                    else if(weapon_quality.includes('(4☆'))
                        div6.style.backgroundImage='var(--star4)';
                    else if(weapon_quality.includes('(3☆'))
                        div6.style.backgroundImage='var(--star3)';
                    document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);
                                
                    div6 = document.createElement("span");
                    div6.className="weapon_name";
                    div6.innerHTML=`${x[0].build_type[build_no][num][0]}`;
                    document.getElementsByClassName("weapon_list_item")[weapon_count].appendChild(div6);
                           
                    weapon_count++;
                    if(weapon_count == 6){
                        var ele=document.getElementsByClassName("weapon_list")[set_no];
                        ele.style.width = "28.8vw";
                    }
                    if(weapon_count == 16){
                        var ele=document.getElementsByClassName("weapon_list")[set_no];
                        ele.style.width = "28.8vw";
                    }
                }
                else{
                    weapon_count++;

                    div6 = document.createElement("div");
                    div6.className="weapon_list_item";     
                    div6.style.width="0vw"; 
                    div6.style.margin="0px";    
                    document.getElementsByClassName("weapon_list")[set_no].appendChild(div6);
                }
        }

        myNode = document.getElementsByClassName("artifact_list")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

        let artifact_count = 0;
        if(set_no == 0)
            artifact_count = 0;
        else
            artifact_count = 5;

        for(let num in x[0].build_type[build_no]){
            if(num.includes('artifact')){
                if(x[0].build_type[build_no][num][0] != ""){
                    let artifact_length = x[0].build_type[build_no][num].length;

                    if(artifact_length == 2){

                        div6 = document.createElement("div");
                        div6.className="artifact_list_item";
                        document.getElementsByClassName("artifact_list")[set_no].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="artifact_list_item_img";
                        div6.setAttribute("src",`${x[0].build_type[build_no][num][1]}`);
                        div6.style.backgroundImage='var(--artifact_bg)';
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="artifact_number";
                        div6.innerHTML='4';
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="artifact_name";
                        div6.innerHTML=`${x[0].build_type[build_no][num][0]}`;
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        artifact_count++;
                    }
                    else if(artifact_length == 3){
                        div6 = document.createElement("div");
                        div6.className="artifact_list_item";
                        document.getElementsByClassName("artifact_list")[set_no].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="artifact_list_item_img";
                        div6.setAttribute("src",`${x[0].build_type[build_no][num][1]}`);
                        div6.style.backgroundImage='var(--artifact_bg)';
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        div6 = document.createElement("img");
                        div6.className="artifact_list_item_img";
                        div6.setAttribute("src",`${x[0].build_type[build_no][num][2]}`);
                        div6.style.backgroundImage='var(--artifact_bg)';
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="artifact_number";
                        div6.innerHTML='2';
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="artifact_number";
                        div6.innerHTML='2';
                        div6.style.left='4.1vw';
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        div6 = document.createElement("div");
                        div6.className="artifact_name";
                        div6.style.left='0.5vw';
                        div6.innerHTML=`${x[0].build_type[build_no][num][0]}`;
                        document.getElementsByClassName("artifact_list_item")[artifact_count].appendChild(div6);

                        artifact_count++;
                    }
                }
                else{
                    div6 = document.createElement("div");
                    div6.className="artifact_list_item";
                    div6.style.margin='0px';
                    div6.style.padding='0px';
                    document.getElementsByClassName("artifact_list")[set_no].appendChild(div6);

                    artifact_count++;
                }
            }
        }

        myNode = document.getElementsByClassName("sub_stat_list")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

        myNode = document.getElementsByClassName("talent_priority_list")[set_no];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

        let choice = 0;
        if(set_no == 0)
            choice = 0;
        else
            choice = 3;

        for(let num in x[0].build_type[build_no]){
            if(num.includes('main_stat')){
                if(num.includes('main_stat')){
                    //SANDS
                    div6 = document.createElement("div");
                    div6.className="sub_artifact_detail";
                    document.getElementsByClassName("sub_stat_list")[set_no].appendChild(div6);

                    div6 = document.createElement("img");
                    div6.className="sub_artifact_img";
                    div6.setAttribute("src",`./Images/Artifact_Icon/Sands_of_Eon.webp`);
                    document.getElementsByClassName("sub_artifact_detail")[choice].appendChild(div6);

                    div6 = document.createElement("div");
                    div6.className="sub_artifact_text";
                    div6.innerHTML=`: ${x[0].build_type[build_no][num][0]}`;
                    document.getElementsByClassName("sub_artifact_detail")[choice].appendChild(div6);

                    div6 = document.createElement("span");
                    div6.className="artifact_logo_name";
                    div6.innerHTML="Sands of Eon";
                    document.getElementsByClassName("sub_artifact_detail")[choice].appendChild(div6);

                    //GOBLET
                    div6 = document.createElement("div");
                    div6.className="sub_artifact_detail";
                    div6.style.top='5vh';
                    document.getElementsByClassName("sub_stat_list")[set_no].appendChild(div6);

                    div6 = document.createElement("img");
                    div6.className="sub_artifact_img";
                    div6.setAttribute("src",`./Images/Artifact_Icon/Goblet_of_Eonothem.webp`);
                    document.getElementsByClassName("sub_artifact_detail")[choice+1].appendChild(div6);

                    div6 = document.createElement("div");
                    div6.className="sub_artifact_text";
                    div6.innerHTML=`: ${x[0].build_type[build_no][num][1]}`;
                    document.getElementsByClassName("sub_artifact_detail")[choice+1].appendChild(div6);

                    div6 = document.createElement("span");
                    div6.className="artifact_logo_name";
                    div6.innerHTML="Goblet of Enothem";
                    document.getElementsByClassName("sub_artifact_detail")[choice+1].appendChild(div6);

                    //CIRCLET
                    div6 = document.createElement("div");
                    div6.className="sub_artifact_detail";
                    div6.style.top='10vh';
                    document.getElementsByClassName("sub_stat_list")[set_no].appendChild(div6);

                    div6 = document.createElement("img");
                    div6.className="sub_artifact_img";
                    div6.setAttribute("src",`./Images/Artifact_Icon/Circlet_of_Logos.webp`);
                    document.getElementsByClassName("sub_artifact_detail")[choice+2].appendChild(div6);

                    div6 = document.createElement("div");
                    div6.className="sub_artifact_text";
                    div6.innerHTML=`: ${x[0].build_type[build_no][num][2]}`;
                    document.getElementsByClassName("sub_artifact_detail")[choice+2].appendChild(div6);

                    div6 = document.createElement("span");
                    div6.className="artifact_logo_name";
                    div6.innerHTML="Circlet of Logos";
                    document.getElementsByClassName("sub_artifact_detail")[choice+2].appendChild(div6);
                }
            }

            else if(num.includes('stat_priority')){
                div6 = document.createElement("div");
                div6.className="sub_stat_priority";
                div6.innerHTML="Sub Stat Priority";
                document.getElementsByClassName("sub_stat_list")[set_no].appendChild(div6);

                for(i=0 ; i< x[0].build_type[build_no][num].length ; i++){
                    if(x[0].build_type[build_no][num][i] != ""){
                        div6 = document.createElement("div");
                        div6.className="sub_stat_priority_text";
                        div6.innerHTML=`${i+1}) ${x[0].build_type[build_no][num][i]}`;
                        document.getElementsByClassName("sub_stat_priority")[set_no].appendChild(div6);
                    }
                }
            }

            else if(num.includes('talent_order')){
                div6 = document.createElement("div");
                div6.className="talent_priority_item";
                div6.innerHTML=`${x[0].build_type[build_no][num][0]}`;
                document.getElementsByClassName("talent_priority_list")[set_no].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="talent_priority_item_separator";
                div6.innerHTML=" >  ";
                document.getElementsByClassName("talent_priority_list")[set_no].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="talent_priority_item";
                div6.innerHTML=`${x[0].build_type[build_no][num][1]}`;
                document.getElementsByClassName("talent_priority_list")[set_no].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="talent_priority_item_separator";
                div6.innerHTML=" >  ";
                document.getElementsByClassName("talent_priority_list")[set_no].appendChild(div6);

                div6 = document.createElement("div");
                div6.className="talent_priority_item";
                div6.innerHTML=`${x[0].build_type[build_no][num][2]}`;
                document.getElementsByClassName("talent_priority_list")[set_no].appendChild(div6);
            }

        }
    });
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//CHARACTER FILTER
let quality = null;
function quality_set(val){
    if(quality != val){
        if(val == '4'){
            document.getElementsByClassName("button")[1].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[0].style.backgroundColor="#66a0cf";
            quality = val;
        }
        else if(val == '5'){
            document.getElementsByClassName("button")[0].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[1].style.backgroundColor="#66a0cf";
            quality = val;
        }  
    }
    else if(quality == val){
        document.getElementsByClassName("button")[0].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[1].style.backgroundColor="#66a0cf";
        quality = null;
    }
}

let vision = null;
function vision_set(val){
    if(vision != val){
        if(val == 'Anemo'){
            document.getElementsByClassName("button")[2].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
            vision = val;
        }
        else if(val == 'Cryo'){
            document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[3].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
            vision = val;
        }
        else if(val == 'Dendro'){
            document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[4].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
            vision = val;
        } 
        else if(val == 'Electro'){
            document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[5].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
            vision = val;
        }  
        else if(val == 'Geo'){
            document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[6].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
            vision = val;
        } 
        else if(val == 'Hydro'){
            document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[7].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
            vision = val;
        } 
        else if(val == 'Pyro'){
            document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[8].style.backgroundColor="#1964aa";
            vision = val;
        } 
    }
    else if(vision == val){
        document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
        vision = null;
    }
}

let weapon = null;
function weapon_set(val){
    if(weapon != val){
        if(val == 'Bow'){
            document.getElementsByClassName("button")[9].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[10].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[11].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[12].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[13].style.backgroundColor="#66a0cf";
            weapon = val;
        }
        else if(val == 'Catalyst'){
            document.getElementsByClassName("button")[9].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[10].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[11].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[12].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[13].style.backgroundColor="#66a0cf";
            weapon = val;
        }
        else if(val == 'Claymore'){
            document.getElementsByClassName("button")[9].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[10].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[11].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[12].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[13].style.backgroundColor="#66a0cf";
            weapon = val;
        } 
        else if(val == 'Polearm'){
            document.getElementsByClassName("button")[9].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[10].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[11].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[12].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[13].style.backgroundColor="#66a0cf";
            weapon= val;
        }  
        else if(val == 'Sword'){
            document.getElementsByClassName("button")[9].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[10].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[11].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[12].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[13].style.backgroundColor="#1964aa";
            weapon = val;
        }
    }
    else if(weapon == val){
        document.getElementsByClassName("button")[9].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[10].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[11].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[12].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[13].style.backgroundColor="#66a0cf";
        weapon = null;
    }
}

let region = null;
function country_set(val){
    if(region != val){
        if(val == 'Mondstadt'){
            document.getElementsByClassName("button")[14].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[15].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[16].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[17].style.backgroundColor="#66a0cf";
            region = val;
        }
        else if(val == 'Liyue'){
            document.getElementsByClassName("button")[14].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[15].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[16].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[17].style.backgroundColor="#66a0cf";
            region = val;
        }
        else if(val == 'Inazuma'){
            document.getElementsByClassName("button")[14].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[15].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[16].style.backgroundColor="#1964aa";
            document.getElementsByClassName("button")[17].style.backgroundColor="#66a0cf";
            region = val;
        } 
        else if(val == 'Sumeru'){
            document.getElementsByClassName("button")[14].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[15].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[16].style.backgroundColor="#66a0cf";
            document.getElementsByClassName("button")[17].style.backgroundColor="#1964aa";
            region = val;
        }  
    }
    else if(region == val){
        document.getElementsByClassName("button")[14].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[15].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[16].style.backgroundColor="#66a0cf";
        document.getElementsByClassName("button")[17].style.backgroundColor="#66a0cf";
        region = null;
    }
}


function submission_confirm(ch){
    if(ch == 'y'){
        fetch('./data/data.json')
        .then(response => response.json())
        .then(json => { 
        let x = json.filter((item) => {return item});
            if(quality != null){
                x = x.filter((val) => {
                for(let i=0 ; i < x.length ; i++)
                if(val.quality == `${quality}`)
                    return val;
                });
            }
            if(vision != null){
                x = x.filter((val) => {
                for(let i=0 ; i < x.length ; i++)
                if(val.vision[0] == `${vision}`)
                    return val;
                });
            }
            if(weapon != null){
                x = x.filter((val) => {
                for(let i=0 ; i < x.length ; i++)
                if(val.weapon[0] == `${weapon}`)
                    return val;
                });
            }
            if(region != null){
                x = x.filter((val) => {
                for(let i=0 ; i < x.length ; i++)
                if(val.country == `${region}`)
                    return val;
                });
            }

            if(x.length != 0){
                const myNode = document.getElementsByClassName("charcter_scroller")[0];
                while (myNode.firstChild)
                    myNode.removeChild(myNode.lastChild);

                for(let i=0 ; i < x.length ; i++){
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
                document.getElementsByClassName("custom_filter_page")[0].style.top = "-80vh";
                document.getElementsByClassName("custom_filter_page")[0].style.opacity = "0";
            }
            else if(x.length == 0){
                button_clear();
                quality = null;
                vision = null;
                weapon = null;
                region = null;

                alert("No Characters found, please change filter !");
            }
        });
    }
    else if(ch == 'n'){

        button_clear();

        const myNode = document.getElementsByClassName("charcter_scroller")[0];
        while (myNode.firstChild)
            myNode.removeChild(myNode.lastChild);

        document.getElementsByClassName("custom_filter_page")[0].style.top = "-80vh";
        document.getElementsByClassName("custom_filter_page")[0].style.opacity = "0";
        quality = null;
        vision = null;
        weapon = null;
        region = null;

        character_page_scroll_element();
    }
}

function button_clear(){
    document.getElementsByClassName("button")[0].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[1].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[2].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[3].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[4].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[5].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[6].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[7].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[8].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[9].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[10].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[11].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[12].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[13].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[14].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[15].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[16].style.backgroundColor="#66a0cf";
    document.getElementsByClassName("button")[17].style.backgroundColor="#66a0cf";
}
















//Scroller Element
function character_page_scroll_element(){
    fetch('./data/data.json')
    .then(response => response.json())
    .then(json => { 
        let x = json.filter((item) => {return item});

        // x = x.filter((val) => {
        //     for(let i=0 ; i < x.length ; i++)
        //         if(val.weapon[0] == 'Sword')
        //             return val;
        // });

        for(let i=0 ; i < x.length ; i++){
            
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
  "https://ik.imagekit.io/agents/Images/Home_Page/Monstadt.jpg",
  "https://ik.imagekit.io/agents/Images/Home_Page/Liyue.png", 
  "https://ik.imagekit.io/agents/Images/Home_Page/Inazuma.png",
  "https://ik.imagekit.io/agents/Images/Home_Page/Sumeru.jpg"
];
function bg_change(){
    const temp = setInterval(() =>{
        document.getElementsByClassName("background_image")[0].style.backgroundImage = `url(${images[Math.floor(Math.random() * 4)]})`;
    }, 5000);
}
bg_change();




















// ONLY FOR TESTING BELOW
// fetch('./data/data.json')
// .then(response => response.json())
// .then(json => { 
//     let x = json.filter((item) => { return item.name == "Bennett";});

    // if(x[0] != null)
        
    //     console.log(x[0].build_type);

    // for (let key in x[0].build_type)
    //     console.log(key);

// });

// console.log(json);
// console.log(json.filter((item) => { return item.id == 2;}));
