const URL = '/resource/'
const IMAGES = [
    ['bts1.png','bts2.png'],
    ['daciolo.png'],
    ['calvo1.png','calvo2.png'],
    ['chat1.png','chat2.png','chat3.png','chat4.png'],
    ['cris.png'],
    ['edge.png'],
    ['einerd.png'],
    ['ganhardinheiros.png'],
    ['jalim1.png','jalim2.png'],
    ['mateus.png'],
    ['naominecraft.png'],
    ['nft1.png','nft2.png'],
    ['rata.png'],
    ['rico.png'],
    ['visitante1000.png']
]
$(document).ready(function(){
    var obj = jQuery(".ad");
    //adObjets(obj);
});

function adObjets(list){
    var i = 0;
    while(i <= list.length-1){
        objFormat(list[i]);
        i++;
    }
}

function objFormat(obj){
    console.log(obj)

    var w = $(obj).width();
    var h = $(obj).height();

    console.log('w:'+w+' h:'+h)

    var tt = w+h
    var wper = Math.round((w*100)/tt)
    var hper = Math.round((h*100)/tt)

    console.log('wper:'+wper+' hper:'+hper)
}

const res = [{w:50,h:50},{w:65,h:45}]
const images = []

function imagesRes(){
    i = 0
    while (i <= IMAGES.length-1) {
        var r
        if(IMAGES[i].length == 1){
            r = URL+IMAGES[i][0]
        }else{
            //else de promo has animation
            r = []
            ii = 0
            while (ii <= IMAGES[i].length-1) {
                r[ii] = URL+IMAGES[i][ii]
                ii++;
            }
        }
        images[i] = r
        i++;
    }
    console.log(images)
}
imagesRes()