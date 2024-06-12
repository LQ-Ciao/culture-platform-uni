<template>
  <div>
    <!-- 引用静态图片的正确路径 -->
    <el-image src="/static/head_pic.jpg" style="z-index: -1;width: 100%"></el-image>

    <!-- 卡片样式 -->
    <el-card fit="cover" style="margin: -50px 25px 0 25px; padding: 0 10px 0 10px; z-index:1;Border-radius: 10px">
      <el-row :gutter="60">
        <!-- 引用自定义组件 -->
        <functionBtn
            iconPath="/static/icon/index/1.jpg"
            functionLabel="红色文化"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>

        <functionBtn
            iconPath="/static/icon/index/2.png"
            functionLabel="文化应用"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>

        <functionBtn
            iconPath="/static/icon/index/3.jpg"
            functionLabel="沉浸式文旅"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>

        <functionBtn
            iconPath="/static/icon/index/4.png"
            functionLabel="闽文数仓"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>

        <functionBtn
            iconPath="/static/icon/index/5.png"
            functionLabel="数字资产"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>

        <functionBtn
            iconPath="/static/icon/index/6.png"
            functionLabel="闽文博藏"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>

        <functionBtn
            iconPath="/static/icon/index/7.png"
            functionLabel="闽文资讯"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>

        <functionBtn
            iconPath="/static/icon/index/8.png"
            functionLabel="更多"
            @click="openExternalLink('https://www.baidu.com')"
        >
        </functionBtn>
      </el-row>
    </el-card>

    <div style="margin: 100px 24px 75px 24px">
      <el-image
          style="Border-radius: 10px"
          class="$uni-border-radius-lg"
          src="/static/QQ截图20240607110746.png"
      ></el-image>
    </div>

    <div style="margin-left:50px">
      <el-text tag="b" style="font-size: 30px">最新资源</el-text>
    </div>

    <el-carousel interval="3000" height="1000px">
      <el-carousel-item class="el-car-item" v-for="(list, index) in dataList" :key="index">
        <img v-for="(imgList,index2) in list"
             :key="index2"
             class="top-img"
             :src="imgList.img"
             :alt="imgList.title"/>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
import functionBtn from './functionBtn.vue';


export default {
  components: {
    functionBtn
  },
  data() {
    return {
      title: 'Hello',
      carouselImgCount: 2,
      dataList: [
        {
          img: 'https://img2.imgtp.com/2024/05/30/uWjcvAUW.png',
          title: '标题'
        }, {
          img: 'https://img2.imgtp.com/2024/05/30/ZzImB2jL.png',
          title: '标题'
        }, {
          img: 'https://img2.imgtp.com/2024/05/30/ilpnEfHK.png',
          title: '标题'
        }, {
          img: 'https://img2.imgtp.com/2024/05/30/kigi4ofe.png',
          title: '标题'
        }, {
          img: 'https://img2.imgtp.com/2024/05/30/6UBlIzbC.png',
          title: '标题'
        }, {
          img: 'https://img2.imgtp.com/2024/05/30/vAaTMbVu.png',
          title: '标题'
        }, {
          img: 'https://img2.imgtp.com/2024/05/30/919pPnqB.png',
          title: '标题'
        }
      ],
    };
  },
  mounted() {
    this.getDataSource();
  },

  methods: {
    getDataSource() {
      let newDataList = []
      let current = 0
      if (this.dataList && this.dataList.length > 0) {
        for (let i = 0; i <= this.dataList.length - 1; i++) {
          if (i % this.carouselImgCount !== 0 || i === 0) {
            if (!newDataList[current]) {
              newDataList.push([this.dataList[i]])
            } else {
              newDataList[current].push(this.dataList[i])
            }
          } else {
            current++
            newDataList.push([this.dataList[i]])
          }
        }
      }
      this.dataList = [...newDataList]
    },

    openExternalLink(url) {
      const loadingInstance = ElLoading.service({
        fullscreen: true,
        text: '加载中，请稍候...'
      });

      setTimeout(() => {
        loadingInstance.close();
        window.location.href = url;
      }, 1000)
    }
  }
}
</script>

<style lang="scss">


</style>
