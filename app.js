
fetch("https://api.escuelajs.co/api/v1/products/")
    .then((data) => data.json())
    .then(result => {
        console.log("result" , result)
        renderUI(result)
    })
    .catch(error => {
       console.log("error" , error)
    })


const renderUI = (items) => {
    const parent = document.getElementById("parent")
    for (var product of items) {
        console.log(product, "product")
        parent.innerHTML += ` <div class="col-lg-3">
            <div class="card" style="width: 100%;">
                <img src=${product.images[0]} style="width: 100%; height: 200px;"  class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title"> ${product.title} </h5>
                <p class="card-text"> ${product.description.slice(0 , 50)} </p>
                </div>
            </div>
        </div>`

    }
}
//  renderUI = async () => {
//     await fetch("https://api.escuelajs.co/api/v1/products/")
//  }
