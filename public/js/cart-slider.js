import Login from "./firebaseAuth.js"
const cartPage=function() {
  let shoppingCartBtn=document.querySelector('.fa-cart-shopping')
let exitCart=document.getElementById('exit-cart')
let cartsliderCont=document.querySelector('.cart-slider-container')
let cartAmount=document.getElementById('cart-amount')
let addToCartBtn=document.querySelectorAll('.addItem')
let sideCartList= document.getElementById('sideBarList')
let cartItems=document.querySelectorAll('.cartitem')
let displayTotal=document.querySelector('.displaytotal')

let upCartAmount=0;
let id=0;



//login users
document.addEventListener('DOMContentLoaded',Login) 



function showCart(){
 cartsliderCont.classList.toggle('hidden')
 cartsliderCont.classList.toggle('flex')
}
shoppingCartBtn.addEventListener('click',showCart)
exitCart.addEventListener('click',showCart)




function addItemToCart(){
 
    cartAmount.innerHTML=sideCartList.childElementCount;
  
console.log(sideCartList.childElementCount);  
}


function AppendtoCart(){
   

    let listNode=document.createElement('li')
    listNode.classList.add('cart-list')
    listNode.classList.add('mshadow')
    listNode.classList.add('toggleOut')
    listNode.setAttribute('value',`${id++}`)
        listNode.innerHTML=`<img src='${this.parentElement.children[1].getAttribute('src')}' class='toggleOut'></img>
         <p class='text-center toggleOut'>${this.parentElement.children[1].innerHTML}</p>
    <div class='flex justify-between toggleOut'>
    <i class="fa-solid fa-trash delbtn toggleOut" ></i>
      <p class='text-end toggleOut'>${this.parentElement.children[3].children[0].innerHTML}</p>
      </div>`
        
    
    // sideCartList.appendChild(listNode)
    sideCartList.appendChild(listNode)
    addItemToCart()
    priceTotal()
  
  

    // let portToCart=`<li class="w-[100%] shadow-2xl p-9  " value=${id++}>
    //  <img class='w-[100%]' src='${this.parentElement.children[0].getAttribute('src')}'></img>
    //      <p class='text-center'>${this.parentElement.children[1].innerHTML}</p>
    //      <div class='flex justify-between '>
    //      <i class="fa-solid fa-trash delbtn" onclick=${bin()}></i>
    //      <p class='text-end'>${this.parentElement.children[2].children[3].innerHTML}</p>
    //     </div>
    //      </li>`

    // myCart.push(portToCart)
    
    
    // for(let item of myCart){
    //     sideCartList.appendChild(item)
        
        
    // }


    
   let deletebtns=document.querySelectorAll('.delbtn')
   for(let dell of deletebtns){
    dell.addEventListener('click',del)
   
   }
    
function del(event){
 
   
    var buttonClick=event.target
   
    buttonClick.parentElement.parentElement.remove()
    console.log( buttonClick.parentElement.parentElement.value);
     priceTotal()
    
    addItemToCart()
  

}

function priceTotal(){
  let myCartTotal=0;
  if(sideCartList.childNodes.length<=1){
    myCartTotal=0;
    displayTotal.innerHTML=`Total:0`
  }
  let CartlistItems=document.querySelectorAll('.cart-list')
  for(let i=0;i<CartlistItems.length;i++){
    let cartitem=CartlistItems[i]
    let itemPrice=cartitem.children[2].children[1].innerHTML
    let ParsedPrice=parseFloat(itemPrice.replace('$',''))
    myCartTotal=ParsedPrice+myCartTotal
    displayTotal.innerHTML=`Total:$${myCartTotal}`
    console.log(ParsedPrice);
    console.log(cartitem.children[2].children[1].innerHTML);
  }

 
console.log(sideCartList.childNodes.length);
}

       
}
 



for(let added of addToCartBtn){
//    console.log(added.);
    added.addEventListener('click',AppendtoCart)
  
}








//for nav menu
function initApp(){
  const hamburgerBtn=document.getElementById('hamburger-button')
  const mobileMenu=document.getElementById('mobile-menu')

  function togglemenu(){
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('flex')
  }

  hamburgerBtn.addEventListener('click',togglemenu)
  mobileMenu.addEventListener('click',togglemenu)
}

document.addEventListener('DOMContentLoaded',initApp())




//for filter menu
let dropdownMenu=document.getElementById('dropdown-menu')
let filterBtn=document.getElementById('dropdown')
let filterTag=document.getElementById('dropdown-inner')
let dropDownItem=document.querySelectorAll('.dropdown-item')

function Togglefilt(){
  dropdownMenu.classList.toggle('inactive')
  dropdownMenu.classList.toggle('actives')

 
}
filterBtn.addEventListener('click',Togglefilt)






//close filter menu when u click outside
document.onclick=function(e){
 
  if(dropdownMenu.classList.contains('actives') && (e.target!=dropdownMenu&& e.target!=filterBtn&&e.target!=filterTag) ){
  //  console.log(e.target);
  Togglefilt()
  }
}
 
//close sideCart menu on click outside
document.body.onclick=function(e){
  let CartOuter=document.getElementById('Cart-outer-container')
  let CartSlider=document.querySelector('.cart-slider')
  
  // (e.target!=CartSlider) && (e.target!=shoppingCartBtn)&&(e.target!=sideCartList)
  if(CartOuter.classList.contains('flex')&& (!e.target.classList.contains('toggleOut'))&&(e.target!=shoppingCartBtn) ){
    console.log(e.target);
    showCart()
    }
}
   

//filter functionality for filter button

let myFilterOptions=document.querySelectorAll('.dropdown-item')

  let [cartitem,cartitem2]=cartItems

let [allOption,footWearOption,MenOption,WomenOption]=myFilterOptions


footWearOption.addEventListener('click',()=>{
   for(let storeitem of cartItems){
    if(storeitem.getAttribute('name')!='Footwear'){
       storeitem.style.display='none'
    }else{
      storeitem.style.display='flex'
    }
   }
})

allOption.addEventListener('click',()=>{
  for(let storeitem of cartItems){
    storeitem.style.display='flex'
  }
})
MenOption.addEventListener('click',()=>{
  for(let storeitem of cartItems){
    if(storeitem.getAttribute('data-gender')!='men'){
      storeitem.style.display='none'
    }else{
      storeitem.style.display='flex'
    }
  }
})
WomenOption.addEventListener('click',()=>{
  for(let storeitem of cartItems){
    if(storeitem.getAttribute('data-gender')!='women'){
      storeitem.style.display='none'
    }else{
      storeitem.style.display='flex'
    }
  }
})

 
}



//Checks if current page is the main page

if(document.body.getAttribute('id')=='main-page'){
  cartPage()
}


//Sends info to the product detail page
let clickedProducts=document.querySelectorAll('.productImage')
clickedProducts.forEach((el)=>{
  el.addEventListener('click',(e)=>{
    let targetProduct=e.target
    let productSku=targetProduct.getAttribute('data-Sku')
    localStorage.setItem('sentSku',productSku)
  //  localStorage.setItem('usersName',Login())
    console.log(productSku);
    window.location.href='description.html'
  })
})
console.log(localStorage);

//Makeshift Carousel
let ArticleSnap=document.querySelector('.img-wrappers')
let nextArrow=document.querySelector('.rightarrow')
let prevarrow=document.querySelector('.leftarrow')
let scrollInc=0

nextArrow.addEventListener('click',()=>{
  if(ArticleSnap.scrollLeft>=2500){
    return
  }
  ArticleSnap.style.opacity='0'
  ArticleSnap.style.transition='opacity 400ms'

  setTimeout(()=>{
    ArticleSnap.scrollLeft+=scrollInc+500
    ArticleSnap.style.opacity='1'
  },500)

  // console.log(ArticleSnap.scrollLeft);
})

prevarrow.addEventListener('click',()=>{

  if(ArticleSnap.scrollLeft<=0){
    return
  }
  // console.log(ArticleSnap.scrollLeft);

  ArticleSnap.style.opacity='0'
  ArticleSnap.style.transition='opacity 400ms'

  setTimeout(()=>{
    ArticleSnap.scrollLeft-=scrollInc+500
    ArticleSnap.style.opacity='1'
  },500)
})

//make carousel Automatic

setInterval(()=>{
 
  scrollInc+=500
  
  if(scrollInc>=ArticleSnap.scrollLeft){
    ArticleSnap.scrollLeft=-1000
    scrollInc=0
  }
  
  
  setTimeout(()=>{
   
    ArticleSnap.scrollLeft+=500
    ArticleSnap.style.opacity='1'
    // console.log(scrollInc);
    // console.log(ArticleSnap.scrollLeft);
  },2000)

  
},10000)

// console.log(localStorage.getItem('sentSku'))
// localStorage.clear()
// console.log(localStorage);


//Send Email through contactForm
let contactForm=document.querySelector('.Contactform')
let submitFormBtn=document.querySelector('.SendFormBtn')

  submitFormBtn.addEventListener('click',
    SendEmail)

function SendEmail(){
  let nameField=document.querySelector('.namefield')
let messageField=document.querySelector('.messagefield')
let emailField=document.querySelector('.emailfield')


  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "keneilwatson0@gmail.com",
      Password : "D979CE0D22BC694FCA65F010915F67C45FF4",
      To : 'keneilwatson0@gmail.com',
      From : emailField.value,
      Subject : "Portfolio feedback",
      Body : `Name:${nameField.value} <br>

              Message:${messageField.value}`
              
  }).then(()=>{contactForm.reset()
  
  }).catch((err)=>{console.log(err.message);})
}
