// const signUp = document.querySelector (".signUp")
// signUp.addEventListener("click", mySignUp)
// function mySignUp(){
//     window.open("form.html")
// }


const products = [
    { 
       id: 1,
      name: "shoe", 
      image: "./image/menshoes2.jpg",
      category: "men",
       price: 400,
        description: 
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
    {
        id: 2,
        name: "laptop",
        image: "./image/laptop.jpg",
        category: "electronics",
        price: 400000, description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },

    {
        id: 3,
        name: "Apple laptop",
        image: "./image/applelaptop.jpg",
        category: "electronics",
        price: 500000,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },

    {
        id: 4,
        name: "bag",
        image: "./image/bagmen.jpg",
        category: "men",
        price: 500,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
    {
        id: 5,
        name: "bag",
        image: "./image/bagwomen.jpg",
        category: "women",
        price: 500,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
    {
        id: 6,
        name: "necklace",
        image: "./image/necklace.jpg",
        category: "women",
        price: 500,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
];

function myProducts() {
    let displayProducts = "";
    products.forEach((product) =>{
        displayProducts +=`
        <div class="col-md-4 mb-5">
        <div class="card" style="">
            <img src="${product.image}" class="card-img-top" alt="..." width= "50%">
            <h4 class="text">${product.name}</h4>
            <h4 class="text">${product.category}</h4>
            <hr>
            <h4 class="text">${product.price}</h4>
            <h4 class="text">${product.description}</h4>
            <hr>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>

         </div>
        </div>
        `;
    });

    // Set the innerHTML outside the loop
    document.getElementById("product").innerHTML = displayProducts;
    
}
myProducts();

