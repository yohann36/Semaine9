var $liste= document.getElementById('liste');
var $hide= document.getElementById('hide');
var $reset= document.getElementById('reset');

function selectionne(e){
    e.target.classList.toggle('selected');
}

function hideSelected(){
    for(var i=0,c=$liste.children.length;i<c ;i++){
        if($liste.children[i].classList.contains('selected')){
           $liste.children[i].classList.add('hide');
        }
    }
}

function reset(){
     for(var i=0,c=$liste.children.length;i<c ;i++){
           $liste.children[i].classList.remove('hide');
        }
    }

$liste.onclick = selectionne;
$hide.onclick = hideSelected;
$reset.onclick = reset;