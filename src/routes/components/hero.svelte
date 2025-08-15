<script>
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import { ArrowRight, ArrowUpRight, Mail } from 'lucide-svelte';
</script>

<main
	class="mt-16 flex w-full flex-col items-center justify-center bg-white px-4 sm:mt-20 md:mt-32"
>
	<section class="relative flex w-full max-w-7xl flex-col items-start gap-4">
		<div class="space-y-4">
			<h1
				class="animate-in text-light-header max-w-4xl text-5xl leading-12 font-medium text-balance sm:text-4xl md:text-6xl md:leading-16"
			>
				Vi lager <span class="text-dark-background relative font-bold italic"
					>profesjonelle nettsider</span
				> som faktisk får deg kunder
			</h1>
			<p class="animate-in text-light-paragraph max-w-2xl text-lg leading-relaxed">
				Moderne nettsider og landingssider som konverterer besøkende til kunder. Fra kun 15.000 kr -
				samme kvalitet som store byråer, til en brøkdel av prisen. Betjener små bedrifter i
				Stavanger, Kristiansand og hele Norge.
			</p>
		</div>
		<div class="flex flex-col gap-3 pt-2 sm:flex-row">
			<a
				href="#venteliste"
				class="animate-side bg-dark-background text-dark-header hover:bg-dark-background/80 focus:ring-dark-background group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold shadow transition-all duration-150 hover:gap-3 focus:ring-2 focus:ring-offset-2 focus:outline-none lg:px-6 lg:py-2.5 lg:text-base"
				aria-label="Meld deg på ventelisten for å få tilbud på nettside"
			>
				Få tilbud på nettside
				<ArrowRight
					size={16}
					strokeWidth={1.5}
					class="transition-transform group-hover:translate-x-0.5"
				/>
			</a>
			<a
				href="#tjenester"
				class="animate-side focus:ring-dark-background text-light-header group inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold transition-all duration-150 hover:border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none lg:px-6 lg:py-2.5 lg:text-base"
				aria-label="Se webutviklingstjenester og priser"
			>
				Se tjenester
				<ArrowUpRight
					size={16}
					strokeWidth={1.5}
					class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			</a>
		</div>
		<div class="absolute right-20 bottom-0 hidden size-80 opacity-20 md:block">
			<DotLottieSvelte
				src="https://lottie.host/a7432071-f655-4642-80fe-40f279667252/isYElFQhiR.lottie"
				autoplay
				segment={[0, 38]}
			/>
		</div>
	</section>
</main>
