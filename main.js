// Create empty array
let arrList = [];
let arrListDone = [];

// Trigger on button "Add"
function tasklist() {

    // Fetch value of input text
    let task = document.getElementById("userinput").value;
    let namelist = document.getElementById("namelist").value;
    console.log(`Name of list: ${namelist}`);

    if (namelist == "") {
        document.getElementById("warning1").innerHTML = "Please give a name for the list.";
        document.getElementById("warning1").style.display = "block";
    }
    else {
        document.getElementById("warning1").style.display = "none";
        document.getElementById("namelist").disabled = true;
    }

    let todolistname = document.querySelector(".todo").innerHTML = namelist;

    if (task == "") {
        document.getElementById("warning").innerHTML = "Please give a task!";
        document.getElementById("warning").style.display = "block";
    }
    else {
        document.getElementById("warning").style.display = "none";
    // Select DIV
    let todolist = document.querySelector(".todolist");

    // Clears text input
    document.getElementById("userinput").value = "";

    // Shows container
    document.getElementById("containertodo").style.display = "block";

    // Create input element
    let input = document.createElement("input");

    // Generates a random number
    let random = Math.floor(Math.random() * 1000);
    let randomlabel = Math.floor(Math.random() * 1001 + 1000);
    let randombr = Math.floor(Math.random() * 100);

    // Assign attributes
    input.type = "checkbox";
    input.name = "checklist";
    input.value = task;
    input.id = random;
    input.className = "checkclass";

    // Create label element
    let label = document.createElement("label");

    // Assign label
    label.htmlFor = random;
    label.id = randomlabel;
    label.className = "labelclass";

    // Append childs
    label.appendChild(document.createTextNode(task));
    todolist.appendChild(input);
    todolist.appendChild(label);

    // Create br element
    let br = document.createElement("br");
    br.id = randombr;

    // Append child
    todolist.appendChild(br);

    // Push to array
    arrList.push(task);
    console.log(arrList);

    let t1 = document.querySelectorAll(".checkclass");
    let t2 = document.querySelectorAll(".labelclass");
    let t3 = document.getElementById(randombr);
    console.log(t1);
    console.log(t2);

    for (let i = 0; i <= arrList.length - 1; i++) {
        console.log(`Before onclick: ${i}`);
        // console.log(t1[i]);
        t1[i].onclick = () => {
            if (t1[i].checked) {
                console.log(`Checked ${i}: ${t1[i].value}`);
                t2[i].style.textDecoration = "line-through";
                t2[i].style.backgroundColor = "lightgreen";
                // t1[i].parentElement.removeChild(t1[i]);
                // t2[i].parentElement.removeChild(t2[i]);
                // t3.parentElement.removeChild(t3);
                arrListDone.push(arrList[i]);
                console.log(`Push to arrListDone`);
                console.log(arrListDone);
                console.log(`EndIf: ${i}`);
            }
            else {
                console.log(`Not Checked ${i}: ${t1[i].value}`);
                t2[i].style.textDecoration = "none";
                t2[i].style.backgroundColor = "lightgray";
                arrListDone.splice(i, 1);
                console.log(arrListDone);
            }
        }
    }
    }  
}

// Move task to done list
function donelist() {

}

// Reloads the webpage
function reset() {
    location.reload();
}


