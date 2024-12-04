let testObj ={
    a:10,
    b:30,
    z:50,
    x:40,
    h:21,
    t:20,
    u:2
}
let tempObj ={};
sortObject = () => {
    let allKeys =   Object.keys(testObj);//Gives keys of the object
    let allValues = Object.values(testObj);//Gives values

    allValues.sort((a,b) => a-b);
    console.log(allValues);//ascending

    allKeys.sort();
    console.log(allKeys);
    
    for(let key of allKeys){
        tempObj[key]  = testObj[key];
        //console.log("insid loop",i)
    }
};

sortObject();
for(let key in tempObj){
 console.log(key +"::"+tempObj[key]);
}