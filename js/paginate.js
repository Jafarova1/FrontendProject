var pagination = document.querySelector('.pagination');
var pages = document.querySelectorAll('.pagination li');
for (var i = 0; i < pages.length; i++) {
  pages[i].addEventListener('click', function() {
    var activePage = document.querySelector('.pagination .active');
    activePage.classList.remove('active');
    this.classList.add('active');
  });
}