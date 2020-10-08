<template>
  <el-main class="main">
        <div class="title">
          <span class="titleSpan">我们的爱情</span>
        </div>
        <div class=heart>♥ ♥</div>
        <div>
          <el-row class="mainImg">
            <el-col :span="11"
                    style="text-align:right">
              <!--主容器-->
              <div class="box">
                <img :src="boyUrl"
                     width="320px"
                     height="320px" />
                <!-- 内容 -->
                <div class="box-inner-content">
                  <h3 class="title">boyName</h3>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <span class="and">&</span>
            </el-col>
            <el-col :span="11"
                    style="text-align:left">
              <!--主容器-->
              <div class="box"
                   style="float:left">
                <img :src="girlUrl"
                     width="320px"
                     height="320px" />
                <!-- 内容 -->
                <div class="box-inner-content">
                  <h3 class="title">girlName</h3>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <br>
        <br>
        <!--第二个模块-->
        <div class="title">
          <span class="titleSpan">我们的幸福时刻</span>
        </div>
        <div class="heading">
          <p>1111</p>
        </div>

      </el-main>
</template>
<script>

  export default {
    data() {
     return {
      logoUrl: require('../assets/logo.png'),
      boyUrl: require('../assets/boy.jpeg'),
      girlUrl: require('../assets/girl.jpeg'),
      activeIndex: '1',
      show: 'false'
    }
    },
    methods: {
     
    },
    
  }
</script>
<style scoped>
body {
  border: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title {
  font-size: 35px;
  font-family: "楷体";
  text-align: center;
  padding-bottom: 1px;
  margin-top: 50px;
}
.titleSpan:hover {
  border-bottom: 2px solid pink;
  padding-bottom: 4px;
}
.mainImg {
  text-align: center;
  margin-top: 45px;
}
.and {
  font-size: 70px;
  margin-left: -22px;
  color: #ef6a8a;
  z-index: 2;
  font-family: "Lato", sans-serif;
}
.heart {
  color: #ef6a8a;
  font-size: 20px;
  text-align: center;
}
.mainImg img {
  cursor: pointer;
  border: 2px solid transparent;
}
/* .mainImg img:hover {
  border-radius: 50%;
  -moz-box-shadow: -2px 1px 8px -3px #ef6a8a;
  -webkit-box-shadow: -2px 1px 8px -3px #ef6a8a;
  box-shadow: -2px 1px 8px -3px #ef6a8a;
} */
/* 外层容器 */
.box {
  width: 330px;
  height: 330px;
  overflow: hidden;
  position: relative;
  float: right;
}

.box:before {
  content: "";
  display: block;
  border: 3px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 5px;
  left: 5px;
  bottom: 5px;
  right: 5px;
  opacity: 1;
  z-index: 2;
  transition: all 0.3s ease 0s;
}
.box:hover:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 10px solid rgba(255, 255, 255, 0.18);
}
.box:after {
  border-radius: 50%;
  content: "";
  display: block;
  position: absolute;
  top: 35px;
  left: 35px;
  bottom: 35px;
  right: 35px;
  opacity: 1;
  z-index: 1;
  transition: all 0.5s ease 0s;
}
.box:hover:after {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}

/* 图片 */
.box img {
  width: 100%;
  height: auto;
  transform: scale(0.9);
  transition: all 0.5s ease 0s;
}
.box:hover img {
  transform: scale(1);
}

/* 文字内容 */
.box .box-inner-content {
  position: absolute;
  left: 45px;
  bottom: 125px;
  right: 45px;
  text-align: center;
  color: #fff;
  opacity: 0;
  transition: all 0.3s ease 0s;
}
.box:hover .box-inner-content {
  opacity: 1;
  bottom: 20px;
  text-shadow: 0 0 10px #000;
}

/* 标题 */
.box .title {
  font-size: 26px;
  font-weight: bold;
  margin: 0;
}

/* 文本 */
.box .post {
  display: block;
  font-size: 16px;
  font-style: italic;
  margin-bottom: 10px;
}

.heading p {
  padding: 40px 0 50px;
  margin: 0 auto;
  text-align: center;
  width: 70%;
  font-size: 16px;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
</style>