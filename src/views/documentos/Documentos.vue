<template>
	<NavBar :is-transparent="true" />
	<section class="container-fluid">
		<main>
			<Banner
				path="/documentos/banner.png"
				pixels-bg-height="710px"
			>
				<div class="banner-documentos-content ghp">
					<img src="/documentos/icone-documento.png" alt="icon">
					<div class="banner-text-container">
						<h1 class="dark-title">Documentos</h1>
						<p class="dark-body-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe ex alias consectetur, nulla, in neque iure praesentium, modi eveniet consequuntur quaerat dolorum officiis vel. Dolores nihil quo eveniet vel.</p>
					</div>
				</div>
			</Banner>

			<div class="destaques-content ghp">
				<ContainerDestaques />
			</div>

			<div class="noticias-content">
				<h1 class="dark-title">Documentos</h1>

				<div class="card-documentos-container ghp">
					<CardDocumento title="Pesquisas" iconPath="/documentos/lupinha.png" />
					<CardDocumento title="Editais" iconPath="/documentos/icone-editais.png" />
					<CardDocumento title="Leis" iconPath="/documentos/icone-leis.png" />
				</div>
			</div>
		</main>
	</section>
	<FooterComponent />
</template>

<script setup lang="ts">
import Banner from '../../components/general/Banner.vue';
import CardDocumento from '../../components/documentos/CardDocumento.vue';
import ContainerDestaques from '../../components/documentos/ContainerDestaques.vue'

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

		p {
			text-align: start;
			font-size: 12px;
		}
	}
}

.destaques-content {
	width: 100%;
	margin-bottom: 24px;
  background-color: #f6f6f6;

	> h1 {
		font-weight: bold !important;
		text-transform: uppercase;
	}
}

.noticias-content {
	width: 100%;
  margin: 48px 0;

	> h1 {
		font-weight: bold !important;
		text-transform: uppercase;
    font-size: 1.5rem;
	}
}

.card-documentos-container {
	display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
}
@media (max-width: 1045px) {
  .card-documentos-container {
    justify-content: space-around;
  }
}
@media (max-width: 576px) {
  .banner-documentos-content {
    img {
      min-width: 35px;
    }
  }
  .noticias-content {
    > h1 {
      font-size: 1.2rem;
    }
  }
}
</style>
