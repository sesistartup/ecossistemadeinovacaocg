<template>
	<div class="card-noticia-content">
		<div class="card-noticia-image"></div>

		<p>Titulo da notícia</p>

		<span>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
			doloremque sint aut mollitia consectetur voluptate eos.
		</span>
	</div>
</template>

<style scoped lang="scss">
.card-noticia-content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	> p {
		font-size: 24px;
		font-weight: 600;
		text-transform: uppercase;
		margin-bottom: 2px;
	}

	> span {
		text-align: start;
		line-height: 20px;
	}
}

.card-noticia-image {
	width: 100%;
	height: 220px;
	border: 1px solid black;
	margin-bottom: 16px;
}
</style>
