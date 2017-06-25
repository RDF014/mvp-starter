import axios from 'axios';
import startServer from '../server/index.js';

const api = axios.create({baseURL: 'http://localhost:3000/Users'});

let server;

beforeAll( async () => {
  server = await startServer();
})

afterAll(done => {
  server.close(done)
})

describe('practice MVP server test', () => {

  test('get user', async () => {
    const user = await api
      .post('/', {user: 'Raffy'})
      .then(res => res.data);
    console.log(user);
    expect(user).toEqual('Raffy');
  });
  
})