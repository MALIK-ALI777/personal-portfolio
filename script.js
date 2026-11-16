(function(){
    var menuBtn = document.getElementById('menuBtn');
    var navLinks = document.getElementById('navLinks');
    menuBtn.addEventListener('click', function(){
      var open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.addEventListener('click', function(e){
      if (e.target.tagName === 'A') navLinks.classList.remove('open');
    });

    document.getElementById('year').textContent = new Date().getFullYear();
  })();
