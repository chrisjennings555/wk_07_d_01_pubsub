const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const isNumberPrime = event.detail;
    this.displayResult(isNumberPrime);
  });
};

ResultView.prototype.displayResult = function (event) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${event}`;

};

module.exports = ResultView;
