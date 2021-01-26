:arrow_left: [Voltar](/README.md)

#  Cadastrar questão

> ## Fluxo básico
1. O sistema solicita o tipo de questão a ser cadastrada
2. O usuário seleciona questão do tipo "Múltipla Escolha"
3. O sistema solicita o seguinte: texto do enunciado, texto de pelo menos 2 (duas) alternativas, número da alternativa correta e _feedback_, sendo esse último opcional e os demais obrigatórios
4. O usuário informa os dados necessários
5. O sistema salva a questão e retorna uma mensagem de sucesso

> ## Exceção - Há campos obrigatórios não informados
* O sistema retorna um erro

> ## Exceção - Erro ao cadastrar questão
* O sistema retorna um erro

> ## Fluxo alternativo - O usuário seleciona questão do tipo "Múltipla Escolha"
1. O usuário executa o comando "Criar Questão" 
1. O usuário é direcionado para a tela de  criação de questão
2. O usuário modifica o tipo de questão para "Verdadeiro/Falso"
2. O usuário informa o texto do enunciado da questão
3. O usuário informa as afirmações da questão
    * Para cada afirmação o usuário deve informar se é verdadeira ou falsa
3. O usuário adiciona o texto de feedback da questão
    * Passo opcional
4. O usuário executa o comando "Salvar Questão"

>### Exceção - O enunciado não foi preenchido
* O sistema desabilita o comando "Salvar Questão"

>### Exceção - Não foi adicionada nenhuma afirmação
* O sistema desabilita o comando "Salvar Questão"                                        

<br>

> ## Questão de Dissertação
1. O usuário executa o comando "Criar Questão" 
1. O usuário é direcionado para a tela de  criação de questão
2. O usuário modifica o tipo de questão para "Dissertação"
2. O usuário informa o texto do enunciado da questão
3. O usuário adiciona o texto de feedback da questão
    * Passo opcional
4. O usuário executa o comando "Salvar Questão"

>### Exceção - O enunciado não foi preenchido
* O sistema desabilita o comando "Salvar Questão"
