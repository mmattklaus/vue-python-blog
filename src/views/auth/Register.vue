<template>
	<div id="login">
		<div class="columns">
			<div class="column is-6 is-offset-3">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							CMS | Register
						</p>
					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<p class="control has-icons-left has-icons-right">
									<input class="input" type="text" placeholder="Name">
									<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
                                    </span>
                                        <span class="icon is-small is-right">
                                        <i class="fas fa-check"></i>
                                    </span>
								</p>
							</div>
							<div class="field">
								<p class="control has-icons-left has-icons-right">
									<input class="input" type="email" placeholder="Phone">
									<span class="icon is-small is-left">
									<i class="fas fa-phone"></i>
                                    </span>
                                        <span class="icon is-small is-right">
                                        <i class="fas fa-check"></i>
                                    </span>
								</p>
							</div>
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
								<p class="control has-icons-left">
									<input class="input" type="password" placeholder="Confirm Password">
									<span class="icon is-small is-left">
									<i class="fas fa-lock"></i>
								</span>
								</p>
							</div>
							<div class="field">
								<p class="control">
									<button class="button is-fullwidth is-success">
										Sign Up
									</button>
								</p>
							</div>
						</div>
					</div>
					<footer class="card-footer">
						<span class="card-footer-item">
							<router-link to="login" class="card-footer-item">Already have an account? Sign in</router-link>
						</span>
                    </footer>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {
	name: 'register'
}
</script>
<style>
#login {
	padding-top: 120px;
}
.control {
    padding-left: 0;
}
</style>