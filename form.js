// create form function
const createForm=()=>{

    //handle submit function
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('user name ='+ nameInput.value+ 'user email= ' + emailInput.value )
    }
    
    //name inputbox
    const nameInput= document.createElement('input');
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("placeholder", "name")
    //email inputbox
    const emailInput= document.createElement('input');
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("placeholder", "email")
    //submit butoon
    const submitbtn= document.createElement('input');
    submitbtn.setAttribute("type","submit");
    //close button to close form
    const close = document.createElement('h1');
    close.innerHTML= "X"; 
    //form 
    const formEle= document.createElement('form');
    
    //append elements in form 
    formEle.append(close, nameInput, emailInput, submitbtn);
    
    //create container & append form in it
    const divContainer= document.createElement('div');
    divContainer.setAttribute("class","div-container");
    
    divContainer.appendChild(formEle);
    
    //append container in body
    document.body.appendChild(divContainer)
 
    //add eventListener to elements for submit & close buttons  
    formEle.addEventListener('submit', handleSubmit)
    close.addEventListener('click', ()=>{
        divContainer.style.display="none"
    })
    }
    
    // create function to apeend form button in website when load
    window.onload=()=>{
        const formbtn= document.createElement('button');
        formbtn.setAttribute('class', 'formbtn')
         formbtn.innerHTML = "form button";
    
         document.body.appendChild(formbtn)
         formbtn.addEventListener('click', createForm)
    
    }
    
    