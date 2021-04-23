require("regenerator-runtime/runtime");

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

//testfunction
const sum = function (a, b) {
    return a + b;
}

module.exports = {
    postData,
    sum
};