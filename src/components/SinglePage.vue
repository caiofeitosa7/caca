<script setup>
</script>

<template>
    <main>
        <nav class="columns is-gapless px-3">
            <h1 id="logo" class="column is-clickable is-narrow is-flex is-align-items-center">
                <img class="image is-rounded is-48x48" src="@/assets/images/logo-caca.png" alt="Logo CACA">
                <p class="is-size-7 has-text-start has-text-weight-bold">
                    CENTRO DE APOIO À<br>CRIANÇA E AO ADOSLESCENTE
                </p>
            </h1>
            <div class="column is-flex is-align-items-center is-justify-content-center">
                <ul class="is-flex">
                    <li class="is-clickable menu-selecionado">HOME</li>
                    <li class="is-clickable">SOBRE</li>
                    <li class="is-clickable">PROJETOS</li>
                    <li class="is-clickable">NOTÍCIAS</li>
                    <li class="is-clickable">CONTATO</li>
                </ul>
            </div>
            <div class="column is-flex is-align-items-center is-narrow">
                <a id="btn-login" class="px-4 py-2" href="#">LOGIN</a>
            </div>
        </nav>
        <section class="banner-frase is-flex is-justify-content-center is-align-items-center">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare gravida aliquam. 
                Duis a ornare lorem. Curabitur hendrerit vulputate elit, vel sodales neque sollicitudin ac. 
                Sed non ultricies nibh. Vestibulum venenatis, ligula vel laoreet dapibus, purus est lobortis 
                ipsum, faucibus fermentum nibh ligula eget elit. Cras feugiat mi at quam venenatis, et pulvinar
                enim faucibus. Vestibulum a eros blandit, bibendum felis et, rhoncus nulla. Etiam lectus est, 
                viverra in rhoncus nec, maximus id ex.
            </p>
            <div class="columns is-gapless">
                <p class="column">
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
                <div class="column is-flex is-justify-content-flex-end is-align-items-center">
                    <img src="@/assets/images/time.svg" alt="Time" width="380" height="380">
                </div>
            </div>
            <p>
                Integer pharetra tempus lectus ultrices ornare. Sed accumsan, sem non cursus malesuada, sem purus 
                suscipit velit, sed dapibus ex nisl ac nisl. Ut tellus ipsum, feugiat a justo eu, bibendum varius dolor.
            </p>
        </section>
    </main>
</template>

<style scoped>
    nav {
        font-size: smaller;
        margin-bottom: 0 !important;
    }

    #logo {
        color: var(--verde-principal);
    }

    #btn-login {
        background-color: var(--verde-principal);
        border-radius: 25px;
        color: #fff;
    }

    nav li:not(:last-child) {
        margin-right: 30px;
    }

    nav .menu-selecionado {
        color: var(--verde-principal);
    }

    .banner-frase {
        background-image: url('@/assets/images/capa-caca3.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        padding: 0 10vw;
        color: #fff;
        height: 95vh;
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

    .section-conteudo h2 {
        color: #FF788D;
    }

    .section-conteudo span {
        border-bottom: 5px solid #FF788D;
        display: block;
        width: 57px;
    }

    #container-sobre-nos div {
        margin: auto;
    }

</style>