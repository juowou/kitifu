const homeEcra = document.getElementById("homeEcra");
const kitiEcra = document.getElementById("kitiEcra");
const kitiIcon = document.getElementById("kitiIcon");
const kitiPet = document.getElementById("kitiPet")
const kitiPetCabeça = document.getElementById("kitiPetCabeça");
const kitiPetCorpo = document.getElementById("kitiPetCorpo");
const voltar = document.getElementById("voltar");
const comer = document.getElementById("comer");
const comida = document.getElementById("comida");
const lavar = document.getElementById("lavar");
const lavagem = document.getElementById("lavagem");
const amar = document.getElementById("amar");
const amor1 = document.getElementById("amor1")
const amor2 = document.getElementById("amor2")
const amor3 = document.getElementById("amor3")
const amor4 = document.getElementById("amor4")
const statusAmor0 = document.getElementById("statusAmor0")
const statusAmor1 = document.getElementById("statusAmor1")
const statusAmor2 = document.getElementById("statusAmor2")
const statusAmor3 = document.getElementById("statusAmor3")
const statusComida0 = document.getElementById("statusComida0")
const statusComida1 = document.getElementById("statusComida1")
const statusComida2 = document.getElementById("statusComida2")
const statusComida3 = document.getElementById("statusComida3")

let fome = 3
let felicidade = 0

const felicidadeDisplay = (felicidade) => {
  if (felicidade === 0) {

    statusAmor1.style.display = 'none';
    statusAmor2.style.display = 'none';
    statusAmor3.style.display = 'none';
    console.log("felicidade0")

  } else if (felicidade === 1) {

    statusAmor1.style.display = 'block';
    statusAmor2.style.display = 'none';
    statusAmor3.style.display = 'none';

  } else if (felicidade === 2) {

    statusAmor1.style.display = 'none';
    statusAmor2.style.display = 'block';
    statusAmor3.style.display = 'none';

  } else if (felicidade === 3) {

    statusAmor1.style.display = 'none';
    statusAmor2.style.display = 'none';
    statusAmor3.style.display = 'block';

  }
}

const fomeDisplay = (fome) => {
  if (fome === 0) {

    statusComida1.style.display = 'none';
    statusComida2.style.display = 'none';
    statusComida3.style.display = 'none';
    console.log("felicidade0")

  } else if (fome === 1) {

    statusComida1.style.display = 'block';
    statusComida2.style.display = 'none';
    statusComida3.style.display = 'none';

  } else if (fome === 2) {

    statusComida1.style.display = 'none';
    statusComida2.style.display = 'block';
    statusComida3.style.display = 'none';

  } else if (fome === 3) {

    statusComida1.style.display = 'none';
    statusComida2.style.display = 'none';
    statusComida3.style.display = 'block';

  }
}

let relogio = document.getElementById("relogio")

function getTime() {
    return new Date().toLocaleTimeString('en-US', 
        { hour12: false, hour: 'numeric', minute: 'numeric' }).toString();
  }
  
  function setTime() {
    var time = getTime();
      relogio.innerText = time;
  }

  setInterval( setTime , 1000);
  setTime();
  

kitiIcon.addEventListener('click', function() {
    homeEcra.style.display = 'none';
    kitiEcra.style.display = 'block';
})

voltar.addEventListener('click', function() {
    homeEcra.style.display = 'block';
    kitiEcra.style.display = 'none';
})




comer.addEventListener('click', function () {
    kitiPetCabeça.classList.remove('petCabeça-default-animaçao');
    kitiPetCorpo.classList.remove('petCorpo-default-animaçao');
    comida.classList.add('comidaAnimaçao');
  });

  comida.addEventListener('animationend', function () {
    comida.classList.remove('comidaAnimaçao');
    kitiPetCabeça.classList.add('petCabeça-default-animaçao');
    kitiPetCorpo.classList.add('petCorpo-default-animaçao');
});  

lavar.addEventListener('click', function () {
  kitiPetCabeça.classList.remove('petCabeça-default-animaçao');
  kitiPetCorpo.classList.remove('petCorpo-default-animaçao');
  lavagem.classList.add('lavagemAnimaçao');
});

lavagem.addEventListener('animationend', function () {
  lavagem.classList.remove('lavagemAnimaçao');
  kitiPetCabeça.classList.add('petCabeça-default-animaçao');
  kitiPetCorpo.classList.add('petCorpo-default-animaçao');
});  




amar.addEventListener('click', function () {
  kitiPetCabeça.classList.remove('petCabeça-default-animaçao');
  kitiPetCorpo.classList.remove('petCorpo-default-animaçao');
  amor1.classList.add('amor1Animaçao');
  amor2.classList.add('amor2Animaçao');
  amor3.classList.add('amor3Animaçao');
  amor4.classList.add('amor4Animaçao');
});

amor1.addEventListener('animationend', function () {
  amor1.classList.remove('amor1Animaçao');
  kitiPetCabeça.classList.add('petCabeça-default-animaçao');
  kitiPetCorpo.classList.add('petCorpo-default-animaçao');
});  

amor2.addEventListener('animationend', function () {
  amor2.classList.remove('amor2Animaçao');
});

amor3.addEventListener('animationend', function () {
  amor3.classList.remove('amor3Animaçao');
});

amor4.addEventListener('animationend', function () {
  amor4.classList.remove('amor4Animaçao');
});

const festinhas = () => {
  let isMouseDown = false;
  let isMouseMove = false;

  kitiPet.addEventListener("mousedown",function () {
    isMouseDown = true;
    console.log("mousedown");
  })

  kitiPet.addEventListener("mousemove" , function() {
    if(isMouseDown) {
    isMouseMove = true;
    console.log("mousemove");
    kitiPetCabeça.classList.add('festinhas-cabeça-animaçao');
    kitiPetCorpo.classList.add('festinhas-animaçao');
    amor1.classList.add('amor1Animaçao');
    amor2.classList.add('amor2Animaçao');
    amor3.classList.add('amor3Animaçao');
    amor4.classList.add('amor4Animaçao');
    }
  });

  document.addEventListener("mouseup", function() {
    isMouseDown = false;
    kitiPet.addEventListener('animationend', function() {
      kitiPetCabeça.classList.remove('festinhas-cabeça-animaçao');
      kitiPetCorpo.classList.remove('festinhas-animaçao');
    })
  });

}



festinhas()
felicidadeDisplay(felicidade)
fomeDisplay(fome)

