const money = document.querySelector('#price');
const pepoleAmount = document.querySelector('#pepole');
const tip = document.querySelector('#tip');
const errorText = document.querySelector('.error');
const button = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const tipCount = () => {
	if (money.value !== '' && pepoleAmount.value !== '' && tip.value !== null) {
		const newMoney = parseFloat(money.value);
		const newpepoleAmount = parseInt(pepoleAmount.value);
		const newTip = parseFloat(tip.value);
		const result = (newMoney + newMoney * newTip) / newpepoleAmount;
		costInfo.style.display = 'block';
		cost.textContent = result.toFixed(2);
		errorText.textContent = '';
	} else {
		errorText.textContent = 'Wprowadź wszystkie wartośći';
	}
};

button.addEventListener('click', tipCount);
