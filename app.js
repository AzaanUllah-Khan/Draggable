var todo = document.getElementById("todo");
var working = document.getElementById("working");
var done = document.getElementById("done");
var tododiv = document.getElementById("tododiv");
var workingdiv = document.getElementById("workdiv");
var donediv = document.getElementById("donediv");
var lists;

function add(div) {
    var inputValue = div.previousElementSibling.querySelector("input[type='text']").value;
    div.innerHTML += `<p class='list' draggable='true' style='border:1px solid grey;padding:5px;margin-bottom:10px;width:250px;'>${inputValue}</p>`;
    lists = document.getElementsByClassName("list");
    for (var list of lists) {
        list.addEventListener("dragstart", function (e) {
            let select = e.target;

            workingdiv.addEventListener("dragover", function (e) {
                e.preventDefault();
            });
            workingdiv.addEventListener("drop", function (e) {
                workingdiv.appendChild(select);
                select = null;
            });
            tododiv.addEventListener("dragover", function (e) {
                e.preventDefault();
            });
            tododiv.addEventListener("drop", function (e) {
                tododiv.appendChild(select);
                select = null;
            });

            donediv.addEventListener("dragover", function (e) {
                e.preventDefault();
            });
            donediv.addEventListener("drop", function (e) {
                donediv.appendChild(select);
                select = null;
            });
        });

        console.log(inputValue);
    }
}
