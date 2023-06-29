let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
            // After 5 sec the output will disappear
            // setTimeout(() => {
            //     string = "";
            //     document.querySelector('input').value = string;
            // }, 5000);
        }
        // Clear Operation
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector('input').value = string;
        }
        // Square Operation
        else if(e.target.innerHTML == "x<sup>2</sup>"){
            string = string**2;
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    });
})