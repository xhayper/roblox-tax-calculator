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
        <span>Amount you are selling: {{ clampedAmount.toLocaleString() }} R$</span>
        <br>
        <span>Amount you will get from selling: {{ Math.floor(amountAfterSell).toLocaleString() }} R$</span>
        <br>
        <span>Amount to sell including tax: {{ Math.ceil(amountToSellWithTax) }} R$</span>
      </div>
      <br>
      <div>
        <span>Formula #1 : {{ clampedAmount }} * 0.7 = {{ amountAfterSell }}</span>
        <br>
        <span>Formula #2 : {{ clampedAmount }} * (10 / 7) = {{ amountToSellWithTax
        }}</span>
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

const clampedAmount = computed(() => typeof amount.value !== "number" || Number.isNaN(amount.value) ? 0 : clamp(amount.value, 0, 999999999));

const amountAfterSell = computed(() => clampedAmount.value * 0.7);

const amountToSellWithTax = computed(() => clampedAmount.value * (10 / 7));
</script>