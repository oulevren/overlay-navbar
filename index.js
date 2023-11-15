const navbar = document.getElementById("navbar");      // parantez içindekini id'si ile getir
let icon = document.getElementById("menu");

function overlay(){
    if(icon.classList.contains('fa-bars')){          // iconumun içinde fa-bars contains(içeriyorsa)
        icon.classList.remove('fa-bars');           //bu classı sil
        icon.classList.add('fa-times');             //sildikten sonra bu classı ekle ve
        navbar.style.left = "0";                    //ul taginde -100% olan left'i 0 yaparak görünmesini sağlıyoruz
    } else{
        icon.classList.remove('fa-times');          // eğer fa-times tıklandığında silinirse yani kaybolursa
        icon.classList.add('fa-bars');              //fa-bars clasını ekle ve
        navbar.style.left = "-100%";                // lefti 0 olan styl'ı -100% yani eski haline getir
    }
}