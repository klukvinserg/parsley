$(document).ready(function () {
  $('#demo-form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);

    form.parsley().validate();

    if (form.parsley().isValid()) {
      myResult();
    }
  });

  window.Parsley.addValidator('palindrome', {
    validateString: function (value) {
      if (
        'test' === value.toLowerCase() ||
        'admin' === value.toLowerCase() ||
        'user' === value.toLowerCase()
      ) {
        return false;
      }
    },
    messages: {
      en: 'This string can not include words: admin, test, user',
    },
  });

  function myResult() {
    let tmp = $('#pass').val();

    let temp = tmp.length;

    tmp = tmp.split('');

    let countSmallLatter = 0;

    let countBigLetter = 0;

    let countDigits = 0;

    let countSymbol = 0;

    let resultText = '';

    tmp.forEach((element) => {
      if (
        (element.charCodeAt() >= 32 && element.charCodeAt() < 48) ||
        (element.charCodeAt() >= 58 && element.charCodeAt() < 55) ||
        (element.charCodeAt() >= 91 && element.charCodeAt() < 97) ||
        element.charCodeAt() >= 123
      ) {
        countSymbol++;
      } else if (element.charCodeAt() >= 48 && element.charCodeAt() < 58) {
        countDigits++;
      } else if (element.charCodeAt() >= 65 && element.charCodeAt() < 91) {
        countBigLetter++;
      } else if (element.charCodeAt() >= 97 && element.charCodeAt() < 123) {
        countSmallLatter++;
      }
    });

    if (
      countSmallLatter > 0 &&
      countBigLetter === 0 &&
      countDigits === 0 &&
      countSymbol === 0
    ) {
      resultText = 'Very easy';
    } else if (
      countSmallLatter === 0 &&
      countBigLetter > 0 &&
      countDigits === 0 &&
      countSymbol === 0
    ) {
      resultText = 'Very easy';
    } else if (
      countSmallLatter === 0 &&
      countBigLetter === 0 &&
      countDigits > 0 &&
      countSymbol === 0
    ) {
      resultText = 'Very easy';
    } else if (
      countSmallLatter > 0 &&
      countBigLetter === 0 &&
      countDigits > 0 &&
      countSymbol === 0
    ) {
      resultText = 'Easy';
    }  else if (
      countSmallLatter > 0 &&
      countBigLetter > 0 &&
      countDigits === 0 &&
      countSymbol === 0
    ) {
      resultText = 'Easy';
    } else if (
      countSmallLatter === 0 &&
      countBigLetter > 0 &&
      countDigits > 0 &&
      countSymbol === 0
    ) {
      resultText = 'Easy';
    } else if (
      countSmallLatter > 0 &&
      countBigLetter > 0 &&
      countDigits > 0 &&
      countSymbol === 0
    ) {
      resultText = 'Normal';
    } else if (
      countSmallLatter > 0 &&
      countBigLetter > 0 &&
      countDigits > 0 &&
      countSymbol > 0
    ) {
      resultText = 'Hard';
    }

    let resultString = '';

    for (let i = 0; i < temp; i++) {
      resultString += '*';
    }

    $('#result').append(`
          <h2>Result</h2>
          <table style="width:70%">
          <tr>
            <td>Username</td>
            <td>${$('#userName').val()}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${$('#userEmail').val()}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>${resultString} (${resultText})</td>
          </tr>
        </table>
   `);

    $('#userName').val('');
    $('#userEmail').val('');
    $('#pass').val('');
    $('#passRepeat').val('');

    $('input').removeClass('parsley-success');

    console.log(countSmallLatter);

    console.log(countBigLetter);

    console.log(countDigits);

    console.log(countSymbol);
  }
});
