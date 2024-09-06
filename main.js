 console.log('Hello World')

 const alertCurrentTime = document.getElementById('alertCurrentTime')
 
 alertCurrentTime.addEventListener('click',function(){
    const currenTime = new Date()
    alert(currenTime)
})