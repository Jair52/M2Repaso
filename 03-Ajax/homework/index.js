const button = document.getElementById("boton");
const url = "http://localhost:5000/amigos";
const lista = document.getElementById("lista");

function viewList() {
  lista.innerHTML = "";
  $.get(`${url}`, (res) => {
    console.log(res);
    res.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = `${element.name} X`;
      lista.appendChild(li);
    });
  });
}

button.addEventListener("click", (viewList));
/////////////////////////////////////////////

const add = document.getElementById("search");

function addList(){
    let id = document.getElementById("input").value;
    let amigo = $("#amigo"); //  <span id='amigo'></span>
    amigo.empty();
    $.get(`${url}/${id}`, (resadd) =>{
        console.log("amigo es: ", resadd);
        amigo.text(resadd.name);
    });
    document.getElementById("input").value = "";
}

add.addEventListener("click", (addList));
/////////////////////////////

const deleteBtton = document.getElementById("delete"); // <button id='delete'>Delete</button>

function deleteUser() {
  let id = document.getElementById("inputDelete").value; 
  if (id) {
    var searchDelete;
    $.get(`${url}`, (res) => {
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
          url: `${url}/${id}`,
          method: "DELETE",
          dataType: "json",
          success: function (response) {
            console.log(response);
            span.text(searchDelete.name);
            viewList();
          },
          error: function (xhr, status, error) {
            console.log(error);
          },
        });
      } else {
        alert("ese amigo ya no existe");
      }
    });
  }else {
    alert("no hay id");
  }
  document.getElementById("inputDelete").value = "";
}
deleteBtton.addEventListener("click", deleteUser);