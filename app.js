// const base = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10001.png';
const cont = document.querySelector('#container');
const base = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/';
const base2 = '?raw=true';
for (let i = 10001; i <= 10199; i++) {
    const divvi = document.createElement('div');
    const labbi = document.createElement('span');
    const newimg = document.createElement('img');
    labbi.innerText = `#${i-10000}`;
    newimg.src = `${base}${i}.png${base2}`;
    divvi.appendChild(newimg);
    divvi.appendChild(labbi);
    container.appendChild(divvi);

}