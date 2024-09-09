 console.log('Hello World')

 const alertCurrentTime = document.getElementById('alertCurrentTime')
 
 alertCurrentTime.addEventListener('click',function(){
    const currentTime = new Date()
    alert(currentTime)
})

document.addEventListener('DOMContentLoaded', function () {
    const textButton = document.getElementById('textButton');
    const longTextArea = document.getElementById('longTextArea');
    const noteSection = document.getElementById('noteSection');
  
    textButton.addEventListener('click', function () {
     
      const textValue = longTextArea.value;
  
      const newParagraph = document.createElement('li');
  
      newParagraph.textContent = textValue;
  
      noteSection.appendChild(newParagraph);
  
      longTextArea.value = '';
    });
  });
  