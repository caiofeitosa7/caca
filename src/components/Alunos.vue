<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                listaAlunos: {},
                quantAlunos: 0,
                urlListarAlunos: 'http://localhost:5000/listar_alunos',
                urlVisualizarAluno: 'http://localhost:5000/visualizar_aluno'
            };
        },
        methods: {
            async carregarAlunos() {
                try {
                    const response = await axios.get(this.urlListarAlunos);
                    this.listaAlunos = response.data.alunos;
                    this.quantAlunos = response.data.quantidade;
                } catch (error) {
                    console.error('Erro ao carregar alunos:', error);
                }
            },
            async filtrarAlunos(){
                let divFiltro = document.getElementById("filtro");
                let camposInput = divFiltro.querySelectorAll("input, select");

                let dados = {};
                camposInput.forEach(function (campo) {
                    dados[campo.id] = campo.value;
                });

                try {
                    const response = await axios.post(this.urlListarAlunos, dados);
                    this.listaAlunos = response.data.alunos;
                    this.quantAlunos = response.data.quantidade;
                } catch (error) {
                    console.error('Erro ao filtrar alunos:', error);
                }
            },
            emitirClick(componentName) {
				this.$emit('item-menu-clicado', componentName);
			},
            limparFiltro(){
                document.getElementById("nome").value = "";
                document.getElementById("sexo").value = "I";
                document.getElementById("idade1").value = "";
                document.getElementById("idade2").value = "";
                this.carregarAlunos();
            },
            async visualizarAluno(codigo){
                const response = await axios.get(this.urlVisualizarAluno + '/' + codigo);
                let dados = response.data;

                if (dados.status === 'success')
                    this.$emit('visualizar-aluno', dados);
                else
                    alert("Aluno não encontrado!")
            },
        },
        mounted() {
            this.carregarAlunos()
        },
    }
</script>

<template>
    <div class="container-alunos m-3">
        <div class="container-filtro is-flex is-align-items-center is-justify-content-space-between mb-4">
            <div id="filtro" class="is-flex is-align-items-center">
                <div class="is-flex is-align-items-center mr-3">
                    <label for="nome" class="font-weight-600 mr-2">
                        Nome:
                    </label>
                    <input id="nome" class="input is-success">
                </div>
                <div class="is-flex is-align-items-center mr-3">
                    <label for="sexo" class="font-weight-600 mr-2">
                        Sexo:
                    </label>
                    <div class="select is-success is-rounded">
                        <select id="sexo">
                            <option value="I">I</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                </div>
                <div class="is-flex is-align-items-center">
                    <label for="idade1" class="font-weight-600 mr-2">
                        Idade:
                    </label>
                    <input id="idade1" type="number" class="campoIdade input is-success" min="0" max="18">
                    <span class="mx-2">à</span>
                    <input id="idade2" type="number" class="campoIdade input is-success" min="0" max="18">
                </div>
                <button id="btnPesquisar" class="is-flex is-align-items-center" @click="filtrarAlunos">
                    <i class='bx bx-search-alt mx-2'></i>
                </button>
                <button id="btnLimparFiltro" class="is-flex is-align-items-center" @click="limparFiltro">
                    Limpar Filtro
                </button>
            </div>
            <button id="btnAdicionarAluno" class="is-flex is-align-items-center" @click="emitirClick('Cadastrar Aluno')">
                <i class='bx bxs-user-plus'></i>
            </button>
        </div>
        <div class="tabela" v-if="this.listaAlunos">
            <div class="cabecalho columns is-mobile mb-0">
                <span class="column is-1 text-align-center">Código</span>
                <span class="column is-4">Nome</span>
                <span class="column is-2">CPF</span>
                <span class="column is-1 text-align-center">Idade</span>
                <span class="column is-1 text-align-center">Sexo</span>
            </div>
            <div class="corpo pb-2">
                <div class="linha clicavel columns is-mobile" v-for="(aluno, index) in this.listaAlunos" :key="index"
                    @click="visualizarAluno(aluno.codigo)">
                    <span class="column is-1 text-align-center">{{ aluno.codigo }}</span>
                    <span class="column is-4">{{ aluno.nome }}</span>
                    <span class="column is-2">{{ aluno.cpf }}</span>
                    <span class="column is-1 text-align-center">{{ aluno.idade }}</span>
                    <span class="column is-1 text-align-center">{{ aluno.sexo }}</span>
                </div>
            </div>
            
        </div>
        <p class="mt-4" v-else>Não há alunos para exibir!</p>
    </div>
</template>

<style scoped>
    .container-filtro {
        span {
            align-self: center;
        }

        #btnAdicionarAluno, #btnPesquisar {
            font-size: x-large;
            padding: 5px;
            border-radius: 5px;
            margin-left: 10px;
            color: var(--branco);
            background-color: var(--verde-escuro);

            &:hover {
                background-color: var(--verde-claro);
            }
        }

        #filtro {
            label {
                text-wrap: nowrap;
            }

            .select {
                background-color: white;
            }

            #nome {
                width: 120px;
            }

            .campoIdade {
                width: 60px;
            }

            #btnLimparFiltro {
                font-size: medium;
                border-radius: 5px;
                font-weight: 600;
                margin-left: 10px;
                text-wrap: nowrap;
                padding: 3px 10px 5px 10px;
                color: var(--verde-escuro);
                border: 2px solid var(--verde-escuro);

                &:hover {
                    color: var(--branco);
                    background-color: var(--verde-escuro);
                }
            }
        }
    }

    .tabela {
        .cabecalho {
            border-radius: 7px 7px 0 0;
            background: var(--verde-escuro);
            color: var(--branco);
            font-weight: 600;
            padding: 10px 5px;
        }

        .corpo {
            overflow-y: auto;
            max-height: 75vh;
        }

        .corpo::-webkit-scrollbar {
            width: 7px; /* largura da barra de rolagem */
        }

        .corpo::-webkit-scrollbar-track {
            background-color: var(--branco); /* cor de fundo da barra de rolagem */
        }

        .corpo::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: var(--verde-claro); /* cor do botão da barra de rolagem */
        }


        .linha {
            padding: 10px 5px;
            border-bottom: 2px solid var(--branco);

            &:hover {
                background-color: var(--branco);
            }
        }

        span {
            padding: 5px;
        }

        .is-mobile {
            margin-bottom: 0;
        }
    }

</style>