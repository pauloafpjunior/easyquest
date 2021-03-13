import { questionType } from '../../Contants';

const multiple = (question) => {
  const { description, alternatives, feedback } = question;
  const alternativesText = alternatives.map((alternative) => {
    const value = alternative.isCorrect ? 100 : 0;
    return `<answer fraction="${value}" format="html">
    <text><![CDATA[${alternative.text}'}]]></text>
    <feedback format="html">
      <text></text>
    </feedback>
  </answer>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <quiz>
    <question type="multichoice">
      <name>
        <text>${question.id}</text>
      </name>
      <questiontext format="html">
        <text><![CDATA[${description}]]></text>
      </questiontext>
      <generalfeedback format="html">
        <text><![CDATA[${feedback}]]></text>
      </generalfeedback>
      <defaultgrade>1</defaultgrade>
      <penalty>0.3333333</penalty>
      <hidden>0</hidden>
      <idnumber></idnumber>
      <single>true</single>
      <shuffleanswers>true</shuffleanswers>
      <answernumbering>abc</answernumbering>
      <showstandardinstruction>0</showstandardinstruction>
      <correctfeedback format="html">
      <text><![CDATA[<p>Sua resposta está correta.</p>]]></text>
    </correctfeedback>
    <partiallycorrectfeedback format="html">
      <text><![CDATA[<p>Sua resposta está parcialmente correta.</p>]]></text>
    </partiallycorrectfeedback>
    <incorrectfeedback format="html">
      <text><![CDATA[<p>Sua resposta está incorreta.</p>]]></text>
    </incorrectfeedback>
    <shownumcorrect/>
    ${alternativesText}
  </question>

</quiz>`;

  return xml;
};

export default (question) => {
  console.log('asdasdasdasd');
  switch (question.type) {
    case questionType.multiple:
      return multiple(question);

    default:
      throw new Error('Not implemented');
  }
};
