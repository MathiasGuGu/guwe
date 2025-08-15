<script lang="ts">
	import ServiceCard from './service-card.svelte';
</script>

<div
	class="mt-16 flex w-full flex-col items-center justify-center px-4 py-12 sm:mt-20 sm:py-16 md:mt-24"
>
	<div class="w-full max-w-7xl">
		<!-- Section Header -->
		<div class="mb-8 text-center">
			<h2
				class="text-light-header font-sora mb-2 text-xl font-medium underline sm:text-3xl md:text-4xl"
			>
				Tjenester som <span class="text-dark-background">skaper resultater</span>
			</h2>
			<p class="text-light-paragraph mx-auto max-w-2xl text-base leading-relaxed">
				Vi fokuserer på å lage nettsider som faktisk bidrar til vekst i bedriften din. Ikke bare
				pene sider, men løsninger som konverterer besøkende til betalende kunder.
			</p>
		</div>

		<section
			id="tjenester"
			class="grid h-auto w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
			aria-label="Oversikt over webutviklingstjenester for små bedrifter i Norge"
		>
			<ServiceCard
				title="Bedriftsnettsider som Selger"
				description="Moderne, responsive nettsider som får deg flere kunder. Inkluderer SEO-optimalisering, rask lastetid og mobilstøtte. Fra kun 15.000 kr - samme kvalitet som byråer til en brøkdel av prisen."
				buttonText="Se nettside-pakker"
				color="purple"
				boxShadow="10px 12px 0 0 #5249b425"
				icon="search"
			/>
			<ServiceCard
				title="Landingssider som Konverterer"
				description="Spesialtilpassede landingssider som omdanner interesserte besøkende til betalende kunder. Inkluderer konverteringsoptimalisering og Google Analytics-setup."
				buttonText="Se landingsside-løsninger"
				color="blue"
				boxShadow="10px 12px 0 0 #1f7b8f25"
				icon="zap"
			/>
			<ServiceCard
				title="Enkelt Innholdshåndtering"
				description="Brukervennlige CMS-løsninger og bloggfunksjonalitet som lar deg oppdatere innhold selv. Hold nettsiden din oppdatert uten teknisk kunnskap eller dyre utviklerimer."
				buttonText="Se CMS-alternativer"
				color="orange"
				boxShadow="10px 12px 0 0 #cc7a2325"
				icon="smartphone"
			/>
			<ServiceCard
				title="Vedlikehold og Sikkerhet"
				description="Komplett vedlikehold, sikkerhetskopier og teknisk support fra kun 500 kr/mnd. Vi tar hånd om det tekniske, så du kan fokusere på kjernevirksomheten din."
				buttonText="Se vedlikeholdspakker"
				color="pink"
				boxShadow="10px 12px 0 0 #cf398225"
				icon="shield"
			/>
		</section>
	</div>
</div>
