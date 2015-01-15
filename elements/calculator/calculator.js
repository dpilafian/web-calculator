// Web Calculator

var calculator = {
   math: {
      add:      function(accumulator, value) { return accumulator + value; },
      subtract: function(accumulator, value) { return accumulator - value; },
      multiply: function(accumulator, value) { return accumulator * value; },
      sqrt:     function(accumulator, value) { return Math.sqrt(accumulator); },
      clear:    function(accumulator, value) { return 0; }
      },
   buttons: [
      { name: 'add',      display: '+' },
      { name: 'subtract', display: '-' },
      { name: 'multiply', display: '&times;' },
      { name: 'sqrt',     display: '&radic;' },
      { name: 'clear',    display: 'Clear' }
      ],
   compute: function(elem) {
      var component = elem.closest('.web-calc');
      var output = component.find('.calc-accumulator');
      var accumulator = parseFloat(output.text());
      var value = parseFloat(component.find('.calc-value input').val());
      var model = dna.getModel(elem);
      var result = calculator.math[model.name](accumulator, value);
      output.text(result).hide().fadeIn();
      console.log('Web Calculator:', model.name, accumulator, value, '-->', result);
      },
   setup: function() {
      dna.clone('calc-button', calculator.buttons, { html: true });
      $('.web-calc .calc-value input').focus();
      }
   };
