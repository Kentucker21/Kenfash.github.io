import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
import { getFirestore,collection,getDocs,addDoc,deleteDoc,doc } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyCCtAjNFy9jAveiGZntf6LZ-GIQpv1_aUM",
    authDomain: "kencart-66d08.firebaseapp.com",
    projectId: "kencart-66d08",
    storageBucket: "kencart-66d08.appspot.com",
    messagingSenderId: "421970548257",
    appId: "1:421970548257:web:e8c1d9493bcfc9955bb560",
    measurementId: "G-23YP77J94Q"
  };
  const app = initializeApp(firebaseConfig);
 
 
 let productImage=document.querySelector('.descr-image')
 let productName=document.querySelector('.productName')
 let itemId=document.querySelector('.productId')
 let productDescription=document.querySelector('.description-para')
 let backbutton=document.querySelector('.backButton')
 let priceTag=document.querySelector('.priceTag')

 const items=[
    {
        id:1,
        name:'Street Foams',
        price:89,
        description:`The adidas Yeezy Foam Runner “Vermillion” is 
        a vibrant look for the already eye-catching slip-on silhouette by Kanye West and adidas.
         Easily the most colorful look for the model yet at the time of its release in October 2021, 
         the all-bright-red “Vermillion” look
          is ready to turn heads anywhere you go. The avant-garde,
           futuristic model features a molded one-piece construction consisting of lightweight EVA 
           foam and harvested algae with an ample amount of negative spaces for an airy feel and unique look.
            Release date: October 9, 2021`,
            image:'./photos/foams.jpg'
    },

    {
        id:2,
        name:'Brown foams',
        price:92,
        description:`1. The rounded simple style matched with the super thick sole design, which is very comfortable and versatile

        2. These slide sandals are made of high-quality EVA with moderate hardness, very comfortable and chushioning.
        
        3. Super thick sole with big wave non-slip texture design, perfect for daily wearing at various indoor and outdoor occassions.`,
        image:'./photos/foams-brown.webp'
    },

    {
        id:3,
        price:72,
        name:'Yeezy foams',
        description:`1. The rounded simple style matched with the super thick sole design, which is very comfortable and versatile

        2. These slide sandals are made of high-quality EVA with moderate hardness, very comfortable and chushioning.
        
        3. Super thick sole with big wave non-slip texture design, perfect for daily wearing at various indoor and outdoor occassions.`,
        image:'./photos/yeezy.jpg'
    },

    {
        id:4,
        price:94,
        name:'Air force 1 white',
        description:`The Nike Air Force 1 Low “White on White” is one of the most popular 
        and best-selling sneakers of all time. An essential for any collection, 
        the all-white Air Force 1 Low is a versatile design that
         can be worn with virtually anything. The classic sneaker features a white leather upper with a mesh inner lining and solid white rubber outsole. A metallic silver “AF-1” lace dubrae completes the iconic look. 
        The “triple white” Air Force 1 is a staple on the streets, and will continue to be in style from now until infinity.`,
        image:'./photos/Nike-Air-Force-1.webp'
    },
    {
        id:5,
        price:94,
        name:'Air Force 1 Black',
        description:`The legend lives on in the Nike Air Force 1 '07, 
        a modern take on the iconic AF1, combining classic style with modern details.
         The low design offers optimum grip on the ground and a classic look. 
         This version of the Nike Air Force 1 
         features wavy leather edges for a cleaner, slimmer line and more refined details. 
         Leather and textile upper features strategically positioned outer layers for 
        lifetime durability and support. The perforated inserts promote breathability to keep the foot always fresh and dry.`,
        image:'./photos/Nike-Air-Force-black.webp'
    },
    {
        id:6,
        price:60,
        name:'Nike Slides',
        description:`Nike Benassi "Just Do It." Sandal is a lightweight men's sports sandal with the Nike corporate logo embellished on the strap. 
        Its soft midsole foam and jersey lining provide comfort so you can enjoy a relaxed, premium experience.`,
        image:'./photos/Nike-slides.webp',
    },
    {
        id:7,
        price:94,
        name:'Air jordan 1',
        description:`The Air Jordan 1 Mid Ice Blue GS was manufactured in an ice blue colorway for grade-schoolers.
        The accenting blacks fill the dominating vamp, leather panels, and Swooshes, which are established
         by the quarter overlay, the mudguard, and the collar, 
         as the baby blue colorway combination takes center part. 
         In contrast, the tongue and midfoot design feature a very light Off-White undertone, while the midsole and laces opt for a crisp white finish. It also features the wings logo on its collar. 
        The tongue tag, internal lining, and tread underneath the model's opposing end have an arctic-hued finish.`,
        image:'./photos/Air-Jordan-1.webp'

    },
    {
        id:8,
        price:22,
        name:'Polo shirt Blue',
        description:`Suitable for many occasions: golf, tennis, outdoor sports, vacation, leisure, work, etc. 
        It can be matched with various styles of pants, such as pants, casual shorts, work shorts, jeans, etc.`,
        image:'./photos/polo-shirt-blue_.jpg'
    },
    {
        id:9,
        price:16,
        name:'V neck Tshirts',
        description:`56% Cotton, 38% Modal, 6% Spandex
        Imported
        No Closure closure
        Machine Wash
        An Amazon brand
        Close-but-comfortable fit with easy movement
        Lightweight jersey cotton blend with stretch`,
        image:'./photos/v-necks_.jpg'
    },
    {
        id:10,
        price:26,
        name:'Mens button up Shirt',
        description:`95% Polyester, 5% Spandex
        Imported
        Button closure
        Machine Wash
        Material: 95% Polyester, 5% Spandex; Fabric has slight stretch
        Feature: Color Block, Button Front, Short Sleeve, Collar, Patched Pocket, Regular Fit, Casual
        Occasion: Perfect for Work, Office, Campus, Shopping, Casual Outtings, Vacation, Travel, Weekend, Daily Wear
        Match: The shirt looks great with jeans, cargo pants, joggers or casual shorts in summer`,
        image:'./photos/button-up-men.jpg'
    },
    {
        id:11,
        price:15,
        name:'Womens floral Shirt',
        description:`100% Polyester
        Hand Wash Only
        Polyester, Fabric has no stretch
        Feature: Floral Top, Round Neck, Cute, Pleated, Casual Blouse, Flower Print, Regular Fit, Button, Cap Sleeve, Asymmetrical, Petal Sleeve, Curved Hem
        Suitable for Summer, Vacation, Casual Outtings, Office, School, Home and Daily wear
        Suggest to hand wash cold and hang to dry, no bleach`,
        image:'./photos/floral-women.jpg'
    },
     {  id:12,
        price:18,
        name:'Womens Vneck TShirt',
        description:`95% RAYON, 5% SPANDEX : MODAL
        Made in U.S.A. or Imported.
        Do Not Bleach
        Lightweight fabric with great stretch for comfort
        Ribbed on sleeves and neckline / Double stitching on bottom hem
        Elastic shirring details at sides / Fit and flare fit
        HAND WASH IN COLD WATER / DO NOT BLEACH / LAY FLAT TO DRY / DRY CLEAN IF NEEDED`,
        image:'./photos/womens-v-neck.jpg'
    },
     {  id:13,
        price:54,
        name:'Womens high heels',
        description:`Elevate your style with the Madden Girl Beella Heeled Sandal, a chic and versatile addition
         to your shoe collection. Crafted from high-quality materials,
          these sandals feature a block heel for stability and comfort,
           while the ankle strap and buckle closure provide a secure fit.
            The Beella Heeled Sandal boasts a sleek 
            and minimalist design that pairs perfectly with any outfit,
             from jeans and a blouse to a formal dress. And with its soft
              synthetic lining and lightly padded footbed, you'll stay comfortable all day or night long. 
              Whether you're looking for a stylish pair of sandals for a night out or a special occasion, 
              the Madden Girl Beella Heeled Sandal
               is a must-have. And with its non-slip outsole, you can wear these sandals with confidence on any surface.`,
        image:'./photos/women-heels.jpg'
    },
     {  id:14,
        price:38,
        name:'Womens Skechers',
        description:`100% Textile
        Imported
        Rubber sole
        Shaft measures approximately low-top from arch
        Lätt:
        Flexibel sula, Polyester ve sentetik malzemelerden üretilmiştir
        `,
        image:'./photos/womens-skechers.jpg'
    },

]





console.log(localStorage.getItem('usersName'));
//fetch data from store page
for(let i=0;i<items.length;i++){
    let currentProduct=items[i]
    let sentSku=localStorage.getItem('sentSku')
    if(currentProduct.id==sentSku){
        productName.innerHTML=`item-name:${currentProduct.name}`
        itemId.innerHTML=`ItemId:${currentProduct.id}`
        priceTag.innerHTML=`Price:$${currentProduct.price}`
        productDescription.innerHTML=currentProduct.description
        productImage.src=currentProduct.image
       
    }
}

backbutton.addEventListener('click',()=>{
    localStorage.clear()
    window.location.href='index.html'
})
console.log(localStorage.getItem('sentSku'))



//Access database
let commentForm=document.getElementById('comFormId')
 let CommentInput=document.getElementById('commentInputId')
 let AddcommentButton=document.getElementById('CommentBtnId')
 let CommentUserName=document.getElementById('UsernameId')
 let DeleteComment=document.getElementById('delCom')
 let CommentContents=document.getElementById('commentContentId')
 let commentsList=document.getElementById('commentsListId')

 const db=getFirestore(app)
 const colref=collection(db,'myComments')

 document.addEventListener('DOMContentLoaded',()=>{
    CommentInput.setAttribute('skuInput',localStorage.getItem('sentSku'))
 })
   
 //Adds data to the comments data collection
 AddcommentButton.addEventListener('click',(e)=>{
    if(CommentInput.value==null||CommentInput.value==''){
        e.preventDefault()
        return 
    }
  e.preventDefault()
  let CommentDate=new Date()

  function formatDate(date){
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
   
    return `${month}/${day}/${year}`
   }

  addDoc(colref,{
    skuId:CommentInput.getAttribute('skuInput'),
    commentCont:CommentInput.value,
    CommentersUser:localStorage.getItem('usersName'),
    dateComment:formatDate(CommentDate)
  })
  commentForm.reset()

  setTimeout(()=>{window.location.reload()},3000)
//   window.location.reload()
 })
 
    // const authForKenFash=getAuth(app)
    // console.log(authForKenFash.currentUser);

    //render comments to screen function
  function RenderComments(){
    let CommentsArr=[]
    getDocs(colref).then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
            CommentsArr.push({...doc.data(),id:doc.id})
            // console.log(CommentsArr);

           
        })
        console.log(CommentsArr);
        SetUpRender()
    
    }).catch((err)=>{console.log(err.message);})
          
          function SetUpRender(){
            for(let i=0;i<CommentsArr.length;i++){
                let currentComment=CommentsArr[i]
                if(currentComment.skuId==localStorage.getItem('sentSku')){
                    let AcommentEl=document.createElement('li')
                    console.log(currentComment.CommentersUser);
                    AcommentEl.setAttribute('Delid',currentComment.id)
                    AcommentEl.classList.add('Acomment', 'mshadow', 'w-[50%]', 'p-3', 'rounded-lg', 'sub-med:w-[100%]', 'border','border-[#1b83ff]','mb-3')
                    AcommentEl.innerHTML=`<div class="InfoUser flex gap-1 w-[100%]  justify-between items-center">
                    <div class="Username italic bg-[#1b83ff] w-max text-white rounded-md p-1 justify-start" id="UsernameId">${currentComment.CommentersUser}</div>
                    <div class="uploadDate" id="uploadDateId">${currentComment.dateComment}</div>
                    ${currentComment.CommentersUser==localStorage.getItem('usersName')? '<i class="fa-solid fa-trash " id="delCom"></i>':''}
                </div>
                <div class="commentContent " id="commentContentId">${currentComment.commentCont}</div>`
                commentsList.appendChild(AcommentEl)

                DeleteComment()
                }
            }
            //Delete a comment
            function DeleteComment(){
                let delBtns=document.querySelectorAll('#delCom')
                
                delBtns.forEach((delbtn)=>{
                    delbtn.addEventListener('click',(e)=>{
                    let commentToDel=e.target.parentElement.parentElement
                    let getKey=commentToDel.getAttribute('delId')
                    let docRef=doc(db,'myComments',getKey)
                    deleteDoc(docRef)
                    commentToDel.remove()
                    console.log(getKey); })
              })
          }
  } }

  document.addEventListener('DOMContentLoaded',RenderComments)
  
//    getDocs(colref).then((snapshot)=>{
//     let CommentsArr=[]
//     snapshot.docs.forEach((doc)=>{
//     CommentsArr.push({...doc.data(),id:doc.id})
//     console.log(CommentsArr);
//     console.log('iu');})
//    }).catch((err)=>{console.log(err.message);})
