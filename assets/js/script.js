const btnQRCode = document.getElementById('btnQrcode');
const wrapper = document.getElementById('wrapper');
const divimagem = document.getElementById('image-qrcode');
const inputValue = document.getElementById('urlQrcode');
const imagemQrCode = document.getElementById('QRCodeImage');
let valueDefault;
let url = ' https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=';


btnQRCode.addEventListener('click', qrCode);


function qrCode(){
  /* Esse trim, ele tira todos os espaços*/
  let valueInput = inputValue.value.trim();

  if(valueInput === '' || valueInput === valueDefault){
    return;
  } else {
    valueDefault = valueInput;
    btnQRCode.innerText = 'Gerando QRCode'
    imagemQrCode.src = url + valueDefault;

    imagemQrCode.addEventListener('load', () => {
      wrapper.classList.toggle('active');
      divimagem.classList.toggle('active');
      btnQRCode.innerText = 'Gerar QRCode';
    }) 
  }
}

