/** @format */

module.exports = function formatCurrency(amount) {
	const formattedAmount = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(amount);

	return formattedAmount;
};
