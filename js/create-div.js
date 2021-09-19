export default function CreateDiv(text, array) {
    const body = document.querySelector('body');
    const form = document.querySelector('form');
    const btn = document.createElement('button');

    btn.setAttribute('data-btn', 'restaure');
    btn.innerText = 'Voltar';

    const div = document.createElement('div');

    body.removeChild(form);
    body.append(div);

    const formBg = body.style.background;
    body.style.background = `url('${array[0]}')`;

    length = text.length - 1;
    const speed = 90;
    let i = 0;
    let indexImg = 1;

    const timer = setInterval(() => {
        body.classList.remove('change');
        const verification = body.classList.contains('change');
        verification ? body.classList.remove('change') : body.classList.add('change')
        body.style.backgroundImage = `url('${array[indexImg]}')`;
        indexImg++
        if (indexImg >= array.length) indexImg = 0;
        console.log(body.classList);
    }, 5000);

    function Restaure() {
        body.removeChild(div);
        body.append(form);
        body.style.background = formBg;
    };

    function TypeWriter() {

        if (i < text.length) {
            div.innerHTML += text.charAt(i);
            i++;
            setTimeout(TypeWriter, speed);
        } else if (i >= text.length) {
            clearInterval(timer);
            body.classList.remove('history')
            div.append(btn);
            btn.addEventListener('click', Restaure);
        }

    };

    TypeWriter();

}