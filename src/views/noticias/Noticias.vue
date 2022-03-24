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
					<CardNoticia 
            :is-relacionada="false"
            @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 1 }})"/>
					<CardNoticia 
            :is-relacionada="false"
            @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 2 }})"/>
					<CardNoticia 
            :is-relacionada="false"
            @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 3 }})"/>
					<CardNoticia 
            :is-relacionada="false"
            @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 4 }})"/>
					<CardNoticia 
            :is-relacionada="false"
            @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 5 }})"/>
					<CardNoticia 
            :is-relacionada="false"
            @click="$router.push({ name: 'NoticiaExpandida', params: { noticiaId: 6 }})"/>
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
	margin: 0 auto;
	margin-top: 48px;

	> h1 {
		font-weight: bold;
		font-size: 2rem;
	}
}

.card-noticia-container {
	width: 100%;
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

  .dark-title {
    font-size: 2.5rem;
  }

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
		width: 100%;
    max-width: 500px;

		p {
			text-align: start;
			font-size: 1rem;
      max-height: 100px;
      height: 100%;
      overflow-y: auto;
		}
	}
}
@media (max-width: 1200px) {
  .banner-noticia-content {
    .dark-title {
      font-size: 2rem;
    }
    .dark-body-text {
      font-size: 0.8rem;
    }
  }
}
  @media (max-width: 991px) {
  .banner-noticia-content {
    .dark-title {
      margin-bottom: 0;
      font-size: 1.5rem;
    }
    > div {
      max-width: 300px;
      p {
        max-height: 60px;
        margin-bottom: 0;
      }
    }
  }
  }
  @media (max-width: 768px) {
  .banner-noticia-content {
    .dark-title {
      font-size: 1rem;
    }
    > div {
      max-width: 200px;
      p {
        max-height: 40px;
      }
    }
    .dark-body-text {
      font-size: 0.7rem;
    }
  }
  }
  @media (max-width: 576px) {
    .banner-noticia-content {
      .dark-title {
        font-size: 0.8rem;
      }
      .dark-body-text {
        font-size: 0.8rem;
      }
    }
  }
</style>
