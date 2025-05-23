<script lang="ts">
	export let title: string;
	export let description: string;
	export let buttonText: string;
	export let color: 'purple' | 'blue' | 'orange' | 'pink';
	export let boxShadow: string;

	// Map color to classes
	const colorClasses = {
		purple: {
			background: 'bg-dark-purple-background',
			border: 'border-dark-purple-header',
			heading: 'text-dark-purple-header',
			paragraph: 'text-dark-purple-paragraph',
			button: 'bg-dark-purple-header text-dark-header',
			ring: 'focus:ring-dark-purple-header',
			hover: 'hover:bg-dark-purple-header/95'
		},
		blue: {
			background: 'bg-blue-background',
			border: 'border-blue-heading',
			heading: 'text-blue-heading',
			paragraph: 'text-blue-paragraph',
			button: 'bg-blue-heading text-dark-header',
			ring: 'focus:ring-blue-heading',
			hover: 'hover:bg-blue-heading/95'
		},
		orange: {
			background: 'bg-orange-background',
			border: 'border-orange-heading',
			heading: 'text-orange-heading',
			paragraph: 'text-orange-paragraph',
			button: 'bg-orange-heading text-dark-header',
			ring: 'focus:ring-orange-heading',
			hover: 'hover:bg-orange-heading/95'
		},
		pink: {
			background: 'bg-pink-background',
			border: 'border-pink-heading',
			heading: 'text-pink-heading',
			paragraph: 'text-pink-paragraph',
			button: 'bg-pink-heading text-dark-header',
			ring: 'focus:ring-pink-heading',
			hover: 'hover:bg-pink-heading/95'
		}
	};
</script>

<article
	class="{colorClasses[color].background} {colorClasses[color]
		.border} flex h-full w-full flex-col justify-end gap-2 rounded border p-6 sm:p-8 md:p-12"
	style="box-shadow: {boxShadow};"
>
	<h3 class="{colorClasses[color].heading} text-xl font-semibold sm:text-2xl">{title}</h3>
	<p class="{colorClasses[color].paragraph} max-w-lg text-base text-balance sm:text-lg">
		{description}
	</p>
	<a
		href="#venteliste"
		class="{colorClasses[color].button} {colorClasses[color]
			.hover} mt-4 w-fit rounded px-4 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none sm:text-base {colorClasses[
			color
		].ring}"
		aria-label={buttonText}
	>
		{buttonText}
	</a>
</article>
