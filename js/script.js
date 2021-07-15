let email = document.querySelector('#email')



function cadastrar(){
    if(email){
        let listEmail = JSON.parse(localStorage.getItem('listEmail') || '[]')

        listEmail.push(
            {
                emailCad: email.value,
            }
        )

        localStorage.setItem('listEmail', JSON.stringify(listEmail))
    }
 }


