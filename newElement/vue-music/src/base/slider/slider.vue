<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
        <!-- 
            插槽
            将组件中的dom渲染在这里
         -->
      <slot>
      </slot>
    </div>
    <div class="dots">
        <span class="dot" v-for="(item,index) in dots" :class="{active:activeIndex === index}">

        </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'

export default {
    data() {
        return {
            dots: [],
            activeIndex: 0
        }
    },
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay:{
            type: Boolean,
            default: true
        },
        interval:{
            type: Number,
            default: 4000
        }
    },
    mounted() {
        // 一般页面刷新是17毫秒,也可以使用nextTick
        setTimeout(()=>{
            this._setSilderWidth();
            this._initDots();
            this._initSlider();
            // 自动播放
            if(this.autoPlay){
                this._play();
            }
        },20);

        window.addEventListener('resize',()=>{
            if(!this.slider){
                return 
            }
            this._setSilderWidth(1);
            this.slider.refresh();
        })
    },
    destroyed() {
        // 当silder被切换时,调用了destroyed
        clearTimeout(this.timer);  
    },
    methods: {
        _setSilderWidth(isResize){
            // 获取所有子元素
            this.children = this.$refs.sliderGroup.children;

            let width = 0;
            let silderWidth = this.$refs.slider.clientWidth;

            for (let i = 0; i < this.children.length; i++) {
                // 获取每个子元素
                const child = this.children[i];
                // 为元素添加class
                addClass(child,'slider-item');
                child.style.width = silderWidth+'px';
                width += silderWidth;
            }

            if(this.loop && !isResize){
                width += 2*silderWidth;
            }
            this.$refs.sliderGroup.style.width = width+'px';
        },
        _initDots(){
            this.dots = new Array(this.children.length);
        },
        _initSlider(){
            this.slider = new BScroll(this.$refs.slider,{
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: true,
                snapLoop: this.loop,
                snapThreshold: 0.3,
                snapSpeed: 400,
                click: true
            })
            // 绑定silder滑动事件
            this.slider.on('scrollEnd',()=>{
                let pageIndex = this.slider.getCurrentPage().pageX;
                if(this.loop){
                    pageIndex -= 1;
                }
                this.activeIndex = pageIndex;

                if(this.autoPlay){
                    clearTimeout(this.timer);
                    this._play();
                }
            })
        },
        _play(){
            // 自动播放
            let pageIndex = this.activeIndex+1;
            if(this.loop){
                pageIndex += 1
            }
            this.timer = setTimeout(() => {
                this.slider.goToPage(pageIndex,0,400);
            }, this.interval);
        }
    },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>