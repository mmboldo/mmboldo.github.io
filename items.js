// this is the basic grocery list. It contains the most usual things Bob buys when he visits a grocery store.
var items = ["Milk", "Eggs", "Diapers", "Brocolli", "Apples (6)", "Cod fish", "Shrimps", "Spaghetti no.3", "Yogurt"];

function arrayReader(s,f){
    if(s === undefined){
        s=0;
    }
    if (f === undefined){
        f = items.length;
    }

    for (let i = s; i < f; i++){
        var div = document.createElement('div');
        var hr = document.createElement('hr');
        div.textContent = items[i];
        div.setAttribute('class', 'grocery_item');
        document.getElementById('iContainer').appendChild(div);
        document.getElementById('iContainer').appendChild(hr);
    }
}

var index = items.length;

console.log(items);

function readItems(){    
    var input = document.getElementById('inp').value;
    if (input != null && input != ''){
        var itemsToInsert = input.split(",");
        for (let i=0; i<itemsToInsert.length; i++){
            var item = itemsToInsert[i].trim();
            item = capitalizeFirstLetter(item);
            console.log(item);
            items.push(item);
        }
        arrayReader(index, items.length);
        index = items.length;
    } 
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function paste(){
    //to be implemented. It will get the clipboard text and translate it to an array
    let clip;
}

function organize(){
    // needed to organize the items that may come from the clipboard. 
    // They must be separated by ","
    // If no quantity given, assume 1    
}

function createForm(){

}