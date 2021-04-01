import { questionRules, questionType } from '../Constants';

const validateDescritiveQuestion = (question) => {
  if (!question.description) {
    return 'validationMessages.missingDescription';
  }

  return false;
};

const validateMultipleChoiceQuestion = (question) => {
  if (!question?.description) {
    return 'validationMessages.missingDescription';
  }
  if (question.alternatives.length < questionRules.minimumAlternatives) {
    return 'validationMessages.minimumAlternatives';
  }
  if (question.alternatives.some((a) => !a.text)) {
    return 'validationMessages.alternativeText';
  }
  if (question.alternatives.filter((a) => a.isCorrect).length !== 1) {
    return 'validationMessages.correctAlternative';
  }
  return false;
};

const validateTrueFalseQuestion = (question) => {
  if (!question.description) {
    return 'validationMessages.missingDescription';
  }

  return false;
};

export const validateQuestion = (question, t) => {
  switch (question.type) {
    case questionType.descritive.constant:
      return t(validateDescritiveQuestion(question));
    case questionType.multiple.constant:
      return t(validateMultipleChoiceQuestion(question));
    case questionType.trueFalse.constant:
      return t(validateTrueFalseQuestion(question));
    default:
      throw new Error('Not implemented type');
  }
};
