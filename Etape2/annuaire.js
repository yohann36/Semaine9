  
  $liste = document.getElementById("liste");
  $prenom = document.getElementById("prenom");
  $nom = document.getElementById("nom");
  $numero = document.getElementById("numero");
  $ajouter = document.getElementById("ajouter"); 
  
  
  var contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"
  }, {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
  }];
  
  function texteContact(contact) {
  	return '>>'+contact.prenom + ' ' + contact.nom + ' (' + contact.numero +')' ;
    
  }
  
  function afficher (){
    var elements='';
      for(var i =0; i < contacts.length; i++){
       elements += "<li>" + texteContact(contacts[i]) + "</li>";
      }
      $liste.innerHTML = elements;
  }
  
  
  function ajouter (){
    contacts.push({
      prenom: $prenom.value, 
      nom: $nom.value ,
      telephone: $telephone.value});
    afficher();
  }
  
  $ajouter.onclick = ajouter;
  afficherListe();

