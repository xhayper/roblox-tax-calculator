<template>
  <div>
    <h1>ROBLOX MarketPlace Tax Calculator</h1>
    <label for="robuxAmount">Amount:</label>
    <br>
    <input id="robuxAmount" v-model.number="amount">
    <br>
    <br>
    <label>Amount of robux you are selling: {{ validatedAmount.toLocaleString() }}R$</label>
    <br>
    <label>Amount you will get from selling: {{ sellingWithTax.toLocaleString() }}R$</label>
    <br>
    <label>Amount to sell for including tax: {{ sellForIncludingTax.toLocaleString() }}R$</label>
    <br>
    <br>
    <label>Formula #1 : {{ validatedAmount.toLocaleString() }} * 0.7 = {{ sellingWithTax.toLocaleString() }}</label>
    <br>
    <label>Formula #2 : {{ validatedAmount.toLocaleString() }} * (10 / 7) = {{ sellForIncludingTax.toLocaleString()
    }}</label>
    <br>
    <br>
    <a href="https://github.com/xhayper/roblox-tax-calculator" target="_blank" rel="noreferrer noopener">Source code</a>
    <br>
    <a href="https://roblox-tax-calculator.moopro2.repl.co/" target="_blank" rel="noreferrer noopener">Original site</a>
  </div>
</template>

<script setup lang="ts">
const amount = useState("amount", () => 0);

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

const validatedAmount = computed(() => typeof amount.value !== "number" || Number.isNaN(amount.value) ? 0 : clamp(amount.value, 0, 999999999));

const sellingWithTax = computed(() => Math.floor(validatedAmount.value * 0.7));

const sellForIncludingTax = computed(() => Math.ceil(validatedAmount.value * (10 / 7)));
</script>