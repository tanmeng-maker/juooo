<template>
  <div>
      <!-- 剧院 -->
    <div class="Header">剧院</div>
    <div class="theater-box" v-for="v in theatre" :key="v.id">
      <div class="theater-box-title">
        <img :src="v.pic" class="theater-box-title-img" alt />
        <p class="theater-box-title-p1">{{v.name}}</p>
        <p class="theater-box-title-p2">{{v.count}}场在售演出</p>
        <div class="theater-more-btn">
          <img src="https://m.juooo.com/static/img/more.2ce7873.png" alt />
        </div>
      </div>
      <div class="theater-box-list">
        <div class="moveList">
          <div class="moveList-box" v-for="item in v.showList" :key="item.id">
            <div class="moveList-time">
              <p>{{item.show_time}}</p>
              <span></span>
            </div>
            <img class="moveList-img" :src="item.pic" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theatre: []
    }
  },
  created() {
    this.$axios.get('/api/theatre/index/getTheatreList?page=1&version=6.1.1&referer=2').then(res => {
      this.theatre = res.data.data.theatre_list
    })
  }
}
</script>
<style lang="scss" scoped>
.Header {
  width: 100%;
  height: 0.84rem;
  text-align: center;
  line-height: 0.84rem;
  background-color: #ffffff;
  position: sticky;
  font-size: 0.33rem;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid #ebebeb;
}
.theater-box {
  width: 80%;
  background-color: white;
  margin: auto;
  margin-top: 0.22rem;
  border-radius: 5px;
  padding: 0.28rem;
  border: 1px solid #ebebeb;
  .theater-box-title {
    width: 100%;
    height: 54px;
    background-color: #ffffff;
    margin-bottom: 10px;
    position: relative;
    .theater-box-title-p1 {
      width: 70%;
      font-size: 18px;
      margin: 0;
      float: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-left: 10px;
      margin-top: 5px;
      text-align: left;
      font-weight: 800;
    }
    .theater-box-title-p2 {
      width: 70%;
      float: left;
      margin: 0;
      text-align: left;
      margin-left: 10px;
      margin-top: 3px;
    }
    .theater-box-title-img {
      width: 1rem;
      height: 1rem;
      float: left;
      border-radius: 5px;
    }
    .theater-more-btn {
      position: absolute;
      right: 5px;
      top: 42%;
    }
  }
}
.theater-more-btn > img {
  width: 15px;
  height: 15px;
}
.theater-box-list {
  width: 100%;
}
.moveList {
  white-space: nowrap;
  overflow-x: auto;
  margin: 0;
  padding: 0;
}
//随便搞搞 太费事了
.moveList .moveList-box {
  display: inline-block;
  width: 120px;
  height: 220px;
  margin-right: 5px;
  text-align: center;
  /* border: 1px solid #ddd; */
  overflow: hidden;
}
.moveList-time {
  position: relative;
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #ebebeb;
}
.moveList-time span {
  display: inline-block;
  width: 7px;
  height: 7px;
  background-color: #cccccc;
  position: absolute;
  bottom: -4px;
  border-radius: 50%;
}
.moveList .moveList-img {
  margin-top: 10px;
  width: 100%;
  height: 166px;
}
</style>