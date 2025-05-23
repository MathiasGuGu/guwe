<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import gsap from 'gsap';
	import { createEventDispatcher } from 'svelte';
	export let question: string;
	export let answer: string;
	export let isOpen: boolean;
	export let onClick: () => void;
	export let contentId: string;
	export let buttonId: string;
	let contentRef: HTMLDivElement;

	// Animate open/close with GSAP
	function animateAccordion() {
		if (contentRef) {
			if (isOpen) {
				gsap.to(contentRef, {
					height: 'auto',
					duration: 0.4,
					ease: 'power2.out',
					opacity: 1,
					pointerEvents: 'auto'
				});
			} else {
				gsap.to(contentRef, {
					height: 0,
					duration: 0.3,
					ease: 'power2.in',
					opacity: 0,
					pointerEvents: 'none'
				});
			}
		}
	}

	afterUpdate(animateAccordion);
</script>

<div class="qanda-accordion">
	<button
		id={buttonId}
		aria-expanded={isOpen}
		aria-controls={contentId}
		class="hover:bg-light-purple-background/20 flex w-full items-center justify-between bg-transparent px-2 py-6 text-left font-semibold transition focus:ring focus:outline-none sm:py-8"
		on:click={onClick}
		type="button"
	>
		<span class="text-sm sm:text-base md:text-lg">{question}</span>
		<span
			class="ml-4 flex-shrink-0 transition-transform duration-300"
			style="transform: rotate({isOpen ? 180 : 0}deg);"
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#000"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg
			>
		</span>
	</button>
	<div
		id={contentId}
		bind:this={contentRef}
		role="region"
		aria-labelledby={buttonId}
		class="overflow-hidden px-2"
		style="height: 0; opacity: 0; pointer-events: none;"
	>
		<div class="text-light-paragraph py-4 text-sm sm:py-6 sm:text-base">{answer}</div>
	</div>
</div>
