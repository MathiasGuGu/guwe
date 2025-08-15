<script lang="ts">
	import { page } from '$app/stores';

	$: isBlogActive = $page.url.pathname.startsWith('/blog');
</script>

<nav class="flex items-center space-x-6">
	<a
		href="/blog"
		class="text-sm font-medium transition-colors hover:text-blue-600"
		class:text-blue-600={isBlogActive}
		class:text-gray-600={!isBlogActive}
	>
		Blog
	</a>
</nav>
