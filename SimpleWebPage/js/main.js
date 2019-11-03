// var title = document.getElementsByClassName('title');
// var info = document.getElementsByClassName('info');

// for(var i=0; i<title.length; i++){
//     title[i].addEventListener('click', function(){
        
//         if(!(this.classList.contains('active'))){
//             for(var i=0; i<title.length; i++){
//                 title[i].classList.remove('active');
//             }
//             this.classList.add("active");
//         }
//     })
// }

//function pop-up window

var btnOpen = document.getElementById('open');
var btnClose = document.getElementById('close');
var pop = document.getElementById('popupWindow');

btnOpen.addEventListener('click', function(){
    pop.style.display = 'block';
    }
);

btnClose.addEventListener('click', function(){
    pop.style.display = 'none';
    }
);
    