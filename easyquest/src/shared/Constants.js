export const components = {
  questionList: 'QUESTION_LIST',
  newQuestion: 'NEW_QUESTION',
};

export const questionType = {
  descritive: 'Dissertativa',
  multiple: 'Multipla escolha',
  trueFalse: 'Verdadeiro/Falso',
};

export const questionRules = {
  minimumAlternatives: 2,
};

export const validationMessages = {
  invalidQuestion: 'Questão Inválida',
  missingDescription: 'É necessário adicionar um enunciado para a questão.',
  minimumAlternatives: `É necessário adicionar ao menos ${questionRules.minimumAlternatives} para salvar a questão.`,
  correctAlternative: 'É necessário selecionar uma alternativa correta.',
  alternativeText: 'É necessário preencher o texto das alternativas.',
};

export const MAX_ALTERNATIVES = 5;

export const appLocalStorageKey = 'EASY_QUEST_QUESTIONS';
