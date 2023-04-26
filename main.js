const container = document.getElementById("container")
axios.get("https://restcountries.com/v3.1/all").then(res => {
    console.log(res)

    let innerHTML = ""

    for (let i = 0; i < res.data.length; i++) {
        const { image, name, population, region, capital } = res.data[i]
        innerHTML += ` <div id="cart1">

        <img class="img1" src="${image}" alt="">

         
        <div class="text1">
            <h5>${name}</h5>
            <p>${population}</p>
            <p>${region}</p>
            <p>${capital}/p>
        </div>

    </div>

   
`
    }
    container.innerHTML = innerHTML
})


