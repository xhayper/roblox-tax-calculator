<script>
  import './styles.css';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
  <header>
    <h1>Roblox Tax Calculator</h1>
  </header>

  <main>
    <slot />
  </main>
  <br />

  <footer>
    <div>
      <a href="https://roblox-tax-calculator.moopro2.repl.co/" target="_blank" rel="noreferrer noopener"
        >Original site (not by me)</a
      >
      <br />
      <a href="https://github.com/xhayper/roblox-tax-calculator/" target="_blank" rel="noreferrer noopener"
        >Source code</a
      >
    </div>
  </footer>
</div>
