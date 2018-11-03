<template>
	<div id="login">
		<div class="columns">
			<div class="column is-6 is-offset-3">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							CMS | LOGIN
						</p>
					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<p class="control has-icons-left has-icons-right">
									<input class="input" type="email" placeholder="Email">
									<span class="icon is-small is-left">
									<i class="fas fa-envelope"></i>
								</span>
									<span class="icon is-small is-right">
									<i class="fas fa-check"></i>
								</span>
								</p>
							</div>
							<div class="field">
								<p class="control has-icons-left">
									<input class="input" type="password" placeholder="Password">
									<span class="icon is-small is-left">
									<i class="fas fa-lock"></i>
								</span>
								</p>
							</div>
							<div class="field">
								<p class="control">
									<button class="button is-fullwidth is-success">
										Login
									</button>
								</p>
							</div>
						</div>
					</div>
					<footer class="card-footer">
						<a href="#" class="card-footer-item">Don't have an account</i></a>
						<a href="#/login" class="card-footer-item"></a>
						<a href="#" class="card-footer-item">Forgot Password</a>
					</footer>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {
	name: 'login'
}
</script>
<style>
#login {
	padding-top: 120px;
}
</style>