const conseguirDatos= async () => {
    try {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=Rosario&appid=14867c55da3b8e729d98d6ffdb42ce0c&units=metric&lang=es";
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            console.log(datos);
        } else {
            console.log(res.status); // 404
        }
    } catch (err) {
        console.log(err)
    }
};

conseguirDatos();


function mostrarCard(){
    conseguirDatos();
    document.getElementById('card').style.display = "block";
    //alert(document.getElementById("Ciudades").value);
    //`${miciudad}`
}

function cargarCiudades(){
    var x = document.getElementById("Ciudades");
    var a = JSON.parse(localStorage.getItem('CITIES'));
    var b = a.length;
    var i;
    for (i=0; i<b; i++) {
        x.options.add(new Option (a[i], a[i]));
    }
}
