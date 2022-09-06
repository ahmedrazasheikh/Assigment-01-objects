var a = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]


var maindiv = document.createElement("div")
maindiv.setAttribute("class", "start")
document.body.appendChild(maindiv)
console.log(document.childNodes[1].children[1].children[1])
var x;
var y;
var val1;
var val2;


for (var key in a) {
    // console.log(key + typeof(key))

    if (key === "0") {
        val1 = a[key]
        console.log(val1)
    }
else{
    val2 = a[key]
    console.log(val2)
}

}

for(var key in val1){
    x =   key + " : "  + val1[key]
 var paragraph = document.createElement("p")
 paragraph.textContent = x
 maindiv.appendChild(paragraph)
}


for(var key1 in val2){
    // console.log()
  y =  key1 + " : "  + val2[key1]
// console.log(y)
  

var paragraph = document.createElement("p")
paragraph.textContent = y
maindiv.appendChild(paragraph)


}









// }
// //   console.log(x )
// var j = a[0]
// var l  = a[1]


// for (var key in val1) {
//     var n = key


//     if(key === "powers"){
//       var n = val1[key]
//       console.log(n)
//       for(var i = 0 ; i < n.length ; i++){
//         alert(n[i])
//       }
//     }
//     var e = key
//     // console.log(e + " : " + n)

// }
