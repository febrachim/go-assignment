console.log("app started");

window.addEventListener('load', async e => {
    await renderHeader('header');
    await renderFooter();
});


function renderHeader() {
    fetch(`./header.html`)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
            console.log("header loaded");
        });
}


function renderFooter() {
    fetch("./footer.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
            console.log("footer loaded");
        });
}