


    
/* @author Steven Hewitt

    This function will take a directory name (ex/ "location", or "academics")
    and will iterate through and post every image it can find with name 
    galleryname-#.ong and galleryname-#-sm.png, until it runs out
    of captions.  So, it is important that the number of captions EXACTLY
    matches the number of images under that name.
    
    Go Bears!
*/
function attachGallery(galleryname, imageinfo) {
    
    //var directory = "location";
    var path = "http://tellefsenhall.org/thenewsite/wp-content/uploads/custom_images/";
    var newElem;
    var newhtml;
            
    for (var i = 0; i < imageinfo.length; i+=3) {
    
        newElem = document.createElement("a" + i);  
        newhtml = '<a title="' + imageinfo[i+2] +
            '" href="' + path + imageinfo[i] + "" + imageinfo[i+1] + '"';
        if (window.isIE) {
            //nothing; we can't have fancy box stuff in stupid internet explorer... =(
        } else {
             newhtml += ' rel="lightbox['+galleryname+']"';  
        }
        newhtml += '><img alt="" src="' + path + imageinfo[i] + '-sm' + imageinfo[i+1] + '" /></a> ';  

        var obj = document.getElementById('imgarea');
        obj.appendChild(newElem); 
        //document.body.appendChild(newElem); 
        newElem.innerHTML = newhtml;
    }
            
            
}
