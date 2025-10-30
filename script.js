const iImages = [
'Photos/La Conception III/photo-01.jpg',
'Photos/La Conception III/photo-02.jpg',
'Photos/La Conception III/photo-03.jpg',
'Photos/La Conception III/photo-04.jpg',
'Photos/La Conception III/photo-05.jpg',
'Photos/La Conception III/photo-06.jpg',
'Photos/La Conception III/photo-07.jpg',
'Photos/La Conception III/photo-08.jpg',
'Photos/La Conception III/photo-09.jpg',
'Photos/La Conception III/photo-10.jpg',
'Photos/La Conception III/photo-11.jpg',
'Photos/La Conception III/photo-12.jpg',
'Photos/La Conception III/photo-13.jpg',
'Photos/La Conception III/photo-14.jpg',
'Photos/En Eaux Vives/photo-1.jpg',
'Photos/En Eaux Vives/photo-2.jpg',
'Photos/En Eaux Vives/photo-3.jpg',
'Photos/En Eaux Vives/photo-4.jpg',
'Photos/En Eaux Vives/photo-5.jpg',
'Photos/Chertsey/photo-1.jpg',
'Photos/Chertsey/photo-2.jpg',
'Photos/Chertsey/photo-3.jpg',
'Photos/Chertsey/photo-4.jpg',
'Photos/SOMO/photo-1.jpg',
'Photos/SOMO/photo-2.jpg',
'Photos/SOMO/photo-3.jpg',
'Photos/SOMO/photo-4.jpg',
'Photos/SOMO/photo-5.jpg',
'Photos/Taghazout/photo-1.jpg',
'Photos/Taghazout/photo-2.jpg',
'Photos/Taghazout/photo-3.jpg',
'Photos/Metis/photo-1.jpg',
'Photos/Metis/photo-2.jpg',
'Photos/Metis/photo-3.jpg',
'Photos/Monk/photo-1.jpg',
'Photos/Monk/photo-2.jpg',
'Photos/La Conception/photo_1.jpg',
'Photos/La Conception/photo_2.jpg',
'Photos/La Conception/photo_3.jpg',
'Photos/La Conception/photo_4.jpg',
'Photos/La Conception/photo_5.jpg',
'Photos/La Conception/photo_6.jpg',
'Photos/La Conception/photo_7.jpg',
];


// i ---------------------------
let icurrentIndex = 0;
let isChanging = false;

// Get the image element
const i = document.getElementById('i');

// Get the image element
const left = document.getElementById('left');

// Get the image element
const right = document.getElementById('right');

// Get the image element
const namep = document.getElementById('name');

const video = document.getElementById("video");

const zoom = document.getElementById("zoom");

const unzoom = document.getElementById("unzoom");

const plusmoins = document.getElementById("plusmoins");

const infoprojet = document.getElementById("infoprojet");

const titre = document.getElementById("titre");

const description = document.getElementById("description");

const header = document.getElementById("header");

const credits = document.getElementById("credits");

const copyright = document.getElementById("copyright");

namep.innerHTML = 'Fred Tougas'

i.src = iImages[icurrentIndex];


function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

iImages.forEach(url => preloadImage(url));


const changedata = () => { 
  
  if (icurrentIndex >= 0 && icurrentIndex <= 13)  {
    Photographe = 'Fred Tougas';
    TitreProjet = 'La Conception III';
    DescriptionProjet = 'Gîte touristique<br><br>La Conception, Québec';
  } 
 if (icurrentIndex >= 14 && icurrentIndex <= 18){
    Photographe = 'Fred Tougas';
    TitreProjet = 'En Eaux Vives';
    DescriptionProjet = 'Installation sculpturale <br> avec Caroline Fortin autrice<br><br>Prix Innovation<br>Grands Prix Desjardins de la culture de Lanaudière<br><br>Sainte-Mélanie, Québec';
  } 
  if (icurrentIndex >= 19 && icurrentIndex <= 22)  {
    Photographe = 'Bolide Studio';
    TitreProjet = 'Chertsey';
    DescriptionProjet = 'Mirco développement immobilier<br><br>Chertsey, Québec';
  }
   if (icurrentIndex >= 23 && icurrentIndex <= 27){
    Photographe = 'Fred Tougas';
    TitreProjet = 'Sherbrooke';
    DescriptionProjet = 'Aménagement du SOMO lounge<br>avec Barbeaux Desrosiers<br><br>Montréal, Québec';
  }
  
   if (icurrentIndex >= 28 && icurrentIndex <= 30)  {
    Photographe = 'Acimness';
    TitreProjet = 'Salon Marocain en Plein Air';
    DescriptionProjet = 'Installation sculpturale<br><br>Taghazout, Maroc';
  }
 
   if (icurrentIndex >= 31 && icurrentIndex <= 33)  {
    Photographe = 'Bolide Studio';
    TitreProjet = 'Territoire Refuge';
    DescriptionProjet = 'Installation sculpturale<br>avec Caroline Fortin autrice<br><br>Grand-Métis, Québec';
  }

  if (icurrentIndex >= 34 && icurrentIndex <= 35)  {
    Photographe = 'Alec Chenard';
    TitreProjet = 'Monk';
    DescriptionProjet = 'Aménagement d’un studio de musique<br> avec <br><br>Montréal, Québec';
  }
    if (icurrentIndex >= 36 && icurrentIndex <= 42)  {
    Photographe = 'David Dworkind';
    TitreProjet = 'La Conception';
    DescriptionProjet = 'Gîte touristique sous <i>hinterhouse</i><br>avec David Dworkind architecte<br><br>Prix d’excellence en architecture<br>Ordre des Architectes du Québec<br><br>La Conception, Québec';
  } 
}



  


// Function to change the image
const ichangeImage = () => {

    if (isChanging) return;
  isChanging = true;

  // Increment the index to point to the next image
  icurrentIndex++;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (icurrentIndex >= iImages.length) {
      icurrentIndex = 0;
  }

  // Update the image source to the new image
  i.src = iImages[icurrentIndex];


  setTimeout(() => {
    isChanging = false;
  }, 400);

 // Changer les donnés des projets
  changedata () ;
  
  // Update the image source to the new image
  namep.innerHTML = Photographe;
  titre.innerHTML = TitreProjet;
  description.innerHTML = DescriptionProjet;
  
  


  if (unzoom.classList.contains('unzoom')) {
  clearTimeout(pause);
  clearInterval(myVar);
};

};

const ichangeImageLeft = () => {

    if (isChanging) return;
  isChanging = true;

  // Increment the index to point to the next image
  icurrentIndex--;

  // If the index goes beyond the array length, reset it to 0 (loop back to the first image)
  if (icurrentIndex < 0) {
  icurrentIndex = iImages.length - 1;
}

  // Update the image source to the new image
  i.src = iImages[icurrentIndex];

  setTimeout(() => {
    isChanging = false;
  }, 400);


  // Changer les donnés des projets
  changedata () ;

  // Update the image source to the new image
  namep.innerHTML = Photographe;
  titre.innerHTML = TitreProjet;
  description.innerHTML = DescriptionProjet;



  if (unzoom.classList.contains('unzoom')) {
    clearTimeout(pause);
  clearInterval(myVar);
};

};



 

// Changement d'image droite gauche

right.addEventListener('click', ichangeImage );

left.addEventListener('click', ichangeImageLeft);

right.addEventListener('click',function () {
  clearTimeout(pause);
});

left.addEventListener('click',function () {
   clearTimeout(pause);
});

right.addEventListener('click',function () {
 
if (zoom.classList.contains('zoom')) {
  pause = setTimeout(() => {
  myVar = setInterval(ichangeImage, 5000)
  }, 10000);
   };

});

left.addEventListener('click',function () {

if (zoom.classList.contains('zoom')) {
  pause = setTimeout(() => {
  myVar = setInterval(ichangeImage, 5000)
  }, 10000);
   };

});

right.addEventListener('click',function () {
 clearInterval(myVar);
});


left.addEventListener('click',function () {
  clearInterval(myVar);
});



// Plus grand carrousel

zoom.addEventListener('click',function () {
  i.setAttribute("class", "carousselbig");
  unzoom.setAttribute("class", "unzoom");
  left.setAttribute("class","leftbig");
  right.setAttribute("class","rightbig");
  zoom.setAttribute("class", "hidden");
  clearTimeout(pause);
  clearInterval(myVar);
});

unzoom.addEventListener('click',function () {
  i.setAttribute("class", "caroussel");
  unzoom.setAttribute("class", "hidden");
  left.setAttribute("class","left");
  right.setAttribute("class","right");
  zoom.setAttribute("class", "zoom");
  clearTimeout(pause);
  clearInterval(myVar);
  myVar = setInterval(ichangeImage, 5000);
});

// Afficher masquer détail des projets

credits.addEventListener('click',function () {

   if (infoprojet.classList.contains('hidden')) {
    infoprojet.setAttribute("class", "descriptionprojet");
    copyright.setAttribute("class", "copyright");
    plusmoins.innerHTML = 'Masquer';


    if (window.innerWidth <= 600) {
      window.location.href = "#infoprojet"
     } 
  
    clearTimeout(pause);
    clearInterval(myVar);
    pause = setTimeout(() => {
    myVar = setInterval(ichangeImage, 5000)
    }, 10000);

    

} else {
    
    copyright.setAttribute("class", "hidden");
    if (window.innerWidth <= 600) {
    window.location.href = "#body"
    scrollup = setTimeout(() => {
    infoprojet.setAttribute("class", "hidden");
    }, 400);
    
  } else {
    
      infoprojet.setAttribute("class", "hidden");
      copyright.setAttribute("class", "hidden");

    }
    plusmoins.innerHTML = 'Infos';
    clearTimeout(pause);
    clearInterval(myVar);
    pause = setTimeout(() => {
    myVar = setInterval(ichangeImage, 5000)
    }, 10000);
    
  }
});


myVar = setInterval(ichangeImage, 5000)

right.addEventListener('click', function () {
  document.getElementById('i').classList.toggle('slide-in');
});

