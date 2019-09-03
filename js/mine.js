var imgs = document.querySelectorAll('.img-item');
var lightcontainer = document.getElementById('lightbox-container');
var lightboxItem = document.getElementById('lightbox-item');
var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var  currentindex = 0;
var imgsarray = [];


for (var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener('click', function (e) {
		// body...
		//convert img to array
		imgsarray.push(imgs[i]);
		currentindex = imgsarray.indexOf(e.target);
		//convert img to array
		var imgSrc = e.target.src;
		lightcontainer.classList.add('show');
		lightboxItem.style.backgroundImage = "url("+imgSrc+")";
	})
}

close.addEventListener('click', function(){
	lightcontainer.classList.remove('show');
})
	

next.addEventListener('click', function(){
	currentindex++;
	if (currentindex == imgs.length) {
		currentindex = 0;
	}
	lightboxItem.style.backgroundImage = "url("+imgs[currentindex].src+")";
});


prev.addEventListener('click', function(){
	currentindex--; 
	if (currentindex < 0) {
		currentindex = imgs.length -1 ;
	}
	lightboxItem.style.backgroundImage = "url("+imgs[currentindex].src+")";
});
document.addEventListener('keydown', function(e){
   if(e.keyCode == 27)
       {
           lightcontainer.classList.remove('show');
       }
    else if(e.keyCode == 39)
        {
            currentindex++;
	if (currentindex == imgs.length) {
		currentindex = 0;
	   }
	lightboxItem.style.backgroundImage = "url("+imgs[currentindex].src+")";
        }
    else if (e.keyCode == 37)
        {
            currentindex--; 
	if (currentindex < 0) {
		currentindex = imgs.length -1 ;
	}
	lightboxItem.style.backgroundImage = "url("+imgs[currentindex].src+")";
        }
});
lightcontainer.addEventListener('click', function(e){
        if (e.target == lightcontainer) 
            {
                lightcontainer.classList.remove('show');
            }
    })