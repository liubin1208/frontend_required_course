const url = 'http://localhost:7010/chat';

async function getResponse(content) {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  while (1) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const txt = decoder.decode(value);
    console.log(txt);
  }
}
