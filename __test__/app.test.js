import axios from 'axios';
import sum from '../sum';
// import startServer from '../server/index.js';

const api = axios.create({baseURL: 'http://localhost:1337/'});

// let server;

// beforeAll( async () => {
//   server = await startServer();
// })

// afterAll(done => {
//   server.close(done)
// })

describe('practice MVP server test', () => {

  test('get user', async () => {
    const user = await api
      .post('/Users', {user: 'Raffy'})
      .then(res => res.data.user);
    expect(user).toEqual('Raffy');
  });


  test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  
})