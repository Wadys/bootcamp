function myDisplayer(someValue) {
    document.getElementById("demo").innerHTML = someValue;
}

let myPromise = new Promise(function (myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    req.onload = function () {
        if (req.status == 200) {
        myResolve(req.response);
        } else {
        myReject("File not Found");
        }
    };
    req.send();
});

myPromise.then(
    function (value) {
        myDisplayer(value);
    },
    function (error) {
        myDisplayer(error);
    }
);