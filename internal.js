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
        price: '$30',
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
    {
        id: 2,
        name: "laptop",
        image: "./image/laptop.jpg",
        category: "electronics",
        price: '$250',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },

    {
        id: 3,
        name: "Apple laptop",
        image: "./image/applelaptop.jpg",
        category: "electronics",
        price: '$320',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },

    {
        id: 4,
        name: "bag",
        image: "./image/bagmen.jpg",
        category: "men",
        price: '$45',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
    {
        id: 5,
        name: "bag",
        image: "./image/bagwomen.jpg",
        category: "women",
        price: '$20',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
    {
        id: 6,
        name: "necklace",
        image: "./image/necklace.jpg",
        category: "women",
        price: '$15',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    },
];

// console.log(products.slice(0, 8));
function filterProduct() {
    const filterButtons = document.querySelectorAll(".filter-button")
    filterButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const categoryFilter = e.target.dataset.filter
            const productFilter = products.filter((product) => {
                return product.category === categoryFilter || categoryFilter === "all";
            }

                // console.log(product)
            )
            myProducts(productFilter)
            // console.log(productFilter);

        })
    })
    console.log(filterButtons);
}
filterProduct()

function myProducts(productList) {
    console.log(productList);

    let displayProducts = "";
    if (productList) {
        productList.map((product) => {
            displayProducts += `
        <div class="col-md-4 mb-5">
            <div class="card  card-section" style="" >
                <img src="${product.image}" class="card-img-top" alt="..." width= "50%">
                <h4 class="text">${product.name}</h4>
                <h4 class="text">${product.price}</h4>
                <hr>
                <h5 class="text">${product.description}</h5>
                <hr>
                <button class = "btn btn-success">Add to Cart</button>
               
            </div>
            
        
        </div>
            `;
        });
    } else {
        products.slice(0, 3).map((product) => {
            displayProducts += `
         <div class="col-md-4 mb-5">
             <div class="card  card-section" style="" >
                <img src="${product.image}" class="card-img-top" alt="..." width= "50%">
                <h4 class="text">${product.name}</h4>
                <h4 class="text">${product.price}</h4>
                <i class="fa-sharp fa-regular fa-plus-large"></i>
                <hr>
                <h5 class="text">${product.description}</h5>
                <hr>
                <button class = "btn btn-success">Add to Cart</button>
             </div>
         </div>
            `;
        });

    }



    // Set the innerHTML outside the loop
    document.getElementById("product").innerHTML = displayProducts;

}
myProducts();


