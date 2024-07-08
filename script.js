document.querySelector('.searchfield').addEventListener('keyup', function() {
    var suggestions = document.querySelector('.suggestions');
    var text = this.value;
    suggestions.innerHTML = '';
    if (text.length) {
      suggestions.classList.add('active');
      var items = [
        '<li><b>' + text + '</b></li>',
        '<li>Veritatis et <b>' + text + '</b></li>',
        '<li>ut aliquid ex <b>' + text + '</b> vero eos</li>'
      ];
      items.forEach(function(item) {
        suggestions.insertAdjacentHTML('beforeend', item);
      });
    } else {
      suggestions.classList.remove('active');
    }
  });