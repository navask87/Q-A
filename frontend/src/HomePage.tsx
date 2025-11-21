import { useEffect, useState } from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { QuestionList } from './QuestionList';
import { getUnAnsweredQuestions, QuestionData } from './QuestionsData';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getQuestionsData = async () => {
      const unAnsweredData = await getUnAnsweredQuestions();
      setQuestions(unAnsweredData);
      setIsLoading(false);
    };
    getQuestionsData();
  }, []);
  return (
    <div>
      <Page>
        <div>
          <PageTitle>Unanswered Questions.</PageTitle>
          <button>Ask a question</button>
        </div>
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <QuestionList
              data={questions}
              renderItem={(question) => <div>{question.title}</div>}
            />
          )}
        </div>
      </Page>
    </div>
  );
};
