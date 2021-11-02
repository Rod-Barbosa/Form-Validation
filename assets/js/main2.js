//Refactorying with constructor function


// function Calculadora(display, btnClear, btnClear1){
//     this.inicia = function(){
//         this.cliqueBotoes();
//         this.pressionaEnter();
//     };
//     this.pressionaEnter = function(){
//         this.display.addEventListener('keyup', (e)=>{
//             if(e.keyCode === 13) {
//                 this.realizaConta();
//             }
//         });
//     };
//     this.realizaConta = function(){
//         let conta = this.display.value;

//         try {
//             conta = eval(conta);

//             if(!conta) {
//                 alert('Conta inválida');
//                 return;
//             }

//             this.display.value = String(conta);
//         } catch(e){
//             alert('Conta inválida');
//             return;
//         }
//     };

//     this.apagaUm = function(){
//         this.display.value = this.display.value.slice(0,-1);
//     };

//     this.clearDisplay = function() {
//         this.display.value = '';
//     };
    
//     this.cliqueBotoes = function(){
//         document.addEventListener('click', (e) =>{
//             const el = e.target;
//             if(el.classList.contains('btn-num')){
//                 this.btnParaDisplay(el.innerText);
//             }
//             if(el.classList.contains('btn-clear')) {
//                 this.clearDisplay();
//             }
//             if(el.classList.contains('btn-del')) {
//                 this.apagaUm();
//             }
//             if(el.classList.contains('btn-eq')){
//                 this.realizaConta();
//             }
//             this.display.focus();
//         });
//     };

//     this.btnParaDisplay = function(valor) {
//         this.display.value += valor;
//     }

//     this.display = display;
//     this.btnClear = btnClear;
//     this.btnClear1 = btnClear1
// }

// const calculadora = new Calculadora(display, btnClear, btnClear1);


// const display = document.querySelector('.display');
// const btnClear = document.querySelector('.btn-clear');
// const btnClear1 = document.querySelector('.btn-del');
// calculadora.inicia();

function Calculadora (){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = function(){
        this.display.addEventListener('keypress', e=>{
            if(e.keyCode===13){
                this.realizaConta();
            }
        })
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event =>{
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addaNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
            this.display.focus();
        })
    };

    this.addaNumDisplay = el => this.display.value += el.innerText;

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0,-1);

    this.realizaConta = () => {
        try {
            let conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta);
        } catch(e){
            alert('Conta inválida');
            return;
        }
    };


}

const calculadora = new Calculadora();
calculadora.inicia();