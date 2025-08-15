<script lang="ts">
	// Form state
	let name = $state('');
	let email = $state('');
	let website = $state('');
	let phone = $state('');
	let message = $state('');
	let privacyAccepted = $state(false);
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
	let errorMessage = $state('');
	let successData = $state<any>(null);

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		// Validation
		if (!name.trim()) {
			errorMessage = 'Vennligst skriv inn ditt navn.';
			submitStatus = 'error';
			return;
		}

		if (!email || !email.includes('@')) {
			errorMessage = 'Vennligst skriv inn en gyldig e-postadresse.';
			submitStatus = 'error';
			return;
		}

		if (!message.trim()) {
			errorMessage = 'Vennligst beskriv hva du trenger hjelp med.';
			submitStatus = 'error';
			return;
		}

		if (!privacyAccepted) {
			errorMessage = 'Du må godkjenne personvernvilkårene for å sende skjemaet.';
			submitStatus = 'error';
			return;
		}

		isSubmitting = true;
		submitStatus = 'idle';
		errorMessage = '';

		try {
			// Formspree integration
			const response = await fetch('https://formspree.io/f/mpwlnedd', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					website: website.trim(),
					phone: phone.trim(),
					message: message.trim(),
					_subject: `Ny henvendelse fra ${name.trim()}`
				})
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			successData = {
				message: 'Takk for henvendelsen!',
				name: name.trim(),
				email: email.trim()
			};
			submitStatus = 'success';

			// Clear form
			name = '';
			email = '';
			website = '';
			phone = '';
			message = '';
			privacyAccepted = false;
		} catch (error) {
			console.error('Form submission error:', error);
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
		name = '';
		email = '';
		website = '';
		phone = '';
		message = '';
		privacyAccepted = false;
	};
</script>

<section
	class="flex w-full flex-col items-center justify-center bg-green-50/40 py-12 sm:py-16 md:py-20"
	aria-label="Kontakt oss"
>
	<div class="w-full max-w-7xl px-4 md:px-0">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<!-- Left side: Text content -->
			<div class="space-y-6">
				<div>
					<h2
						class="text-light-header font-sora mb-4 text-3xl font-medium text-balance sm:text-4xl md:text-5xl"
					>
						Klar for å <span class="text-dark-background">øke salget</span> med en profesjonell nettside?
					</h2>
					<p class="text-light-paragraph text-lg leading-relaxed text-balance">
						Send oss en melding så tar vi kontakt innen 24 timer med et skreddersydd tilbud som
						passer din bedrift og ditt budsjett.
					</p>
				</div>

				<div class="space-y-4">
					<div class="flex items-center gap-3">
						<div class="bg-dark-purple-header/10 rounded-full p-2">
							<svg
								class="text-dark-purple-header h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<span class="text-light-paragraph">Gratis konsultasjon og tilbud</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="bg-dark-purple-header/10 rounded-full p-2">
							<svg
								class="text-dark-purple-header h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<span class="text-light-paragraph">Rask respons innen 24 timer</span>
					</div>
					<div class="flex items-center gap-3">
						<div class="bg-dark-purple-header/10 rounded-full p-2">
							<svg
								class="text-dark-purple-header h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						</div>
						<span class="text-light-paragraph">Skreddersydde løsninger</span>
					</div>
				</div>
			</div>

			<!-- Right side: Contact form -->
			<div>
				<article
					id="kontakt"
					class="border-dark-purple-header flex w-full flex-col gap-6 rounded border bg-white p-6 sm:p-8"
					style="box-shadow: 10px 12px 0px 0px #5249b425;"
				>
					<div class="space-y-2">
						<h3 class="text-dark-purple-header font-sora text-xl font-medium">
							Ta kontakt for et tilbud
						</h3>
						<p class="text-dark-purple-paragraph text-sm">
							Fyll ut skjemaet så tar vi kontakt med deg.
						</p>
					</div>

					{#if submitStatus === 'success' && successData}
						<!-- Success State -->
						<div class="w-full space-y-6 text-center">
							<div class="space-y-4">
								<div class="flex items-center justify-center">
									<div class="bg-dark-purple-header/10 rounded-full p-3">
										<svg
											class="text-dark-purple-header h-8 w-8"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											></path>
										</svg>
									</div>
								</div>
								<div class="space-y-2">
									<h3 class="text-dark-purple-header font-sora text-xl font-medium">
										Takk for henvendelsen, {successData.name}!
									</h3>
									<p class="text-dark-purple-paragraph text-base leading-relaxed">
										Vi har mottatt din forespørsel og kommer tilbake til deg innen 24 timer.
									</p>
									<p class="text-dark-purple-paragraph/70 text-sm">
										Du vil få et tilbud sendt til {successData.email}
									</p>
								</div>
							</div>
							<button
								onclick={handleReset}
								class="border-dark-purple-header text-dark-purple-header hover:bg-dark-purple-header focus:ring-dark-purple-header inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
							>
								Send en ny henvendelse
							</button>
						</div>
					{:else}
						<!-- Form State -->
						<form
							class="w-full max-w-4xl space-y-6"
							onsubmit={handleSubmit}
							aria-label="Kontakt skjema"
							id="contact-form"
						>
							<!-- First row: Name and Email -->
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div>
									<label
										for="contact-name"
										class="text-dark-purple-header mb-2 block text-sm font-medium"
										>Hva heter du?</label
									>
									<input
										id="contact-name"
										type="text"
										bind:value={name}
										class="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="Navn Hansen"
										required
										disabled={isSubmitting}
										autocomplete="given-name"
									/>
								</div>
								<div>
									<label
										for="contact-email"
										class="text-dark-purple-header mb-2 block text-sm font-medium">Epost</label
									>
									<input
										id="contact-email"
										type="email"
										bind:value={email}
										class="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="epost@guwe.no"
										required
										disabled={isSubmitting}
										autocomplete="email"
									/>
								</div>
							</div>

							<!-- Second row: Website and Phone -->
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div>
									<label
										for="contact-website"
										class="text-dark-purple-header mb-2 block text-sm font-medium"
										>Har du en nettside?</label
									>
									<input
										id="contact-website"
										type="url"
										bind:value={website}
										class="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="nettside.no"
										disabled={isSubmitting}
										autocomplete="url"
									/>
								</div>
								<div>
									<label
										for="contact-phone"
										class="text-dark-purple-header mb-2 block text-sm font-medium"
										>Hva er nummeret ditt?</label
									>
									<input
										id="contact-phone"
										type="tel"
										bind:value={phone}
										class="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
										placeholder="45 111 000"
										disabled={isSubmitting}
										autocomplete="tel"
									/>
								</div>
							</div>

							<!-- Message area -->
							<div>
								<label
									for="contact-message"
									class="text-dark-purple-header mb-2 block text-sm font-medium"
									>Forklar hva du trenger hjelp med i korte trekk</label
								>
								<textarea
									id="contact-message"
									bind:value={message}
									rows="4"
									class="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Hei! Jeg trenger hjelp med en..."
									required
									disabled={isSubmitting}
								></textarea>
							</div>

							<!-- Privacy checkbox -->
							<div class="flex items-start space-x-3">
								<input
									id="privacy-checkbox"
									type="checkbox"
									bind:checked={privacyAccepted}
									class="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={isSubmitting}
								/>
								<label for="privacy-checkbox" class="text-sm text-gray-600">
									Jeg godkjenner GUWE sine personvernvilkår
								</label>
							</div>

							<!-- Submit button -->
							<div class="flex justify-start">
								<button
									type="submit"
									class="bg-dark-background hover:bg-dark-background/90 focus:ring-dark-background inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
										<span>Send forespørsel</span>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 5l7 7-7 7"
											></path>
										</svg>
									{/if}
								</button>
							</div>
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
				</article>
			</div>
		</div>
	</div>
</section>
