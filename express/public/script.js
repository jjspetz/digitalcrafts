// front-end script for todo app

var add = document.getElementById('add');

// document.body.appendChild(form);

add.addEventListener('click', function() {
  var form = document.createElement('div');
  form.innerHTML = "<form action='/submit' method='POST'> \
      <input type='text' name ='task'></form>";
  uTask.insertBefore(form, add);
});

// var z = document.createElement('p');
// z.innerHTML = 'test satu dua tiga';
// document.body.appendChild(z);
