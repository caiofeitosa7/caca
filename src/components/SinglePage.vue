<script>
    export default {
        data() {
            return {
                secaoAtiva: 'banner-frase'
            };
        },
        methods: {
            scrollToSection(secaoAlvo) {
                const targetElement = document.getElementById(secaoAlvo);
                this.secaoAtiva = secaoAlvo;

                if (targetElement)
                    targetElement.scrollIntoView({behavior: 'smooth'});
            }
        }
    };
</script>

<template>
    <main>
        <nav class="columns is-gapless px-3 py-1 mb-0">
            <h1 id="logo" class="column is-clickable is-narrow">
                <a href="/" class="is-flex is-align-items-center">
                    <img class="image is-rounded is-48x48" src="@/assets/images/logo-caca.png" alt="Logo do CACA">
                    <p class="is-size-7 has-text-start">
                        CENTRO DE APOIO À<br>CRIANÇA E AO ADOSLESCENTE
                    </p>
                </a>
            </h1>
            <div class="column is-flex is-align-items-center is-justify-content-center">
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
                <a id="btn-login" class="px-4 py-2" href="#">LOGIN</a>
            </div>
        </nav>
        <section id="banner-frase" class="is-flex is-justify-content-center is-align-items-center">
            <div class="is-flex is-flex-direction-column">
                <h2 id="frase-efeito" class="has-text-centered mb-4">
                    "O futuro da humanidade repousa nos ombros das crianças, 
                    e é nossa responsabilidade prepará-los para um amanhã melhor."
                </h2>
                <p id="autor-frase-efeito" class="has-text-centered">Janet Jackson</p>
            </div>
        </section>
        <section id="container-principios" class="columns is-multiline">
            <div id="card-principio1" class="card-principio column is-one-third">
                <p class="is-size-4 mb-5">RESPEITO</p>
                <p>Valorizar e respeitar a diversidade de origens culturais, étnicas, religiosas.</p>
            </div>
            <div id="card-principio2" class="card-principio column is-one-third">
                <p class="is-size-4 mb-5">EDUCAÇÃO</p>
                <p>Promover o desenvolvimento social, emocional e cognitivo das crianças.</p>
            </div>
            <div id="card-principio3" class="card-principio column is-one-third">
                <p class="is-size-4 mb-5">CUIDADO</p>
                <p>Ambiente seguro, estável e amoroso onde as crianças se sintam cuidadas.</p>
            </div>
            <div id="card-principio4" class="card-principio column is-one-third">
                <p class="is-size-4 mb-5">ALFABETIZAÇÃO TECNOLÓGICA</p>
                <p>Preparação das crianças para um mundo cada vez mais digital.</p>
            </div>
            <div id="card-principio5" class="card-principio column is-one-third">
                <p  class="is-size-4 mb-5">CULTURA</p>
                <p>Encorajar o envolvimento das crianças nas artes, na cultura e nas atividades criativas.</p>
            </div>
            <div id="card-principio6" class="card-principio column is-one-third">
                <p class="is-size-4 mb-5">DOAÇÃO</p>
                <p>Distribuição de alimentos para as famílias, garantindo acesso à alimentos adequados e nutritivos.</p>
            </div>
        </section>
        <section id="container-sobre-nos" class="section-conteudo">
            <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mb-5">
                <span class="mb-1"></span>
                <h2 class="is-size-3">SOBRE NÓS</h2>
            </div>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare gravida aliquam. 
                Duis a ornare lorem. Curabitur hendrerit vulputate elit, vel sodales neque sollicitudin ac. 
                Sed non ultricies nibh. Vestibulum venenatis, ligula vel laoreet dapibus, purus est lobortis 
                ipsum, faucibus fermentum nibh ligula eget elit. Cras feugiat mi at quam venenatis, et pulvinar
                enim faucibus. Vestibulum a eros blandit, bibendum felis et, rhoncus nulla. Etiam lectus est, 
                viverra in rhoncus nec, maximus id ex.
            </p>
            <div class="columns is-gapless mb-0">
                <p class="column">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Praesent a lectus sollicitudin, ornare nisi vitae, tempus nisl. Pellentesque eget nibh leo. 
                    Mauris sit amet vehicula ante. Phasellus rhoncus ac nunc vitae sit ullamcorper. Duis congue 
                    vehicula ac nunc tempor. Phasellus vel diam ac turpis maximus de semper. Maecenas sagittis 
                    commodo velit, ut euismod diam facilisis malesuada. Praesent fringilla posuere massa at ornare. 
                    Pellentesque sollicitudin dui vel risus suscipit porta sit amet at ante. Nulla mollis ultricies 
                    diam, non eleifend risus cursus eu. Nullam quis nibh ligula. Aliquam at urna in arcu placerat 
                    vestibulum. Fusce blandit eros et purus accumsan molestie. Sed tellus risus, bibendum et consequat 
                    id, fringilla in tellus. Sed sed libero a mi vehicula tincidunt vitae gravida tortor. Nullam id 
                    eleifend massa. Etiam eu euismod dui, a luctus lectus. Quisque hendrerit risus et iaculis varius.
                </p>
                <div class="column is-flex is-justify-content-center is-align-items-center">
                    <img src="@/assets/images/time2.svg" alt="Time" width="300" height="300">
                </div>
            </div>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Integer pharetra tempus lectus ultrices ornare. Sed accumsan, sem non cursus malesuada, sem purus 
                suscipit velit, sed dapibus ex nisl ac nisl. Ut tellus ipsum, feugiat a justo eu, bibendum varius dolor. 
                Sed tellus risus, bibendum et consequat id, fringilla in tellus. Sed sed libero a mi vehicula tincidunt 
                vitae gravida tortor. Nullam id eleifend massa. Etiam eu euismod dui, a luctus lectus. Quisque hendrerit 
                risus et iaculis varius.
            </p>
        </section>
        <section id="container-projetos" class="section-conteudo">
            <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mb-5">
                <span class="mb-1"></span>
                <h2 class="is-size-3">PROJETOS</h2>
            </div>
            <div class="px-1">
                <div class="is-flex is-justify-content-space-evenly mb-6">
                    <div class="card-projeto">
                        <img src="@/assets/images/aula-teclado.png" alt="Foto da aula de teclado">
                        <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column px-3">
                            <p class="titulo-card-projeto">OFICINA DE TECLADO</p>
                            <p class="conteudo-card-projeto">
                                As crianças descobrem o mundo da música por meio das teclas do teclado! 
                                A oficina de teclado é projetado para crianças e adolescentes que desejam 
                                explorar a magia da música de uma forma criativa e envolvente.
                            </p>
                        </div>
                    </div>
                    <div class="card-projeto">
                        <img src="@/assets/images/aula-informatica.png" alt="">
                        <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column px-3">
                            <p class="titulo-card-projeto">OFICINA DE COMPUTAÇÃO</p>
                            <p class="conteudo-card-projeto">
                                O curso oferece uma jornada empolgante para explorar o vasto mundo da tecnologia. 
                                De conceitos básicos a habilidades avançadas, nossas aulas proporcionam uma educação 
                                prática e divertida em informática.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="is-flex is-justify-content-space-between">
                    <div class="card-projeto">
                        <img src="@/assets/images/aula-capoeira.png" alt="Foto da aula de teclado">
                        <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column px-3">
                            <p class="titulo-card-projeto">AULA DE CAPOEIRA</p>
                            <p class="conteudo-card-projeto">
                                O mundo da capoeira é onde a dança se encontra com a luta, a música e a cultura. 
                                Maneira divertida e enriquecedora de promover a saúde física e mental, bem como 
                                uma conexão com a rica cultura brasileira.
                            </p>
                        </div>
                    </div>
                    <div class="card-projeto">
                        <img src="@/assets/images/aula-karate.png" alt="">
                        <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column px-3">
                            <p class="titulo-card-projeto">AULA DE KARATÊ</p>
                            <p class="conteudo-card-projeto">
                                Nossas aulas de karatê são uma oportunidade de fortalecer tanto o corpo quanto 
                                a mente, preparando as crianças e promovendo valores como foco, disciplina, 
                                respeito, autocontrole e determinação.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="container-noticias" class="section-conteudo">
            <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mb-5">
                <span class="mb-1"></span>
                <h2 class="is-size-3">ÚLTIMAS NOTÍCIAS</h2>
            </div>
            <div class="container-conteudo-noticias columns is-multiline">
                <div class="card-noticia column is-full is-flex mb-5 p-0">
                    <img src="@/assets/images/natal.png" alt="">
                    <div class="px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia">
                                Celebração de Natal: "Brilho nas Estrelas" 🌟🎄
                            </p>
                            <p class="data-noticia ml-1">26/12/2023</p>
                        </div>
                        <p class="is-text-center has-text-centered">
                            Integer efficitur sed dui nec porta. Pellentesque pulvinar commodo mi ut accumsan. 
                            Donec pellentesque velit tortor, ullamcorper dignissim ex feugiat in. Etiam ac 
                            ante a arcu tristique semper nec vitae justo. Sed aliquam felis felis, vel 
                            sollicitudin nisi lobortis vitae. Cras gravida, nisi eget vehicula imperdiet. Fusce ut lectus arcu. 
                            Nullam sagittis luctus velit, et vulputate ex congue luctus. Integer nec nisl non 
                            nunc mollis lacinia nec eu mi luctus.
                        </p>
                    </div>
                </div>
                <div class="card-noticia column is-full is-flex mb-5 p-0">
                    <img src="@/assets/images/doacao.png" alt="">
                    <div class="px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia">
                                Doação de Alimentos - Espalhando Amor e Nutrição 🥫❤️
                            </p>
                            <p class="data-noticia ml-1">26/12/2023</p>
                        </div>
                        <p class="is-text-center has-text-centered">
                            Cada doação de alimentos é um ato de bondade que faz a diferença na vida de alguém. 
                            Fazemos o possível para ajudar a nutrir corações e estômagos famintos, e demonstrar 
                            o verdadeiro espírito de solidariedade. Juntos, podemos tornar o mundo um lugar mais 
                            caloroso e acolhedor. Faça parte desta causa e ajude-nos a espalhar amor para estas 
                            crianças e suas famílias.
                        </p>
                    </div>
                </div>
                <div class="card-noticia column is-full is-flex mb-5 p-0">
                    <img src="@/assets/images/dia-criancas.png" alt="">
                    <div class="px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia">
                                Dia das Crianças: Uma Jornada de Diversão e Aprendizado 🎈🎉
                            </p>
                            <p class="data-noticia ml-1">26/12/2023</p>
                        </div>
                        <p class="is-text-center has-text-centered">
                            Integer efficitur sed dui nec porta. Pellentesque pulvinar commodo mi ut accumsan. 
                            Donec pellentesque velit tortor, ullamcorper dignissim ex feugiat in. Etiam ac ante 
                            a arcu tristique semper nec vitae justo. Sed aliquam felis felis, vel sollicitudin 
                            nisi lobortis vitae. Cras gravida, nisi eget vehicula imperdiet, eros lorem viverra 
                            nulla, ac bibendum lorem orci et metus. Nullam sagittis luctus 
                            velit, et vulputate ex congue luctus.
                        </p>
                    </div>
                </div>
                <div id="btnMaisNoticias" class="is-flex is-justify-content-center is-align-items-center">
                    <a href="#">Mais Notícias</a>
                </div>
            </div>
        </section>
        <section id="container-comoAjudar" class="section-conteudo">
            <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mb-5">
                <span class="mb-1"></span>
                <h2 class="is-size-3">COMO AJUDAR ?</h2>
            </div>
            <div class="columns is-align-items-center">
                <div class="column is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                    <img class="mb-3" src="@/assets/images/donation.png" alt="Imagem de pessoas pondo sua doação em uma caixa grande">
                    <p>Doe Qualquer Valor!</p>
                </div>
                <div class="column">
                    <p class="descricao has-text-centered is-size-4">
                        O ato de doar contribui para a transformação da sociedade e principalmente das pessoas. 
                        Quem doa, beneficia a si próprio.
                    </p>
                </div>
            </div>
            <div class="columns is-align-items-center">
                <div class="column">
                    <p class="descricao has-text-centered is-size-4">
                        Você pode ser um voluntário ajudando em diversas frentes do CACA. O trabalho 
                        com as crianças funciona de segunda a sábado na sede situada no bairro Satélite.
                    </p>
                </div>
                <div class="column is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                    <img src="@/assets/images/solidariedade.svg" alt="Imagem de pessoas pondo sua doação em uma caixa grande">
                    <p>Seja Voluntário!</p>
                </div>
            </div>
        </section>
        <section id="container-contato" class="section-conteudo">
            <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mb-5">
                <span class="mb-1"></span>
                <h2 class="is-size-3">CONTATO</h2>
            </div>
            <div class="columns">
                <div class="column is-flex is-align-items-center is-flex-direction-column">
                    <a href="/" class="image is-128x128">
                        <img class="is-rounded" src="@/assets/images/logo-caca.png" alt="Logo do CACA">
                    </a>
                    <p class="has-text-centered my-5">
                        Quase 30 anos cuidando do desenvolvimento de centenas de crianças e adolescentes.
                    </p>
                    <div class="is-flex">
                        <a href="" class="mr-3 is-flex is-align-items-center">
                            <img src="@/assets/images/whatsapp.png" alt="Icone Whatsapp" width="32">
                        </a>
                        <a href="" class="mr-3 is-flex is-align-items-center">
                            <img src="@/assets/images/instagram.png" alt="Icone Instagram" width="28">
                        </a>
                        <a href="" class="is-flex is-align-items-center">
                            <img src="@/assets/images/email.png" alt="Icone Email" width="35">
                        </a>
                    </div>
                </div>
                <div class="column is-flex is-flex-direction-column">
                    <p class="is-size-5">Fale conosco !</p>
                    <p class="my-5">Envie sua mensagem via WhatsApp ou E-mail que retornaremos em breve!</p>
                    <div class="is-flex">
                        <img class="image is-16x16 mr-1 mb-2" src="@/assets/images/icon-whatsapp.png" alt="Icone branco do Whatsapp">
                        <p>(86) 9 9999-9999</p>
                    </div>
                    <div class="is-flex is-align-items-center">
                        <img class="image is-16x16 mr-1" src="@/assets/images/icon-email.png" alt="Icone branco do Whatsapp">
                        <p>exemplo@gmail.com</p>
                    </div>
                </div>
                <div id="divEndereco" class="column is-flex is-flex-direction-column">
                    <p class="is-size-5">Nosso endereço :</p>
                    <ul class="my-5">
                        <li>
                            Rua Santa Quitéria, n° 4447, <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Satélite, Teresina/PI, Brasil
                        </li>
                    </ul>
                    <img class="image" src="@/assets/images/mapa-caca.png" alt="Icone Email">
                </div>
            </div>
        </section>
        <footer class="is-flex is-justify-content-center py-4">
            <span>CACA © 2023 - Todos os direitos reservados.</span>
        </footer>
    </main>
</template>

<style scoped>
    nav {
        top: 0;
        z-index: 5;
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

    #banner-frase {
        background-image: url('@/assets/images/capa-caca3.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        padding: 0 10vw;
        color: #fff;
        height: 100vh;
    }

    #frase-efeito, #autor-frase-efeito {
        font-family: 'Prosto One', sans-serif;
    }

    #frase-efeito {
        font-size: 30px;
        line-height: 35px;
    }

    #autor-frase-efeito {
        font-size: 16px;
    }

    #container-principios {
        margin: auto;
    }

    .card-principio {
        padding: 50px 30px;
        line-height: 22px;
        color: #fff;
    }

    #card-principio1 {
        background-color: rgba(255, 192, 115, 86%);
    }

    #card-principio2 {
        background-color: rgba(255, 121, 105, 86%);
    }

    #card-principio3 {
        background-color: rgba(104, 211, 212, 86%);
    }

    #card-principio4 {
        background-color: rgba(146, 227, 169, 100%);
    }

    #card-principio5 {
        background-color: #72A4DD;
    }

    #card-principio6 {
        background-color: #FF788D;
    }

    .section-conteudo {
        padding: 50px 6vw;
        line-height: normal;
    }

    .section-conteudo span {
        border-bottom: 5px solid;
        display: block;
        width: 57px;
    }

    #container-sobre-nos h2, #container-sobre-nos span, .data-noticia {
        color: #FF788D;
    }

    #container-projetos {
        background-image: url('@/assets/images/bg-projetos.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    #container-projetos h2 {
        color: #fff;
    }

    #container-projetos span {
        border-color: #fff;
    }

    .card-projeto {
        width: 330px;
        height: 400px;
        color: #fff;
        border-radius: 20px;
        background-color: rgba(000, 000, 000, 25%);
    }

    .card-projeto img {
        border-radius: 20px 20px 0 0;
    }

    .card-projeto .titulo-card-projeto {
        font-size: large;
        padding: 10px;
    }

    .card-projeto .conteudo-card-projeto {
        padding: 0 15px;
        line-height: 20px;
        text-align: center;
    }

    #container-noticias h2, #container-noticias span, .titulo-card-noticia {
        color: #007CBF;
    }

    .container-conteudo-noticias {
        line-height: 20px;
        margin: auto;
    }

    .card-noticia {
        height: 230px;
        border-radius: 15px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    }

    .card-noticia img {
        height: 100%;
    }

    .card-noticia img {
        border-radius: 15px 0 0 15px;
    }

    .card-noticia div, #btnMaisNoticias {
        width: -webkit-fill-available;
    }

    #btnMaisNoticias a {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
        border: 3px solid #007CBF;
        border-radius: 25px;
        padding: 7px 20px;
        color: #007CBF;
    }

    #btnMaisNoticias a:hover {
        background-color: #007CBF;
        color: #fff;
    }

    #container-comoAjudar, footer {
        background-color: rgba(0, 168, 168, 6%);
    }

    #container-comoAjudar h2, #container-comoAjudar span{
        color: #00A8A8;
    }

    #container-comoAjudar img {
        width: 90%;
    }

    #container-contato {
        background-color: #00A8A8;
        color: #fff;
    }

    #container-contato p, #container-contato li {
        line-height: 18px;
    }

    #container-contato ul {
        list-style: inside;
    }

    footer {
        color: #999;
    }


    /* -------------------------------------------------------------------------- */


    @media screen and (max-width: 768px) {
        #container-comoAjudar :last-child {
            display: flex;
            flex-direction: column-reverse;
        }

        #container-comoAjudar img {
            max-width: 70%;
        }

        footer {
            font-size: small;
        }

        #divEndereco {
            margin-top: 25px;
        }
    }

    @media screen and (max-width: 480px) {
        #container-comoAjudar img {
            max-width: 100%;
        }

        #container-comoAjudar .descricao {
            font-size: large !important;
        }

        footer {
            font-size: x-small;
        }
    }

</style>