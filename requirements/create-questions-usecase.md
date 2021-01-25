:arrow_left: [Voltar](/README.md)

#  Criar questões

> ## Questão de Multipla Escolha
1. O usuário executa o comando "Criar Questão" 
1. O sistema direciona o usuário para a tela de  criação de questão
2. O usuário tem a opção de modificar o tipo de questão, que por padrão é do tipo "Multipla Escolha"
2. O usuário informa o texto do enunciado da questão
3. O usuário informa as alternativas da questão
    * Após cada alternativa o usuário deve informar a nota da alternativa adicionada
    * Devem ser adicionadas no mínimo duas e no máximo cinco alternativas
    * Ao menos uma alternativa deve ter nota maior que zero
3. O usuário adiciona o texto de feedback da questão
    * Passo opcional
4. O usuário executa o comando "Salvar Questão"

>### Exceção - O enunciado não foi preenchido
* O sistema desabilita o comando "Salvar Questão"

>### Exceção - Não foram adicionadas alternativas suficientes
* O sistema desabilita o comando "Salvar Questão"

>### Exceção - Não foi adicionada nenhuma alternativa correta
* O sistema desabilita o comando "Salvar Questão"

<br>
    
> ## Questão de Verdadeiro/Falso
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
