
const aosElements = document.querySelectorAll('.aos');

window.addEventListener('scroll', ScrollElements);

function ScrollElements() {

  aosElements.forEach(e => {
    if (isVisable(e)) {
      e.classList.add('active');
    } 
  });

}

function isVisable(e) {
  const elementPosition = e.getBoundingClientRect();
  const distanceFromTop = -150;

  return elementPosition.top - window.innerHeight < distanceFromTop ? true : false;
}

// email verification

const submit = document.querySelector('#submit');
const emailInput = document.querySelector('#email');


submit.addEventListener('click', (e) => {
	
	if (emailInput.value.includes('@')) {
	 return emailInput.style.border = '1px solid green';
	} else{
		 e.preventDefault();
		 emailInput.style.border = '1px solid red';
		 emailInput.value = "";
	}
})

async function getData() {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json?page=2&limit=50")
  const data = await response.json();
  
  
  console.log(data['data']['movies'][0]);
  
}