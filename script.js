
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