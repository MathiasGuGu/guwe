import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://guwe.no';
	const today = new Date().toISOString();

	// Enhanced site pages with multi-location SEO properties
	const pages = [
		{
			url: '',
			lastmod: today,
			changefreq: 'weekly',
			priority: '1.0',
			geoTarget: 'Stavanger, Kristiansand, Norge'
		},
		{
			url: '/#contact-form',
			lastmod: today,
			changefreq: 'weekly',
			priority: '0.8'
		},
		{
			url: '/#about',
			lastmod: today,
			changefreq: 'monthly',
			priority: '0.6'
		},
		{
			url: '/blog',
			lastmod: today,
			changefreq: 'monthly',
			priority: '0.6'
		},
		{
			url: '/blog/posts/hva-er-seo',
			lastmod: today,
			changefreq: 'monthly',
			priority: '0.6'
		},
		{
			url: '/blog/posts/seo-for-bedre-synlighet',
			lastmod: today,
			changefreq: 'monthly',
			priority: '0.6'
		}
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    <!-- Multi-location geo-targeting -->
    <xhtml:link rel="alternate" hreflang="no" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="nb-NO" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="nn-NO" href="${baseUrl}${page.url}" />
  </url>`
	)
	.join('\n')}

  <!-- Enhanced Image URLs with location-specific metadata -->
  <url>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
    <image:image>
      <image:caption>Computer og telefon illustrasjon for webutviklingstjenester i Stavanger og Kristiansand</image:caption>
      <image:title>GUWE Webutviklingstjenester - Freelance webutvikler Norge</image:title>
      <image:geo_location>Stavanger, Kristiansand, Norge</image:geo_location>
    </image:image>
  </url>

  <url>
    <loc>${baseUrl}/kulien.webp</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
    <image:image>
      <image:loc>${baseUrl}/kulien.webp</image:loc>
      <image:caption>Mathias - Freelance webutvikler som betjener Stavanger, Kristiansand og hele Norge</image:caption>
      <image:title>Mathias - GUWE Webutvikler Stavanger og Kristiansand</image:title>
      <image:geo_location>Stavanger, Kristiansand, Rogaland, Agder, Norge</image:geo_location>
    </image:image>
  </url>

  <!-- Service-specific virtual pages for enhanced SEO -->
  <url>
    <loc>${baseUrl}/#tjenester</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <mobile:mobile/>
  </url>

  <url>
    <loc>${baseUrl}/#contact-form</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <mobile:mobile/>
  </url>

  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <mobile:mobile/>
  </url>
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=1800', // Reduced cache time for more frequent updates
			'X-Robots-Tag': 'noindex' // Sitemap shouldn't be indexed
		}
	});
};
