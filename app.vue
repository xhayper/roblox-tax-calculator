<template>
  <div>
    <header>
      <h1>ROBLOX MarketPlace Tax Calculator</h1>
    </header>
    <main>
      <div>
        <label for="robuxAmount">Selling amount:</label>
        <br>
        <input id="robuxAmount" v-model.number="amount">
      </div>
      <br>
      <div>
        <label>Amount of robux you are selling: {{ validatedAmount.toLocaleString() }} R$</label>
        <br>
        <label>Amount you will get from selling: {{ sellingWithTax.toLocaleString() }} R$</label>
        <br>
        <label>Amount to sell including tax: {{ sellForIncludingTax }} R$</label>
      </div>
      <br>
      <div>
        <label>Formula #1 : {{ validatedAmount }} * 0.7 = {{ sellingWithTax }}</label>
        <br>
        <label>Formula #2 : {{ validatedAmount }} * (10 / 7) = {{ sellForIncludingTax
        }}</label>
      </div>
    </main>
    <br>
    <footer>
      <div>
        <a href="https://roblox-tax-calculator.moopro2.repl.co/" target="_blank" rel="noreferrer noopener">Original
          site (not by me)</a>
        <br>
        <a href="https://github.com/xhayper/roblox-tax-calculator/" target="_blank" rel="noreferrer noopener">Source
          code</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import "water.css/out/dark.min.css";

const amount = useState("amount", () => 0);

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

const validatedAmount = computed(() => typeof amount.value !== "number" || Number.isNaN(amount.value) ? 0 : clamp(amount.value, 0, 999999999));

const sellingWithTax = computed(() => Math.floor(validatedAmount.value * 0.7));

const sellForIncludingTax = computed(() => Math.ceil(validatedAmount.value * (10 / 7)));
</script>