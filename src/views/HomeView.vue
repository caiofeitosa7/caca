<script>
    import Sidebar from '../components/Sidebar.vue';
    import Alunos from '../components/Alunos.vue';
    import CadastrarAluno from '../components/CadastrarAluno.vue';
    import Voluntarios from '../components/Voluntarios.vue';

    export default {
        components: {
            Sidebar,
            Alunos,
            CadastrarAluno,
            Voluntarios,
        },
        data() {
            return {
                paginaAtual: 'Alunos'
            };
        },
        methods: {
            handleItemMenuClicado(paginaAtual) {
                this.paginaAtual = paginaAtual;
            },
        }
    };
</script>

<template>
    <div class="containerHome">
        <Sidebar @item-menu-clicado="handleItemMenuClicado"/>
        <div class="conteudo">
            <nav class="barraSuperior">
                <div class="is-flex is-align-items-center">
                    <i class='bx bxs-dashboard mr-2'></i>
                    <label class="negrito">{{ paginaAtual }}</label>
                </div>
                <i class='clicavel bx bx-exit'></i>
            </nav>
            <Alunos v-if="paginaAtual === 'Alunos'" @item-menu-clicado="handleItemMenuClicado"/>
            <CadastrarAluno v-if="paginaAtual === 'Cadastro de Aluno'" @item-menu-clicado="handleItemMenuClicado"/>
            <Voluntarios v-if="paginaAtual === 'Voluntários'" />
        </div>
    </div>
</template>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira sans', sans-serif;
    }

    html {
        overflow: hidden;
    }

    .columns {
        margin: 0;
    }

    .font-weight-600 {
        font-weight: 600;
    }

    .negrito {
        font-weight: bold;
    }

    .clicavel {
        cursor: pointer;
    }

    .text-align-center {
        text-align: center;
    }

    .input.is-success {
        border-color: var(--verde-claro);
        background-color: #f7f7f7;
        font-size: small;
    }

    .containerHome {
        --principal: #3a595c;
        --verde-claro: #7ba9a9;
        --verde-escuro: #192e2f;
        --branco: #f1f5f9;
        --preto: #101010;

        background-color: white;
        color: var(--preto);
        display: flex;
    }

    .conteudo {
        width: -webkit-fill-available;
    }

    .barraSuperior {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--branco);
        color: var(--verde-escuro);
        padding: 8px 10px;

        i {
            font-size: x-large;
        }
    }

    button {
        cursor: pointer;
        appearance: none;
        background: none;
        outline: none;
        border: none;
    }
</style>