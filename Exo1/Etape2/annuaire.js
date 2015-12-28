$liste = document.getElementById("liste");
$liste2 = document.getElementById("liste2");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$telephone = document.getElementById("telephone");
$ajouter = document.getElementById("ajouter");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");

contacts = [{
  prenom: "Julien",
  nom: "Grillot",
  telephone: "0123456789"
}, {
  prenom: "John",
  nom: "Smith",
  telephone: "0123456789"
}];

function texteContact(contact) {
	var output= '> '+contact.prenom + ' ' + contact.nom.toUpperCase() + ' : ' + contact.telephone ;
  return output;
}



function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}



function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        telephone: $telephone.value
    });
    afficherListe();
}



function rechercher(){
    
    elements = "";
    recherche = $recherche.value;
    
    
    for (var i=0 ; i<contacts.length ; i++) {
        
        if ((recherche === contacts[i].prenom)||(recherche === contacts[i].nom)||(recherche === contacts[i].telephone)){
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
          }
     }
    $liste2.innerHTML = elements;
}




$ajouter.onclick = ajouter;
$rechercher.onclick = rechercher;
afficherListe(); 
