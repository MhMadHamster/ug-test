document.addEventListener('DOMContentLoaded', function(event) {

  var signInBlock = document.getElementById('sign-in_block'),
      signUpBlock = document.getElementById('sign-up_block'),
      successBlock = document.getElementById('success_block');

  var selectors = document.getElementsByClassName('js-sign-change');
  var i, l;

  for (i = 0, l = selectors.length; i < l; i += 1) {
    selectors[i].addEventListener('click', function(event) {
      event.preventDefault();

      signInBlock.classList.toggle('hide');
      signUpBlock.classList.toggle('hide');
    });
  }

  var formSelectors = document.getElementsByTagName('form');

  for (i = 0, l = formSelectors.length; i < l; i += 1) {
    formSelectors[i].addEventListener('submit', function(event) {
      event.preventDefault();

      signInBlock.classList.add('hide');
      signUpBlock.classList.add('hide');
      successBlock.classList.remove('hide');
      setTimeout(function() {
        successBlock.getElementsByClassName('check')[0].classList.remove('animate');
      }, 300);
    }, true)
  }

});

