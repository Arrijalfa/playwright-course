const { test, expect, request } = require('@playwright/test');

test.describe('Test API menggunakan Playwright', () => {
  test('Contoh GET', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);

    const responseBody = await res.json();
    console.log(responseBody);
    expect(responseBody.page).toBe(2);
    expect(responseBody.per_page).toBe(6);
  });

  test('Contoh POST', async () => {
    const apiContext = await request.newContext();
    const postData = {
      name: "morpheus",
      job: "leader",
    };
    const res = await apiContext.post('https://reqres.in/api/users?page=2', {
      data: postData,
    });
    expect(res.status()).toBe(201);

    const responseBody = await res.json();
    console.log(responseBody);
    expect(responseBody.name).toBe('morpheus');
    expect(responseBody.job).toBe('leader');
  });

  test('GET List <Resource>', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/unknown');
    expect(res.status()).toBe(200);

    const responseBody = await res.json();
    console.log(responseBody);
    expect(responseBody.page).toBe(1);
    expect(responseBody.per_page).toBe(6);
  });

  test('POST Register Successful', async () => {
    const apiContext = await request.newContext();
    const postData = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const res = await apiContext.post('https://reqres.in/api/register', {
      data: postData,
    });
    expect(res.status()).toBe(200);

    const responseBody = await res.json();
    console.log(responseBody);
    expect(responseBody.id).toBe(4);
    expect(responseBody.token).toBe('QpwL5tke4Pnpja7X4');
  });

  test('PUT Update User', async () => {
    const apiContext = await request.newContext();
    const putData = {
      name: 'morpheus',
      job: 'zion resident',
    };
    const res = await apiContext.put('https://reqres.in/api/users/2', {
      data: putData,
    });
    expect(res.status()).toBe(200);

    const responseBody = await res.json();
    console.log(responseBody);
    expect(responseBody.name).toBe('morpheus');
    expect(responseBody.job).toBe('zion resident');
  });

  test('DELETE User', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.delete('https://reqres.in/api/users/2');
    expect(res.status()).toBe(204);
  });
});
