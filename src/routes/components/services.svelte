<script lang="ts">
	import ServiceCard from './service-card.svelte';
</script>

<div class="mt-16 flex w-full flex-col items-center justify-center bg-white px-4 sm:mt-20 md:mt-24">
	<h2 class="text-lg font-semibold sm:text-xl">
		Webutviklingstjenester for bedrifter i Stavanger, Kristiansand og Norge
	</h2>
	<section
		id="tjenester"
		class="grid h-auto min-h-[600px] w-full max-w-7xl grid-cols-1 gap-4 py-8 md:min-h-[800px] md:grid-cols-2 md:gap-6 md:py-12"
		aria-label="Oversikt over webutviklingstjenester for små bedrifter i Norge"
	>
		<ServiceCard
			title="Lokal SEO Optimalisering for Stavanger og Kristiansand"
			description="Få din bedrift høyere opp på Google i lokale søk. Jeg spesialiserer meg på lokal SEO for bedrifter i Stavanger, Kristiansand og hele Norge. Inkluderer Google My Business optimalisering, lokale søkeord, teknisk SEO, og synlighet for 'bedrifter i nærheten av meg' søk."
			buttonText="Les om lokal SEO tjenester"
			color="purple"
			boxShadow="10px 12px 0 0 #5249b425"
		/>
		<ServiceCard
			title="Lynraske Nettsider Optimalisert for Norske Brukere"
			description="Moderne nettsider optimalisert for hastighet og ytelse med fokus på norske brukere. Jeg bygger responsive løsninger som laster raskt på mobile enheter, perfekt for bedrifter som ønsker å nå kunder i Rogaland, Agder og resten av Norge. Optimalisert for Core Web Vitals og Google PageSpeed."
			buttonText="Les om ytelse-optimalisering"
			color="blue"
			boxShadow="10px 12px 0 0 #1f7b8f25"
		/>
		<ServiceCard
			title="Responsivt Design for Mobile-First Norge"
			description="Profesjonelle nettsider som ser perfekte ut på alle enheter, spesielt tilpasset norske mobile brukere. Med over 90% av nordmenn som bruker mobil til nettsøk, sikrer jeg at bedriften din presenteres optimalt uansett enhet. Ideell for lokale bedrifter i Sør-Norge."
			buttonText="Les om responsivt design"
			color="orange"
			boxShadow="10px 12px 0 0 #cc7a2325"
		/>
		<ServiceCard
			title="Vedlikehold og Norsk Hosting Support"
			description="Løpende vedlikehold, sikkerhet og analyse av nettsiden din med fokus på norske hostingleverandører. Jeg sørger for rask lastetid for besøkende fra Norge, .no domeneregistrering, GDPR-compliance, Google Analytics oppsett, og månedlige rapporter om din nettsides ytelse."
			buttonText="Les om vedlikehold og hosting"
			color="pink"
			boxShadow="10px 12px 0 0 #cf398225"
		/>
	</section>
</div>
