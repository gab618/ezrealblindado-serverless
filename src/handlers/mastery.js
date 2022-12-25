import abbreviate from 'number-abbreviate';
import api from '../services/lolApi';

async function mastery(event, context) {
  const account1 = await api.get(
    `${process.env.ACCOUNT_1_ID}/by-champion/81`
  );
  const account2 = await api.get(
    `${process.env.ACCOUNT_2_ID}/by-champion/81`
  );
  const account3 = await api.get(
    `${process.env.ACCOUNT_3_ID}/by-champion/81`
  );
  const account4 = await api.get(
    `${process.env.ACCOUNT_4_ID}/by-champion/81`
  );
  const { championPoints: mastery1 } = account1.data;
  const { championPoints: mastery2 } = account2.data;
  const { championPoints: mastery3 } = account3.data;
  const { championPoints: mastery4 } = account4.data;
  const total = mastery1 + mastery2 + mastery3 + mastery4;

  const outputM1 = abbreviate(mastery1, 2);
  const outputM2 = abbreviate(mastery2, 0);
  const outputM3 = abbreviate(mastery3, 0);
  const outputM4 = abbreviate(mastery4, 0);
  const outputTotal = abbreviate(total, 2);

  const output = `/me ———————————————————————Ezreal Blindado . . . . . . . . . . . . . . . . . . . . . ${outputM1} Ezreal top . . . . . . . . . . . . . . . . . . . . . . . . . . . ${outputM3} É o Blindas . . . . . . . . . . . . . . . . . . . . . . . . . . ${outputM2} odeio aram . . . . . . . . . . . . . . . . . . . . . . . . . . ${outputM4}  Total: ${outputTotal} PogChamp ———————————————————————`;

  return {
    statusCode: 200,
    body: output,
  };
}

export const handler = mastery;