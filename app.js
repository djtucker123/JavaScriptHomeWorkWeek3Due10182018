const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam',
  'Ralph'
]

alert(patientList);

const command = prompt('Choose one: add, update, delete, or reorder');
/* I did not add data validation, nor linking the four portions (I assume we will work through that shortly)
Also there is not "goto" to resume and I left the console.log statements in place for debugging*/

/* this section is to add new patient to list at end of patient list */
if (command === 'add') {
  const add = prompt('What is Patient to be added?');
  alert('The original triage list was ' + patientList);
  patientList.push(add);
  alert('Just added ' + add + ' to the triage list');
  alert('The new triage list is ' + patientList);

    /* this section is to process delete patient from list;*/
} else {
  console.log('add was not chosen');

    /*if command was Delete then exectue this*/
  
  if (command === 'delete') {
    const deleteMe = prompt('Which patient should be removed from the triage list?');
    alert(deleteMe + ' is to be removed from the triage List');

for(let i=0; i<patientList.length; i++){
  if (deleteMe === patientList[i]){
      patientList.splice(i,1);
      alert(patientList);
  }
}

  } else {
      console.log('delete was not chosen');
    }

/* this section is to update a typo in the patient list-- for corrections */

if (command === 'update') {
  const updateMe = prompt('Which patient should be updated on the triage list?');
  alert(updateMe + ' is to be updated on the triage list');
  const replaceMe = prompt('What is the correct entry to replace ' + updateMe );

    for(let i=0; i<patientList.length; i++){
      if (updateMe === patientList[i]){
        patientList.splice(i,1, replaceMe);
        alert(patientList);
      }
    }
  } else {
    console.log('update was not chosen');
  }

/* this section is to reorder the list by swapping two names in it */

if (command === 'reorder') {
  const reorder1 = prompt('Which is the 1st patient that should be swapped on the triage list?');
  const reorder2 = prompt('Which is the 2nd patient that should be swapped on the triage list?');
  alert(reorder1 + ' and ' + reorder2 + ' are to be swapped in the triage list');
  
  // position1 = index of first person, and position2 is index of second person
  let pos1 = 0;
  let pos2 = 0;

  // while i loops through array, find index positions for two names to swap
  for (let i = 0; i < patientList.length; i++) {
    if (patientList[i] === reorder1) {
      pos1 = i;
    }

    if (patientList[i] === reorder2) {
      pos2 = i;
    }
  }

  //put person 2 into position 1, and person 1 into position 2
  patientList.splice(pos1,1, reorder2);
  patientList.splice(pos2,1, reorder1);

  //display new array content with new order
  alert(patientList);
 
}
}
  



/* the following is the outline of the process structure dealing with each of the proposed 5 sub processes - [add, delete, update, reorder and displayList]
  I am keeping each of the five processes as the five pertinant execution variables (sloppy, but with size of this it makes sense)
if (command='add') {
  else {
    if (command='delete') {
      else {
        if (command='update') {
          else {
            if (command='reorder') {
              else {
                if (command='displayList') {
                  else {
                    prompt('you did not choose one of the five avaialble options.' + ' Please try again.'):
                  }
                }

              }
            }
          }
        }
      }
    }
  }


*/

