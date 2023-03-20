function check() {

    var ciudad = document.getElementById("ciudad").value
    var div = document.getElementById("board")
    var json = null

    console.log("https://www.google.es");

    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + ciudad + "?unitGroup=metric&key=CZ9EDYAACWJ7QSPWHUCTC4SSB&contentType=json", {
        "method": "GET",
        "headers": {
        }
    })
        .then((response) => response.json())
        .then((data) => {

            json = data
            var ciudad = document.getElementById("city")
            ciudad.innerHTML = json.resolvedAddress + "<br>" + json.days[0].datetime

            var temp = document.getElementById("temp")
            temp.innerHTML = json.days[0].temp + "°"

            var tempSec = document.getElementById("tempSec")
            tempSec.innerHTML = json.days[0].tempmax + "° max <br>" + json.days[0].tempmin + "° min"


            var cartas = document.getElementById("cartas")

            cartas.innerHTML = '';
            var row =  document.createElement("div")
            row.className = "row"
            json.days[0].hours.forEach(horas => {
                var col =  document.createElement("div")
                col.className = "col-4 col-xl-2 "

                var carta = document.createElement("div")
                carta.className = "card"
                var cartaBody = document.createElement("div")
                cartaBody.className = "card-body"

                

                var rowIcono =  document.createElement("div")
                rowIcono.className = "row temperatures"

                var colIcono1 =  document.createElement("div")
                colIcono1.className = "col-6 temper"

                var colIcono2 =  document.createElement("div")
                colIcono2.className = "col-6 temper"


                var img = document.createElement("img")
                img.className = "rounded icono"
                img.src ="img/iconos/"+horas.icon+".png"
                colIcono1.appendChild(img)



                var h4 = document.createElement("h6")
                h4.className = "card-title"
                h4.innerText = horas.temp+"°"
                colIcono2.appendChild(h4)




                rowIcono.appendChild(colIcono1)
                rowIcono.appendChild(colIcono2)
                cartaBody.appendChild(rowIcono)


                var hr = document.createElement("hr")
                cartaBody.appendChild(hr)

                var h3 = document.createElement("h6")
                h3.className = "card-title"
                h3.innerText = horas.datetime.substring(0,horas.datetime.length-3)
                cartaBody.appendChild(h3)

                carta.appendChild(cartaBody)

                col.appendChild(carta)
                row.appendChild(col)

              
            });

            cartas.appendChild(row)


            







        })
        .catch(console.error());








}


