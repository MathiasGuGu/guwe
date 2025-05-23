<script lang="ts">
	import ServiceCard from './service-card.svelte';
</script>

<div class="mt-16 flex w-full flex-col items-center justify-center bg-white px-4 sm:mt-20 md:mt-24">
	<h2 class="text-lg font-semibold sm:text-xl">Tjenester jeg tilbyr</h2>
	<section
		id="tjenester"
		class="grid h-auto min-h-[600px] w-full max-w-7xl grid-cols-1 gap-4 py-8 md:min-h-[800px] md:grid-cols-2 md:gap-6 md:py-12"
	>
		<ServiceCard
			title="Søkemotor Optimalisering"
			description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores cupiditate delectus obcaecati ratione! Beatae, esse! Quibusdam cupiditate hic vel deserunt alias. Veritatis molestiae odio corrupti dicta magnam inventore repellendus magni."
			buttonText="Les om SEO"
			color="purple"
			boxShadow="10px 12px 0 0 #5249b425"
		/>
		<ServiceCard
			title="Lynraske løsninger"
			description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores cupiditate delectus obcaecati ratione! Beatae, esse! Quibusdam cupiditate hic vel deserunt alias. Veritatis molestiae odio corrupti dicta magnam inventore repellendus magni."
			buttonText="Les om optimalisering"
			color="blue"
			boxShadow="10px 12px 0 0 #1f7b8f25"
		/>
		<ServiceCard
			title="Designet for alle enheter"
			description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores cupiditate delectus obcaecati ratione! Beatae, esse! Quibusdam cupiditate hic vel deserunt alias. Veritatis molestiae odio corrupti dicta magnam inventore repellendus magni."
			buttonText="Les om responsivt design"
			color="orange"
			boxShadow="10px 12px 0 0 #cc7a2325"
		/>
		<ServiceCard
			title="Vedlikehold og analyse"
			description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores cupiditate delectus obcaecati ratione! Beatae, esse! Quibusdam cupiditate hic vel deserunt alias. Veritatis molestiae odio corrupti dicta magnam inventore repellendus magni."
			buttonText="Les om Vedlikehold og analyse"
			color="pink"
			boxShadow="10px 12px 0 0 #cf398225"
		/>
	</section>
</div>
