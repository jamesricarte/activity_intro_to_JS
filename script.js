alert('WELCOME USER/STUDENTS');

document.addEventListener('DOMContentLoaded', function() {
    var printButton = document.querySelector('.print-button');

    if (printButton) {
      printButton.addEventListener('click', function() {
        window.print();
      });
    }
  });