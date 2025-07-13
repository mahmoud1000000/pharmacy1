var Drug=document.getElementById("drug");
var Price=document.getElementById("price");
var kid=document.getElementById("kid");
var Desc=document.getElementById("desc");
var aa=document.getElementById("aa");
var pharmacyList=[];
var update;
var incase="create";
if (localStorage.getItem("pharmacy")!=null) {
    pharmacyList=JSON.parse(localStorage.getItem("pharmacy"))
    displayPharmacy();
}else{
    pharmacyList=[];
}
function addDrug() {
    var pharmacy={
        drug:Drug.value,
        price:Price.value,
        kid:kid.value,
        desc:Desc.value,
    }
    if (incase==="create") {
     pharmacyList.push(pharmacy);
    displayPharmacy();
    localStorage.setItem("pharmacy",JSON.stringify(pharmacyList));
    }else{
        pharmacyList[update]=pharmacy;
        displayPharmacy();
        incase="create";
        aa.innerText="Add Drug";
        localStorage.setItem("pharmacy",JSON.stringify(pharmacyList));
    }

    clearphamacy()
    
    console.log(pharmacyList);
    
}

function displayPharmacy() {
    var cartona=``;
    for (var i = 0; i < pharmacyList.length; i++) {
        cartona+=`<tr>
        <td>${i+1}</td>
        <td>${pharmacyList[i].drug}</td>
        <td>${pharmacyList[i].price}</td>
        <td>${pharmacyList[i].kid}</td>
        <td>${pharmacyList[i].desc}</td>
        <td><button type="submit" class="btn btn-outline-warning" onclick="deletPharmacy(${i})">Delet</button></td>
        <td><button type="submit" class="btn btn-outline-danger" onclick="updatePharmacy(${i})">Update</button></td>
      </tr>`
        
    }
    document.getElementById("tt").innerHTML=cartona;
}

function clearphamacy() {
        drug.value='';
        price.value='';
        kid.value='';
        desc.value='';
}

function deletPharmacy(index) {
    pharmacyList.splice(index , 1)
    displayPharmacy();
    localStorage.setItem("pharmacy",JSON.stringify(pharmacyList));
}
function updatePharmacy(index) {
    drug.value=pharmacyList[index].drug;
    price.value=pharmacyList[index].price;
    kid.value=pharmacyList[index].kid;
    desc.value=pharmacyList[index].desc;
    aa.innerText="update Drug";
    incase="update";
    update=index;
}
var res="Byelcofan".includes()
function search(search) {
    var cartona=``;
    for (var i = 0; i < pharmacyList.length; i++) {
        if (pharmacyList[i].drug.toLowerCase().includes(search.toLowerCase())) {
            cartona+=`<tr>
        <td>${i+1}</td>
        <td>${pharmacyList[i].drug}</td>
        <td>${pharmacyList[i].price}</td>
        <td>${pharmacyList[i].kid}</td>
        <td>${pharmacyList[i].desc}</td>
        <td><button type="submit" class="btn btn-outline-warning" onclick="deletPharmacy(${i})">Delet</button></td>
        <td><button type="submit" class="btn btn-outline-danger" onclick="updatePharmacy(${i})">Update</button></td>
      </tr>`
        
    }
    document.getElementById("tt").innerHTML=cartona;
        }
    }

