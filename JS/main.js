import Vehicule from "./module/Vehicule.js"
let vehicules = []
let code


function getTicket() {

    vehicules.push(new Vehicule(prompt("Entrez votre plaque d'immatriculation")));
    console.log(vehicules);
    alert("Veulliez prendre votre ticket");

};


function getPayement() {
    let imat = prompt("Veuillez introduire votre ticket");
    console.log(imat);
    console.log(vehicules[0].id);

    for (var vehicule of vehicules) {

        for (var key in vehicule.id) {
            if (imat == vehicules[key].id) {
                vehicules[key].endDate = new Date();

                let time = (vehicules[key].endDate - vehicules[key].startDate) / 6000;
                return time;

            } else {
                alert("Votre code est éronner veuillez vous rapprocher d'un resposonble, SVP")
                return 0
            }
        }
    }

}





vehicules.push(new Vehicule("AA-123-AA", new Date("2020-04-08T12:14:00")))

do {
    code = Number(prompt("Taper 1 pour avoir un ticket." + "\n" + "Taper 2 pour pour payer votre stationnement." + "\n" + "Veuillez entrer un code:"))
    console.log(code)
    if (code == 1) {
        getTicket()
        console.log(code)
    } else if (code == 2) {

        let payement = Number(getPayement());

        if ((payement <= 15) && (payement > 0)) {
            console.log(payement);
            alert("Votre temps de stationnemennt est de : " + payement + "min(s)." + "\n" + "Le coût du stationement est de 0.80 euro");


        } else if ((payement <= 30) && (payement > 0)) {
            alert("Votre temps de stationnemennt est de : " + payement + "min(s)." + "\n" + "Le coût du stationement est de 1.30 euro");


        } else if ((payement <= 45) && (payement > 0)) {
            alert("Votre temps de stationnemennt est de : " + payement + "min(s)." + "\n" + "Le coût du stationement est de 1.7 euro");

        } else if ((payement > 45) && (payement > 0)) {
            alert("Votre temps de stationnemennt est de : " + payement + "min(s)." + "\n" + "Le coût du stationement est de 6 euro");

        } else {
            alert("Merci de votre compréhension")
        }
    }

    console.log(code)
} while (code != 0)