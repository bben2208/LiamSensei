 console.log('Hello World')

 

document.addEventListener('DOMContentLoaded', function () {
    const textButton = document.getElementById('textButton');
    const textInput = document.getElementById('textInput');
    const textList = document.getElementById('textList');

    const alertCurrentTime = document.getElementById('alertCurrentTime')
 
 alertCurrentTime.addEventListener('click',function(){
    const currentTime = new Date()
    alert(currentTime)
})
  
    textButton.addEventListener('click', function () {
     
      const textValue =  textInput.value;
  
      const  newList = document.createElement('li');
  
      newList.textContent = textValue;
  
      textList.appendChild( newList);
  
      textInput.value = '';
    });
  });
  