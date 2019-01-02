import './index.css';
import { getUsers, deleteUser } from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    userBody += `<tr>
      <td><a href="#" data-id = "${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      <td>
    </tr>`
  });

  document.getElementById('users').innerHTML = userBody;

  const deleteLinks = document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };

  });

});

//import numeral from 'numeral';

//const courseValue = numeral(1000).format('$0,0.00');
//debugger; eslint-disable-line no-debugger
//console.log(`I would pay ${courseValue} for this awsome course!`); // eslint-disable-line no-console
