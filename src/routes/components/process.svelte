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
	class="text-light-header bg-light-purple-background/50 flex w-full flex-col items-center justify-center px-4 py-16 sm:mt-20 md:mt-24"
	aria-labelledby="faq-heading"
>
	<div class="w-full max-w-7xl">
		<h3 class="text-2xl font-semibold">
			Vi følger en systematisk prosess for å sikre at prosjektet leveres på tide og med høy
			kvalitet.
		</h3>
		<div class="flex w-full flex-col gap-8">
			{#each processSteps as step, index}
				<article
					class="mt-8 flex w-full flex-col items-start justify-start gap-8 md:flex-row md:items-center md:gap-24"
				>
					<div
						id={index === 2 ? 'rocket-lottie-container' : 'point-animation'}
						class="border-dark-purple-header relative h-48 min-h-48 w-full overflow-hidden rounded-xl border bg-white md:h-80 md:w-96"
						style="box-shadow: 10px 12px 0px 0px #5249b425;"
					>
						{#if step.id === 2}
							<div class=" size-full">
								<DotLottieSvelte
									src="https://lottie.host/11755487-09ff-4ede-8b16-0b563aba2655/2CqMZoY41J.lottie"
									loop={true}
									autoplay={true}
								/>
							</div>
						{/if}
						{#if step.id === 3}
							<div class=" size-full">
								<DotLottieSvelte
									src="https://lottie.host/921acd83-1435-41f5-9a09-3df8ba658c35/O3pqRXbCyH.lottie"
									loop={true}
									autoplay={true}
								/>
							</div>
						{/if}
					</div>
					<div class="flex flex-col gap-2">
						<h3 class="text-dark-purple-header text-2xl font-bold">{step.title}</h3>
						<p class="text-dark-purple-paragraph max-w-xl text-base">
							{step.description}
						</p>
						<ul class="list-disc pl-4">
							{#each step.bulletPoints as bulletPoint}
								<li>
									<span class="bg-dark-purple-header mr-3 h-2 w-2 rounded-full"></span>
									{bulletPoint}
								</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
