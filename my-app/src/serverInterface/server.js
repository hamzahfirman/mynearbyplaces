let api = "https://hamzahfirman-nearbyplaces-api.herokuapp.com";
// A Function that will fecth all entries
let server = {
    fetchPlaces: () => {return(fetch(api + "/places").then(x => x.json()));},
    fetchReviews: (typeid) => {return(fetch(api + `/reviews/${typeid}`).then(x => x.json()));},
    // pushAReview: () => { return(fetch(api))}
    // pushAReview: () => {return(fetch(api + "/search").then(x => x.json()));},
    pushAPlace: (data) => {return (fetch(api + "/place", {
                method: 'POST',
                header: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
    }))}};


export default server;