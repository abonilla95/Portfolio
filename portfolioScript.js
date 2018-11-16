function runAboutMe() {
    $('html, body').animate({
            scrollTop: $(".aboutMe").offset().top
        }, 800);
    };
// function scrollToEarlyLife() {
//     $('html, body').animate({
//             scrollTop: $(".EarlyLife").offset().top
//         }, 800);
//     };
function scrollToMyProjects() {
    $('html, body').animate({
            scrollTop: $(".AboutMyProjects").offset().top
        }, 800);
};
function scrolltoApartment() {
    $('html, body').animate({
         scrollTop: $("#apartmentTitle").offset().top
         }, 800);
    if($('#apartmentCloseButton').length == 0){
        $('#projectsGrid').append("<div class='row' id='apartmentCloseButton' onclick='removeApartment();'> <button class='ui  labeled icon button fluid' style='background:none;border:none;margin:0;padding:0;cursor:pointer;color:whitesmoke'><i class='ui close icon' style='color:steelblue;padding-left:5px'></i>Apartment Finder</button></div>")
    }
    else{
        $('#apartmentCloseButton').remove()
    }
};


function scrollToRaspberry(){
    $('html, body').animate({
         scrollTop: $("#raspberryTitle").offset().top
         }, 800);
    if($('#raspberryCloseButton').length == 0){
        $('#projectsGrid').append("<div class='row' id='raspberryCloseButton'  onclick='removeRaspberry();' > <button class='ui  labeled icon button fluid' style='background:none;border:none;margin:0;padding:0;cursor:pointer;color:whitesmoke'><i class='ui close icon' style='color:steelblue;padding-left:5px'></i>About This Website</button></div>")
    }
    else{
        $('#raspberryCloseButton').remove() 
    }
}
function removeRaspberry() {
    $('#raspberryCloseButton').remove()
    $('#raspberryTitle').removeClass('active');
    $('#raspberryContent').animate({height:'toggle'},1000,function () {$('#raspberryContent').removeClass('active')})
    $('html, body').animate({
         scrollTop: $("#raspberryTitle").offset().top
         }, 200);
}
function removeApartment(){
    $('#apartmentCloseButton').remove()
    $('#apartmentTitle').removeClass('active');
    $('#apartmentContent').animate({height:'toggle'},1000, function (){$('#apartmentContent').removeClass('active')});
    $('html, body').animate({
         scrollTop: $("#apartmentTitle").offset().top
         }, 200);
}