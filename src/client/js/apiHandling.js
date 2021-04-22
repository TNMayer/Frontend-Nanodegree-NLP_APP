//tie meaningcloud API
const getEndpointData =  async (url) => {
    const result = await fetch(url); // here we send our request to the (Fake-)API
    try {
        const data = await result.json(); // wait until we get back data or throw an error
        console.log(data);
        return data;
    } catch(error) {
        // handle error if it exists
        console.log("Error: ", error);
    }
}

// post
const postData = async (url = "", data = {}) => {
    // console.log(data);
    const response = await fetch(url, {
        method: 'POST', // GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData
    } catch(error) {
        console.log("Error: ", error);
    }
};

export { getEndpointData, postData };