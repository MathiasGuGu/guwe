<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<section
	class="flex w-full flex-col items-center justify-center bg-white py-12 sm:py-16 md:py-20"
	aria-labelledby="kundecase-header"
>
	<div class="w-full max-w-7xl px-4">
		<div class="mb-12 text-center">
			<h2
				id="kundecase-header"
				class="text-light-header font-sora mb-2 text-2xl font-medium sm:text-3xl md:text-4xl"
			>
				Kunde<span class="text-dark-background">caser</span>
			</h2>
			<p class="text-light-paragraph mx-auto max-w-2xl text-base leading-relaxed">
				Se hvordan jeg har hjulpet andre bedrifter med å få en sterkere digital tilstedeværelse
			</p>
		</div>

		<div class="w-full">
			<article class="overflow-hidden rounded-3xl border border-zinc-100 bg-white transition-all">
				<div class="flex flex-col lg:flex-row">
					<!-- Image section -->
					<div class="relative h-64 sm:h-80 lg:h-auto lg:w-1/2">
						<img
							src={'/kulien.webp'}
							width={1200}
							height={1200}
							alt="Kulien website redesign showcase"
							class="h-full w-full object-cover"
						/>
					</div>

					<!-- Content section -->
					<div class="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2 lg:p-12">
						<div class="space-y-6">
							<!-- Project badge -->
							<div class="mb-4">
								<span
									class="bg-dark-purple-background text-dark-purple-header inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
								>
									<span class="bg-dark-purple-header mr-1 h-1.5 w-1.5 rounded-full"></span>
									NETTSIDEREDESIGN
								</span>
							</div>

							<!-- Title and description -->
							<div class="space-y-4">
								<h3 class="font-sora text-light-header text-2xl font-medium capitalize sm:text-3xl">
									Kulien fikk helt ny look
								</h3>
								<p class="text-light-paragraph text-sm leading-relaxed">
									En komplett redesign av Kuliens nettside med fokus på moderne design, bedre
									brukeropplevelse og økt konvertering. Resultatet var en 40% økning i besøkstid og
									betydelig forbedret mobilopplevelse.
								</p>
							</div>

							<!-- Results/metrics -->
							<div class="grid grid-cols-2 gap-4 py-4">
								<div class="rounded-2xl bg-gray-50 p-4 text-center">
									<div class="text-dark-purple-header font-sora text-2xl font-medium">40%</div>
									<div class="text-light-paragraph text-xs">Økt besøkstid</div>
								</div>
								<div class="rounded-2xl bg-gray-50 p-4 text-center">
									<div class="text-dark-purple-header font-sora text-2xl font-medium">95%</div>
									<div class="text-light-paragraph text-xs">Mobil score</div>
								</div>
							</div>

							<!-- Call to action -->
							<div class="flex justify-start pt-2">
								<div
									class="hover:bg-dark-purple-header flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all hover:text-white"
								>
									<ArrowRight class="h-4 w-4" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
