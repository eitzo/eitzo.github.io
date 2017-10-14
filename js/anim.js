setTimeout(function(){
setInterval(function(){
    var progress = document.getElementById('custom-progress');

    if (progress.value < 57) {
        progress.value += 1;
    }

}, 30);

}, 3000); 

