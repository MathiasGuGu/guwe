<section
	class="border-dark-purple-header mx-auto mt-12 flex w-full max-w-7xl flex-col items-center gap-6 border-t border-b px-4 py-8 sm:mt-20 sm:py-12 md:mt-24 md:rounded md:border-2"
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
	<form
		class="flex w-full max-w-md flex-col items-center gap-4 sm:flex-row"
		autocomplete="off"
		aria-label="Venteliste påmelding"
		on:submit|preventDefault
	>
		<label for="waitlist-email" class="sr-only">E-post</label>
		<input
			id="waitlist-email"
			type="email"
			class="focus:ring-dark-purple-header border-dark-purple-header flex-1 rounded border-2 px-4 py-2 focus:ring-2 focus:outline-none"
			placeholder="Din e-post"
			required
			aria-required="true"
			autocomplete="email"
		/>
		<button
			type="submit"
			class="hover:bg-dark-purple-header/95 focus:ring-dark-purple-header bg-dark-purple-header rounded px-6 py-2 font-semibold text-white transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
			aria-label="Meld deg på ventelisten"
			disabled
		>
			Meld meg på
		</button>
	</form>
</section>
