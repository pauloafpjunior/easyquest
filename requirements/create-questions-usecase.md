:arrow_left: [Voltar](/README.md)

#  Cadastrar questão

> ## Fluxo básico
1. O sistema solicita o tipo de questão a ser cadastrada
2. O usuário seleciona questão do tipo "Múltipla Escolha" [A1, A2]
3. O sistema solicita o seguinte: título da questão, texto do enunciado, texto de pelo menos 2 (duas) alternativas, número da alternativa correta e _feedback_, sendo esse último opcional e os demais obrigatórios
4. O usuário informa os dados necessários
5. O sistema salva a questão e retorna uma mensagem de sucesso

> ## Fluxo alternativo A1 - O usuário seleciona questão do tipo "Verdadeiro/Falso"
1. O sistema solicita o seguinte: título da questão, texto da sentença cuja veracidade está sendo analiada, resposta correta (se a sentença é verdadeira ou falsa) e _feedback_, sendo esse último opcional e os demais obrigatórios
2. Volta para o passo 4 do fluxo básico

> ## Fluxo alternativo A2 - O usuário seleciona questão do tipo "Dissertação"
1. O sistema solicita o seguinte: título da questão, texto do enunciado e _feedback_, sendo esse último opcional e os demais obrigatórios
2. Volta para o passo 4 do fluxo básico

> ## Exceção - Há campos obrigatórios não informados
* O sistema retorna um erro

> ## Exceção - Erro ao cadastrar questão
* O sistema retorna um erro