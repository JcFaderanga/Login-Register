var clicked = true;
const form = document.querySelectorAll('#register-now');
form.forEach (swtich => {
 swtich.addEventListener('click', (event) => {	
    if(clicked == true){
      document.getElementById('title').classList.remove('deactive');
      document.getElementById('title').classList.add('active');
       setTimeout(function (){
         document.getElementById('login').style.display = "none";
         document.getElementById('register').style.display = "block";
       },1200);
       document.querySelector('.form-container').classList.remove('remove');
       document.querySelector('.form-container').classList.add('active-width');
       setTimeout(function (){
        document.getElementById('title').innerHTML = "REGISTER";
       },1000);
      return clicked = false;
    }else{ 
      document.getElementById('title').classList.remove('active');
      document.getElementById('title').classList.add('deactive');
     	  setTimeout(function(){
          document.getElementById('login').style.display = "block";
	        document.getElementById('register').style.display = "none";
          document.getElementById('title').innerHTML = "LOGIN";
       	},1000);
       document.querySelector('.form-container').classList.remove('active-width');
       document.querySelector('.form-container').classList.add('remove');
      return clicked = true;
    }

  });
});