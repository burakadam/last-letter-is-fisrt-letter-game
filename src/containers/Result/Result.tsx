import { gameSelectors } from '@/store/game';
import { useAppSelector } from '@/store/hooks';

import { Layout } from '@/components/Layout';

const Result = () => {
  const hostAnswers = useAppSelector(gameSelectors.hostAnswers);
  const questAnswers = useAppSelector(gameSelectors.questAnswers);
  const resultText = useAppSelector(gameSelectors.resultText);

  return (
    <Layout>
      <h1 className="mb-2 font-bold text-3xl">
        {hostAnswers.length > questAnswers.length ? 'KAYBETTİN!' : 'KAZANDIN!'}
      </h1>
      <h3 className="mb-8 font-bold text-xl text-red-500">{resultText}</h3>

      <div className="flex w-[330px]">
        <div className="flex-1 p-2 border-r text-center ">
          <h4 className="mb-4 border-b pb-2 font-semibold">
            EV SAHİBİ : {hostAnswers.length}
          </h4>
          <div>
            {hostAnswers.map((name) => (
              <p key={name} className="mb-1 uppercase">
                {name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-1 p-2 text-center ">
          <h4 className="mb-4 border-b pb-2 font-semibold">
            KONUK: {questAnswers.length}
          </h4>
          <div>
            {questAnswers.map((name) => (
              <p key={name} className="mb-1 uppercase">
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Result };
