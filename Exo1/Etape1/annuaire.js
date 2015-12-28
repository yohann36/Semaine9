contacts = [{
  prenom: "Julien",
  nom: "Grillot",
  numero: "0123456789"
}, {
  prenom: "John",
  nom: "Smith",
  numero: "0123456789"
}];

function texteContact(contact) {
	var output= '<< '+contact.prenom + ' ' + contact.nom + ' (' + contact.numero + ') >>'
  return output
}

alert(texteContact(contacts[0])); // affiche « Julien Grillot (0123456789) »