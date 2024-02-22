<script>
	import { ref } from 'vue';
	import logoURL from '/logo-caca-ico.png'

	export default {
		setup() {
			const isExpanded = ref(localStorage.getItem("is_expanded") === "true");
			const toggleMenu = () => {
				isExpanded.value = !isExpanded.value;
				localStorage.setItem("is_expanded", isExpanded.value);
			};

			return {
				isExpanded,
				logoURL,
				toggleMenu
			};
		},
		methods: {
			emitirClick(componentName) {
				this.$emit('item-menu-clicado', componentName);
				this.isExpanded = false;

				let buttons = document.querySelectorAll('.menu .button');
				buttons.forEach(button => {
					button.classList.remove('router-link-exact-active');
				});

				event.currentTarget.classList.add('router-link-exact-active');
			},
		},		
	};
</script>

<template>
    <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logoURL" alt="Vue" /> 
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">
					<i class="bi bi-chevron-double-right"></i>
				</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <div @click="emitirClick('alunos')" class="button router-link-exact-active">
				<i class='material-icons bx bxs-home'></i>
				<span :class="{ 'text': true, 'hidden': !isExpanded }">Alunos</span>
            </div>
			<div @click="emitirClick('voluntarios')" class="button">
				<i class='material-icons bx bxs-home'></i>
				<span :class="{ 'text': true, 'hidden': !isExpanded }">Voluntarios</span>
            </div>
        </div>

        <!-- <div class="flex"></div>
        
        <div class="menu">
            <div @click="emitirClick('configuracoes')" class="button">
				<i class='material-icons bx bxs-home'></i>
                <span :class="{ 'text': true, 'hidden': !isExpanded }">Configurações</span>
            </div>
        </div> -->
    </aside>
</template>

<style lang="scss" scoped>
	.text {
		display: inline-block;
	}

	.bi-chevron-double-right:hover {
		color: var(--verde-claro)!important;
	}

	.hidden {
		display: none;
	}

	aside {
		display: flex;
		flex-direction: column;

		background-color: var(--verde-escuro);
		color: var(--branco);

		width: calc(2rem + 32px);
		overflow: hidden;
		min-height: 100vh;
		padding: 1rem;

		transition: 0.2s ease-in-out;

		.flex {
			flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--branco);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--branco);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--verde-claro);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			border: none;
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			background-color: var(--verde-escuro);			

			.material-icons {
				font-size: 1.8rem;
				color: var(--branco);
				transition: 0.2s ease-in-out;
			}

			.text {
				color: var(--branco);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--verde-escuro);
				border: 1px solid var(--branco);
				border-left: 5px solid var(--branco);

				.material-icons, .text {
					color: var(--branco);
				}
			}

			&.router-link-exact-active {
				background-color: var(--verde-escuro);
				border: 1px solid var(--branco);
				border-left: 5px solid var(--branco);

				.material-icons, .text {
					color: var(--branco);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--verde-claro);
		}
	}

	&.is-expanded {
		width: 280px;

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		z-index: 99;
	}
}
</style>