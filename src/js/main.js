// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import Swal from "sweetalert2";

// Import all of Bootstrap's JS
//import * as bootstrap from "bootstrap";


import  {coders} from '../../public/data/database.js'
import { index } from './operations.js'

const tbody = document.querySelector("tbody")

const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.getElementById("form")

index(coders, tbody)

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const newCoder = {
      id: Date.now(),
      name: name.value,
      lastName: lastName.value,
      email: email.value,
    };
  
    coders.push(newCoder);
    
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    index(coders, tbody);

    
    
  })




index(coders,tbody);
    
