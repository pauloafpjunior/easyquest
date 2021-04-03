import * as Constants from '../Constants';

export default {
  appName: 'EasyQuest',

  questionType: {
    descritive: 'Descritive',
    multiple: 'Multiple Choice',
    trueFalse: 'True/False',
  },

  validationMessages: {
    invalidQuestion: 'Invalid Question',
    missingTitle: 'You missed the question title.',
    missingDescription: 'You missed the question description.',
    minimumAlternatives: `You need at leas ${Constants.questionRules.minimumAlternatives} alternatives to save the question.`,
    correctAlternative: 'You need to choose the correct alternative.',
    alternativeText: 'You need to fill the alternative text.',
  },

  generalMessages: {
    confirmCloseTitle: 'Not Saved Changes',
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

    downloadFormat:
      'The download format is MoodleXML and must be used to import your questions on Moodle.',
  },

  labels: {
    downloadFormatCancel: "Don't show again",

    questionDescription: 'Description: ',
    questionFeedback: 'Feedback: ',
    addFeedback: 'Add feedback',
    removeFeedback: 'Remove',

    questionAlternative: 'Alternative',
    removeAlternative: 'Remove',
    addAlternative: 'Add alternative',
    correctAlternative: 'This is the correct alternative',
    markCorrectAlternative: 'Mark as correct',

    saveNewQuestion: 'SAVE',
    closeNewQuestion: 'CLOSE',

    questionType: 'Type: ',
    questionTitle: 'Title: ',

    confirmButton: 'Confirm',
    cancelButton: 'Cancel',

    newQuestionButton: 'NEW',
    downloadAllButton: 'DOWNLOAD',
    cleanQuestionsButton: 'CLEAN',

    questionFilter: 'Search...',
  },

  tooltips: {
    downloadButton: 'Download',
    editButton: 'Edit',
    duplicateButton: 'Duplicate',
    deleteButton: 'Delete',
  },
};
