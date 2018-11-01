<template>
	<div class="blog">
		<div class="container">
			<!-- START ARTICLE FEED -->
			<section class="articles">
				<div class="column is-8 is-offset-2">
					<div class="card article" v-for="i in 5" :key="i">
						<div class="card-content article-head">
							<div class="media">
								<div class="media-center">
									<img src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg" class="author-image" alt="Placeholder image">
								</div>
								<div class="media-content has-text-centered">
									<p class="article-title">Why going ‘off-grid’ is important for the creative process 🔱</p>

									<p class="subtitle is-6 article-subtitle">
										<div class="control">
											<b-taglist attached>
												<b-tag type="is-dark">@daria</b-tag>
												<b-tag type="is-info"> on February 17, 2018</b-tag>
											</b-taglist>
										</div>
									</p>
								</div>
							</div>
						</div>
						<div class="card-content">
							<img src="/images/test.jpeg">
						</div>
						<div class="card-content article-claps">
							<span class="bb">
								<div class="ex">
									<div class="dr">
										<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" class="ey j">
											<g fill-rule="evenodd">
												<path d="M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"></path>
											</g>
										</svg>
										<div>1.2K</div>
									</div>
									<div class="ds u ci v">11 responses</div>
									<div class="ds u ci v">
										<div class="ez j">
											<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
												<path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" fill-rule="evenodd"></path>
											</svg>
										</div>
									</div>
								</div>
							</span>
						</div>
					</div>
				</div>
			</section>
			<!-- END ARTICLE FEED -->
		</div>
	</div>
</template>
<script>
export default {
	name: 'blog'
}
</script>
<style>
.dr {
	flex-grow: 1;
	flex-direction: row;
	align-items: center;
	display: flex;
}

/*Inner sstyle*/
.ex {
	padding-top: 0;
	padding-left: 20px;
	padding-right: 20px;
	flex-direction: row;
	display: flex;
}
/*Outer sstyle*/
.bb {
	fill: rgba(0, 0, 0, 0.54);
	color: rgba(0, 0, 0, 0.54);
	letter-spacing: 0px;
	font-size: 15.8px;
	line-height: 20px;
	font-style: normal;
	display: block;
	font-weight: 400;
	font-family: medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
}
.article-claps {
	padding-top: 0!important;
}
.card.article {
	/*box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);*/
	margin-bottom: 24px;
	border-radius: 5px;
	padding: 23px 0;
}
.article-head {
	/*box-shadow: 0 1px 2px rgba(10,10,10,.1);*/
}
.control {
	padding-left: 34%;
}
.articles {
	margin: 5rem 0;
	margin-top: -200px;
}
.articles .content p {
	line-height: 1.9;
	margin: 15px 0;
}
.author-image {
	position: absolute;
	top: -30px;
	left: 50%;
	width: 60px;
	height: 60px;
	margin-left: -30px;
	border: 3px solid #ccc;
	border-radius: 50%;
}
.media-center {
	display: block;
	margin-bottom: 1rem;
}
.media-content {
	margin-top: 1rem;
}
.article, .promo-block {
	margin-top: 6rem;
}
div.column.is-8:first-child {
	padding-top: 0;
	margin-top: 0;
}
.article-title {
	margin-bottom: -0.28em;
	margin-top: 0.86em;
	letter-spacing: -0.022em;
	line-height: 1.12;
	font-size: 30px;
	padding-left: 20px;
	padding-right: 20px;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.84);
	font-style: normal;
	font-family: medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
	margin: 0;
	box-sizing: inherit;
}
.article-subtitle {
	color: #909AA0;
	margin-bottom: 3rem;
}
.article-body {
	line-height: 1.4;
	margin: 0 6rem;
}
.promo-block .container {
	margin: 1rem 5rem;
}
</style>