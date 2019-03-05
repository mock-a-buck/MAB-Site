// Variables
var imgRoot = "assets/img/products/"
var comingSoon = "assets/img/coming-soon.jpg"


// App
var gallery = new Vue({
    el: '#mab-gallery',
    data: {
        products: [
            { name: "Fukencio", price: 800, img: imgRoot + "fukencio_hoodie/main.png", link: "products/fukencio.html" },
            { name: "Tera", price: 800, img: imgRoot + "tera_hoodie/alt.png", link: "products/tera.html" },
            { name: "Hoodie Fukencio", price: 800, img: imgRoot + "fukencio_hoodie/main.png", link: "products/fukencio.html" },

        ]
    }
})