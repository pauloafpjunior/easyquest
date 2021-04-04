import * as Constants from '../Constants';

export default {
  appName: 'EasyQuest',

  questionType: {
    descritive: 'Dissertativa',
    multiple: 'Múltipla Escolha',
    trueFalse: 'Verdadeiro/Falso',
  },

  validationMessages: {
    invalidQuestion: 'Questão inválida',
    minimumAlternatives: `É necessário adicionar ao menos ${Constants.questionRules.minimumAlternatives} alternativas para a questão.`,
    missingTitle: 'É necessário adicionar um título para a questão.',
    missingDescription: 'É necessário adicionar um enunciado para a questão.',
    correctAlternative: 'É necessário selecionar uma alternativa correta para a questão.',
    alternativeText: 'É necessário preencher o texto das alternativas da questão.',
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
    removeAlternative: 'Remover alternativa',
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
  },

  tooltips: {
    downloadButton: 'Download',
    editButton: 'Editar',
    duplicateButton: 'Duplicar',
    deleteButton: 'Remover',
  },
};
