<div class="mt-12 flex w-full flex-col items-center justify-center">
	<!-- Full-width dark background section -->
	<div class="bg-light-background w-full">
		<div class="flex w-full flex-col items-center justify-center px-4">
			<section
				aria-labelledby="kundecase-header"
				class="relative mt-16 flex h-auto w-full max-w-7xl flex-col items-start justify-start gap-8 pb-16 sm:mt-20 sm:pb-20 md:mt-24 md:gap-12 md:pb-24"
			>
				<div class="start">
					<h2
						id="kundecase-header"
						class="text-light-header mb-2 text-2xl font-semibold sm:text-3xl"
					>
						Kundecaser
					</h2>
					<p class="text-light-paragraph max-w-2xl text-base sm:text-lg">
						Se hvordan jeg har hjulpet andre bedrifter med å få en sterkere digital tilstedeværelse
					</p>
				</div>

				<div class="w-full">
					<article
						class="border-dark-purple-header overflow-hidden rounded-xl border bg-white"
						style="box-shadow: 10px 12px 0px 0px #5249b425;"
					>
						<div class="flex flex-col lg:flex-row">
							<!-- Image section -->
							<div class="relative lg:w-1/2">
								<div class="relative h-full w-full lg:h-full">
									<img
										src={'/kulien.webp'}
										width={1200}
										height={1200}
										alt="Kulien website redesign showcase"
										class="absolute inset-0 h-full w-full object-cover"
									/>
									<!-- Overlay gradient for better text readability -->
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"
									></div>
								</div>
							</div>

							<!-- Content section -->
							<div class="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2 lg:p-12">
								<div class="space-y-6">
									<!-- Project badge -->
									<div
										class="bg-dark-purple-background text-dark-purple-header inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-medium"
									>
										<div class="bg-dark-purple-header h-2 w-2 rounded-full"></div>
										Nettsideredesign
									</div>

									<!-- Title and description -->
									<div class="space-y-4">
										<h3 class="text-light-header text-2xl font-bold sm:text-3xl">
											Kulien fikk helt ny look
										</h3>
										<p class="text-light-paragraph text-base leading-relaxed sm:text-lg">
											En komplett redesign av Kuliens nettside med fokus på moderne design, bedre
											brukeropplevelse og økt konvertering. Resultatet var en 40% økning i besøkstid
											og betydelig forbedret mobilopplevelse.
										</p>
									</div>

									<!-- Results/metrics -->
									<div class="grid grid-cols-2 gap-4 py-4">
										<div class="rounded-lg bg-gray-50 p-3 text-center">
											<div class="text-dark-purple-header text-2xl font-bold">40%</div>
											<div class="text-light-paragraph text-sm">Økt besøkstid</div>
										</div>
										<div class="rounded-lg bg-gray-50 p-3 text-center">
											<div class="text-dark-purple-header text-2xl font-bold">95%</div>
											<div class="text-light-paragraph text-sm">Mobil score</div>
										</div>
									</div>

									<!-- Call to action -->
									<div class="pt-2">
										<a
											href="/"
											class="bg-dark-background text-dark-header hover:bg-dark-background/90 focus:ring-dark-background inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
											aria-label="Les mer om Kulien prosjektet"
										>
											Se hele casen
											<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>

				<!-- Optional: Navigation for multiple cases -->
				<div class="flex items-center gap-2">
					<div class="bg-dark-header h-2 w-8 rounded-full"></div>
					<div class="bg-dark-paragraph h-2 w-2 rounded-full opacity-50"></div>
					<div class="bg-dark-paragraph h-2 w-2 rounded-full opacity-50"></div>
				</div>
			</section>
		</div>
	</div>
</div>
