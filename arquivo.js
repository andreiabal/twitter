// onSubmit - passos:
// 1. criar função no submit
// 2. pegar o texto do input
// 3. criar li
// 4. colocar texto no li
// 5. colocar o elemento li no ul

function onSubmit() {
  var userText = document.getElementById('text').value;
  var listItem = document.createElement('li');
  listItem.className = 'twitte';

/* Horário em que o twitte foi enviado*/
  var date = new Date();
  var calculateTime = date.getHours() + ':' + date.getMinutes();
  if (date.getMinutes() < 10) {
    calculateTime = date.getHours() + ':' + '0' + date.getMinutes();
  }
  
/* Inserir twitte na página*/
  listItem.innerHTML = '<span>' + 'Postado às ' + calculateTime + '</span>' + '<br>' + userText;
  document.getElementById('posts').appendChild(listItem);

/*Atualizar*/
  var cleanText = document.getElementById('text');
  cleanText.value = '';
  char(); //atualizando a contagem dos caracteres
  return false;
}

//Contar caracteres e alterar as cores do contador
function char() {
  var max = new Number();
  max = 140;
  var initial = document.getElementById('text').value.length;
  var counting = new Number();
  counting = max - initial;
  document.getElementById('count').innerHTML = counting;

  if (counting < 20 && counting > 10) {
    document.getElementById('count').style.color='orange';
  }
  if (counting < 10 && counting >= 0) {
    document.getElementById('count').style.color='red';
  }
  if (counting >= 20) {
    document.getElementById('count').style.color='#6AD1F2';
  }
  // Atualizar o status do botão
  if(counting >= 0 && counting < 140) {
  	document.getElementById('button').disabled='';
  } else {
    document.getElementById('button').disabled='disabled';
  }
}


