require("regenerator-runtime/runtime");

// post
const postData = async (url = "", data = {}) => {
    if (checkUrl(url)) {
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
            return newData;
        } catch(error) {
            console.log("Error: ", error);
        }
    } else {
        console.log("ERROR: The URL you are trying to fetch is invalid");
    }
};

const checkUrl = function(url) {
    if ((url === "/sentimentAPI")) {
        return true
    } else {
        try {
            new URL(url);
        } catch (error) {
            return false;
        }
        
        return true;
    }
}

module.exports = {
    postData,
    checkUrl
};