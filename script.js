
// to display name,region,sub-region,population

var xhr=new XMLHttpRequest();

xhr.onload=function(){
    var t=JSON.parse(this.response);
    const a=t.forEach((Element)=>{
        console.log(Element.name,Element.region,Element.subregion,Element.population)
    })}


xhr.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();

// to display flag

var xhr=new XMLHttpRequest();

xhr.onload=function(){
    var t=JSON.parse(this.response);
    const a=t.forEach((Element)=>{
        console.log(Element.flag)
    })}


xhr.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();

// to compare two JSON have the same properties without order

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

    
    JSON.stringify(obj1)===JSON.stringify(obj2)
    // false
    
    _.isEqual(obj1, obj2)
    //true
