<script>
	import '../app.css';
	import Navbar from '..\\components\\global\\navbar.svelte';
	import Footer from '..\\components\\global\\footer.svelte';
  </script>
  
  <!-- Import Fonts -->
  
  <svelte:head>
	
  
	<!-- Analytics -->
  </svelte:head>
  
  <main class="flex flex-col min-h-screen bg-cyan-800 text-white">
	<!-- Navbar -->
	<header>
	  <Navbar />
	</header>
  
	<!-- Site Content -->
	<content class="flex-1 mx-0 md:mx-12 2xl:mx-52 my-5">
	  <slot />
	</content>
  
	<!-- Footer -->
	<Footer />
  </main>