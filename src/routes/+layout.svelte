<script>
	import Navbar from "..\\components\\global\\navbar.svelte";

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.bunny.net" />
	<link href="https://fonts.bunny.net/css?family=russo-one:400" rel="stylesheet" />
</svelte:head>

<main class="flex flex-col min-h-screen">
	<!-- Navbar -->
	<header>
		<Navbar />
	</header>

	<!-- Site Content -->
	<content class="flex-1">
		<slot />
	</content>

	<!-- Footer -->
</main>