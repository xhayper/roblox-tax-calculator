<script lang="ts">
	const clamp = (value: number, min: number, max: number): number =>
		Math.min(Math.max(value, min), max);

	let robuxAmount = 0;

	let clampedAmount = 0;

	$: {
		clampedAmount =
			typeof robuxAmount !== 'number' || Number.isNaN(robuxAmount)
				? 0
				: clamp(robuxAmount, 0, 999999999);
	}

	$: amountAfterSell = clampedAmount * 0.7;
	$: amountToSellWithTax = clampedAmount * (10 / 7);
	$: roundedAmountAfterSell =
		amountAfterSell % 1 > 0.75 ? Math.ceil(amountAfterSell) : Math.floor(amountAfterSell);
	$: roundedAmountToSellWithTax =
		amountToSellWithTax % 1 > 0.75
			? Math.ceil(amountToSellWithTax)
			: Math.floor(amountToSellWithTax);
</script>

<div>
	<label for="robuxAmount">Selling amount:</label>
	<br />
	<input
		type="number"
		min="0"
		max="999999999"
		required
		aria-required="true"
		id="robuxAmount"
		bind:value={robuxAmount}
	/>
</div>
<br />
<div>
	<span>Amount you are selling: {clampedAmount.toLocaleString()} R$</span>
	<br />
	<span>Amount you will get from selling: {roundedAmountAfterSell.toLocaleString()} R$</span>
	<br />
	<span>Amount to sell including tax: {roundedAmountToSellWithTax} R$</span>
</div>
<br />
<div>
	<span>Formula #1 : {clampedAmount} * 0.7 = {amountAfterSell}</span>
	<br />
	<span>Formula #2 : {clampedAmount} * (10 / 7) = {amountToSellWithTax}</span>
</div>
