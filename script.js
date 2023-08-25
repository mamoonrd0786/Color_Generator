
const get_color = () => {
    let randomnum = Math.floor(Math.random() * 16777215);
    let hexcolor = '#' + randomnum.toString(16);
    document.body.style.backgroundColor = hexcolor;
    document.getElementById('color_code').innerText = hexcolor;
    navigator.clipboard.writeText(hexcolor)
    console.log(randomnum, hexcolor);
}
document.getElementById('btn').addEventListener('click', () => {
    get_color();

})

get_color()