function init(){
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.form').addEventListener('submit', function(event) {
            event.preventDefault(); 
    
            alert('We got your mail!');
    
            document.querySelector('.form').reset();
        });
    });

}
init();