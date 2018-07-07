// 1. criar funcao no submit
// 2. pegar o texto do input
// 3. criar li
// 4. colocar texto no li
// 5. colocar o elemento li no ul

function onSubmit() {
	var userText = document.getElementById('text').value;
  var listItem = document.createElement('li');
  listItem.className = 'twitte';
  listItem.innerHTML = userText;
  document.getElementById('posts').appendChild(listItem);

  return false;
}


