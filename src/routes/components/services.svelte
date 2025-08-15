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
				Tjenester som <span class="text-dark-background">levererer</span>
			</h2>
			<p class="text-light-paragraph mx-auto max-w-2xl text-base leading-relaxed">
				Jeg tilbyr skreddersydde webutviklingstjenester som hjelper din bedrift å vokse online.
			</p>
		</div>

		<section
			id="tjenester"
			class="grid h-auto w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
			aria-label="Oversikt over webutviklingstjenester for små bedrifter i Norge"
		>
			<ServiceCard
				title="Lokal SEO for Stavanger & Kristiansand"
				description="Få bedriften din høyere opp på Google i lokale søk. Spesialisert på Google My Business, lokale søkeord og teknisk SEO for norske bedrifter."
				buttonText="Lokal SEO tjenester"
				color="purple"
				boxShadow="10px 12px 0 0 #5249b425"
				icon="search"
			/>
			<ServiceCard
				title="Lynraske Nettsider for Norge"
				description="Moderne, responsive nettsider optimalisert for hastighet og mobile enheter. Perfekt for norske bedrifter med fokus på Core Web Vitals og Google PageSpeed."
				buttonText="Ytelse-optimalisering"
				color="blue"
				boxShadow="10px 12px 0 0 #1f7b8f25"
				icon="zap"
			/>
			<ServiceCard
				title="Mobile-First Responsivt Design"
				description="Profesjonelle nettsider som ser perfekte ut på alle enheter. Spesielt tilpasset norske mobile brukere hvor 90% bruker mobil til nettsøk."
				buttonText="Responsivt design"
				color="orange"
				boxShadow="10px 12px 0 0 #cc7a2325"
				icon="smartphone"
			/>
			<ServiceCard
				title="Vedlikehold & Norsk Hosting"
				description="Løpende vedlikehold, sikkerhet og analyse med fokus på norske hostingleverandører. Inkluderer .no domener, GDPR-compliance og Google Analytics."
				buttonText="Vedlikehold & hosting"
				color="pink"
				boxShadow="10px 12px 0 0 #cf398225"
				icon="shield"
			/>
		</section>
	</div>
</div>
