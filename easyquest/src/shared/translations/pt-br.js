import * as Constants from '../Constants';

export default {
  appName: 'EasyQuest',

  questionType: {
    descritive: 'Dissertativa',
    multiple: 'Múltipla escolha',
    trueFalse: 'Verdadeiro/Falso',
  },

  validationMessages: {
    invalidQuestion: 'Questão Inválida',
    missingTitle: 'É necessário adicionar um título para a questão.',
    missingDescription: 'É necessário adicionar um enunciado para a questão.',
    minimumAlternatives: `É necessário adicionar ao menos ${Constants.questionRules.minimumAlternatives} alternativas para salvar a questão.`,
    correctAlternative: 'É necessário selecionar uma alternativa correta.',
    alternativeText: 'É necessário preencher o texto das alternativas.',
  },

  generalMessages: {
    confirmCloseTitle: 'Alterações Não Salvas',
    confirmClose: 'As alterações não foram salvas. Tem certeza que deseja fechar?',

    clearQuestionsTitle: 'Atenção',
    clearQuestions: 'Todas as questões serão apagadas. Tem certeza que deseja prosseguir?',

    deleteQuestionTitle: 'Atenção',
    deleteQuestion: 'Tem certeza que deseja excluir essa questão?',

    changeTypeTitle: 'Atenção',
    changeType:
      'Tem certeza que deseja modificar o tipo questão, algumas informações serão permanentemente perdidas?',

    noQuestions: 'Você não possui questões cadastradas.',
    noQuestionsMatchFilter: 'Não existem questões que correspondem ao filtro inserido.',

    downloadFormatTitle: 'Atenção',
    downloadFormat:
      'O formato de download é MoodleXML e deve ser utilizado para importar as questões no Moodle.',
  },

  labels: {
    downloadFormatCancel: 'Não mostrar novamente',

    questionDescription: 'Enunciado: ',
    questionFeedback: 'Feedback: ',
    addFeedback: 'Adicionar feedback',
    removeFeedback: 'Remover',

    questionAlternative: 'Alternativa',
    removeAlternative: 'Remover',
    addAlternative: 'Adicionar alternativa',
    correctAlternative: 'Esta é a alternativa correta',
    markCorrectAlternative: 'Marcar como alternativa correta',

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
    deleteButton: 'Excluir',
  },
};
