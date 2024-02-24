<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                listaVoluntarios: {},
                url: 'http://192.168.0.27:5000/listar_voluntarios'
            };
        },
        methods: {
            async carregarVoluntarios() {
                try {
                    const response = await axios.get(this.url);
                    this.listaVoluntarios = response.data;
                } catch (error) {
                    console.error('Erro ao carregar voluntários:', error);
                }
            },
            async filtrarVoluntarios(){
                try {
                    const response = await axios.post(this.url, {
                        nome_voluntario: document.getElementById("nome").value
                    });
                    this.listaVoluntarios = response.data;
                } catch (error) {
                    console.error('Erro ao carregar voluntários:', error);
                }
            },
            limparFiltro(){
                document.getElementById("nome").value = "";
                this.carregarVoluntarios();
            }
        },
        mounted() {
            this.carregarVoluntarios()
        },
    }
</script>

<template>
    <div class="container-voluntarios m-3">
        <div class="container-filtro is-flex is-align-items-center is-justify-content-space-between mb-4">
            <div id="filtro" class="is-flex is-align-items-center">
                <label for="nome" class="font-weight-600 mr-2">
                    Nome:
                </label>
                <input id="nome" class="input is-success">
                <button id="btnPesquisar" class="is-flex is-align-items-center" @click="filtrarVoluntarios">
                    <i class='bx bx-search-alt mx-2'></i>
                </button>
                <button id="btnLimparFiltro" class="is-flex is-align-items-center" @click="limparFiltro">
                    Limpar Filtro
                </button>
            </div>
            <button id="btnAdicionarVoluntario" class="is-flex is-align-items-center">
                <i class='bx bxs-user-plus'></i>
            </button>
        </div>
        <div class="tabela" v-if="this.listaVoluntarios">
            <div class="cabecalho columns is-mobile mb-0">
                <span class="column is-1 text-align-center">Código</span>
                <span class="column is-4">Nome</span>
                <span class="column is-2">Função</span>
                <span class="column is-4">Disponibilidade</span>
            </div>
            <div class="linha clicavel columns is-mobile" v-for="(voluntario, index) in this.listaVoluntarios" :key="index">
                <span class="column is-1 text-align-center">{{ voluntario.codigo }}</span>
                <span class="column is-4">{{ voluntario.nome }}</span>
                <span class="column is-2">{{ voluntario.funcao }}</span>
                <span class="column is-4">{{ voluntario.disponivel }}</span>
            </div>
        </div>
        <p class="mt-4" v-else>Não há voluntários para exibir!</p>
    </div>
</template>

<style scoped>
    .container-filtro {
        span {
            align-self: center;
        }

        #btnAdicionarVoluntario, #btnPesquisar {
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