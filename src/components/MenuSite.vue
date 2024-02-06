<script>
    export default {
        data() {
            return {
                menuVisivel: false,
                secaoAtiva: 'banner-frase'
            };
        },
        methods: {
            toggleMenu() {
                this.menuVisivel = !this.menuVisivel;
            },
            scrollToSection(secaoAlvo) {
                this.menuVisivel = false;
                this.secaoAtiva = secaoAlvo;
                const targetElement = document.getElementById(secaoAlvo);

                if (targetElement) {
                    const elementPosition = targetElement.getBoundingClientRect().top;

                    if (window.innerWidth <= 768) {
                        window.scrollTo({
                            top: window.scrollY + elementPosition - 210,
                            behavior: 'smooth'
                        });
                    } else {
                        window.scrollTo({
                            top: window.scrollY + elementPosition - 50,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        }
    };
</script>

<template>
    <nav class="columns is-gapless px-3 py-1 mb-0">
        <h1 id="logo" class="column is-narrow">
            <a href="/" class="is-flex is-align-items-center">
                <img class="image is-rounded is-48x48" src="@/assets/images/logo-caca.png" alt="Logo do CACA">
                <p class="is-size-7 has-text-start">
                    CENTRO DE APOIO À<br>CRIANÇA E AO ADOSLESCENTE
                </p>
            </a>
        </h1>
        <div id="menu-desktop" class="column is-flex is-align-items-center is-justify-content-center">
            <ul class="is-flex">
                <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'banner-frase' }">
                    <a @click="scrollToSection('banner-frase')">HOME</a>
                </li>
                <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-sobre-nos' }">
                    <a @click="scrollToSection('container-sobre-nos')">SOBRE</a>
                </li>
                <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-projetos' }">
                    <a @click="scrollToSection('container-projetos')">PROJETOS</a>
                </li>
                <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-noticias' }">
                    <a @click="scrollToSection('container-noticias')">NOTÍCIAS</a>
                </li>
                <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-contato' }">
                    <a @click="scrollToSection('container-contato')">CONTATO</a>
                </li>
            </ul>
        </div>
        <div class="column is-flex is-align-items-center is-narrow">
            <a id="btn-login" class="px-4 py-2" href="/login" hidden>LOGIN</a>
        </div>
        <div class="column is-flex is-align-items-center">
            <img @click="toggleMenu" class="is-clickable" src="@/assets/images/icon-menu.png" alt="Menu">
        </div>
    </nav>
    <div v-if="menuVisivel" id="menu-mobile" class="is-flex is-align-items-center is-justify-content-center mt-2">
        <ul>
            <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'banner-frase' }">
                <a @click="scrollToSection('banner-frase')">HOME</a>
            </li>
            <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-sobre-nos' }">
                <a @click="scrollToSection('container-sobre-nos')">SOBRE</a>
            </li>
            <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-projetos' }">
                <a @click="scrollToSection('container-projetos')">PROJETOS</a>
            </li>
            <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-noticias' }">
                <a @click="scrollToSection('container-noticias')">NOTÍCIAS</a>
            </li>
            <li class="is-clickable" :class="{ 'menu-selecionado': secaoAtiva === 'container-contato' }">
                <a @click="scrollToSection('container-contato')">CONTATO</a>
            </li>
            <!-- <li class="is-clickable">
                <a href="/login">LOGIN</a>
            </li> -->
        </ul>
    </div>
</template>

<style scoped>
    nav {
        top: 0;
        z-index: 2;
        position: sticky;
        font-size: smaller;
        background-color: #fff;
    }

    #btn-login {
        background-color: #00A8A8;
        border-radius: 25px;
        color: #fff;
    }

    #btn-login:hover {
        border: 1px solid #00A8A8;
        background-color: #fff;
        color: #00A8A8;
    }

    nav li:not(:last-child) {
        margin-right: 30px;
    }

    nav li:hover, .menu-selecionado a, #logo, h1 a, li a:hover {
        color: #00A8A8;
    }

    @media screen and (min-width: 769px) {
        nav div:last-child{
            display: none !important;
        }
    }

    @media screen and (max-width: 768px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        nav div:nth-of-type(2) {
            display: none !important;
        }

        #menu-desktop {
            display: none !important;
        }

        #menu-mobile {
            top: 56px;
            z-index: 2;
            position: sticky;
            background-color: #fff;
        }

        #menu-mobile li {
            text-align: center;
            margin-bottom: 17px;
        }

        #logo {
            display: contents;
        }

        nav div:last-child {
            max-width: 27px;
        }
    }
</style>