setTimeout(function(){
setInterval(function(){
    var progress = document.getElementById('custom-progress');

    if (progress.value < 60) {
        progress.value += 1;
    }

}, 30);

}, 3000); 

