 console.log('Hello World')

 const alertCurrentTime = document.getElementById('alertCurrentTime')
 
 alertCurrentTime.addEventListener('click',function(){
    const currentTime = new Date()
    alert(currentTime)
})