test('La página web muestra correctamente "Hola Mundo"', () => {

    document.body.innerHTML = '<h1>Hola Mundo</h1>';

    expect(document.querySelector('h1').textContent).toBe('Hola Mundo');
});
