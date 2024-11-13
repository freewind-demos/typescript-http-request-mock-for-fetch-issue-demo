import 'whatwg-fetch';
import HttpRequestMock from 'http-request-mock';

const mocker = HttpRequestMock.setup();

describe('Fetch with 500 status', () => {
  beforeEach(() => {
    mocker.mock({
      url: 'https://api.example.com/test',
      status: 500,
      body: { message: 'Internal Server Error' }
    });
  });

  afterEach(() => {
    mocker.reset();
  });

  it('should have response.ok as false when status is 500', async () => {
    const response = await fetch('https://api.example.com/test');
    console.log('Full response:', {
      status: response.status,
      ok: response.ok,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });
    
    expect(response.status).toBe(500);
    expect(response.ok).toBe(false);
  });
}); 