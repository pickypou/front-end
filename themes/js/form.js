$(function () { $('#contact-form').on(submit(function (e) { e.preventDefault(); $('.comments').empty(); const postdata = $('#contact-form').serialize(); $.ajax({ type: 'POST', url: '.././PHP/contact.php', data: postdata, dataType: 'json', success: function (result) { if (result.isSuccess) { $('#contact_form').append("<p class='than-you'>'Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>"); $('#contact-form')[0].reset() } else { $('#firstname + .comments').html(result.firstnameError); $('#lastname + .comments').html(result.lastnameError); $('#email + .comments').html(result.emailError); $('#phone + .comments').html(result.phoneError); $('#message + .comments').html(result.messageError) } } }) })) })