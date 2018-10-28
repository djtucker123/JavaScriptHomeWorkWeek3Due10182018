
// section controlling left navbar is visible and other links reveal only one page section on right side at a time (home may not be needed)

(function() {
    $('#viewSection').hide();
    $('#addSection').hide();
    $('#verifySection').hide();
    $('#updateSection').hide();
    $('#deleteSection').hide();
   
})();

//display navbar and right side container for "view"
const showView = function() {
  $('#viewSection').show();
  $('#addSection').hide();
  $('#verifySection').hide();
  $('#updateSection').hide();
  $('#deleteSection').hide();
  render();
 
  
};

//document.getElementById("demo").onmousedown = function() {mouseDown()};
//document.getElementById("demo").onmouseup = function() {mouseUp()};

//function mouseDown() {
 //   document.getElementById("demo").innerHTML = "The mouse button is held down.";
//}

//function mouseUp() {
 //   document.getElementById("demo").innerHTML = "You released the mouse button.";
   // document.getElementById("view").addClass('style', "yellow");
  //  $('.leftNavBar').addClass('style', 'yellow');
//}








//display navbar and right side container for "add"
const showAdd = function() {
  $('#viewSection').hide();
  $('#addSection').show();
  $('#verifySection').hide();
  $('#updateSection').hide();
  $('#deleteSection').hide();
};
//display navbar and right side container for "verify"
const showVerify = function() {
  $('#viewSection').hide();
  $('#addSection').hide();
  $('#verifySection').show();
  $('#updateSection').hide();
  $('#deleteSection').hide();
};

//display navbar and right side container for "update"
const showUpdate = function() {
  $('#viewSection').hide();
  $('#addSection').hide();
  $('#verifySection').hide();
  $('#updateSection').show();
  $('#deleteSection').hide();
};
//display navbar and right side container for "delete"
const showDelete = function() {
  $('#viewSection').hide();
  $('#addSection').hide();
  $('#verifySection').hide();
  $('#updateSection').hide();
  $('#deleteSection').show();
};


$('#view').on('click', showView);

$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);


// log works for a record -- attempting to retreive all records to feed to "view" for publication


const render = function() {
  $('.allContent').empty();
  for( let i=0; i < employeeList.length; i++ ) {
  $('.allContent').append(`<div class="box"><p>${employeeList[i].name}</p> <p>${employeeList[i].officeNum}</p> <p>${employeeList[i].phoneNum}</p> </div>`)
  }
};

//button and Add employee funtionality - addEmployee
const addEmployee = function() {
  const nameVal = $('#name').val();
//  console.log(nameVal);
 const officeNumVal = $('#officeNum').val();
//  console.log(officeNumVal);
  const phoneNumVal = $('#phoneNum').val();
//  console.log(phoneNumVal);
  employeeList.push({name: nameVal, officeNum: officeNumVal, phoneNum: phoneNumVal});
//  console.log(employeeList);
  $('#name').val('');
  $('#officeNum').val('');
  $('#phoneNum').val('');

showView();
};
$('#addEmployee').on('click', addEmployee);



//verify a name is in the array  
const verifyName = function() {
  let doesExist = 'no';
  const nameVal = $('#nameVerify').val();
  //console.log("'" + nameVal + "'");
  //nameVal1 = ("'" + nameVal + "'");
  //console.log(nameVal1);
  $('#nameVerify').val('');
  for( i = 0 ; i < employeeList.length; i++) {
    if(employeeList[i].name === nameVal) {
      doesExist = 'yes';
  //    console.log(doesExist);
    }
    }

//console.log(doesExist);
$('.valid').empty();
$('.valid').append(doesExist);
};

$('#verifyName').on('click', verifyName);


//update a name is in the array- confirm if exists, then allow user to update office, and phone num for that employee- 

const updateName = function() {
  let doesExist1 = -1;
  const nameVal = $('#nameUpdate').val();
  const officeNumVal = $('#officeNumUpdate').val();
  const phoneNumVal = $('#phoneNumUpdate').val();
   for( i = 0 ; i < employeeList.length; i++) {
    if(employeeList[i].name === nameVal) {
      doesExist1 = i;
      employeeList.splice(i,1, {name: nameVal, officeNum: officeNumVal, phoneNum: phoneNumVal});
  //    console.log(doesExist1);
    }
    }
    $('#nameUpdate').val('');
    $('#officeNumUpdate').val('');
    $('#phoneNumUpdate').val('');
//console.log(doesExist1);
showView();
};

$('#updateEmployee').on('click', updateName);


//verify a name is in the array  and if exists, then delete the entire object for that name - reuse verify piece initially

const deleteName = function() {
  let doesExist1 = -1;
  const nameVal = $('#deleteVerify').val();
   for( i = 0 ; i < employeeList.length; i++) {
    if(employeeList[i].name === nameVal) {
      doesExist1 = i;
      employeeList.splice(i,1);
//      console.log(doesExist1);
      $('#deleteVerify').val('');
    }
    }
//console.log(doesExist1);
showView();
};

$('#deleteName').on('click', deleteName);


