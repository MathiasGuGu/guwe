<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	const { data }: Props = $props();

	const posts = data.posts || [];

	// Function to format date
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	// Function to calculate reading time
	const calculateReadingTime = (content: string): number => {
		const wordsPerMinute = 200;
		const wordCount = content.split(/\s+/).length;
		return Math.ceil(wordCount / wordsPerMinute);
	};
</script>

<svelte:head>
	<title>Blog - GUWE</title>
	<meta name="description" content="Latest insights, tutorials, and thoughts from the GUWE team" />
</svelte:head>

<main class="mx-auto max-w-4xl px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Kunnskapsbase</h1>
		<p class="text-lg text-gray-600">
			Les om saker, tips og triks, og hva vi gjør for deg, hos guwe
		</p>
	</div>

	{#if posts.length > 0}
		<div class="grid gap-8 md:gap-12">
			{#each posts as post}
				<article
					class="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
				>
					<a href="/blog/posts/{post.slug}" class="block">
						{#if post.coverImage}
							<div class="mb-6 overflow-hidden rounded-lg">
								<img
									src={post.coverImage}
									alt={post.title}
									class="h-48 w-full object-cover transition-transform group-hover:scale-105"
									loading="lazy"
								/>
							</div>
						{/if}

						<div class="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
							<time datetime={post.date}>
								{formatDate(post.date)}
							</time>
							<span>•</span>
							<span>{calculateReadingTime(post.preview)} min read</span>
							{#if post.tags && post.tags.length > 0}
								<span>•</span>
								<div class="flex flex-wrap gap-1">
									{#each post.tags as tag}
										<span
											class="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
										>
											{tag}
										</span>
									{/each}
								</div>
							{/if}
						</div>

						<h2
							class="mb-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600 md:text-2xl"
						>
							{post.title}
						</h2>

						{#if post.excerpt}
							<p class="mb-4 text-gray-600">
								{post.excerpt}
							</p>
						{/if}

						{#if post.author}
							<div class="flex items-center">
								{#if post.author.avatar}
									<img
										src={post.author.avatar}
										alt={post.author.name}
										class="mr-3 h-8 w-8 rounded-full"
									/>
								{/if}
								<span class="text-sm font-medium text-gray-700">
									{post.author.name}
								</span>
							</div>
						{/if}
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<div class="py-12 text-center">
			<div class="mb-4 text-6xl">📝</div>
			<h2 class="mb-2 text-2xl font-semibold text-gray-900">No posts yet</h2>
			<p class="text-gray-600">Check back soon for our latest content!</p>
		</div>
	{/if}
</main>
