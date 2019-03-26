function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  document.querySelector('ul.employee-list').appendChild(li);
}

function addNewLiOnClick(){
  document.querySelector('form input:last-child').addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {

  document.querySelector('a').addEventListener('click', function(c) {
    let a = document.querySelectorAll(ul.employee-list li);
    for(let i=0; i <a.length; i++) {
      a.value = "";
    }
  });
}

function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}


preventRefreshOnSubmit()
