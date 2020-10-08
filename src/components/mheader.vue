<template>
  <el-header class="elheader">
        <div class="logo">
         <a @click="toRegister" class="btn"> 
            注册
         </a>
       
           <a @click="toRegister" class="btn"> 
            登录
         </a>
        </div>
      </el-header>
</template>
<script>

  export default {
    name:'mheader',
    data() {
      return {

      }
    },
 
 methods:{


        toRegister(){
      
    this.$router.push({ path: '/register' })
  }
 },



    
  }
  
</script>

<style scoped>
.elheader {
  display: block;
  box-shadow: 0px 6px 5px #ddd;
  /* background: url("./assets/logo.png") no-repeat 26px 50%; */
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}

.logo {
  position: relative;
  top: 0;
  background: url("../assets/logo.png") no-repeat 26px 50%;
  height: 100%;
  margin-left: -20px;
}

.logo a {
  border-radius: 10%;
  margin-right: 5px;
  font-family: "Microsoft Yahei";
  font-weight: 100;
  height: 35px;
  box-sizing: border-box;
  margin-top: 12px;
  font-size: 18px;
  color: black;
  text-decoration: none;
  float: right;
  width: 90px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  border: 1.5px solid pink;
  overflow: hidden;
}
.logo a:hover::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background: pink;
  width: 90px;
  transform: skew(45deg);
  font-size: 18px;
  height: 35px;
  width: 200%;
  z-index: -1;
}

.logo a::after {
  content: "";
  top: 0;
  box-sizing: border-box;
  position: absolute;
  width: 90px;
  transform: skew(45deg);
  left: -50px;
  font-size: 18px;
  height: 35px;
  width: 0;
  transition: 0.5s;
}

</style>
