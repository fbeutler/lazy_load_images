/*********************************************************
Include images in webpage like:

<img class="lazy_load_image" src="/static/spinner.gif" 
data-src="{{ path_to_image }}" alt="{{ image_name }}" 
style="width:300px;hight:400px;">
**********************************************************/

// This code lazy loads the images in the viewport after the page load
window.addEventListener('load', function(){
    load_lazy();
}, false)
// This code lazy loads the images in the viewport after scrolling
$(window).scroll(function(){
    load_lazy();
})

// This function loads all images in the viewport
function load_lazy(){
    // we expand the viewport by 200px
    var images = $('.lazy_load_image').withinviewport({top: -200, bottom: -200});
    for(var i = 0; i < images.length; i++){
        var image_src = images[i].getAttribute('data-src');
        if(image_src){
            images[i].setAttribute('src', image_src);
            images[i].className -= 'lazy_load_image';
        }
    }
}
