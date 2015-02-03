// Web Calculator

var calculator = {
   model: {
      value: 30,
      accumulator: 40,
      buttons: [
         { name: 'add',      display: '+' },
         { name: 'subtract', display: '-' },
         { name: 'multiply', display: '&times;' },
         { name: 'sqrt',     display: '&radic;' },
         { name: 'clear',    display: 'Clear' }
         ],
      },
   math: {
      add:      function(accumulator, value) { return accumulator + value; },
      subtract: function(accumulator, value) { return accumulator - value; },
      multiply: function(accumulator, value) { return accumulator * value; },
      sqrt:     function(accumulator, value) { return Math.sqrt(accumulator); },
      clear:    function(accumulator, value) { return 0; }
      },
   compute: function(elem) {
      var operator = dna.getModel(elem).name;
      var accumulator = calculator.model.accumulator;
      var value = calculator.model.value;
      accumulator = calculator.math[operator](accumulator, value);
      dna.mutate(dna.getClone(elem, { main: true }));  //new mutate!
      console.log(0, operator, calculator.model.accumulator, calculator.model);
      console.log(1, calculator.math[operator](accumulator, value))
      /*
      var component = dna.getClone(elem, { main: true });
      var output = component.find('.calculator-accumulator');
      var accumulator = parseFloat(output.text());
      var value = parseFloat(component.find('.calculator-value input').val());
      var model = dna.getModel(elem);
      var result = calculator.math[model.name](accumulator, value);
      output.text(result).hide().fadeIn();
      console.log('Web Calculator:', model.name, accumulator, value, '-->', result);
      */
      },
   toggleTheme: function(elem) {
      dna.getClone(elem).toggleClass('alt-theme');
      },
   setup: function() {
      dna.clone('calculator', calculator.model, { html: true });
      $('.calculator .calculator-value input').focus();
      }
   };
