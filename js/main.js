
function setDiv(divNum, currDIv) {
    $('.div' + divNum)[0].removeAttribute("hidden");
    $('.div' + currDIv)[0].setAttribute("hidden", "");
}

$('table td').on('click', function () {
    $(this).toggleClass("blue")
})

function save() {
    var obj = {};
    var elements = $('input');
    for (let i = 0; i < elements.length; i++) {
        obj[elements[i].placeholder] = elements[i].value;
    }
    elements = $('textarea');
    for (let i = 0; i < elements.length; i++) {
        obj[elements[i].placeholder] = elements[i].value;
    }

    var feelings =$('.div2 td.blue');
    obj.firstFeelings = [...feelings].map(i=>i.innerText)
    feelings =$('.div5 td.blue');
    obj.secondFeelings = [...feelings].map(i=>i.innerText)

    

    console.log(obj);

    var arr = JSON.parse(localStorage.getItem("cbt") || '[]')
    arr.push(obj);
    localStorage.setItem("cbt" ,JSON.stringify(arr))
}
// (function ($) {
//     "use strict";

//     /*==================================================================
//     [ Validate after type ]*/
//     $('.validate-input .input100').each(function(){
//         $(this).on('blur', function(){
//             if(validate(this) == false){
//                 showValidate(this);
//             }
//             else {
//                 $(this).parent().addClass('true-validate');
//             }
//         })    
//     })


//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//            $(this).parent().removeClass('true-validate');
//         });
//     });

//      function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');

//         $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
//         $('.btn-hide-validate').each(function(){
//             $(this).on('click',function(){
//                hideValidate(this);
//             });
//         });
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();
//         $(thisAlert).removeClass('alert-validate');
//         $(thisAlert).find('.btn-hide-validate').remove();
//     }



// })(jQuery);