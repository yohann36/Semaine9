/*----Pour faire transiter les éléments html---------*/

var $liste=document.getElementById('liste');
var $prenom = document.getElementById('prenom');
var $ajouter = document.getElementById('ajouter');
var $supprimer = document.getElementById('supprimer');


/*----tableau pour le stockage des prénom------------*/

var contactTab = ["Bob", "Julien", "Roger"];


/*----function lister les contacts--------------------*/

function listerContact(){
    /*----Boucle pour afficher les élément du taleau--*/
    var elements="";
    for(var i=0; i<contactTab.length; i++){
        elements+="<li>" + contactTab[i] + "</li>";
    }
    $liste.innerHTML=elements;
}

/*----function ajouter aux contacts-------------------*/

function ajouterElement(){
    contactTab.push($prenom.value);
    listerContact();
}


/*----function ajouter aux contacts-------------------*/

function Del(){
    contactTab.pop();
    listerContact();
}


/*----Run programming--------------------------------*/

listerContact();
$ajouter.onclick = ajouterElement;
$supprimer.onclick = Del;
