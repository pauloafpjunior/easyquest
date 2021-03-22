import { questionType, validationMessages, questionRules } from '../Constants';

const validateDescritiveQuestion = (question) => {
  if (!question.description) {
    return validationMessages.missingDescription;
  }

  return false;
};

const validateMultipleChoiceQuestion = (question) => {
  if (!question?.description) {
    return validationMessages.missingDescription;
  }
  if (question.alternatives.length < questionRules.minimumAlternatives) {
    return validationMessages.minimumAlternatives;
  }
  if (question.alternatives.some((a) => !a.text)) {
    return validationMessages.alternativeText;
  }
  if (question.alternatives.filter((a) => a.isCorrect).length !== 1) {
    return validationMessages.correctAlternative;
  }
  return false;
};

const validateTrueFalseQuestion = (question) => {
  if (!question.description) {
    return validationMessages.missingDescription;
  }

  return false;
};

export const validateQuestion = (question) => {
  switch (question.type) {
    case questionType.descritive:
      return validateDescritiveQuestion(question);
    case questionType.multiple:
      return validateMultipleChoiceQuestion(question);
    case questionType.trueFalse:
      return validateTrueFalseQuestion(question);
    default:
      throw new Error('Tipo de questão não implementada');
  }
};
