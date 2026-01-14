function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error)
        });
    }
loadData();