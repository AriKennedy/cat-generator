const api_url =
    "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_EKtMQOE0QUuQOVLHF3rXHXio4iH0bP4aXqiL1VnqCtxnkaZDLbTs2atV8FYQ9NUt"; 
async function getCat() {
    document.querySelectorAll("img#cat").forEach(image => image.remove());
    const response = await fetch(api_url);
    const data = await response.json();
    const cat = data[0];
    let image = cat.url;
    let img = document.createElement("img");
    let img_div = document.getElementById("cat-img");
    img.src = image
    img_div.append(img)
    img.setAttribute("id", "cat");
}

let button = document.getElementById("generate-this-image");
button.addEventListener("click", () => {
  getCat()
});
