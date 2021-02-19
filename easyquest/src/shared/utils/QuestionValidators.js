import { questionType } from '../Contants';

const validateDescritiveQuestion = (question) => question?.id && question?.description;

export const validateQuestion = (question) => {
  console.log(question);
  switch (question.type) {
    case questionType.descritive:
      return validateDescritiveQuestion(question);
    default:
      throw new Error('Tipo de questão não implementada');
  }
};
