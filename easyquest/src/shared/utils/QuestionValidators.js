import { questionRules } from '../Constants';
import Language from '../Languages';

const validateDescritiveQuestion = (question) => {
  if (!question.description) {
    return Language.validationMessages.missingDescription;
  }

  return false;
};

const validateMultipleChoiceQuestion = (question) => {
  if (!question?.description) {
    return Language.validationMessages.missingDescription;
  }
  if (question.alternatives.length < questionRules.minimumAlternatives) {
    return Language.validationMessages.minimumAlternatives;
  }
  if (question.alternatives.some((a) => !a.text)) {
    return Language.validationMessages.alternativeText;
  }
  if (question.alternatives.filter((a) => a.isCorrect).length !== 1) {
    return Language.validationMessages.correctAlternative;
  }
  return false;
};

const validateTrueFalseQuestion = (question) => {
  if (!question.description) {
    return Language.validationMessages.missingDescription;
  }

  return false;
};

export const validateQuestion = (question) => {
  switch (question.type) {
    case Language.questionType.descritive.constant:
      return validateDescritiveQuestion(question);
    case Language.questionType.multiple.constant:
      return validateMultipleChoiceQuestion(question);
    case Language.questionType.trueFalse.constant:
      return validateTrueFalseQuestion(question);
    default:
      throw new Error('Tipo de questão não implementada');
  }
};
