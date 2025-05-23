<script>
	import { ArrowUpRight, Mail } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;
		const elements = document.querySelectorAll('.animate-in');
		const links = document.querySelectorAll('.animate-side');
		let tl = gsap.timeline();
		tl.fromTo(
			elements,
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.6, stagger: 0.14, ease: 'power3.out' }
		).fromTo(
			links,
			{ x: 20, opacity: 0 },
			{ x: 0, opacity: 1, duration: 0.5, stagger: 0.18, ease: 'power3.out' },
			'-=0.3'
		);
	});
</script>

<main
	class="mt-16 flex w-full flex-col items-center justify-center bg-white px-4 sm:mt-20 md:mt-24"
>
	<section class="flex w-full max-w-7xl flex-col items-start gap-4">
		<h1
			class="animate-in mb-2 max-w-4xl text-3xl leading-tight font-extrabold text-balance text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
		>
			Jeg hjelper deg med å bli synlig på nett uten å betale for mye.
		</h1>
		<p class="animate-in mb-6 max-w-2xl text-base text-gray-700 sm:text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga dolorem est
			assumenda, sunt, soluta mollitia deleniti suscipit hic numquam animi tempora corrupti ducimus
			pariatur.
		</p>
		<div class="flex flex-col flex-wrap gap-3 sm:flex-row">
			<a
				href="#venteliste"
				class="animate-side bg-dark-background text-dark-header hover:bg-dark-background/80 focus:ring-dark-background inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-semibold shadow transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
				aria-label="Meld deg på ventelisten"
			>
				Meld deg på ventelisten <Mail size={20} strokeWidth={1.5} />
			</a>
			<a
				href="#tjenester"
				class="animate-side focus:ring-dark-background hover:bg-dark-background/5 text-light-header inline-flex items-center justify-center gap-2 rounded border bg-white px-6 py-3 font-semibold transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
				aria-label="Se tjenester"
			>
				Tjenester <ArrowUpRight size={20} strokeWidth={1.5} />
			</a>
		</div>
	</section>
</main>
