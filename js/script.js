 const hamburger=document.querySelector(".hamburger")
  const navMenu=document.querySelector(".nav-menu")

  hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }))

//   var readMoreButton = document.querySelector('.btn');
// var readMoreContent = document.querySelector('.full-content');
// readMoreButton.addEventListener('click', function(event) {
//   event.preventDefault();

//   if(readMoreContent.style.display==='none'){
//     readMoreContent.style.display==='block'
//     readMoreButton.textContent='Read Less'
//   }
//   else{
//     readMoreContent.style.display==='none'
//     readMoreButton.textContent='Read More'

//   }
  // readMoreContent.style.display = 'block';
// });

        var readMoreLink = document.getElementById('read-more-link');
        var fullContent = document.querySelector('.full-content');

        readMoreLink.addEventListener('click', function (event) {
            event.preventDefault();

            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                readMoreLink.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                readMoreLink.textContent = 'Read More';
            }
        });



        

        
