<script lang="ts">
	import '../app.css';
	import Footer from './components/footer.svelte';
	import Navbar from './components/navbar.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
