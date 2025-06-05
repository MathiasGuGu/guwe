<script lang="ts">
	import '../app.css';
	import Footer from './components/footer.svelte';
	import Navbar from './components/navbar.svelte';
</script>

<!-- Global SEO and Performance Optimizations -->
<svelte:head>
	<!-- Performance hints -->
	<link rel="dns-prefetch" href="//fonts.gstatic.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

	<!-- Critical CSS for above-the-fold content -->
	<style>
		/* Critical CSS for initial paint */
		body {
			font-family:
				system-ui,
				-apple-system,
				sans-serif;
		}
		.navbar {
			height: 4rem;
		}
		@media (min-width: 640px) {
			.navbar {
				height: 5rem;
			}
		}
		@media (min-width: 768px) {
			.navbar {
				height: 6rem;
			}
		}
	</style>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
