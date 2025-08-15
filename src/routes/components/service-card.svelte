<script lang="ts">
	import { Search, Zap, Smartphone, Shield, ArrowRight } from 'lucide-svelte';

	export let title: string;
	export let description: string;
	export let buttonText: string;
	export let color: 'purple' | 'blue' | 'orange' | 'pink';
	export let boxShadow: string;
	export let icon: 'search' | 'zap' | 'smartphone' | 'shield';

	// Map icons
	const iconComponents = {
		search: Search,
		zap: Zap,
		smartphone: Smartphone,
		shield: Shield
	};

	// Map color to classes
	const colorClasses = {
		purple: {
			background: 'bg-white',
			border: 'border-dark-purple-header',
			heading: 'text-dark-purple-header',
			paragraph: 'text-dark-purple-paragraph',
			button: 'bg-dark-background text-dark-header border-dark-background',
			buttonAlt: 'border-dark-purple-header text-dark-purple-header bg-white',
			ring: 'focus:ring-dark-purple-header',
			hover: 'hover:bg-dark-background/90',
			hoverAlt: 'hover:bg-dark-purple-header hover:text-white'
		},
		blue: {
			background: 'bg-white',
			border: 'border-blue-heading',
			heading: 'text-blue-heading',
			paragraph: 'text-blue-paragraph',
			button: 'bg-dark-background text-dark-header border-dark-background',
			buttonAlt: 'border-blue-heading text-blue-heading bg-white',
			ring: 'focus:ring-blue-heading',
			hover: 'hover:bg-dark-background/90',
			hoverAlt: 'hover:bg-blue-heading hover:text-white'
		},
		orange: {
			background: 'bg-white',
			border: 'border-orange-heading',
			heading: 'text-orange-heading',
			paragraph: 'text-orange-paragraph',
			button: 'border-orange-heading text-orange-heading bg-white',
			buttonAlt: 'bg-dark-background text-dark-header border-dark-background',
			ring: 'focus:ring-orange-heading',
			hover: 'hover:bg-orange-heading hover:text-white',
			hoverAlt: 'hover:bg-dark-background/90'
		},
		pink: {
			background: 'bg-white',
			border: 'border-pink-heading',
			heading: 'text-pink-heading',
			paragraph: 'text-pink-paragraph',
			button: 'border-pink-heading text-pink-heading bg-white',
			buttonAlt: 'bg-dark-background text-dark-header border-dark-background',
			ring: 'focus:ring-pink-heading',
			hover: 'hover:bg-pink-heading hover:text-white',
			hoverAlt: 'hover:bg-dark-background/90'
		}
	};

	// Alternate button style for variety
	const useAltButton = color === 'orange' || color === 'pink';
	const IconComponent = iconComponents[icon];
</script>

<article
	class="{colorClasses[color].background} {colorClasses[color]
		.border} flex h-full w-full flex-col justify-between gap-4 rounded border p-6 sm:p-8"
	style="box-shadow: {boxShadow};"
>
	<div class="space-y-3">
		<div class="flex items-center gap-3">
			<div class="{colorClasses[color].heading} rounded-lg bg-gray-50 p-2">
				<IconComponent size={20} strokeWidth={1.5} />
			</div>
			<h3 class="{colorClasses[color].heading} font-sora text-lg font-medium sm:text-xl">
				{title}
			</h3>
		</div>
		<p class="{colorClasses[color].paragraph} text-sm leading-relaxed">
			{description}
		</p>
	</div>
	<a
		href="#contact-form"
		class="{useAltButton ? colorClasses[color].button : colorClasses[color].buttonAlt} {useAltButton
			? colorClasses[color].hover
			: colorClasses[color]
					.hoverAlt} group mt-2 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none {colorClasses[
			color
		].ring}"
		aria-label={buttonText}
	>
		{buttonText}
		<ArrowRight strokeWidth={1.5} size={14} />
	</a>
</article>
