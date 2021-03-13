import { questionType } from '../Contants';

const validateDescritiveQuestion = (question) => question?.id && question?.description;

const validateMultipleChoiceQuestion = (question) =>
  question?.id &&
  question?.description &&
  question?.alternatives &&
  question.alternatives.length >= 2 &&
  question.alternatives.length <= 4 &&
  question.alternatives.every((a) => a.text) &&
  question.alternatives.filter((a) => a.isCorrect).length === 1;

const validateTrueFalseQuestion = (question) => question?.id && question?.description;

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
