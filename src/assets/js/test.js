var apple = 'red'; 

$('.nav-sidebar a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.carousel').carousel()