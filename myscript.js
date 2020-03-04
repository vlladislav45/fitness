/*адреси на базата данни*/
const BASE_URL = "https://baas.kinvey.com/";
const APP_KEY = "kid_S1VOidrwN";
const APP_SECRET = "b58bba5f2d724226ac592412bff574fa";

const HEADERS_BASIC = {
    "Authorization" : "Basic " + btoa(APP_KEY + ":" + APP_SECRET)
};

//когато документа се зареди да имаме възможност при натискане на subscibe бутона да изпълни функцията subscribe
$(document).ready(function(){

    let submit = $('#submit');
    $(submit).click(subscribe);
});


function subscribe(e){
    //При извикване този метод, действието по подразбиране на събитието няма да се задейства
    //няма да се рефрешни страницата
    e.preventDefault();

    let username = $("#username").val();
    let email = $("#email").val();

    //датата ни се състои от username и email
    let data = {
        username: username,
        email: email
    };

    // Асинхронен метод , чрез който изпращаме HTTP заявки
    $.ajax({
        url: BASE_URL + "user/" + APP_KEY,
        method: "POST",
        headers: HEADERS_BASIC,
        data: data
    });
}