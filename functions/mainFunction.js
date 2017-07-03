module.exports=function(string){
    var monthNames = new Array("January", "February", "March", 
    "April", "May", "June", "July", "August", "September", 
    "October", "November", "December");
    var value1=Date.parse(string);
    var value2=newDate(string).getDate();
    var value3=newDate(string);
    var unix1=monthNames[value3.getMonth()]+" "+value2+", "+value3.getFullYear();
    var results;
    if(!value1&&value2)
        results={
            unix:parseDate(unix1),
            natural:unix1
        };
    else if(value1&&!value2)
        results={
            unix:value1,
            natural:string
        };
    else
        results={
            unix:null,
            natural:null
        };
        return results;
};
function parseDate(value){
    return Date.parse(value);
}
function newDate(string){
    return new Date(parseInt(string));
}