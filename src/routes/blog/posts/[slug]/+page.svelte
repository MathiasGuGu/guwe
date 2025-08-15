<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	const { data }: Props = $props();

	const post = data.post;
	const PostComponent = data.PostComponent;

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
	{#if post}
		<title>{post.title} - GUWE Blog</title>
		<meta name="description" content={post.excerpt || `Read ${post.title} on the GUWE blog`} />
		<meta property="og:title" content={post.title} />
		<meta
			property="og:description"
			content={post.excerpt || `Read ${post.title} on the GUWE blog`}
		/>
		<meta property="og:type" content="article" />
		{#if post.coverImage}
			<meta property="og:image" content={post.coverImage} />
		{/if}
		<meta property="article:published_time" content={post.date} />
		{#if post.tags}
			{#each post.tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}
	{/if}
</svelte:head>

{#if post}
	<article class="mx-auto max-w-4xl px-4 py-12">
		<!-- Back to blog link -->
		<nav class="mb-8">
			<a
				href="/blog"
				class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
			>
				<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Tilbake til innhold
			</a>
		</nav>

		<!-- Post header -->
		<header class="mb-8">
			{#if post.coverImage}
				<div class="mb-8 overflow-hidden rounded-xl">
					<img src={post.coverImage} alt={post.title} class="h-64 w-full object-cover md:h-96" />
				</div>
			{/if}

			<div class="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
				<time datetime={post.date}>
					{formatDate(post.date)}
				</time>
				<span>•</span>
				<span>{calculateReadingTime(post.preview)} min read</span>
				{#if post.tags && post.tags.length > 0}
					<span>•</span>
					<div class="flex flex-wrap gap-1">
						{#each post.tags as tag}
							<span class="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
								{tag}
							</span>
						{/each}
					</div>
				{/if}
			</div>

			<h1 class="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
				{post.title}
			</h1>

			{#if post.excerpt}
				<p class="mb-8 text-lg text-gray-600 md:text-xl">
					{post.excerpt}
				</p>
			{/if}

			{#if post.author}
				<div class="flex items-center border-b border-gray-200 pb-8">
					{#if post.author.avatar}
						<img
							src={post.author.avatar}
							alt={post.author.name}
							class="mr-4 h-12 w-12 rounded-full"
						/>
					{/if}
					<div>
						<p class="font-medium text-gray-900">
							{post.author.name}
						</p>
						{#if post.author.bio}
							<p class="text-sm text-gray-600">
								{post.author.bio}
							</p>
						{/if}
					</div>
				</div>
			{/if}
		</header>

		<!-- Post content -->
		<div class="prose prose-lg prose-gray mx-auto max-w-none">
			{#if PostComponent}
				<PostComponent />
			{:else}
				<p class="text-gray-600">Content not available.</p>
			{/if}
		</div>

		<!-- Post footer -->
		<footer class="mt-12 border-t border-gray-200 pt-8">
			{#if post.tags && post.tags.length > 0}
				<div class="mb-6">
					<h3 class="mb-3 text-sm font-medium text-gray-900">Tags</h3>
					<div class="flex flex-wrap gap-2">
						{#each post.tags as tag}
							<span class="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/if}

			<div class="text-center">
				<a
					href="/blog"
					class="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
				>
					← Tilbake til innhold
				</a>
			</div>
		</footer>
	</article>
{:else}
	<div class="mx-auto max-w-4xl px-4 py-12 text-center">
		<div class="mb-4 text-6xl">😵</div>
		<h1 class="mb-2 text-2xl font-semibold text-gray-900">Post not found</h1>
		<p class="mb-6 text-gray-600">The blog post you're looking for doesn't exist.</p>
		<a
			href="/blog"
			class="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
		>
			← Back to Blog
		</a>
	</div>
{/if}
