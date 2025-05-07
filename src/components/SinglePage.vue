<script>
    export default {
        data() {
            return {
                cards: [
                    {
                        titulo: "Festa das Crianças: 'Alegria e Carinho em Cada Sorriso' 🎈❤️",
                        descricao: "Todas as crianças reunidas em volta da mesa com um bolo.",
                        conteudo:
                        "Hoje foi dia de muita alegria e diversão na nossa Festa das Crianças, promovida com todo o carinho pelo grupo de amigas do @rotaryclubthefatima. Cada sorriso, brincadeira e momento especial trouxe um brilho único aos olhos das crianças assistidas pelo Projeto CACA. Nosso profundo agradecimento a essas mulheres incríveis que se uniram para fazer deste dia inesquecível e repleto de amor. Vocês transformaram este dia em uma memória preciosa que ficará guardada para sempre nos corações dos nossos pequenos! 💖✨ #Gratidão #InfanciaFeliz",
                        imagens: [
                            new URL('@/assets/images/dia_criancas_2024-1.png', import.meta.url).href,
                            new URL('@/assets/images/dia_criancas_2024-2.png', import.meta.url).href,
                            new URL('@/assets/images/dia_criancas_2024-3.png', import.meta.url).href,
                        ],
                        data: "12/10/2024",
                        imagemAtual: 0
                    },
                    // Outros cards podem ser adicionados aqui
                ]
            };
        },
        methods: {
            proxima(index) {
            if (this.cards[index].imagemAtual < this.cards[index].imagens.length - 1) {
                this.cards[index].imagemAtual++;
            }
            },
            anterior(index) {
            if (this.cards[index].imagemAtual > 0) {
                this.cards[index].imagemAtual--;
            }
            }
        }
    };
</script>

<template>
    <main>
        <section id="banner-frase" class="is-flex is-justify-content-center is-align-items-center">
            <div class="is-flex is-flex-direction-column">
                <h2 id="frase-efeito" class="has-text-centered mb-4">
                    "O futuro da humanidade repousa nos ombros das crianças, 
                    e é nossa responsabilidade prepará-las para um amanhã melhor."
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
                Nossa trajetória teve início no ano de 1995, quando a Igreja Católica Santa Terezinha do Menino Jesus 
                mobilizou diversos grupos de fiéis com o propósito de realizar ações missionárias de caráter 
                emergencial na sociedade. Esse movimento despertou em Dona Lurdinha, especialmente após tomar 
                conhecimento da trágica morte de dois jovens da comunidade em decorrência de crimes, a determinação 
                de auxiliar crianças e adolescentes, proporcionando-lhes a chance de um futuro mais promissor.
            </p>
            <div class="columns is-gapless mb-0">
                <p class="column">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Durante mais de 30 anos dedicados ao trabalho na Maternidade Dona Evangelina Rosa, Dona Lurdinha 
                    teve a oportunidade de conhecer a doutora Onesima Nascimento, uma figura que se destacou como a 
                    principal incentivadora do projeto. Em sinal de homenagem e profunda gratidão, o projeto foi 
                    batizado com o nome da médica.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    O local que hoje abriga nossa sede, anteriormente residência de Dona Lurdinha, agora dispõe de três salas de 
                    aula, dois banheiros, uma secretaria, uma cozinha e um pátio. Nesse espaço, proporcionamos esporte, 
                    lazer, evangelização e suporte escolar a aproximadamente 100 crianças e adolescentes diariamente. 
                    No momento, 18 voluntários dedicam-se diariamente para assegurar o pleno funcionamento da instituição, 
                    que opera de segunda a sábado nos períodos da manhã e tarde. Oferecemos oficinas de teclado, capoeira, 
                    informática, karatê, além do acompanhamento escolar.
                </p>
                <div class="column is-flex is-justify-content-center is-align-items-center">
                    <img src="@/assets/images/time2.svg" alt="Time" width="300" height="300">
                </div>
            </div>
            <!-- <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Integer pharetra tempus lectus ultrices ornare. Sed accumsan, sem non cursus malesuada, sem purus 
                suscipit velit, sed dapibus ex nisl ac nisl. Ut tellus ipsum, feugiat a justo eu, bibendum varius dolor. 
                Sed tellus risus, bibendum et consequat id, fringilla in tellus. Sed sed libero a mi vehicula tincidunt 
                vitae gravida tortor. Nullam id eleifend massa. Etiam eu euismod dui, a luctus lectus. Quisque hendrerit 
                risus et iaculis varius.
            </p> -->
        </section>
        <section id="container-projetos" class="section-conteudo">
            <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mb-5">
                <span class="mb-1"></span>
                <h2 class="is-size-3">PROJETOS</h2>
            </div>
            <div class="px-1">
                <div class="linha-projetos is-flex is-justify-content-space-evenly">
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
                        <img src="@/assets/images/aula-informatica.png" alt="Foto da aula de informática">
                        <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column px-3">
                            <p class="titulo-card-projeto">OFICINA DE INFORMÁTICA</p>
                            <p class="conteudo-card-projeto">
                                O curso oferece uma jornada empolgante para explorar o vasto mundo da tecnologia. 
                                De conceitos básicos a habilidades avançadas, nossas aulas proporcionam uma educação 
                                prática e divertida em informática.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="linha-projetos is-flex is-justify-content-space-between">
                    <div class="card-projeto">
                        <img src="@/assets/images/aula-capoeira.png" alt="Foto da aula de capoeira">
                        <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column px-3">
                            <p class="titulo-card-projeto">OFICINA DE CAPOEIRA</p>
                            <p class="conteudo-card-projeto">
                                O mundo da capoeira é onde a dança se encontra com a luta, a música e a cultura. 
                                Maneira divertida e enriquecedora de promover a saúde física e mental, bem como 
                                uma conexão com a rica cultura brasileira.
                            </p>
                        </div>
                    </div>
                    <div class="card-projeto mb-0">
                        <img src="@/assets/images/aula-karate.png" alt="Foto da aula de karate">
                        <div class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column px-3">
                            <p class="titulo-card-projeto">OFICINA DE KARATÊ</p>
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
                <h2 class="is-size-3 has-text-centered">ÚLTIMAS NOTÍCIAS</h2>
            </div>
            <div class="container-conteudo-noticias columns is-multiline">
                <!-- <div class="card-noticia column is-full is-flex mb-5 p-0" v-for="(card, index) in cards" :key="index">
                    <div class="container-imagem">
                        <p class="titulo-card-noticia-left">{{ card.titulo }}</p>
                        <div class="container-btn-img">
                            <img :src="card.imagens[card.imagemAtual]" :alt="card.descricao" />
                            <div class="botoes-navegacao">
                                <button @click="anterior(index)" :disabled="card.imagemAtual === 0">
                                    <i class='bx bxs-chevron-left'></i>
                                </button>
                                <button @click="proxima(index)" :disabled="card.imagemAtual === card.imagens.length - 1">
                                    <i class='bx bxs-chevron-right'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="container-conteudo px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia-right">{{ card.titulo }}</p>
                            <p class="data-noticia">{{ card.data }}</p>
                        </div>
                        <p class="is-text-center has-text-centered">{{ card.conteudo }}</p>
                    </div>
                </div> -->







                <div class="card-noticia column is-full is-flex mb-5 p-0">
                    <div class="container-imagem">
                        <p class="titulo-card-noticia-left">
                            Festa das Crianças: "Alegria e Carinho em Cada Sorriso" 🎈❤️
                        </p>
                        <img src="@/assets/images/dia_criancas_2024-1.png" alt="Todas as crianças reunidas em volta da mesa com um bolo.">
                    </div>
                    <div class="container-conteudo px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia-right">
                                Festa das Crianças: "Alegria e Carinho em Cada Sorriso" 🎈❤️
                            </p>
                            <p class="data-noticia">12/10/2024</p>
                        </div>
                        <p class="is-text-center has-text-centered">
                            Hoje foi dia de muita alegria e diversão na nossa Festa das Crianças, promovida com 
                            todo o carinho pelo grupo de amigas do @rotaryclubthefatima. Cada sorriso, brincadeira 
                            e momento especial trouxe um brilho único aos olhos das crianças assistidas pelo 
                            Projeto CACA. Nosso profundo agradecimento a essas mulheres incríveis que se uniram para 
                            fazer deste dia inesquecível e repleto de amor. Vocês transformaram este dia em uma 
                            memória preciosa que ficará guardada para sempre nos corações dos nossos pequenos! 💖✨ 
                            #Gratidão #InfanciaFeliz
                        </p>
                    </div>
                </div>
                <div class="card-noticia column is-full is-flex mb-5 p-0">
                    <div class="container-imagem">
                        <p class="titulo-card-noticia-left">
                            Arraiá da Alegria: "Uma Noite para Guardar na Memória" 🎉🌽
                        </p>
                        <img src="@/assets/images/quadrilha.png" alt="Quadrilha dançando em roda">
                    </div>
                    <div class="container-conteudo px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia-right">
                                Arraiá da Alegria: "Uma Noite para Guardar na Memória" 🎉🌽
                            </p>
                            <p class="data-noticia">15/07/2024</p>
                        </div>
                        <p class="is-text-center has-text-centered">
                            Foi uma noite inesquecível! No dia 13/07, nosso arraiá trouxe muita alegria, música, 
                            dança e comidas típicas deliciosas. Uma celebração cheia de cores e sorrisos que uniu 
                            toda a nossa comunidade em momentos especiais. Agradecemos a todos que participaram e 
                            contribuíram para tornar essa festa um verdadeiro sucesso! Que venha o próximo ano com 
                            ainda mais alegria e tradição! 🎶🎊 #ArraiaDaAlegria
                        </p>
                    </div>
                </div>
                <div class="card-noticia column is-full is-flex mb-5 p-0">
                    <div class="container-imagem">
                        <p class="titulo-card-noticia-left">
                            Tarde de Brincadeiras: "Diversão e Alegria Inesquecíveis" 🎠🛹
                        </p>
                        <img src="@/assets/images/criancaraiz.png" alt="Menina com uma flor pintada no rosto segurando um dindin de uva">
                    </div>
                    <div class="container-conteudo px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia-right">
                                Tarde de Brincadeiras: "Diversão e Alegria Inesquecíveis" 🎠🛹
                            </p>
                            <p class="data-noticia">14/06/2024</p>
                        </div>
                        <p class="is-text-center has-text-centered">
                            Gratidão imensa por uma tarde inesquecível de brincadeiras e alegria! Carro de rolimã, 
                            skate e um delicioso lanche fizeram a felicidade das nossas crianças. Um agradecimento 
                            especial ao Projeto @minhainfanciaraiz e à nossa querida amiga @karla_eulalio, juntamente 
                            com os demais voluntários, por proporcionarem momentos tão especiais. Vocês transformaram 
                            sonhos em realidade e encheram nossos corações de felicidade! 💖✨ #TardeDeDiversão
                        </p>
                    </div>
                </div>
                <div class="card-noticia column is-full is-flex mb-5 p-0">
                    <div class="container-imagem">
                        <p class="titulo-card-noticia-left">
                            Celebração de Carnaval: "Diversão e Solidariedade em Harmonia" 🎉
                        </p>
                        <img src="@/assets/images/carnaval.png" alt="Dona Lurdinha dando entrevista para o Programa Piauí de Riquezas">
                    </div>
                    <div class="container-conteudo px-5 py-5">
                        <div class="is-flex is-justify-content-space-between mb-4">
                            <p class="titulo-card-noticia-right">
                                Celebração de Carnaval: "Diversão e Solidariedade em Harmonia" 🎊🎉
                            </p>
                            <p class="data-noticia">03/02/2024</p>
                        </div>
                        <p class="is-text-center has-text-centered">
                            Hoje, realizamos nossa festa de Carnaval, e foi simplesmente incrível! 
                            A energia contagiante, o ritmo do samba e os sorrisos estampados nos rostinhos  
                            das nossas crianças tornaram o dia inesquecível. Um agradecimento especial ao 
                            @rotaryclubthefatima pela generosa contribuição, fornecendo um lanche delicioso 
                            que fez a alegria de nossos pequenos. Vocês são verdadeiramente parte da família 
                            Projeto CACA. Também queremos expressar nossa gratidão a todos os voluntários dedicados 
                            que trabalharam incansavelmente para garantir que tudo saísse perfeito. 🎊🎈 #CarnavalSolidário
                        </p>
                    </div>
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
                        Quase 30 anos cuidando do desenvolvimento de milhares de crianças e adolescentes.
                    </p>
                    <div class="is-flex">
                        <a href="https://wa.me/558699199364" class="mr-3 is-flex is-align-items-center" target="_blank">
                            <img src="@/assets/images/whatsapp.png" alt="Icone Whatsapp" width="32">
                        </a>
                        <a href="https://www.instagram.com/projeto_caca/" class="mr-3 is-flex is-align-items-center" target="_blank">
                            <img src="@/assets/images/instagram.png" alt="Icone Instagram" width="28">
                        </a>
                        <a href="mailto:cacasatelitepi@gmail.com?subject=&body=" class="is-flex is-align-items-center" target="_blank">
                            <img src="@/assets/images/email.png" alt="Icone Email" width="35">
                        </a>
                    </div>
                </div>
                <div class="column is-flex is-flex-direction-column">
                    <p class="is-size-5">Fale conosco !</p>
                    <p class="my-5">Envie sua mensagem via WhatsApp ou E-mail que retornaremos em breve!</p>
                    <div class="is-flex">
                        <img class="image is-16x16 mr-1 mb-2" src="@/assets/images/icon-whatsapp.png" alt="Icone branco do Whatsapp">
                        <p>(86) 9 9919-9364</p>
                    </div>
                    <div class="is-flex is-align-items-center">
                        <img class="image is-16x16 mr-1" src="@/assets/images/icon-email.png" alt="Icone branco do Whatsapp">
                        <p>cacasatelitepi@gmail.com</p>
                    </div>
                </div>
                <div id="divEndereco" class="column is-flex is-flex-direction-column">
                    <p class="is-size-5">Nosso endereço :</p>
                    <ul class="my-5">
                        <li class="mb-3">
                            Rua Santa Quitéria, n° 4447, <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Satélite, Teresina/PI, Brasil
                        </li>
                        <li>
                            Veja no mapa acessando o 
                            <a id="link-localizacao" href="https://www.google.com/maps/place/R.+Santa+Quit%C3%A9ria,+4441+-+Sat%C3%A9lite,+Teresina+-+PI,+64059-040/@-5.0516445,-42.7589741,17z/data=!4m6!3m5!1s0x78e3ba52c773e9b:0x8eb008973a96ca6a!8m2!3d-5.0516968!4d-42.7562703!16s%2Fg%2F11tfzcdf8w?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                link
                            </a>.
                        </li>
                    </ul>
                    <a href="https://www.google.com/maps/place/R.+Santa+Quit%C3%A9ria,+4441+-+Sat%C3%A9lite,+Teresina+-+PI,+64059-040/@-5.0516445,-42.7589741,17z/data=!4m6!3m5!1s0x78e3ba52c773e9b:0x8eb008973a96ca6a!8m2!3d-5.0516968!4d-42.7562703!16s%2Fg%2F11tfzcdf8w?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <img class="image" src="@/assets/images/mapa-caca.png" alt="Icone Email">
                    </a>
                </div>
            </div>
        </section>
        <footer class="is-flex is-justify-content-center py-4">
            <span>CACA © 2025 - Todos os direitos reservados.</span>
        </footer>
    </main>
</template>

<style scoped>
    .container-imagem {
        position: relative;
    }

    .container-btn-img {
        position: relative;
    }

    .botoes-navegacao {
        position: absolute;
        transform: translate(-50%, -50%);
        justify-content: center;
        display: flex;
        top: 90%;
        left: 50%;
        gap: 20px;
        z-index: 1;
    }

    .botoes-navegacao button {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        padding: 7px 10px;
        cursor: pointer;
        border: none;
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
        margin-bottom: 40px;
        background-color: rgba(000, 000, 000, 25%);
    }

    .card-projeto img {
        border-radius: 20px 20px 0 0;
        height: 186px;
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

    #container-noticias h2, #container-noticias span, .titulo-card-noticia-right, .titulo-card-noticia-left {
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

    .card-noticia .container-imagem {
        display: contents;
    }

    .card-noticia .titulo-card-noticia-left {
        display: none;
    }

    .container-btn-img {
        max-width: 337.6px;
    }

    .card-noticia img {
        height: 100%;
        width: 337.6px;
        border-radius: 15px 0 0 15px;
    }

    .card-noticia .data-noticia {
        margin-left: 15px;
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

    #link-localizacao {
        color: rgb(255, 192, 115);
    }

    footer {
        color: #999;
    }

    /* -------------------------------------------------------------------------- */

    
    @media screen and (min-width: 769px) and (max-width: 1050px) {
        .card-noticia {
            height: auto;
        }

        .card-noticia .container-imagem {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 1.5rem 0 1.5rem 1.5rem;
        }

        .container-btn-img img{
            /* height: 80%; */
            border-radius: 7px 7px 7px 7px;
        }

        .card-noticia .container-conteudo div {
            flex-direction: row-reverse;
            margin-bottom: 1.5rem !important;
        }

        .card-noticia .titulo-card-noticia-left{
            margin-bottom: 0.5rem;
            display: block;
        }

        .card-noticia .titulo-card-noticia-right{
            display: none;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 899px) {
        .linha-projetos {
            justify-content: space-around !important;
        }

        .card-projeto {
            width: 310px;
        }
    }

    @media screen and (max-width: 768px) {
        #container-sobre-nos .columns {
            display: flex;
            flex-direction: column-reverse;
        }

        .container-conteudo-noticias {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .card-noticia {
            height: auto;
            flex-direction: column;
        }
        
        .container-btn-img {
            max-width: 100%;
        }

        .card-noticia img {
            border-radius: 15px 15px 0 0;
            width: 100%;
        }

        .card-noticia .is-flex {
            flex-direction: column;
            align-items: center;
        }

        .card-noticia .titulo-card-noticia-right {
            text-align: center;
        }

        .card-noticia .data-noticia {
            font-size: small;
            margin-left: 0;
        }

        #container-comoAjudar :last-child {
            display: flex;
            flex-direction: column-reverse;
        }

        #container-comoAjudar img, .card-noticia {
            max-width: 70%;
        }

        footer {
            font-size: small;
        }

        #divEndereco {
            margin-top: 25px;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        .linha-projetos {
            flex-direction: column;
            align-items: center;
        }
    }

    @media screen and (max-width: 480px) {
        #banner-frase {
            height: 95vh;
        }

        #frase-efeito {
            font-size: 20px;
            line-height: 27px;
        }

        #autor-frase-efeito {
            font-size: 12px;
        }
        
        .linha-projetos {
            flex-direction: column;
            align-items: center;
        }

        .card-noticia {
            max-width: 90%;
        }

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

    @media screen and (max-width: 400px) {
        .card-projeto {
            width: 100%;
            height: auto;
            padding-bottom: 15px;
        }

        .card-noticia {
            max-width: 95%;
        }
    }

</style>
