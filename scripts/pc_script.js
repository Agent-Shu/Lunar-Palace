let x = 0;

fetch('./data/data.json')

.then(response => response.json())

.then((json) => {
    
    x = json.filter((item) => { return item.id == 2;});

    if(x[0] != null)
        console.log(x);
 
});




























// console.log(json);

// console.log(json.filter((item) => { return item.id == 2;}));