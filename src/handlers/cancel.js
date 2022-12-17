import cancelList from '../data/cancelList';

async function cancel(event, context) {
  let { sender, receiver } = event.queryStringParameters;

  receiver = receiver.replace('!cancelado', '');
  receiver = receiver.replace(' ', '');

  if (!receiver) {
    receiver = sender;
  }

  if (receiver[0] !== '@') {
    receiver = '@' + receiver;
  }

  const cancel = cancelList[Math.floor(Math.random() * cancelList.length)];
  const msg = `${receiver} foi cancelado(a) por ${cancel}`;

  return {
    statusCode: 200,
    body: msg,
  };
}

export const handler = cancel;