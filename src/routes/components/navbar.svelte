<script lang="ts">
	import { RocketIcon, Menu, X, Sparkle, ArrowRight } from 'lucide-svelte';

	const navItems = [
		{
			title: 'Forside',
			href: '/'
		},
		{ title: 'Blog', href: '/blog' }
	];

	let isMobileMenuOpen = $state(false);

	const handleToggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const handleCloseMobileMenu = () => {
		isMobileMenuOpen = false;
	};
</script>

<div
	class="bg-light-background text-light-header flex h-18 w-screen items-center justify-center sm:h-18 md:h-18"
>
	<div
		class="flex size-full max-w-7xl items-center justify-between border-b border-zinc-100 px-4 md:px-0"
	>
		<span aria-label="GUWE logo" class="text-xl font-semibold tracking-tighter md:text-2xl"
			>GU<span class="italic">W</span>E</span
		>

		<!-- Desktop Navigation -->
		<nav
			aria-label="Hovedmeny"
			class="text-light-paragraph hidden items-center gap-6 md:flex lg:gap-8"
		>
			{#each navItems as item}
				<a class=" transition-all hover:border-b-2" href={item.href}>{item.title}</a>
			{/each}
			<a
				href="/#venteliste"
				class="bg-dark-background text-dark-header hover:bg-dark-background/80 focus:ring-dark-background inline-flex items-center gap-2 rounded-full px-3 py-1 transition focus:ring-2 focus:ring-offset-2 focus:outline-none lg:px-5 lg:py-2 lg:text-sm"
				aria-label="Med deg på ventelisten"
			>
				Bestill en nettside <ArrowRight size={16} strokeWidth={1.5} />
			</a>
		</nav>

		<!-- Mobile Menu Button -->
		<button
			class="rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden"
			onclick={handleToggleMobileMenu}
			aria-label="Toggle mobile menu"
		>
			{#if isMobileMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Mobile Navigation -->
	{#if isMobileMenuOpen}
		<div class="absolute top-16 right-0 left-0 z-50 bg-white shadow-lg sm:top-20 md:hidden">
			<nav aria-label="Mobile hovedmeny" class="flex flex-col space-y-4 px-4 py-4">
				{#each navItems as item}
					<a
						class="text-light-paragraph hover:text-light-header py-2 text-lg transition-colors"
						href={item.href}
						onclick={handleCloseMobileMenu}
					>
						{item.title}
					</a>
				{/each}
				<a
					href="/#venteliste"
					class="bg-dark-background text-dark-header hover:bg-dark-background/80 focus:ring-dark-background mt-4 inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-base transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
					aria-label="Med deg på ventelisten"
					onclick={handleCloseMobileMenu}
				>
					Bli med i dag <RocketIcon size={18} strokeWidth={1.5} />
				</a>
			</nav>
		</div>
	{/if}
</div>
