import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { QuestionList } from './QuestionList';
import { getUnAnsweredQuestions } from './QuestionsData';

export const HomePage = () => {
  return (
    <div>
      <Page>
        <div>
          <PageTitle>Unanswered Questions.</PageTitle>
          <button>Ask a question</button>
        </div>
        <div>
          <QuestionList
            data={getUnAnsweredQuestions()}
            renderItem={(question) => <div>{question.title}</div>}
          />
        </div>
      </Page>
    </div>
  );
};
