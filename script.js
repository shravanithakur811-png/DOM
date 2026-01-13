 function changeColor(color) {
        const carImage = document.getElementById("carImage");
        const cartBtn = document.getElementById("cartBtn");
        const carTag = document.getElementById("carTag");


        if (color === "red") {
            carImage.src = "./assets/redCar.webp";
            cartBtn.style.background = "red";
            carTag.style.background = "red";

        }
        else if (color === "gray") {
            carImage.src = "./assets/grayCar.avif";
            cartBtn.style.background = "gray";
            carTag.style.background = "gray";
        }
        else if (color === "black") {
            carImage.src = "./assets/blackCar.avif";
            cartBtn.style.background = "black";
            carTag.style.background = "black";
        }
    }