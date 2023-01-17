function main() {
  //show the menu mobile
  function showMenu() {
    document.getElementById('header-menu-mobile').innerHTML = '<i class="bi bi-x"></i>'
      document.getElementById('wrapper').classList.add('wrapper-move');
      document.querySelector('.menu-mobile').classList.add('show-menu-mobile');
      document.querySelector('.menu-overlay').classList.add('show-menu-overlay');
  }
  
  //hide the menu mobile
  function hideMenu() {
    document.getElementById('header-menu-mobile').innerHTML = '<i class="bi bi-list"></i>'
    document.getElementById('wrapper').classList.remove('wrapper-move');
    document.querySelector('.menu-mobile').classList.remove('show-menu-mobile');
    document.querySelector('.menu-overlay').classList.remove('show-menu-overlay');
  }

  document.getElementById('header-menu-mobile').addEventListener('click', showMenu)
  document.querySelector('.menu-overlay').addEventListener('click', hideMenu)
}
main()