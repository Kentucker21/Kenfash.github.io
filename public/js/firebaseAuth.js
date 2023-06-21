import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
import { getAuth,signInWithRedirect,getRedirectResult, signOut,GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'
import { getFirestore,collection,getDocs,addDoc } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'
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
 const authForKenFash=getAuth()
 const provider=new GoogleAuthProvider()
 
 function Login() {
    let LoginBtn=document.querySelectorAll('.loginBtn')
    let LogOutBtn=document.querySelectorAll('#signOutId')
    let NotloggedinOverLay=document.querySelector('.NotLoggedinOverLay')
  
     LoginBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            signInWithRedirect(authForKenFash,provider)
            getRedirectResult(authForKenFash).then((result)=>{
                const credential
                const token=credential.accessToken;
                const user=result.user
               
    
                
               
               }).catch((err)=>{
                console.log(err.message);
               })
        })
     })
   

     //check if user is logged in
     onAuthStateChanged(authForKenFash,(user)=>{
       
        if(user){
            console.log('user is sign in')
            LoginBtn.forEach((btn)=>{
                btn.style.display='none'

                LogOutBtn.forEach((logBtn=>{
                    logBtn.style.display='block'
                }))
               
                console.log(authForKenFash.currentUser.displayName);
                let usersName=authForKenFash.currentUser.displayName

                localStorage.setItem('usersName',usersName)
            })
            NotloggedinOverLay.style.display='none'
            
        }else{
            console.log('no user is signed in');
            LoginBtn.forEach((btn)=>{
                btn.style.display='block'
                LogOutBtn.forEach((logBtn)=>{
                    logBtn.style.display='none'
                })
                
                
              
            })
            
            NotloggedinOverLay.style.display='flex'
        }
        
     })

     //log user Out
     LogOutBtn.forEach((logBtn)=>{
        logBtn.addEventListener('click',()=>{
            signOut(authForKenFash).then((user)=>{
                console.log(user.uid);
                console.log('user is logged out');
                console.log(authForKenFash.currentUser);
               }).catch((err)=>{err.message})
         })
     })
     

    
 }


 

 export default Login
