export const appLocalStorageKey = 'EASY_QUEST_QUESTIONS';
export const appDontShowDownloadMessageStorageKey = 'EASY_QUEST_DOWNLOAD_MOODLE_XML';
export const components = {
  questionList: 'QUESTION_LIST',
  newQuestion: 'NEW_QUESTION',
};

export const questionRules = {
  minimumAlternatives: 2,
  minimumItems: 2,
};

export const MAX_ALTERNATIVES = 5;

export const MAX_ITEMS = 5;

export const questionType = {
  descritive: { value: 'questionType.descritive', constant: 'DESCRITIVE' },
  multiple: { value: 'questionType.multiple', constant: 'MULTIPLE_CHOICE' },
  trueFalse: { value: 'questionType.trueFalse', constant: 'TRUE_FALSE' },
  associative: { value: 'questionType.associative', constant: 'ASSOCIATIVE' },
};
