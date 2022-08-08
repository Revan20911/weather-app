
export const getQuery = ((input) => {

    const locationData = input.value;

    function getLocation(){
        
        if(locationData){
    
            return locationData
            .replace(/(\s+$|^\s+)/g, '') 
            .replace(/(,\s+)/g, ',') 
            .replace(/(\s+,)/g, ',') 
            .replace(/\s+/g, '+');
        }
    
        return '';
    }

    return{ getLocation };
});





