let x = 0;

fetch('./data/data.json')
.then(response => response.json())
.then(json => { 

    
    x = json.filter((item) => { return item.name == "Albedo";});

    // if(x[0] != null)
        // console.log(x[0].img[0]);

    // document.getElementsByClassName("image")[0].src = x[0].img[0];

});











let ch = 0;
const temp = setInterval(() =>{
    ch = Math.floor(Math.random() * 4);
    console.log(ch);

    if(ch == 0)
        document.getElementsByClassName("home_page_image")[0].src = "./Images/Home_Page/Monstadt.jpg" ;

    if(ch == 1)
        document.getElementsByClassName("home_page_image")[0].src = "./Images/Home_Page/Liyue.png" ;
        
    if(ch == 2)
        document.getElementsByClassName("home_page_image")[0].src = "./Images/Home_Page/Inazuma.png" ;

    if(ch == 3)
        document.getElementsByClassName("home_page_image")[0].src = "./Images/Home_Page/Sumeru.jpg" ;
   
}, 3000);






















// console.log(json);

// console.log(json.filter((item) => { return item.id == 2;}));



