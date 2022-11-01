function ocultarAlerts() {
    document.getElementById('rojo').style.display = "none";
    document.getElementById('amarillo').style.display = "none";
    document.getElementById('verde').style.display = "none";
}
function mostrarAlertRoja() {
    document.getElementById('rojo').style.display = "block";
}
function mostrarAlertAmarillo() {
    document.getElementById('amarillo').style.display = "block";
}
function mostrarAlertVerde() {
    document.getElementById('verde').style.display = "block";
}

function addCity(){
    let newCity = document.getElementById('agregarCiudad').value;
    let cities = getCitiesFromLocalStorage();
    if (cities.indexOf(newCity)>=0){
        document.getElementById('verde').style.display = "none";
        document.getElementById("amarillo").style.display = "block";
    } else if (newCity == "") {
        document.getElementById('verde').style.display = "none";
        document.getElementById('amarillo').style.display = "none";
        document.getElementById('rojo').style.display = "block";
    }
    else {
        cities.push(newCity);
        document.getElementById('rojo').style.display = "none";
        document.getElementById('verde').style.display = "block";
        document.getElementById("amarillo").style.display = "none";
    }
    localStorage.setItem("CITIES",JSON.stringify(cities));

   

    // localStorage.clear();
}

function getCitiesFromLocalStorage(){
    let cities = localStorage.getItem("CITIES");
    if (cities){
        cities = JSON.parse(cities);
    }else{
        cities=[];
    }
    return cities;
}

function cargarCiudades(){
    var x = document.getElementById("Ciudades");
    var c = document.createElement("option");
    c.text = cities[1];
    x.options.add(c, 1);
    
}