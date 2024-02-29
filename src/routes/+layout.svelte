<script>
	import './styles.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://rsms.me/">
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css">	
	<meta name="theme-color" content="#202b38" />
</svelte:head>

<div class="app">
	<header>
		<h1>Roblox Marketplace Calculator</h1>
	</header>

	<main>
		<slot />
	</main>
	<br />

	<footer>
		<div>
			<a
				href="https://roblox-tax-calculator.moopro2.repl.co/"
				target="_blank"
				rel="noreferrer noopener">Original site (not by me)</a
			>
			<br />
			<a
				href="https://github.com/xhayper/roblox-tax-calculator/"
				target="_blank"
				rel="noreferrer noopener">Source code</a
			>
		</div>
	</footer>
</div>
