<template>
  <div class="theme-container error">
    <div class="home__nav">
      <RouterLink to="/">
        <img
          class="home__nav__logo"
          :src="$withBase('/assets/img/biome.svg')"
        >
      </RouterLink>
    </div>
    <div class="theme-default-content">
      <p class="error__text">Oh no!</br>
      It looks like we’ve been split up</p>
      <h1 class="error__title">Error 404</h1>
      <p class="error__subtitle">{{ getMsg() }}</p>
      <RouterLink to="/documentation">
        Take me home
      </RouterLink>
    </div>
    <div
      class="footer"
    >
      <div>
        Maintained by
        <a href="https://recogn.ai" target="_blank"><img width="70px" :src="$withBase('/assets/img/recognai.png')" /></a>
      </div>
    </div>
    <div
      class="error--bg"
    >

      <svg width="1461px" height="421px" viewBox="0 0 1461 421" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="*-Documentation" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="error-message-explore" transform="translate(0.000000, -392.000000)">
                  <path d="M858.516319,553.275608 L979.678991,553.275608 C981.110745,541.1066 988.964344,535.022095 1003.23979,535.022095 C1024.65295,535.022095 1026.12972,558.684553 1034.99035,549.412076 C1043.85097,540.139599 1036.71266,529.771294 1041.71561,510.522956 C1046.71857,491.274618 1069.69015,503.68286 1074.12475,510.522956 C1076.38052,514.002333 1060.81308,530.311269 1059.72624,530.311269 C1058.24804,530.311269 1069.69015,522.367351 1074.12475,526.230883 C1078.55935,530.094415 1036.42637,549.412076 1078.55506,549.412076 C1120.68375,549.412076 1282.26499,553.275608 1362.05275,553.275608 C1415.24459,553.275608 1454.88531,557.654278 1480.97492,566.411617 C1454.3974,588.92992 1431.73073,601.126048 1412.97492,603 C1298.76247,614.411322 1138.55263,593 951.974916,593 C855.308249,602.333333 824.155383,589.091869 858.516319,553.275608 Z" id="Path-2" fill="#FFB493" transform="translate(1162.987458, 553.293021) scale(-1, 1) translate(-1162.987458, -553.293021) "></path>
                  <path d="M-53.8848338,566.411617 C-21.8848338,566.411617 486.348425,557.911847 493.739424,553.275608 C501.130422,548.639369 502.479959,545.067279 503.219058,535.022095 C503.958158,524.976912 482.541418,519.022727 485.497817,510.522956 C488.454217,502.023185 472.326257,475.236893 485.497817,475.236893 C490.696306,475.236893 496.652685,473.050991 502.228207,471.267352 C510.779544,468.531733 518.434981,466.742365 521.086118,475.236893 C525.465812,489.269902 533.501423,516.046163 524.632225,510.522956 C515.763027,504.999749 507.043221,512.55069 512.21692,519.390786 C517.390619,526.230883 533.650816,512.322167 521.086118,526.230883 C508.521421,540.139599 527.939231,549.412076 534.969616,549.412076 C542,549.412076 580.405242,553.275608 660.193,553.275608 C713.384839,553.275608 753.025561,557.654278 779.115166,566.411617 C449.652192,582.137206 168.652192,590 -63.8848338,590 C-131.579295,590 -89.8848338,566.411617 -53.8848338,566.411617 Z" id="Path-2" fill="#FFB493"></path>
                  <path d="M1,582 C437.800642,571.552576 696.133975,566.219243 776,566 C793.854245,565.950988 794.444815,491.443886 784,474 C774.223177,457.671727 719,419 759,434 C792.39464,446.52299 794.387945,434 805,434 C815.451449,434 828.950628,454.899462 844,442 C855.594238,432.062082 880,423 887,442 C894,461 887,469 876,474 C842.354395,489.293457 839,526 851,564 C859,589.333333 1062.66667,595.333333 1462,582 L1462,921 L1,921 L1,582 Z" id="Rectangle-7" fill="#89D8F1"></path>
                  <ellipse id="eye-1" fill="#FBFAED" cx="512.5" cy="486.5" rx="2.5" ry="4.5"></ellipse>
                  <path d="M897,405 C909,391.666667 917,388.666667 921,396 C925,403.333333 917,406.333333 897,405 Z" id="Path-3" fill="#89D8F1"></path>
                  <path d="M889,427 C901,431 907,436.333333 907,443 C907,453 931,458 936,443 C941,428 936,416 916,418 C902.666667,419.333333 893.666667,422.333333 889,427 Z" id="Path-4" fill="#89D8F1"></path>
                  <path d="M730,435.859375 C713.814815,436.286458 708.185185,440.583333 713.111111,448.75 C718.037037,456.916667 723.666667,452.619792 730,435.859375 Z" id="Path-5" fill="#89D8F1"></path>
                  <ellipse id="eye-2" fill="#FBFAED" transform="translate(1265.000000, 514.000000) rotate(46.000000) translate(-1265.000000, -514.000000) " cx="1265" cy="514" rx="2" ry="3"></ellipse>
              </g>
          </g>
      </svg>
    </div>
  </div>
</template>

<script>
const msgs = [
  `The page you’re looking for can’t be found.`,
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
<style lang="stylus" scoped>
.theme-default-content
  margin-left auto !important
.home
  &__nav
    z-index 1
    border-bottom 1px solid $borderColor
    display block
    background #fff
    position relative
    &__logo
      max-width 120px
      padding 0.5em
.error
  position relative
  min-height 120vh
  background-size 100%
  &--bg
    position absolute
    width 100%
    bottom 0
    pointer-events none
    svg
      width 100%
      height auto
      display block
  &__title
    display: block
    margin-right 1em
    margin-top 0 !important
    padding-top: 0 !important
    font-size 2em
  &__subtitle
    display: block
    font-size 2em
    font-weight lighter
    margin-top 0 !important
    margin-bottom 1em
    color $textColorLight
  &__text
    font-family $handMadeFontFamily
    color #4C10BC
    font-size: 4.2rem
    line-height: 1em
    margin-top 0.5em !important
    margin-bottom 0.5em
.footer
  position absolute
  bottom 2em
  padding 2.5rem 2.5em 0
  text-align center
  color lighten($textColor, 25%)
  font-size 12px
  right 0
  left 0
  z-index 1
  & > div
    margin: auto
    display flex
    align-items center
    width 160px
  img
    margin-left 1em
@media (max-width: $MQMobile)
  .error
    &__title
      font-size 1.5em
    &__subtitle
      font-size 1.3em
      display block
    &__text
      font-size 3em

#eye-1
  animation animateEye-1 3s infinite 3s
#eye-2
  animation animateEye-2 3s infinite

@keyframes animateEye-1
  0%
    ry 4.5
  5%
    ry 0
  10%
    ry 4.5
  100%
    ry 4.5
@keyframes animateEye-2
  0%
    ry 3.5
  5%
    ry 0
  10%
    ry 3.5
  100%
    ry 3.5
</style>
