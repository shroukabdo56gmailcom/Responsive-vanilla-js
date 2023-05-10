
var nameInput = document.getElementById("nameInput");
var idInput = document.getElementById("idInput");
var addbtn = document.getElementById("addRow");
var searchInput = document.getElementById("searchInput"),
  editRow = document.getElementById("editrow"),
  hiddInput = document.getElementById("hiddInput");
var arr = [];
if (localStorage.getItem("list") != null) {
  arr = JSON.parse(localStorage.getItem("list"));
  displayInfo();
}

function getInfo() {
  var product = {
    name: nameInput.value,
    id: idInput.value,
  };
  arr.push(product);
  displayInfo();
}
function displayInfo() {
  var temp = "";
  for (let i = 0; i < arr.length; i++) {
    temp += `  <tr>
                 <td scope="row">${i}</td>
                 <td>${arr[i].name}</td>
                 <td>${arr[i].id}</td>
                 <td> <button type="button" class="btn btn-warning" onclick="updateData(${i})">update</button>
              </td>
              <td> <button type="button" class="btn btn-danger" onclick="deleteProduct(${i})">delete</button>
               </td>
            </tr>
        `;
  }
  localStorage.setItem("list", JSON.stringify(arr));
  document.getElementById("tbody").innerHTML = temp;
}
function reset() {
  nameInput.value = "";
  idInput.value = "";
}
function deleteProduct(index) {
  arr.splice(index, 1);
  displayInfo();
}
function updateData(index) {
  nameInput.value = arr[index].name;
  idInput.value = arr[index].id;
  addbtn.style.display = "none";
  editRow.style.display = "inline-block";
  hiddInput.value = index;
}
function EditRow() {
  var index = hiddInput.value;
  arr[index].name = nameInput.value;
  arr[index].id = idInput.value;
  addbtn.style.display = "inline-block";
  editRow.style.display = "none";
  reset();
  displayInfo();
}
function search() {
    var temp = ``;
    var search=searchInput.value.toLowerCase()
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].name.toLowerCase().includes(search)||arr[i].id.toLowerCase().includes(search)){
        temp += `                <tr>
        <td scope="row">${i}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].id}</td>
        <td> <button type="button" class="btn btn-warning" onclick="updateData(${i})">update</button>
        </td>
        <td> <button type="button" class="btn btn-danger" onclick="deleteProduct(${i})">delete</button>
        </td>
    </tr>
`}
}
document.getElementById("tbody").innerHTML = temp;
}

