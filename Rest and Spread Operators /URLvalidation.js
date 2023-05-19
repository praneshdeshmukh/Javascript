const validURL = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]{2,}$/;

const url = prompt("Enter URL Link!")

if (validURL.test(url)) {
    console.log("Valid Url Link");
}
else {
    console.log("Invalid Url Link");
}
