var currentData = {
    business:"",
    location:""

};
var storage = {};
var currPlaceData = (entries) =>{
     storage = entries;
};

export { 
    storage, 
    currPlaceData,
    currentData, };