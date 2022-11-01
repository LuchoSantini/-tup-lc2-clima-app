const conseguirDatos = async () => {
    try {
        let ciudades = document.getElementById("Ciudades").value; // <-- Ciudades tomadas del select
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudades}&appid=${apiKey}&units=metric&lang=es`;
        const res = await fetch(url);
        
        if (res.ok) {
            const datos = await res.json();
            console.log(datos);
            var icon = datos.weather["0"].icon;
            var c = datos["sys"].country;
            var t = datos["main"].temp;
            var s = datos["main"].feels_like;
            var h = datos["main"].humidity;
            var w = datos["wind"].speed;
            var p = datos["main"].pressure;
            tituloCard = document.getElementById("tituloCard").innerHTML = `${ciudades}` + " - "+c;
            imagenTiempo = document.getElementById("imagenTiempo").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">` ;
            temp = document.getElementById("temperatura").innerHTML = "Temperatura: " + t + "°C";
            sensTermica = document.getElementById("sensTermica").innerHTML = "Sensación térmica: " + s + "°C";
            humedad = document.getElementById("humedad").innerHTML = "Humedad: " + h + "%";
            velViento = document.getElementById("velViento").innerHTML = "Velocidad del viento: " + w + " km/h";
            presion = document.getElementById("presion").innerHTML = "Presión: " + p + " P";
        } else {
            console.log(res.status); // 404
        }
    } catch (err) {
        console.log(err)
    }
};

conseguirDatos();

function mostrarCard() {
    conseguirDatos();
    document.getElementById("card").style.display = "block";
    let ciudades = document.getElementById("Ciudades").value;
    if (`${ciudades}` == "") {
        alert("Por favor seleccione una ciudad");
        document.getElementById("card").style.display = "none";
    }
}

function cargarCiudades() {
    var x = document.getElementById("Ciudades");
    var a = JSON.parse(localStorage.getItem('CITIES'));
    var b = a.length;
    var i;
    for (i = 0; i < b; i++) {
        x.options.add(new Option(a[i], a[i]));
    }
}
