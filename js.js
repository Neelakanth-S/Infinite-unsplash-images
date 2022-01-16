const ACCESS_KEY= 'HWWBtmtxfIVMidYrtUtR6n_JufPGaJqy5wUitl0QsiU';

const SECRET_KEY='lJrJHU1NDY4T4199hyUKTvxVxI2P59pbQuGnvBR1A20';



const exec= function(){

    const f=fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);

    f.then( (resp) =>{
        return resp.json();
    }).then ((r) =>{

        console.log(r);

        r.forEach((elem) =>{
            const container=document.getElementById("container");
            console.log(elem.urls.regular);
            const img_loc=elem.links.download;
            const div=document.createElement('div');
            const img=document.createElement('img');
            img.src=img_loc;
            div.appendChild(img);
            container.appendChild(div);});
    }).catch( (e) =>{
        console.log("Something error in fetvhing");
    });


}

exec();


// To load random other images on scrolling to the bottom.

const random_images= function(){
    var lower = 0;
    var upper = 100000000;

    for(i=0;i<10;i++){

        const container=document.getElementById("container");
        const img_loc="https://picsum.photos/500/300?random="+(Math.floor(Math.random()*(upper-lower))+lower);
        console.log(img_loc);
        const div=document.createElement('div');
        const img=document.createElement('img');
        img.src=img_loc;
        div.appendChild(img);
        container.appendChild(div);


    


    }



}

const body=document.getElementsByTagName("body")[0];
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        random_images();

    }
};