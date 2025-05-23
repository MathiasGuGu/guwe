<script lang="ts">
	import { QA_LIST } from './q-and-a-list';
	import QandAAccordion from './q-and-a-accordian.svelte';
	let openIndex: number | null = null;
</script>

<div class="mt-12 flex w-full flex-col items-center justify-center bg-white px-4">
	<section class=" h-full w-full max-w-7xl">
		<h2 class="mb-6 text-center text-2xl font-bold sm:text-3xl">Spørsmål & Svar</h2>
		<div class="qanda-list divide-y divide-gray-200 rounded-lg text-base sm:text-lg">
			{#each QA_LIST as qa, idx}
				<QandAAccordion
					question={qa.question}
					answer={qa.answer}
					isOpen={openIndex === idx}
					onClick={() => (openIndex = openIndex === idx ? null : idx)}
					contentId={`qanda-content-${idx}`}
					buttonId={`qanda-btn-${idx}`}
				/>
			{/each}
		</div>
	</section>
</div>
