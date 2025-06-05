<script lang="ts">
	import { PUBLIC_WAITLIST_ID } from '$env/static/public';

	// Getwaitlist.com configuration
	const WAITLIST_ID = PUBLIC_WAITLIST_ID ? parseInt(PUBLIC_WAITLIST_ID) : 12345; // Fallback for development
	const API_URL = 'https://api.getwaitlist.com/api/v1/signup';

	// Form state
	let email = $state('');
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
	let errorMessage = $state('');
	let successData = $state<any>(null);

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		if (!email || !email.includes('@')) {
			errorMessage = 'Vennligst skriv inn en gyldig e-postadresse.';
			submitStatus = 'error';
			return;
		}

		isSubmitting = true;
		submitStatus = 'idle';
		errorMessage = '';

		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email.trim(),
					waitlist_id: WAITLIST_ID,
					referral_link: typeof window !== 'undefined' ? window.location.href : '',
					metadata: {
						source: 'guwe_homepage',
						timestamp: new Date().toISOString()
					}
				})
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			successData = data;
			submitStatus = 'success';
			email = ''; // Clear the form
		} catch (error) {
			console.error('Waitlist signup error:', error);
			errorMessage = 'Noe gikk galt. Prøv igjen senere.';
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	};

	const handleReset = () => {
		submitStatus = 'idle';
		errorMessage = '';
		successData = null;
	};
</script>

<section
	id="venteliste"
	class="border-dark-purple-header mx-auto mt-16 flex w-full max-w-7xl flex-col items-center gap-6 border-2 px-4 py-8 sm:mt-20 sm:py-12 md:mt-24 md:rounded"
	style="box-shadow: 10px 12px 0px 0px #5249b425; background-image: repeating-linear-gradient(45deg, white 0 2px, transparent 2px 20px), repeating-linear-gradient(45deg, #5249b410 0 15px, transparent 15px 40px); background-size: 0px 0px 0px 0px; background-position: 0 0, 0 0;"
	aria-label="Venteliste"
>
	<h2 class="text-dark-purple-header text-center text-2xl font-bold sm:text-3xl">
		Bli med på ventelisten
	</h2>
	<p class="text-dark-purple-paragraph max-w-md text-center text-base sm:text-lg">
		Få beskjed når det åpner for nye prosjekter. Meld deg på ventelisten, så tar jeg kontakt når det
		er ledig plass!
	</p>

	{#if submitStatus === 'success' && successData}
		<!-- Success State -->
		<div class="w-full max-w-md text-center">
			<div class="mb-4 rounded-lg border border-green-200 bg-green-50 p-4">
				<div class="mb-2 flex items-center justify-center">
					<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 font-semibold text-green-800">Takk for at du meldte deg på!</h3>
				<p class="mb-3 text-sm text-green-700">
					Du er nå på ventelisten med posisjon <strong>#{successData.priority}</strong>
				</p>
				<p class="text-xs text-green-600">Vi sender deg en e-post når det er ledig plass.</p>
			</div>
			<button
				onclick={handleReset}
				class="text-dark-purple-header hover:text-dark-purple-header/80 text-sm underline transition"
			>
				Meld på en annen e-post
			</button>
		</div>
	{:else}
		<!-- Form State -->
		<form
			class="flex w-full max-w-md flex-col items-center gap-4 sm:flex-row"
			onsubmit={handleSubmit}
			aria-label="Venteliste påmelding"
		>
			<label for="waitlist-email" class="sr-only">E-post</label>
			<input
				id="waitlist-email"
				type="email"
				bind:value={email}
				class="focus:ring-dark-purple-header border-dark-purple-header flex-1 rounded border-2 px-4 py-2 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				placeholder="Din e-post"
				required
				disabled={isSubmitting}
				aria-required="true"
				autocomplete="email"
			/>
			<button
				type="submit"
				class="hover:bg-dark-purple-header/95 focus:ring-dark-purple-header bg-dark-purple-header min-w-[120px] rounded px-6 py-2 font-semibold text-white transition focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				aria-label="Meld deg på ventelisten"
				disabled={isSubmitting}
			>
				{#if isSubmitting}
					<span class="flex items-center gap-2">
						<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Sender...
					</span>
				{:else}
					Meld meg på
				{/if}
			</button>
		</form>

		<!-- Error State -->
		{#if submitStatus === 'error' && errorMessage}
			<div class="w-full max-w-md">
				<div class="rounded-lg border border-red-200 bg-red-50 p-3">
					<div class="flex items-center gap-2">
						<svg
							class="h-4 w-4 flex-shrink-0 text-red-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
						<p class="text-sm text-red-700">{errorMessage}</p>
					</div>
				</div>
			</div>
		{/if}
	{/if}
</section>
