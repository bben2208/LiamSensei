 console.log('Hello World')

 const alertCurrentTime = document.getElementById('alertCurrentTime')
 
 alertCurrentTime.addEventListener('click',function(){
    const currentTime = new Date()
    alert(currentTime)
})

document.addEventListener('DOMContentLoaded', function () {
    const textButton = document.getElementById('textButton');
    const  textInput = document.getElementById('longTextArea');
    const noteSection = document.getElementById('noteSection');
  
    textButton.addEventListener('click', function () {
     
      const textValue =  textInput.value;
  
      const  newList = document.createElement('li');
  
      newList.textContent = textValue;
  
      noteSection.appendChild( newList);
  
      textInput.value = '';
    });
  });
  