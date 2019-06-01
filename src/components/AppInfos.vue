<template>
  <div class="app-infos" @click="close">
    <h1 class="watermark">
      P.L.
    </h1>
    <h2 class="designer">
      Designed by @Never-stop
    </h2>
    <h3 class="developer">
      Developped by @scbj
    </h3>
    <article class="explanation">
      <h4 class="question">
        Why P.L.?
      </h4>
      <p>
        The acronym stands for « <em>Piertotum Locomotor</em> », this spell allows Minerva McGonagall to give life to the statues that sit in the hall of Hogwarts.
      </p>
      <p>
        This concept, give life to prototypes from designers, is the one I chose to <em>practice</em>.
      </p>
    </article>
    <div class="shots">
      <div class="shot" />
      <div class="shot" />
      <div class="shot" />
      <div class="shot" />
    </div>
    <div class="icons">
      <svgicon class="dribbble" icon="logo-dribbble" />
      <svgicon class="github" icon="logo-github" />
    </div>
  </div>
</template>

<script>
import disableScrolling from '@/mixins/disable-scrolling.js'
import { EventBus } from '@/reactivity/event-bus.js'

export default {
  mixins: [ disableScrolling ],

  methods: {
    close () {
      EventBus.$emit('ui@infos:close')
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'TT Commons';
  font-weight: 400;
  src: url('~@/assets/fonts/TTCommons-Regular.woff') format('woff');
}

@font-face {
  font-family: 'TT Commons';
  font-weight: 500;
  src: url('~@/assets/fonts/TTCommons-Medium.woff') format('woff');
}

@font-face {
  font-family: 'TT Commons';
  font-weight: 600;
  src: url('~@/assets/fonts/TTCommons-DemiBold.woff') format('woff');
}

@font-face {
  font-family: 'TT Commons';
  font-weight: 700;
  src: url('~@/assets/fonts/TTCommons-Bold.woff') format('woff');
}

.app-infos {
  font-family: 'TT Commons';
  font-size: 30px;
  font-weight: 400;
  background: rgba(#4616F2, .8);
  color: #f6eff7;
  display: grid;
  grid-template-columns: 60px 124px 1fr 60px;
  grid-template-rows: 130px repeat(2, auto) 4fr 2fr auto 54px;
}

.watermark {
  font-size: 600px;
  font-weight: 700;
  color: rgba(white, 11%);
  grid-column: 2 / 4;
  grid-row: 2 / 5;
  /* TODO: Convertir les pixels en rem/em */
  margin-left: -38px;
  margin-top: -87px;
}

.designer {
  font-size: 62px;
  font-weight: 600;
  grid-column: 3;
  grid-row: 2;
  justify-self: flex-end;
}

.developer {
  font-size: 44px;
  font-weight: 500;
  grid-column: 3;
  grid-row: 3;
  justify-self: flex-end;
}

.explanation {
  max-width: 760px;
  grid-column: 3;
  grid-row: 4;

  > .question {
    font-size: 44px;
    font-weight: 500;
  }

  > p {
    line-height: 40px;
    margin: 25px 0;

    > em {
      font-weight: 700;
      font-style: normal;
    }
  }
}

.shots {
  grid-column: 3;
  grid-row: 5;
  align-self: flex-start;

  > .shot {
    background: white;
    border-radius: 4px;
    display: inline-block;
    margin-right: 33px;
    width: 218px;
    height: 160px;
    box-shadow: 0 12px 24px rgba(#1a0a53, 27%);
  }
}

.icons {
  grid-column: 3;
  grid-row: 6;
  justify-self: flex-end;

  > .svg-icon {
    margin-left: 22px;
    $size: 45px;
    width: $size;
    height: $size;
  }
}
</style>
