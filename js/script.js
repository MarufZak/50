$('a').on('click',function (e) { 
    e.preventDefault()
    var b = $(this).attr('href')
    $('#big img').fadeTo(500,0)
    setTimeout(() => {
        $('#big img').fadeTo(300,1)
        $('#big img').attr('src',b);
    },  500);

})

