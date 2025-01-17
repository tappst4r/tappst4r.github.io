//linked to id in html
const btnCount = document.getElementByID("btnCount");

const txtCounter = document.getElementByID("txtCounter");

let count = 0;

//lambda function
btnCount.addEventListener("click", () => {
    count = count + 1;
    txtCounter.textContent = count;
    console.log(count);
    console.log(txtCounter.textContent);
    console.log("Button clicked");
})
