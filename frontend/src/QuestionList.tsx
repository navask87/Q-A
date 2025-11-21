import { JSX } from 'react';
import { Question } from './Question';
import { QuestionData } from './QuestionsData';

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList = ({ data, renderItem }: Props) => {
  return (
    <ul>
      {data.map((question) => (
        <li key={question.questionId}>
          <Question data={question}></Question>
        </li>
      ))}
    </ul>
  );
};
