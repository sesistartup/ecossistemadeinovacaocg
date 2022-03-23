<template>
	<NavBar :is-transparent="true" />
	<section class="container-fluid">
		<main>
			<Banner
				path="/noticias/banner.png"
				figcaption="workspace_image"
				img-alt="workspace_image"
			>
				<div class="banner-noticia-content ghp">
					<img src="/noticias/icone-noticia.png" alt="icon">
					<div>
						<h1 class="dark-title">Notícias</h1>
						<p class="dark-body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe ex alias consectetur, nulla, in neque iure praesentium, modi eveniet consequuntur quaerat dolorum officiis vel. Dolores nihil quo eveniet vel.</p>
					</div>
				</div>
			</Banner>

			<div class="noticias-content ghp">
				<h1 class="dark-title">ÚLTIMAS NOTICIAS</h1>

				<div class="card-noticia-container dark-body-text"> 
          <!-- FIXME: criar componente container e automatizar geração de cards -->
					<CardNoticia @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 1 }})"/>
					<CardNoticia @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 2 }})"/>
					<CardNoticia @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 3 }})"/>
					<CardNoticia @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 4 }})"/>
					<CardNoticia @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 5 }})"/>
					<CardNoticia @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 6 }})"/>
				</div>
			</div>
		</main>
	</section>
	<FooterComponent />
</template>

<script setup lang="ts">
import Banner from '../../components/general/Banner.vue';
import CardNoticia from '../../components/noticias/CardNoticia.vue';

</script>

<style scoped lang="scss">
section.container-fluid {
	padding: 0;
}

.noticias-content {
	width: 100%;
	/* max-width: 1200px; */
	/* padding: 0 24px; */
	margin: 0 auto;
	margin-top: 48px;

	> h1 {
		font-weight: bold;
		font-size: 32px;
	}
}

.card-noticia-container {
	width: 100%;
	/* max-width: 1000px; */
	/* margin: 48px auto; */
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 48px 32px;

	@media (max-width: 820px) {
		max-width: 520px;
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 580px) {
		max-width: 280px;
		grid-template-columns: 1fr;
	}
}

.banner-noticia-content {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	padding-left: 64px;

	display: flex;
	align-items: center;

	> img {
		width: 10%;
		min-width: 60px;
		max-width: 128px;
		margin-right: 24px;
	}

	> div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		width: 400px;

		p {
			text-align: start;
			font-size: 12px;
		}
	}
}
</style>
