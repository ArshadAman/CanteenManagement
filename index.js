let isGrid = 0;
countv = 0;
countn = 0;

function AddData(id) {
  let data = localStorage.getItem("data");
  if (data == null) {
    dataObj = [0, 0];
  } else {
    dataObj = JSON.parse(data);
  }
  countv = dataObj[0];
  countn = dataObj[1];
  if(id == 'veg-btn'){
    countv+=1;
  }
  else if(id == 'non-btn'){
    countn+=1;
  }
  SetToStorage(countv, countn);
  show();
  total();
}

function SetToStorage(countVeg, countNonveg) {
  let data = localStorage.getItem("data");
  if (data == null) {
    dataObj = [0, 0];
  } else {
    dataObj = JSON.parse(data);
  }
  dataObj[0] = countVeg;
  dataObj[1] = countNonveg;
  localStorage.setItem("data", JSON.stringify(dataObj));

  show();
  total();
}

function show() {
  let data = localStorage.getItem("data");
  if (data == null) {
    dataObj = [0, 0];
  } else {
    dataObj = JSON.parse(data);
  }
  let veg = document.getElementById('veg');
  let nonveg = document.getElementById('non-veg');
  veg.innerText = dataObj[0];
  nonveg.innerText = dataObj[1];
  total();
}

function total(){
  let data = localStorage.getItem("data");
  if (data == null) {
    dataObj = [0, 0];
  } else {
    dataObj = JSON.parse(data);
  }
  let totalVeg = dataObj[0];
  let totalNonVeg = dataObj[1];

  let totalV = document.getElementById('total-veg');
  let totalN = document.getElementById('total-nonveg');
  let totalP = document.getElementById('total-price');

  totalV.innerText = totalVeg;
  totalN.innerText = totalNonVeg;
  totalP.innerText = (totalVeg*50) + (totalNonVeg*70);
}

function resetData(){
  let val = prompt('Type "Okay" to reset your data');
  if(val == "Okay"){
    localStorage.clear();
    alert("You have successfully reseted your data.");
    show();
    total();
  }
  else{
    alert("Hello welcome to my website");
    alert("Your data is SAFE");
    
  }
}


total();
show();
