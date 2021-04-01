export const components = {
  questionList: 'QUESTION_LIST',
  newQuestion: 'NEW_QUESTION',
};

export const questionRules = {
  minimumAlternatives: 2,
};

export const MAX_ALTERNATIVES = 5;

export const appLocalStorageKey = 'EASY_QUEST_QUESTIONS';

export const questionType = {
  descritive: { value: 'questionType.descritive', constant: 'DESCRITIVE' },
  multiple: { value: 'questionType.multiple', constant: 'MULTIPLE_CHOICE' },
  trueFalse: { value: 'questionType.trueFalse', constant: 'TRUE_FALSE' },
};
