if(document.querySelector('form')) {
    const inputFile = document.querySelector('input[type="file"]');
    const formLabelFile = document.querySelector('.form__label-file span');
    const inputs = document.querySelectorAll('.form__input');
    const form = document.querySelector('form');
    
    inputs.forEach(item => {
        if(!item.classList.contains('form__input-file')) {
        item.addEventListener('focusout', () => {
            let inputLength = item.value.length;
            if(inputLength > 0) {
                item.parentElement.classList.add('active')
            } else {
                item.parentElement.classList.remove('active')
            }
    })
  }
})

    inputFile.addEventListener('change', () => {
        formLabelFile.textContent = "";
        let fileName = inputFile.files;
        formLabelFile.textContent = fileName[0].name;
    })

    function sendForm(e) {
       e.preventDefault();
        inputs.forEach(item => {
            if(!item.classList.contains('form__input-file')) {
                if(item.value.length <= 0) {
                    item.style.borderBottom = "2px solid red"
                } else {
                    item.style.borderBottom = "1px solid #9C2E29"
                }
            }
        })
    }

    form.addEventListener('submit', sendForm);

}