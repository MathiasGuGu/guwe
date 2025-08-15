<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';

	interface ProcessStep {
		id: number;
		title: string;
		description: string;
		bulletPoints: string[];
	}

	const processSteps: ProcessStep[] = [
		{
			id: 1,
			title: 'Planlegging & forberedelse',
			description:
				'Vi starter med å samle inn informasjon om ditt prosjekt og dine behov. Dette inkluderer en grundig analyse av eksisterende nettside, brukerundersøkelser og samtaler med relevante interessenter.',
			bulletPoints: [
				'Analyse av eksisterende nettside',
				'Samtaler med relevante interessenter',
				'Brukerundersøkelser',
				'Planlegging av nettsiden'
			]
		},
		{
			id: 2,
			title: 'Design & utvikling',
			description:
				'Vi designer og utvikler nettsiden basert på informasjonen vi har samlet inn. Dette inkluderer wireframes, prototyper, visuell design og teknisk utvikling med moderne teknologier.',
			bulletPoints: [
				'Wireframes og prototyper',
				'Visuell design og branding',
				'Frontend utvikling',
				'Backend integrasjon'
			]
		},
		{
			id: 3,
			title: 'Testing & lansering',
			description:
				'Vi tester nettsiden grundig på forskjellige enheter og nettlesere før lansering. Etter lansering følger vi opp med vedlikehold og support for å sikre optimal ytelse.',
			bulletPoints: [
				'Kvalitetssikring og testing',
				'Cross-browser kompatibilitet',
				'Lansering og deployment',
				'Vedlikehold og support'
			]
		}
	];
</script>

<section
	class="flex w-full flex-col items-center justify-center bg-pink-50/40 py-12 sm:py-16 md:py-20"
	aria-labelledby="process-heading"
>
	<div class="w-full max-w-7xl px-4">
		<div class="mb-24 text-center">
			<h2
				id="process-heading"
				class="text-light-header font-sora mb-2 text-2xl font-medium sm:text-3xl md:text-4xl"
			>
				Min <span class="text-dark-background">prosess</span>
			</h2>
			<p class="text-light-paragraph mx-auto max-w-2xl text-base leading-relaxed">
				En systematisk tilnærming som sikrer at prosjektet ditt leveres på tid og med høy kvalitet.
			</p>
		</div>
		<div class="relative mx-auto max-w-7xl">
			{#each processSteps as step, index}
				<!-- Left cards (index 0, 2, 4...) positioned higher, Right cards (index 1, 3, 5...) positioned lower -->
				<div
					class="relative mb-16 {index % 2 === 0
						? 'md:float-left md:clear-left md:mb-20 md:w-1/2 md:pr-12'
						: 'md:float-right md:clear-right md:mt-96 md:w-1/2 md:pl-12'} {index !== 2 &&
						'md:mb-64'}"
				>
					<div class="mx-auto w-full max-w-lg">
						<!-- Animation Section -->
						<div
							class="relative mb-6 h-72 w-full overflow-hidden rounded-3xl border border-zinc-100 bg-[#ECE3FC]"
						>
							{#if step.id === 1}
								<DotLottieSvelte
									src="https://lottie.host/fe5e28b2-ec3e-4687-a45e-6620008f0776/NXHWBMgtRg.lottie"
									loop={true}
									autoplay={true}
								/>
							{/if}
							{#if step.id === 2}
								<div class="absolute inset-0 rounded-3xl bg-[#ECE3FC]"></div>
								<div class="relative z-10">
									<DotLottieSvelte
										src="https://lottie.host/5cd211c6-036b-431a-b76b-7e83a6d88319/cEHDZhy8Dv.lottie"
										loop={true}
										autoplay={true}
									/>
								</div>
							{/if}
							{#if step.id === 3}
								<DotLottieSvelte
									src="https://lottie.host/921acd83-1435-41f5-9a09-3df8ba658c35/O3pqRXbCyH.lottie"
									loop={true}
									autoplay={true}
								/>
							{/if}
						</div>

						<!-- Content Section -->
						<div class="text-center md:text-left">
							<!-- Step Tag -->
							<div class="mb-4">
								<span
									class="bg-dark-purple-background text-dark-purple-header inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
								>
									<span class="bg-dark-purple-header mr-1 h-1.5 w-1.5 rounded-full"></span>
									STEG {step.id}
								</span>
							</div>

							<!-- Title and Description -->
							<div class="space-y-3">
								<h3 class="font-sora text-light-header text-xl font-medium capitalize">
									{step.title}
								</h3>
								<p class="text-light-paragraph text-sm leading-relaxed">
									{step.description}
								</p>

								<!-- Arrow Link -->
								<div class="flex justify-center pt-2 md:justify-start">
									<div
										class="hover:bg-dark-purple-header flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all hover:text-white"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 5l7 7-7 7"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
			<!-- Clearfix to ensure proper flow after floated elements -->
			<div class="clear-both"></div>
		</div>
	</div>
</section>
