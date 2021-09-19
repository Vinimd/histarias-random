import ChosenMonster from "./chosen-monster.js";
import ChosenPlace from "./chosen-place.js";
import Final from "./final.js";
import CreateDiv from "./create-div.js";

export default function InitHistoy() {
    const btnCreate = document.querySelector('[data-btn="criar"]');

    function CreateHistory(e) {
        e.preventDefault()
        const selects = document.querySelectorAll('select');
        let inputValue = document.querySelector('input').value;
        if (inputValue === '') inputValue = 'a quele que não deve ser mencionado'
        const obj = {};
        const arrayNotAnswsered = [];
        const arrawImg = [];
        const now = new Date();

        selects.forEach(select => {
            select.style.border = 'none'

            if (select.value !== '0') obj[select.name] = select.value;

            if (select.value === '0') arrayNotAnswsered.push(select.name);

        });

        if (!arrayNotAnswsered.length) {
            const monster = obj.monster;
            const place = obj.place;

            ChosenMonster(monster, arrawImg);
            const data = ChosenPlace(place);
            const final = Final(monster);

            const finalHistory = `Era uma vez em lugar chamado ${obj.place} havia lá um habitante que se chamava ${inputValue}, ele era um(a) ${obj.type} muito alegre, até que foi chegada a era dos ${monster}, que foi causada em ${now.getFullYear()} por uma ${obj.accident} que fazia com que os humanos pertos se tornassem ${obj.monster}, criaturas sem qualquer tipo de consciência, suas únicas motivações eram comer ${obj.type} e dançar break. O(A) ${obj.type} se viu obrigado(a) a aprender técnicas de combate aprimoradas, até que encontrou ${data.local}, onde nenhum ${data.gentilico} se propõe a chegar uma ${obj.weapons}, ferramenta que ele(a) utilizou por décadas no combate destes ${monster}, ${final.p1} capaz de trazer os ${monster} de volta ${final.p2 }, esses por sua vez não esqueceram como dançar break... Fim".`

            CreateDiv(finalHistory, arrawImg);
        } else {
            arrayNotAnswsered.forEach(item => {
                const notAnswered = document.querySelector(`[name="${item}"]`)
                notAnswered.style.border = '2px solid red'
            })

        }
    }
    btnCreate.addEventListener('click', CreateHistory)

}