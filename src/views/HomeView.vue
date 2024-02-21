<script>
    import Sidebar from '../components/Sidebar.vue';
    import Alunos from '../components/Alunos.vue';
    import Voluntarios from '../components/Voluntarios.vue';

    export default {
        components: {
            Sidebar,
            Alunos,
            Voluntarios,
        },
        data() {
            return {
                paginaAtual: 'alunos',
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
    <div class="container-home">
        <Sidebar @item-menu-clicado="handleItemMenuClicado"/>
        <div class="conteudo">
            <Alunos v-if="paginaAtual === 'alunos'" />
            <Voluntarios v-if="paginaAtual === 'voluntarios'" />
        </div>
    </div>
</template>

<style lang="scss">
    .container-home {
        --principal: #3a595c;
        --verde-claro: #7ba9a9;
        --verde-escuro: #192e2f;
        --branco: #f1f5f9;
        --preto: #0b0b0b;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira sans', sans-serif;
    }

    body {
        background: var(--branco);
    }

    .container-home {
        display: flex;
    }

    button {
        cursor: pointer;
        appearance: none;
        border: none;
        outline: none;
        background: none;
    }
</style>