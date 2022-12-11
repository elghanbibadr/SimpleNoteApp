let form=document.querySelector('form');
let addNoteIcon=document.querySelector('.addNoteIcon');
let overlay=document.querySelector('.overlay');
let closeOverlayIcon=document.querySelector('.closeIcon');
let notes=[];
addNoteIcon.addEventListener('click',()=>{
    overlay.classList.remove('hidden');
})


closeOverlayIcon.addEventListener('click',()=>{
    overlay.classList.add('hidden')
})


form.addEventListener('submit',(e)=>{
    e.preventDefault();
   // create note
    //get the enetered notes title and desc 
    let noteItem={id:null,'note-title':'','note-desc':'','note-time':new Date().toDateString()}
    form.querySelectorAll('input').forEach((input,index)=>{
         noteItem[input.id]=input.value;
         noteItem.id=index;
    })
    

  // check if note object values are valid
  if(Object.values(noteItem).some(value=>!value)){
   alert('please enter valid string')
   return
  }
// push the created note to the notes array
  notes.push(noteItem);

//   hide overlay
overlay.classList.add('hidden')
  // add the created note to notes
  let note=document.createElement('div');
  note.classList.add('card','note')
  note.innerHTML=`
     <h2 class='note__title'>${noteItem["note-title"]}</h2>
     <p class='note__desc'>${noteItem["note-desc"]}<p>
     <p class='note__time'>${noteItem['note-time']}<p>
     `
    overlay.insertAdjacentElement('beforebegin',note)
})
