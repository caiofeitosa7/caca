<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                url: 'http://192.168.0.27:5000/cadastrar_aluno'
            };
        },
        methods: {
            async cadastrarAluno(){
                try {
                    // const response = await axios.post(this.url, {
                    //     nome_voluntario: document.getElementById("nome").value
                    // });
                    // this.listaAlunos = response.data;

                    this.$emit('item-menu-clicado', 'Alunos');
                } catch (error) {
                    console.error('Erro ao carregar voluntários:', error);
                }
            },
            previewFile() {
                let file = document.querySelector("input[type=file]").files[0];
                let preview = document.getElementById("foto-perfil");
                let reader = new FileReader();

                reader.addEventListener(
                    "load",
                    () => {
                        // convert image file to base64 string
                        preview.src = reader.result;
                    },
                    false,
                );

                if (file) {
                    reader.readAsDataURL(file);
                }
            },
            calcularIdade() {
                let idade = 0;
                let hoje = new Date();
                let dataNascimento = new Date(event.target.value);
                let diffAnos = hoje.getFullYear() - dataNascimento.getFullYear();

                if (new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate()) > hoje)
                    idade = diffAnos - 1;
                else
                    idade = diffAnos;

                document.getElementById("idade").value = idade;
            }
        },
        // mounted() {
        //     this.carregarAlunos()
        // },
    }
</script>

<template>
    <div class="columns is-mobile mx-1">
        <div class="container-dependentes column is-8">
            <div class="bloco-dependente">
                <div class="columns is-mobile">
                    <div class="container-foto">
                        <img id="foto-perfil" src="" alt="">
                        <input type="file" v-on:change="previewFile" />
                    </div>
                    <div class="container-dados">
                        <div class="columns mb-0">
                            <div class="column is-8">
                                <label for="nome" >Nome:</label>
                                <input id="nome" class="input is-success mt-1">
                            </div>
                            <div class="column is-4">
                                <label for="dt_nascimento">Data de Nascimento:</label>
                                <input id="dt_nascimento" class="input is-success mt-1" type="date" v-on:blur="calcularIdade">
                            </div>
                        </div>
                        <div class="columns mb-0">
                            <div class="column is-6">
                                <label for="escola" >Escola:</label>
                                <input id="escola" class="input is-success mt-1">
                            </div>
                            <div class="column is-4">
                                <label for="serie">Série:</label>
                                <input id="serie" class="input is-success mt-1">
                            </div>
                            <div class="column is-2">
                                <label for="idade">Idade:</label>
                                <input id="idade" type="number" class="input is-success mt-1" disabled>
                            </div>
                        </div>
                        <div class="columns mb-0">
                            <div class="column">
                                <label for="alergia" >Alergia:</label>
                                <input id="alergia" class="input is-success mt-1">
                            </div>
                            <div class="column">
                                <label for="laudo">Laudo:</label>
                                <input id="laudo" class="input is-success mt-1">
                            </div>
                        </div>
                        <div class="columns mb-0">
                            <div class="column is-4">
                                <label for="cpf" >CPF:</label>
                                <input id="cpf" class="input is-success mt-1">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-oficinas pt-2">
                    <div class="is-flex is-justify-content-center">
                        <label class="negrito">OFICINAS</label>
                    </div>
                    <div class="columns is-multiline is-mobile my-4">
                        <div class="column is-6 py-2">
                            <label class="checkbox">
                                <input type="checkbox" class="mr-1">
                                Acompanhamento Escolar (Manhã)
                            </label>
                        </div>
                        <div class="column is-6 py-2">
                            <label class="checkbox">
                                <input type="checkbox" class="mr-1">
                                Acompanhamento Escolar (Tarde)
                            </label>
                        </div>
                        <div class="column is-6 py-2">
                            <label class="checkbox">
                                <input type="checkbox" class="mr-1">
                                Oficina de Teclado (Quarta - Manhã)
                            </label>
                        </div>
                        <div class="column is-6 py-2">
                            <label class="checkbox">
                                <input type="checkbox" class="mr-1">
                                Oficina de Informática (Sábado - Tarde)
                            </label>
                        </div>
                        <div class="column is-6 py-2">
                            <label class="checkbox">
                                <input type="checkbox" class="mr-1">
                                Oficina de Violão (Sábado - Manhã)
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-responsavel column is-4"></div>
        

        
        
        
        
        
        
        

        
        
        <!-- <div @click="cadastrarAluno()">click aqui</div> -->
    </div>
</template>

<style scoped>
    .input.is-success {
        border-color: var(--verde-claro);
        background-color: #f2f2f2;
        font-size: small;
    }

    .bloco-dependente {
        background: var(--branco);
        color: var(--preto);
        border-radius: 5px;
        padding: 5px 0;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    }

    .container-foto {
        width: 183px;
        min-width: 163px;
        height: 252px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 5px;

        #foto-perfil {
            width: 143px;
            height: 192px;
        }

        input {
            width: 120px;
        }
    }

    .container-dados {
        width: -webkit-fill-available;

        .column {
            padding: 10px 7px;
        }
    }

</style>