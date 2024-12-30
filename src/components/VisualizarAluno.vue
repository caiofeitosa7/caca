<script>
    import axios from 'axios';
    import ModalAlunoAdjacente from '../components/ModalAlunoAdjacente.vue'

    export default {
        props: ['dados'],
        components: {
            ModalAlunoAdjacente
        },
        data() {
            return {
                alunos: [{}],
                escolas: [],
                showModal: false,
                urlVisualizarAluno: 'http://localhost:5000/visualizar_aluno',
                urlMatricula: 'http://localhost:5000/registrar_aluno',
                urlOficinas: 'http://localhost:5000/listar_oficinas',
                urlEscolas: 'http://localhost:5000/listar_escolas',
                urlPDF: 'http://localhost:5000/baixar-pdf'
            };
        },
        methods: {
            async atualizarAluno(){
                let dados = {};
                let elementos = document.querySelectorAll('.bloco-dependente');

                elementos.forEach(function(elemento) {
                    let campos = {}
                    let inputs = elemento.querySelectorAll('input, select');

                    inputs.forEach(function(input) {
                        if (input.id.includes('input-foto')) {
                            let fotoPreview = "foto-preview-" + input.id[input.id.length - 1];
                            campos[input.id] = document.getElementById(fotoPreview).src;
                        } else if (input.id.includes('oficina')){
                            if (input.checked)
                                campos[input.id] = 1;
                            else
                                campos[input.id] = 0;
                        } else {
                            if (input.type === 'number' && input.value || input.id.includes("escola"))
                                campos[input.id] = parseInt(input.value, 10);
                            else
                                campos[input.id] = input.value;
                        }
                    });

                    dados[elemento.id] = campos;
                });

                let campos = {}
                let responsavel = document.querySelectorAll('.container-responsavel')[0];
                let inputs = responsavel.querySelectorAll('input');

                inputs.forEach(function(input) {
                    campos[input.id] = input.value;
                });

                dados['responsavel'] = campos;

                try {
                    const response = await axios.post(this.urlMatricula, dados);
                    // this.$emit('item-menu-clicado', 'Alunos');
                } catch (error) {
                    console.error('Erro ao cadastrar os alunos: ', error);
                }
            },
            previewFile(event, index) {
                let file = document.getElementById("input-foto-" + index).files[0];
                let preview = document.getElementById("foto-preview-" + index);
                let reader = new FileReader();

                reader.addEventListener(
                    "load",
                    () => {
                        preview.src = reader.result;  
                    },
                    false
                );

                if (file) {
                    reader.readAsDataURL(file);
                }
            },
            async generatePDF() {
                try {
                    const response = await fetch(this.urlPDF, {method: 'GET'});

                    if (!response.ok)
                        throw new Error('Erro ao gerar o PDF');

                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);

                    // Criando um link para download
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'arquivo.pdf');
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                } catch (error) {
                    console.error('Erro:', error);
                }
            },
            calcularIdade(index) {
                let idade = 0;
                let hoje = new Date();
                let dataNascimento = new Date(event.target.value);
                let diffAnos = hoje.getFullYear() - dataNascimento.getFullYear();

                if (new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate()) > hoje)
                    idade = diffAnos - 1;
                else
                    idade = diffAnos;

                document.getElementById("idade-" + index).value = idade;
            },
            async carregarEscolas(){
                const response = await axios.get(this.urlEscolas);
                this.escolas = response.data;
            },
            async visualizarAluno(codigo){
                const response = await axios.get(this.urlVisualizarAluno + '/' + codigo);
                let dadosApi = response.data;

                if (dadosApi.status === 'success'){
                    this.fecharModal();
                    this.$emit('visualizar-aluno', dadosApi);
                }
                else
                    alert("Aluno não encontrado!")
            },
            fecharModal() {
                this.showModal = false;
            },
            abrirModal() {
                this.showModal = true;
            }
        },
        mounted() {
            this.carregarEscolas()
        },
    }
</script>

<template>
    <ModalAlunoAdjacente :showModal="showModal" :dados=dados @close="fecharModal" @abrirInfoAluno="visualizarAluno"/>
    <div class="columns is-mobile m-3">
        <div class="container-dependentes column is-8 p-0 mr-2">
            <div :id="'dependente-' + index" class="bloco-dependente mb-5 mr-2" v-for="(aluno, index) in alunos" :key="index">
                <input id="codigo" type="number" :value="dados.aluno.codigo" disabled hidden/>
                <div class="columns is-mobile">
                    <div class="container-foto">
                        <img :id="'foto-preview-' + index" class="foto-preview" :src="dados.aluno.foto" alt="Foto 3x4 do aluno">
                        <input :id="'input-foto-' + index" type="file" accept="image/*" @change="previewFile($event, index)" />
                    </div>
                    <div class="container-dados-aluno">
                        <div class="columns mb-0">
                            <div class="column is-8">
                                <label :for="'nome-' + index">Nome:</label>
                                <input :id="'nome-' + index" class="input is-success mt-1" :value="dados.aluno.nome">
                            </div>
                            <div class="column is-4">
                                <label :for="'dt-nascimento-' + index">Data de Nascimento:</label>
                                <input :id="'dt-nascimento-' + index" class="input is-success mt-1" type="date"
                                    v-on:blur="calcularIdade(index)" :value="dados.aluno.dt_nascimento"
                                />
                            </div>
                        </div>
                        <div class="columns mb-0">
                            <div class="column is-5 is-flex is-flex-direction-column">
                                <label :for="'escola-' + index" >Escola:</label>
                                <div class="select is-success is-rounded mt-1">
                                    <select :id="'escola-' + index">
                                        <option value="0">Não Identificado</option>
                                        <option v-for="(escola, indice) in escolas" :key="indice" :value="escola.codigo"
                                            :selected="escola.codigo == dados.aluno.cod_escola">
                                            {{ escola.nome }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="column is-3">
                                <label :for="'serie-' + index">Série:</label>
                                <input :id="'serie-' + index" class="input is-success mt-1" :value="dados.aluno.serie">
                            </div>
                            <div class="column is-2">
                                <label :for="'sexo-' + index">Sexo:</label>
                                <div class="select is-success is-rounded mt-1">
                                    <select :id="'sexo-' + index">
                                        <option value="M" :selected="dados.aluno.sexo === 'M'">M</option>
                                        <option value="F" :selected="dados.aluno.sexo === 'F'">F</option>
                                    </select>
                                </div>
                            </div>
                            <div class="column is-2">
                                <label :for="'idade-' + index">Idade:</label>
                                <input :id="'idade-' + index" type="number" class="input is-success mt-1"
                                    :value="dados.aluno.idade" disabled>
                            </div>
                        </div>
                        <div class="columns mb-0">
                            <div class="column">
                                <label :for="'alergia-' + index" >Alergia:</label>
                                <input :id="'alergia-' + index" class="input is-success mt-1"
                                    :value="dados.aluno.alergia">
                            </div>
                            <div class="column">
                                <label :for="'laudo-' + index">Laudo:</label>
                                <input :id="'laudo-' + index" class="input is-success mt-1"
                                    :value="dados.aluno.laudo">
                            </div>
                        </div>
                        <div class="columns mb-0">
                            <div class="column is-4">
                                <label :for="'cpf-' + index">CPF:</label>
                                <input :id="'cpf-' + index" class="input is-success mt-1"
                                    :value="dados.aluno.cpf">
                            </div>
                            <div class="column is-8">
                                <label :for="'observacao-' + index">Observação:</label>
                                <input :id="'observacao-' + index" class="input is-success mt-1"
                                    :value="dados.aluno.observacao">
                            </div>
                        </div>
                        <input id="dt_alteracao" type="date" :value="dados.aluno.dt_alteracao" disabled hidden/>
                        <input id="cod_responsavel" type="number" :value="dados.aluno.cod_responsavel" disabled hidden/>
                    </div>
                </div>
                <div class="container-oficinas pt-2">
                    <div class="is-flex is-justify-content-center">
                        <label class="negrito">OFICINAS</label>
                    </div>
                    <div class="columns is-multiline is-mobile my-4">
                        <div class="column is-6 py-2">
                            <label :for="'oficina-0-' + index" class="checkbox">
                                <input :id="'oficina-0-' + index" type="checkbox" class="mr-1">
                                Acompanhamento Escolar (Manhã)
                            </label>
                        </div>
                        <div class="column is-6 py-2">
                            <label :for="'oficina-1-' + index" class="checkbox">
                                <input :id="'oficina-1-' + index" type="checkbox" class="mr-1">
                                Acompanhamento Escolar (Tarde)
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-responsavel p-3">
            <div class="is-flex is-align-items-center is-justify-content-space-between mt-1 mb-5">
                <div class="mx-3"></div>
                <label class="negrito">RESPONSÁVEL</label>
                <div id="btnOutrosAlunos" @click="abrirModal">
                    <i class='bx bx-group'></i>
                </div>
            </div>
            <div id="campos-responsavel" class="is-flex is-flex-direction-column is-justify-content-space-between">
                <div class="columns is-multiline is-mobile">
                    <input id="codigo_responsavel" type="number" :value="dados.aluno.codigo_responsavel" hidden/>
                    <div class="column is-12 p-0 pb-4">
                        <label for="nome_responsavel">Nome:</label>
                        <input id="nome_responsavel" class="input is-success mt-1"
                            :value="dados.aluno.nome_responsavel">
                    </div>
                    <div class="column is-12 p-0 pb-4">
                        <label for="cpf_responsavel">CPF:</label>
                        <input id="cpf_responsavel" class="input is-success mt-1"
                            :value="dados.aluno.cpf_responsavel">
                    </div>
                    <div class="column is-12 p-0 pb-4">
                        <label for="endereco_responsavel">Endereço:</label>
                        <input id="endereco_responsavel" class="input is-success mt-1" 
                            :value="dados.aluno.endereco_responsavel">
                    </div>
                    <div class="column is-12 p-0 pb-4">
                        <label for="fone_responsavel">Telefone(s):</label>
                        <input id="fone_responsavel" class="input is-success mt-1"
                            :value="dados.aluno.telefones_responsavel">
                    </div>
                    <div class="column is-12 p-0">
                        <label for="ocupacao_responsavel">Ocupação:</label>
                        <input id="ocupacao_responsavel" class="input is-success mt-1"
                            :value="dados.aluno.ocupacao_responsavel">
                    </div>
                </div>
                <div class="container-opcoes">
                    <div class="is-flex is-justify-content-center mb-5">
                        <label class="negrito">OPÇÕES</label>
                    </div>
                    <div class="is-flex is-justify-content-center">
                        <!-- <div id="btnAddAluno" class="btnOpcao" @click="addBlocoAluno">
                            <i class='bx bxs-user-plus is-size-4 mr-1'></i>
                            <span>Aluno</span>
                        </div> -->
                        <div id="btnConfirmar" class="btnOpcao mx-2" @click="atualizarAluno">
                            <i class='bx bx-check is-size-4 mr-1'></i>
                            <span class="mr-1">Atualizar</span>
                        </div>
                        <div id="btnPDF" class="btnOpcao mx-2" @click="generatePDF">
                            <i class='bx bxs-file-pdf is-size-5 mr-1'></i>
                            <span>PDF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div @click="cadastrarAluno()">click aqui</div> -->
    </div>
</template>

<style scoped>
    .container-dependentes {
        overflow-y: scroll;
        max-height: 89vh;
        min-height: 89vh;
    }

    .container-dependentes::-webkit-scrollbar {
        width: 7px; /* largura da barra de rolagem */
    }

    .container-dependentes::-webkit-scrollbar-track {
        background-color: var(--branco); /* cor de fundo da barra de rolagem */
    }

    .container-dependentes::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--verde-claro); /* cor do botão da barra de rolagem */
    }

    .bloco-dependente, .container-responsavel {
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

        .foto-preview {
            border-radius: 4px;
            width: 143px;
            height: 192px;
        }

        input {
            width: 120px;
        }
    }

    .container-dados-aluno {
        width: -webkit-fill-available;

        .column {
            padding: 10px 7px;
        }
    }

    .container-opcoes {
        .btnOpcao {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4px 8px;
            color: var(--branco);
            border-radius: 3px;
            cursor: pointer;
        }

        #btnAddAluno {
            background: var(--verde-claro);

            &:hover{
                color: var(--verde-claro);
                background: var(--branco);
            }
        }

        #btnConfirmar {
            background: var(--principal);

            &:hover{
                color: var(--principal);
                background: var(--branco);
            }
        }

        #btnPDF {
            background: var(--verde-escuro);

            &:hover{
                color: var(--verde-escuro);
                background: var(--branco);
            }
        }
    }

    #btnOutrosAlunos {
        background-color: var(--verde-escuro);
        color: var(--branco);
        border-radius: 50%;
        font-size: larger;
        cursor: pointer;
        padding: 10px;

        &:hover {
            background-color: var(--verde-claro);
        }
    }

    #campos-responsavel {
        height: 74vh;
    }
</style>