<script>
    export default {
        methods: {
            logarUsuario() {
                alert('Função executada!');
            }
        }
    };
</script>

<template>
    <div class="container-login">
		<div class="wrap-login">
			<div class="login-container-title">
				<span class="login-title">Login</span>
			</div>
			<form class="login-form">
				<div class="wrap-input">
					<span class="label-input">Usuário</span>
					<input id="usuario" class="input" type="text" name="usuario" placeholder="Digite seu usuário">
				</div>
				<div class="wrap-input" data-validate="Password is required">
					<span class="label-input">Senha</span>
					<input id="senha" class="input" type="password" name="senha" placeholder="Digite sua senha">
				</div>
			</form>
			<div class="container-login-form-btn">
				<button @click="logarUsuario" class="login-form-btn">
					Entrar
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

input {
    border: none
}

input:focus {
    outline: none;
}

input:focus::-webkit-input-placeholder {
    color: transparent
}

input:focus:-moz-placeholder {
    color: transparent
}

input:focus::-moz-placeholder {
    color: transparent
}

input:focus:-ms-input-placeholder {
    color: transparent
}

input::-webkit-input-placeholder {
    color: #999
}

input:-moz-placeholder {
    color: #999
}

input::-moz-placeholder {
    color: #999
}

input:-ms-input-placeholder {
    color: #999
}

label {
    display: block;
    margin: 0;
}

button {
    outline: none!important;
    background: 0 0;
    border: none;
}

button:hover {
    cursor: pointer
}

.validate-input {
    position: relative
}

.container-login {
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #ebeeef
}

.wrap-login {
    width: 670px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    position: relative
}

.login-container-title {
    background-image: url('@/assets/images/capa-caca3.jpg');
}

.login-container-title {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 70px 15px 74px
}

.login-container-title::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(54,84,99,.7)
}

.login-title {
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1.2;
    text-align: center
}

.login-form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    justify-content: flex-end;
    padding: 43px 98px 40px 160px;
}

.wrap-input {
    width: 100%;
    position: relative;
    margin-bottom: 26px;
    border-bottom: 1px solid #b2b2b2
}

.wrap-input:nth-last-child(2) {
    margin-bottom: 18px;
}

.label-input {
    font-size: 15px;
    color: rgb(128, 128, 128);
    line-height: 1.2;
    text-align: right;
    position: absolute;
    top: 14px;
    left: -105px;
    width: 80px
}

input {
    font-size: 15px;
    color: #555;
    width: 100%;
    height: 45px;
    line-height: 1.2;
    display: block;
    background: 0 0;
    padding: 0 5px
}

.focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none
}

.focus-input::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    -webkit-transition: all .6s;
    -o-transition: all .6s;
    -moz-transition: all .6s;
    transition: all .6s;
    background: var(--main-color);
}

.input:focus+.focus-input::before {
    width: 100%
}

.container-login-form-btn {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    justify-content: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
}

.login-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    min-width: 160px;
    height: 50px;
    background-color: #098c8c;
    border-radius: 25px;
    font-size: 16px;
    color: white;
    line-height: 1.2;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s
}

.login-form-btn:hover {
    background-color: #333
}

@media(max-width: 576px) {
    .login-form {
        padding: 43px 50px 40px 117px;
    }
}

@media(max-width: 480px) {
    .login-form {
        padding: 43px 20px 40px;
    }

    .label-input {
        text-align: left;
        position: unset;
        top: unset;
        left: unset;
        width: 100%;
        padding: 0 5px
    }
}
</style>