<script>
	import AboutMe from './components/about-me.svelte';
	import Hero from './components/hero.svelte';
	import Kundecase from './components/kundecase.svelte';
	import Process from './components/process.svelte';
	import QAndA from './components/q-and-a.svelte';
	import Services from './components/services.svelte';
	import Waitlist from './components/waitlist.svelte';

	// Expanded SEO metadata for multi-location targeting
	const seoData = {
		title:
			'GUWE - Billige Nettsider for Små Bedrifter | Freelance Webutvikler Stavanger & Kristiansand',
		description:
			'Få profesjonelle nettsider til en rimelig pris. Erfaren freelance webutvikler som betjener Stavanger, Kristiansand og hele Norge. Moderne, responsive nettsider med SEO optimalisering for små bedrifter.',
		keywords:
			'nettsider for små bedrifter, billig nettside, freelance webutvikler, webutvikling Stavanger, webutvikling Kristiansand, responsive design, SEO optimalisering, rimelige hjemmesider Norge, webutvikler Rogaland, webutvikler Agder, nettside firma, billige nettsider Norge, profesjonell webdesign, lokal webutvikler',
		canonicalUrl: 'https://guwe.no',
		ogImage: 'https://guwe.no/kulien.webp',
		publishedDate: '2025-01-29T12:00:00+01:00',
		modifiedDate: '2025-01-29T12:00:00+01:00'
	};

	// Enhanced structured data for multi-location coverage
	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'LocalBusiness',
				'@id': 'https://guwe.no/#organization',
				name: 'GUWE - Freelance Webutvikler',
				alternateName: ['Mathias Webutvikler', 'GUWE Webdesign', 'Freelance Webutvikler Norge'],
				description:
					'Profesjonell freelance webutvikler som betjener Stavanger, Kristiansand og hele Norge. Rimelige, moderne nettsider for små bedrifter med SEO optimalisering og responsive design.',
				url: 'https://guwe.no',
				logo: {
					'@type': 'ImageObject',
					url: 'https://guwe.no/kulien.webp',
					width: 400,
					height: 400
				},
				image: 'https://guwe.no/kulien.webp',
				telephone: '+47-xxx-xx-xxx',
				email: 'mathias.gumpen.gundersen@gmail.com',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Kristiansand',
					addressRegion: 'Agder',
					addressCountry: 'NO'
				},
				geo: {
					'@type': 'GeoCoordinates',
					latitude: 58.147,
					longitude: 7.996
				},
				areaServed: [
					{
						'@type': 'Country',
						name: 'Norge'
					},
					{
						'@type': 'State',
						name: 'Agder',
						alternateName: 'Vest-Agder'
					},
					{
						'@type': 'State',
						name: 'Rogaland'
					},
					{
						'@type': 'City',
						name: 'Kristiansand',
						containedInPlace: {
							'@type': 'State',
							name: 'Agder'
						}
					},
					{
						'@type': 'City',
						name: 'Stavanger',
						containedInPlace: {
							'@type': 'State',
							name: 'Rogaland'
						}
					},
					{
						'@type': 'City',
						name: 'Sandnes',
						containedInPlace: {
							'@type': 'State',
							name: 'Rogaland'
						}
					},
					{
						'@type': 'City',
						name: 'Haugesund',
						containedInPlace: {
							'@type': 'State',
							name: 'Rogaland'
						}
					},
					{
						'@type': 'City',
						name: 'Arendal',
						containedInPlace: {
							'@type': 'State',
							name: 'Agder'
						}
					}
				],
				priceRange: '$$',
				openingHoursSpecification: {
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
					opens: '09:00',
					closes: '17:00'
				},
				sameAs: ['https://www.linkedin.com/in/mathiasgugu', 'https://github.com/mathiasgugu'],
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Webutviklingstjenester',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Responsive Webdesign',
								description: 'Mobile-first responsive nettsider optimalisert for alle enheter'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'SEO Optimalisering',
								description: 'Teknisk og innholdsmessig SEO for bedre søkemotorsynlighet'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'E-handel Løsninger',
								description: 'Moderne nettbutikker med norske betalingsløsninger'
							}
						}
					]
				}
			},
			{
				'@type': 'ProfessionalService',
				'@id': 'https://guwe.no/#service',
				name: 'Webutviklingstjenester for Små Bedrifter',
				description:
					'Komplett webutviklingstjenester for små bedrifter i Stavanger, Kristiansand og hele Norge. Inkluderer responsive design, SEO optimalisering, og løpende vedlikehold.',
				provider: {
					'@id': 'https://guwe.no/#organization'
				},
				areaServed: [
					{
						'@type': 'Country',
						name: 'Norge'
					},
					{
						'@type': 'City',
						name: 'Stavanger'
					},
					{
						'@type': 'City',
						name: 'Kristiansand'
					}
				],
				serviceType: [
					'Webutvikling',
					'Responsive Design',
					'SEO Optimalisering',
					'Nettside Vedlikehold',
					'E-handel Utvikling',
					'Mobile-First Design',
					'Performance Optimalisering',
					'Google Analytics Oppsett'
				],
				offers: [
					{
						'@type': 'Offer',
						name: 'Standard Bedriftsnettside',
						description: 'Profesjonell bedriftsnettside med responsive design og SEO',
						priceRange: '15000-25000 NOK',
						priceCurrency: 'NOK'
					},
					{
						'@type': 'Offer',
						name: 'Avansert Nettbutikk',
						description: 'Komplett e-handel løsning med betalingsintegrasjon',
						priceRange: '30000-50000 NOK',
						priceCurrency: 'NOK'
					}
				]
			},
			{
				'@type': 'WebSite',
				'@id': 'https://guwe.no/#website',
				url: 'https://guwe.no',
				name: 'GUWE - Freelance Webutvikler',
				description: 'Profesjonelle nettsider for små bedrifter i Stavanger, Kristiansand og Norge',
				publisher: {
					'@id': 'https://guwe.no/#organization'
				},
				inLanguage: 'no',
				potentialAction: {
					'@type': 'SearchAction',
					target: 'https://guwe.no/search?q={search_term_string}',
					'query-input': 'required name=search_term_string'
				},
				mainEntity: {
					'@type': 'WebPage',
					'@id': 'https://guwe.no/#webpage',
					url: 'https://guwe.no',
					name: 'Rimelige Nettsider for Små Bedrifter - Stavanger & Kristiansand',
					description:
						'Profesjonell webutvikler som betjener bedrifter i Stavanger, Kristiansand og hele Norge',
					inLanguage: 'no'
				}
			},
			{
				'@type': 'Person',
				'@id': 'https://guwe.no/#person',
				name: 'Mathias',
				givenName: 'Mathias',
				familyName: 'Gundersen',
				jobTitle: 'Freelance Webutvikler',
				description:
					'Erfaren systemutvikler som tilbyr rimelige webutviklingstjenester til små bedrifter i Stavanger, Kristiansand og hele Norge. Spesialiserer seg på moderne, SEO-optimaliserte nettsider.',
				url: 'https://guwe.no/',
				image: 'https://guwe.no/kulien.webp',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Kristiansand',
					addressRegion: 'Agder',
					addressCountry: 'NO'
				},
				worksFor: {
					'@id': 'https://guwe.no/#organization'
				},
				knowsAbout: [
					'Webutvikling',
					'Responsive Design',
					'SEO',
					'JavaScript',
					'HTML',
					'CSS',
					'SvelteKit',
					'Performance Optimalisering',
					'E-handel',
					'Google Analytics'
				],
				hasOccupation: {
					'@type': 'Occupation',
					name: 'Freelance Webutvikler',
					occupationLocation: [
						{
							'@type': 'City',
							name: 'Stavanger'
						},
						{
							'@type': 'City',
							name: 'Kristiansand'
						}
					]
				}
			},
			{
				'@type': 'Organization',
				'@id': 'https://guwe.no/#business',
				name: 'GUWE',
				alternateName: 'GUWE Webdesign',
				description: 'Norsk freelance webutviklingsbedrift som betjener små bedrifter',
				foundingDate: '2024',
				foundingLocation: {
					'@type': 'City',
					name: 'Kristiansand',
					containedInPlace: {
						'@type': 'Country',
						name: 'Norge'
					}
				},
				slogan: 'Rimelige nettsider for små bedrifter som faktisk fungerer',
				keywords: 'webutvikling, nettsider, SEO, responsive design, Stavanger, Kristiansand'
			}
		]
	};
</script>

<!-- Enhanced SEO Meta Tags for Multi-Location Targeting -->
<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{seoData.title}</title>
	<meta name="title" content={seoData.title} />
	<meta name="description" content={seoData.description} />
	<meta name="keywords" content={seoData.keywords} />
	<link rel="canonical" href={seoData.canonicalUrl} />

	<!-- Enhanced Location-Specific Meta Tags -->
	<meta name="geo.region" content="NO-11;NO-42" />
	<meta name="geo.placename" content="Stavanger, Kristiansand, Norge" />
	<meta name="geo.position" content="58.969976;5.733107;58.147;7.996" />
	<meta name="ICBM" content="58.969976, 5.733107, 58.147, 7.996" />
	<meta name="geo.nuts" content="NO011, NO042" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="GUWE - Freelance Webutvikler" />
	<meta property="og:url" content={seoData.canonicalUrl} />
	<meta property="og:title" content={seoData.title} />
	<meta property="og:description" content={seoData.description} />
	<meta property="og:image" content={seoData.ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Mathias - Freelance Webutvikler som betjener Stavanger og Kristiansand"
	/>
	<meta property="og:locale" content="nb_NO" />
	<meta property="og:locale:alternate" content="nn_NO" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@guwe_no" />
	<meta name="twitter:creator" content="@mathias_guwe" />
	<meta name="twitter:url" content={seoData.canonicalUrl} />
	<meta name="twitter:title" content={seoData.title} />
	<meta name="twitter:description" content={seoData.description} />
	<meta name="twitter:image" content={seoData.ogImage} />
	<meta
		name="twitter:image:alt"
		content="Mathias - Freelance Webutvikler som betjener Stavanger og Kristiansand"
	/>

	<!-- Additional Enhanced SEO Tags -->
	<meta name="category" content="Web Development, Small Business Services, Local Services" />
	<meta name="coverage" content="Norway, Stavanger, Kristiansand, Rogaland, Agder" />
	<meta name="distribution" content="Global" />
	<meta name="rating" content="General" />
	<meta name="revisit-after" content="3 days" />
	<meta name="target" content="small businesses, entrepreneurs, local companies" />
	<meta name="HandheldFriendly" content="True" />
	<meta name="MobileOptimized" content="320" />

	<!-- Business-Specific Meta Tags -->
	<meta name="business.type" content="Professional Services" />
	<meta name="business.category" content="Web Development" />
	<meta name="service.area" content="Stavanger, Kristiansand, Rogaland, Agder, Norge" />
	<meta name="price.range" content="15000-50000 NOK" />
	<meta name="price.currency" content="NOK" />

	<!-- Enhanced Schema.org Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}

	<!-- Preload critical resources -->
	<link rel="preload" href="/kulien.webp" as="image" type="image/webp" />
	<link rel="preload" href="/text.svg" as="image" type="image/svg+xml" />

	<!-- Additional SEO Optimizations -->
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="googlebot"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="bingbot"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>

<main>
	<Hero />
	<Services />
	<Process />
	<Kundecase />
	<QAndA />
	<!-- <AboutMe /> -->
	<Waitlist />
</main>
