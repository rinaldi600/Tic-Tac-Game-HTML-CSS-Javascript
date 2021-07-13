const box = document.querySelectorAll(".box");
const select = document.querySelector(".select");
const layer = document.querySelector(".layer");

for (const x of box) {
    x.addEventListener("click",function () {
        select.classList.remove("display");
        select.classList.add("opacity");
        x.classList.add("option");
        x.style.zIndex = "9999";
        layer.classList.toggle("preferences");
    });
}

function winsGame(x,y,z,finish) {
    if (box[x].children[0].getAttribute('src') === "cancel%20(1).png" &&
        box[y].children[0].getAttribute('src') === "cancel%20(1).png" &&
        box[z].children[0].getAttribute('src') === "cancel%20(1).png") {
        if (box[x].children[0].classList.contains("Player") &&
            box[y].children[0].classList.contains("Player") &&
            box[z].children[0].classList.contains("Player")) {
            alert("Player Wins");
            clearInterval(finish);
        } else if (box[x].children[0].classList.contains("Computer") &&
            box[y].children[0].classList.contains("Computer") &&
            box[z].children[0].classList.contains("Computer")) {
            alert("Computer Wins");
            clearInterval(finish);
        }
    } else if (box[x].children[0].getAttribute('src') === "dry-clean.png" &&
        box[y].children[0].getAttribute('src') === "dry-clean.png" &&
        box[z].children[0].getAttribute('src') === "dry-clean.png") {
        if (box[x].children[0].classList.contains("Player") &&
            box[y].children[0].classList.contains("Player") &&
            box[z].children[0].classList.contains("Player")) {
            alert("Player Wins");
            clearInterval(finish);
        } else if (box[x].children[0].classList.contains("Computer") &&
            box[y].children[0].classList.contains("Computer") &&
            box[z].children[0].classList.contains("Computer")) {
            alert("Computer Wins");
            clearInterval(finish);
        }
    }
}

select.addEventListener("click",function (event) {
    if (event.target.classList.contains("close-tampilan")) {

        select.classList.toggle("display");
        select.classList.toggle("opacity");
        layer.classList.toggle("preferences");

        for (const x of box) {
            if (x.classList.contains("option")) {
                x.classList.remove("option");
                x.style.zIndex = "0";
            }
        }

        const computerPlay = Math.random() * 9;
        const k = Math.floor(computerPlay);
        const selectPlace = box[k].children[0];
        const selectGame = Math.random();

        const coba = setInterval(function () {
            if (selectPlace.getAttribute('src') === "") {
                if (selectGame < 0.5) {
                    const imageName = "dry-clean.png";
                    selectPlace.src = imageName;
                    selectPlace.classList.add("Computer");
                    box[k].style.backgroundColor = "deepskyblue";
                } else {
                    const imageNamee = "cancel%20(1).png";
                    selectPlace.src = imageNamee;
                    selectPlace.classList.add("Computer");
                    box[k].style.backgroundColor = "deepskyblue";
                }
                clearInterval(coba);
            } else {
                alert("Cari Tempat Lain");
                let number = 1;
                for (const z of box) {
                    if (z.children[0].getAttribute('src') !== "") {
                        number++;
                        if (number === 10) {
                            alert("Tempat Sudah Penuh");
                            alert("Permainan Berakhir Seri");
                            clearInterval(coba);
                        }
                    }
                }
                let coverDatasetNumber = [];
                for (const x of box) {
                    if (x.children[0].getAttribute('src') === "") {
                        coverDatasetNumber.push(parseInt(x.children[0].dataset.number));
                    }
                }

                const collectNumberRandom = coverDatasetNumber[Math.floor(Math.random() * coverDatasetNumber.length)];
                for (const y of box) {
                    if (y.children[0].getAttribute('src') === "" && parseInt(y.children[0].dataset.number) === collectNumberRandom) {
                        if (selectGame < 0.5) {
                            const imageName = "dry-clean.png";
                            y.children[0].src = imageName;
                            y.children[0].classList.add("Computer");
                            y.style.backgroundColor = "deepskyblue";
                        } else {
                            const imageNamee = "cancel%20(1).png";
                            y.children[0].src = imageNamee;
                            y.children[0].classList.add("Computer");
                            y.style.backgroundColor = "deepskyblue";
                        }
                        clearInterval(coba);
                        coverDatasetNumber.length = 0;
                    }
                }
            }
            if (winsGame(0,1,2,coba) || winsGame(0,3,6,coba)
                || winsGame(6,7,8,coba) || winsGame(2,5,8,coba)
                || winsGame(1,4,7,coba) || winsGame(0,4,8,coba)
                || winsGame(6,4,2,coba) || winsGame(3,4,5,coba)) {
                console.log("WORK");
            }
            clearInterval(coba);
        },1000);

        for (const k of box) {
            if (k.children[0].classList.contains("Player")) {
                k.style.backgroundColor = "yellow";
            }
        }
        if (winsGame(0,1,2,coba) || winsGame(0,3,6,coba)
        || winsGame(6,7,8,coba) || winsGame(2,5,8,coba)
        || winsGame(1,4,7,coba) || winsGame(0,4,8,coba)
        || winsGame(6,4,2,coba) || winsGame(3,4,5,coba)) {
            console.log("WORK");
        }
    }

    if (event.target.classList.contains("close-image")) {
        let imageSrc = event.target.getAttribute('src');
        for (const x of box) {
            if (x.classList.contains("option")) {
                x.children[0].src = imageSrc;
                x.children[0].classList.add("Player");
                setTimeout(function () {
                    x.classList.remove("option");
                    x.style.zIndex = "0";
                },2000)
            }
        }
    }

    if (event.target.classList.contains("circle-image")) {
        let imageSrc = event.target.getAttribute('src');
        for (const x of box) {
            if (x.classList.contains("option")) {
                x.children[0].src = imageSrc;
                x.children[0].classList.add("Player");
                setTimeout(function () {
                    x.classList.remove("option");
                    x.style.zIndex = "0";
                },2000)
            }
        }
    }
});