const btton = document.getElementById("boton");
const URL = "http://localhost:5000/amigos";
const lista = document.getElementById("lista");

function viewList() {
  lista.innerHTML = "";
  $.get(`${URL}`, (res) => {
    console.log("-----> ", res);
    // [{},{},{}]
    // <ul id='lista'>
    //    <li>pepe</li><li>coco</li> -->
    // </ul>
    res.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = element.name;
      lista.appendChild(li);
    });
  });
}

btton.addEventListener("click", (viewList));

/*
 <input id='input'></input>
  <button id='search'>Buscar</button>
  <span id='amigo'></span>
*/

const search = document.getElementById("search");

function searchFriend() {
  // console.log("cada vez que hago click en el search se ejecuta esta function")
  let id = document.getElementById("input").value; // -> 4 <input id='input'>4</input>
  // console.log("valor input search es: ", id)
  let amigo = $("#amigo"); //  <span id='amigo'></span>
  amigo.empty();
  // URL + "/" + id
  $.get(`${URL}/${id}`, (res) => {
    console.log("amigo es", res);
    amigo.text(res.name);
  });
  document.getElementById("input").value = "";
}

search.addEventListener("click", searchFriend);

/*
 <input id='inputDelete'></input>
  <button id='delete'>Delete</button>
  <span id='success'></span>
*/
const deleteBtton = document.getElementById("delete"); // <button id='delete'>Delete</button>

function deleteUser() {
  let id = document.getElementById("inputDelete").value; // 78
  // console.log("====>", id);
  if (id) {
    var searchDelete;
    $.get(`${URL}`, (res) => {
      res.forEach((element) => {
        console.log("01", element);
        if (element.id === Number(id)) {
          searchDelete = element;
        } //! Los values que vienen de los INPUTS llegan como string
      });
      console.log("02", searchDelete);
      if (searchDelete) {
        let span = $("#success");
        $.ajax({
          url: `${URL}/${id}`,
          method: "DELETE",
          dataType: "json",
          success: function (response) {
            console.log(response);
            span.text(searchDelete.name)
            viewList()
          },
          error: function (xhr, status, error) {
            console.log(error);
          },
        });
      } else {
        alert("ese amigo ya no existe");
      }
    });
  } else {
    alert("no hay id");
  }
  document.getElementById("inputDelete").value = ""
}
deleteBtton.addEventListener("click", deleteUser);
/*
* Uso del DELETE en jquery
$.ajax({
    url: `${URL}`,
    method: "DELETE",
    dataType: "json",
    success: function (response) {
      console.log(response);
      doc-... 
      s
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });


todo: HomeWork
* Recordar se debe instalar dependencias y levantar el server para probar nuestra app
*/




/*
$.get(`${URL}`, (res) => {
      res.forEach((element) => {
        console.log("01", element);
        if (element.id === Number(id)) {
          searchDelete = element;
        } //! Los values que vienen de los INPUTS llegan como string
      });
      console.log("02", searchDelete);
      if (searchDelete) {
        let span = $("#success");
       
      } else {
        alert("ese amigo ya no existe");
      }
    });



     $.ajax({
          url: `${URL}/${id}`,
          method: "DELETE",
          dataType: "json",
          success: function (response) {
            console.log(response);
            span.text(searchDelete.name)
            viewList()
          },
          error: function (xhr, status, error) {
            console.log(error);
          },
        });
*/