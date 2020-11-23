import data from './data';

// A Function that will fecth all entries
let getData= (businessType) => {
    // Later On: We will connect to a backend and fetch all the entries from it. 

    // alert(cat);
    let found = data.find(x => x.type === businessType.toLowerCase());
    return found;
}

// Object 
let server = {
    fetchEntries: getData
};

export default server;