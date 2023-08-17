
    function clearErrors() {

        errors = document.getElementsByClassName('formerror');
        for (let item of errors) {
            item.innerHTML = "";
        }
        }

    function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

    }
    function validateForm() {
        var returnval = true;
        var name = document.forms['myForm']["fname"].value;

         clearErrors();
        var password = document.forms['myForm']["fpass"].value;
        var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpassword", "*Password doesn't match!");
        returnval = false;
    }

    return returnval;

    }
