import * as Constants from '../Constants';

export default {
  appName: 'EasyQuest',

  questionType: {
    descritive: 'Descritive',
    multiple: 'Multiple Choice',
    trueFalse: 'True/False',
    associative: 'Associative',
  },

  validationMessages: {
    invalidQuestion: 'Invalid Question',
    missingTitle: 'You missed the question title.',
    missingDescription: 'You missed the question description.',
    minimumAlternatives: `You need at least ${Constants.questionRules.minimumAlternatives} alternatives to save the question.`,
    correctAlternative: 'You need to choose the correct alternative.',
    alternativeText: 'You need to fill the alternative text.',
    minimumItems: `You need at least ${Constants.questionRules.minimumItems} items to save the question.`,
    itemAnswer: 'All items must have an answer.',
  },

  generalMessages: {
    confirmCloseTitle: 'Atention',
    confirmClose: 'The changes have not been saved. Are you sure you want to close?',

    clearQuestionsTitle: 'Atention',
    clearQuestions: 'All the questions will be deleted. Are you sure you want to continue?',

    deleteQuestionTitle: 'Atention',
    deleteQuestion: 'Do you really want to delete this question??',

    changeTypeTitle: 'Atention',
    changeType:
      'Are you sure you want to change the question type? Some informamtions will be permanently lost?',

    noQuestions: 'You do not have any questions.',
    noQuestionsMatchFilter: 'There are no questions that match the filter.',

    downloadFormatTitle: 'Atention',
    downloadFormat: 'Use the MoodleXML template to import your questions on Moodle.',
  },

  rememberDownload: {
    title: 'Download Alert',
    text:
      "The questions created on EasyQuest are only temporaly stored on your browser. Remember to download your questions frequently so you dont't lose them.",
    confirm: 'Ok',
    cancel: "Don't show again",
  },

  labels: {
    downloadFormatCancel: "Don't show it again",

    questionDescription: 'Description: ',
    questionFeedback: 'Feedback: ',
    addFeedback: 'Add feedback',
    removeFeedback: 'Remove feedback',

    questionAlternative: 'Alternative',
    removeAlternative: 'Remove alternative',
    addAlternative: 'Add alternative',
    correctAlternative: 'This is the correct alternative',
    markCorrectAlternative: 'Mark as correct',

    saveNewQuestion: 'SAVE',
    closeNewQuestion: 'CLOSE',

    questionType: 'Type: ',
    questionTitle: 'Title: ',

    confirmButton: 'Confirm',
    cancelButton: 'Cancel',
    understoodButton: 'Understood',

    newQuestionButton: 'NEW',
    downloadAllButton: 'DOWNLOAD',
    cleanQuestionsButton: 'CLEAN',

    questionFilter: 'Search...',

    questionItem: 'Item',
    itemAnswer: 'Answer',
    addItem: 'Add item',
    removeItem: 'Remove item',
  },

  tooltips: {
    downloadButton: 'Download',
    editButton: 'Edit',
    duplicateButton: 'Duplicate',
    deleteButton: 'Delete',
  },

  helpMessage: {
    easyQuest:
      'EasyQuest is a webapp with the goal of helping Moodle users to create questions in this plataform. The questions created on EasyQuest can be easily downloaded and imported on Moodle, using the format "Moodle XML". The questions created on EasyQuest will be stored only in the user device and will not be sent to any third party applications.',
    import:
      'To import the questions on Moodle, browse to your desired course. Then, click on the "Questions Bank" option and then click "Import". At the end, you will need to select the category to save the questions  and then click "Import"',
    creators:
      'This application was developed on the Computer Science Department of Institute of Exact and Technological Sciences (DCC/ICET) from the Federal Universiti of Lavras (UFLA).',
    questions:
      "The questions created on EasyQuest are only stored on your computer, they are not sent to any thirdp-party server. Also, the questions are only temporaly stored on your browser's LocalStorage, so remember to frequently download your questions.",
  },
};
