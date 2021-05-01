import * as Constants from '../Constants';

export default {
  appName: 'EasyQuest',

  questionType: {
    descritive: 'Dissertativa',
    multiple: 'Múltipla Escolha',
    trueFalse: 'Verdadeiro/Falso',
    associative: 'Associativa',
  },

  validationMessages: {
    invalidQuestion: 'Questão inválida',
    minimumAlternatives: `É necessário adicionar ao menos ${Constants.questionRules.minimumAlternatives} alternativas para a questão.`,
    missingTitle: 'É necessário adicionar um título para a questão.',
    missingDescription: 'É necessário adicionar um enunciado para a questão.',
    correctAlternative: 'É necessário selecionar uma alternativa correta para a questão.',
    alternativeText: 'É necessário preencher o texto das alternativas da questão.',
    minimumItems: `É necessário adicionar ao menos ${Constants.questionRules.minimumItems} itens para a questão.`,
    itemAnswer: 'Todos os itens devem possuir uma resposta correspondente.',
  },

  generalMessages: {
    confirmCloseTitle: 'Atenção',
    confirmClose: 'As alterações não foram salvas. Tem certeza que deseja prosseguir?',

    clearQuestionsTitle: 'Atenção',
    clearQuestions: 'Todas as questões serão removidas. Tem certeza que deseja prosseguir?',

    deleteQuestionTitle: 'Atenção',
    deleteQuestion: 'Esta questão será removida. Tem certeza que deseja prosseguir?',

    changeTypeTitle: 'Atenção',
    changeType:
      'Ao alterar o tipo questão, algumas informações podem ser perdidas. Tem certeza que deseja prosseguir?',

    noQuestions: 'Não há questões cadastradas até o momento.',
    noQuestionsMatchFilter: 'Não há questões que correspondam ao texto de busca informado.',

    downloadFormatTitle: 'Informação',
    downloadFormat: 'Utilize o formato <b>MoodleXML</b> ao importar as questões no Moodle.',
  },

  labels: {
    downloadFormatCancel: 'Não mostrar novamente',

    questionDescription: 'Enunciado: ',
    questionFeedback: 'Feedback: ',
    addFeedback: 'Adicionar feedback',
    removeFeedback: 'Remover feedback',

    questionAlternative: 'Alternativa',
    removeAlternative: 'Remove alternativa',
    addAlternative: 'Adicionar alternativa',
    correctAlternative: 'Esta é a correta',
    markCorrectAlternative: 'Marcar como correta',

    saveNewQuestion: 'SALVAR',
    closeNewQuestion: 'FECHAR',

    questionType: 'Tipo: ',
    questionTitle: 'Título: ',

    confirmButton: 'Confirmar',
    cancelButton: 'Cancelar',

    newQuestionButton: 'NOVA',
    downloadAllButton: 'DOWNLOAD',
    cleanQuestionsButton: 'LIMPAR',

    questionFilter: 'Pesquisar...',

    questionItem: 'Item',
    itemAnswer: 'Resposta',
    addItem: 'Adicionar item',
    removeItem: 'Remover item',
  },

  tooltips: {
    downloadButton: 'Download',
    editButton: 'Editar',
    duplicateButton: 'Duplicar',
    deleteButton: 'Remover',
  },

  helpMessage: {
    easyQuest:
      'EasyQuest é uma aplicação web que tem por finalidade auxiliar usuários Moodle quanto ao cadastramento de questões nesta plataforma. As questões criadas no EasyQuest podem ser facilmente baixadas e importadas no Moodle, usando o formato "Moodle XML".',
    creators:
      'Esta aplicação foi desenvolvida no Departamento de Ciência da Computação do Instituto de Ciências Exatas e Tecnológica (DCC/ICET) da Universidade Federal de Lavras (UFLA).',
  },
};
