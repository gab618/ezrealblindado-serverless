async function attendance(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Blindas' }),
  };
}

export const handler = attendance;


