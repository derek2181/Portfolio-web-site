$(document).on("ready", function() {

    const scrollToAnchor =(element)=>{
        const name=element.target.name;
        let offset=0;
        if(name==="skills" || "herosection"){
            offset=-125;
        }
       
        const destination = $("#"+ name);

        $('html,body').animate({
            scrollTop: destination.offset().top+offset,
        },'slow');
    }

    $(document).on('click', '.smooth-link', (element)=>{
        scrollToAnchor(element);
    });
});