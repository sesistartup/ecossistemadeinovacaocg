<template>
	<NavBar :is-transparent="true" />
	<section class="container-fluid">
		<main>
			<Banner
				path="/noticias/banner.png"
				pixels-bg-height="710px"
			>
				<div class="banner-documentos-content">
					<img src="/documentos/icone-documento.png" alt="icon">
					<div>
						<h1 class="dark-title">Documentos</h1>
						<p class="dark-body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe ex alias consectetur, nulla, in neque iure praesentium, modi eveniet consequuntur quaerat dolorum officiis vel. Dolores nihil quo eveniet vel.</p>
					</div>
				</div>
			</Banner>

			<div class="destaques-content">
				<h1>Destaques</h1>
				<!-- pendente -->
			</div>

			<div class="noticias-content">
				<h1>Documentos</h1>

				<div class="card-documentos-container">
					<CardDocumentos title="Pesquisas" iconPath="/documentos/icone-leis.png" />
					<CardDocumentos title="Editais" iconPath="/documentos/icone-editais.png" />
					<CardDocumentos title="Leis" iconPath="/documentos/icone-leis.png" />
				</div>
			</div>
		</main>
	</section>
	<FooterComponent />
</template>

<script setup lang="ts">
import Banner from '../../components/general/Banner.vue';
import CardDocumentos from '../../components/documentos/CardDocumentos.vue';

</script>

<style scoped lang="scss">
section.container-fluid {
	padding: 0;
}

.banner-documentos-content {
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

.destaques-content {
	width: 100%;
  margin: 48px 0;
	padding: 0 32px;
	margin-bottom: 24px;

	> h1 {
		font-weight: bold !important;
		text-transform: uppercase;
	}
}

.noticias-content {
	width: 100%;
  margin: 48px 0;
	padding: 0 32px;

	> h1 {
		font-weight: bold !important;
		text-transform: uppercase;
	}
}

.card-documentos-container {
	margin: 24px auto 0;

	width: 100%;
	max-width: 1000px;


	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
}
</style>
