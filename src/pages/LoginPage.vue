<template>
  <template>
    <div class="login " >
      <q-img  class="imgR" src="https://www.pngkey.com/png/detail/281-2819886_icon-button-login-png.png"></q-img>
      <q-input class="q-pa-sm" rounded v-model="email"  label="email"   input-class="text-right" placeholder="האיימל שלך " color="purple-14" outlined />
      <q-input class="q-pa-sm" rounded v-model="password" label="password"  input-class="text-right" placeholder="סיסמא"  color="purple-14" outlined />
      <q-btn text-color="black" color="purple-13" rounded  icon="favorite" @click="loginToBarter()">login</q-btn>
      <div class="col-1 q-pa-sm ">
        <q-btn round text-color="black" color="red-12" rounded icon="public" @click="google()">
        </q-btn>
        <q-btn class="q-ma-sm" round @click="facebook()" color="blue-12" icon="facebook"></q-btn>
      </div>
    </div>
  </template>

  <script>

    import firebaseInstance from'../middleware/firebase'
    export default {
      name: "Login",
      data() {
        return{
          email:'',
          password:'',

        }
      },

      methods: {
        google() {
          const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
          firebaseInstance.firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
              /** @type {firebase.auth.OAuthCredential} */
              let credential = result.credential;
              let token = credential.accessToken;
              let user = result.user;
              //todo: set the fullname && email  in db

              //todo: FOR later... chek if user ex in DB  if TRUE do not set the user in DB
              window.user = result.user
              this.$router.push('/add-card')

            }).
          catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
          });

        },
        loginToBarter(){
          firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then((userCredential) => {
              // Signed in
              return  userCredential;
              // ...
            }).then(()=>{
            this.$router.push('/home')
          })

            .catch((error) => {
              let errorCode = error.code;
              let errorMessage = error.message;
            });
        },



      },
      created() {
        // if (window.user) {
        //   this.$router.push('/home')
      }
      // }
    }




  </script>

  <style scoped>
    .login{

      /*display: grid;*/
      flex-direction: column;
      align-items: center;
      /*min-width: 300px;*/
      /*max-width: 1024px;*/
      /*min-height: 500px;*/
      align-self: center;
    }
    .imgR{
      max-width: 180px;


    }




  </style>
</template>

<script>
export default {
name: "LoginPage"
}
</script>

<style scoped>

</style>
