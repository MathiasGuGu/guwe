<script lang="ts">
	import QAndAAccordion from './q-and-a-accordian.svelte';
	import { questions } from './q-and-a-list';

	let openIndex: number | null = null;

	// FAQ Structured Data for Rich Snippets
	const faqStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: questions.map((qa) => ({
			'@type': 'Question',
			name: qa.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: qa.answer
			}
		}))
	};
</script>

<!-- FAQ Structured Data -->
<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(faqStructuredData)}</script>`}
</svelte:head>

<section
	class="text-light-header mt-16 flex w-full flex-col items-center justify-center bg-white px-4 sm:mt-20 md:mt-24"
	aria-labelledby="faq-heading"
>
	<div class="w-full max-w-7xl">
		<h2 id="faq-heading" class="mb-8 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
			Spørsmål og svar
		</h2>
		<div class="mx-auto max-w-7xl divide-y divide-gray-200 rounded-lg">
			{#each questions as qa, idx}
				<QAndAAccordion
					question={qa.question}
					answer={qa.answer}
					isOpen={openIndex === idx}
					onClick={() => (openIndex = openIndex === idx ? null : idx)}
					contentId={`faq-content-${idx}`}
					buttonId={`faq-btn-${idx}`}
				/>
			{/each}
		</div>
	</div>
</section>
