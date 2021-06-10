<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Animations</h1>
          <hr>
          <mdb-btn color="primary" @click="show = !show">Show Alert</mdb-btn>
          <br>
          <select v-model="animation" class="form-control">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
          </select>
          <br>
          <transition name="fade">
            <q-tab-panel v-show="show" name="mails">
              <div class="text-h6">Info</div>
              Some text Fade
            </q-tab-panel>
          </transition>
          <transition name="slide" type="animation"> <!--Used to determin waht time of animation is relevant for animation dration -->
            <q-tab-panel v-if="show" name="mails">
              <div class="text-h6">Info</div>
              Some text
            </q-tab-panel>
          </transition>
          <transition name="slide" appear>
            <q-tab-panel v-if="show" name="mails">
              <div class="text-h6">Info</div>
              Some text on load
            </q-tab-panel>
          </transition>
          <transition
          appear
          enter-class=""
          enter-active-class="animated bounce"
          leave-class=""
          leave-active-class="animated shake"
          >
            <q-tab-panel v-if="show" name="mails">
              <div class="text-h6">Info</div>
              Some text on load
            </q-tab-panel>
          </transition>
        <transition :name="animation" appear>
            <q-tab-panel v-if="show" name="mails">
              <div class="text-h6">Info</div>
              Some text on load Dynmaic
            </q-tab-panel>
          </transition>
          <hr>
          <transition name="slide" appear mode="out-in">
            <q-tab-panel v-if="show" name="mails" key="info">
              <div class="text-h6">Info</div>
              Some text on load
            </q-tab-panel>
            <q-tab-panel v-if="!show" name="mails" key="warning"> <!-- v-else also works -->
              <div class="text-h6">Warning</div>
              Some text on load
            </q-tab-panel>
          </transition>
          <hr>
          <mdb-btn gradient="peach" rounded @click="load = !load">Load / remove</mdb-btn>
          <br><br>
          <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
          >
            <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
          </transition>
          <hr>
          <mdb-btn color="success" rounded
          @click="toggle">Toggel Components</mdb-btn>
          <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
          </transition>
          <hr>
          <mdb-btn color="primary" rounded
          @click="addItem">Add Item</mdb-btn>
          <ul>
            <transition-group name="slide">
              <li
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)"
              :action="true"
              style="cursor: pointer"
              >{{number}}</li>
            </transition-group>
          </ul>
  <mdb-container>
    <mdb-alert color="primary">
      This is a primary alert—check it out!
    </mdb-alert>
    <mdb-alert color="secondary">
      This is a secondary alert—check it out!
    </mdb-alert>
    <mdb-alert color="success">
      This is a success alert—check it out!
    </mdb-alert>
    <mdb-alert color="danger">
      This is a danger alert—check it out!
    </mdb-alert>
    <mdb-alert color="warning">
      This is a warning alert—check it out!
    </mdb-alert>
    <mdb-alert color="info">
      This is a info alert—check it out!
    </mdb-alert>
    <mdb-alert color="light">
      This is a light alert—check it out!
    </mdb-alert>
    <mdb-alert color="dark">
      This is a dark alert—check it out!
    </mdb-alert>
  </mdb-container>
        </div>
      </div>
    </div>
</template>

<script>
import DangerAler from '../../components/DangerAlert'
import SuccessAlert from '../../components/SuccessAlert'
export default {
  components: {
    appDangerAlert: DangerAler,
    appSuccessAlert: SuccessAlert
  },
  data () {
    return {
      show: true,
      animation: 'fade',
      load: true,
      elementWidth: 100,
      selectedComponent: 'app-Danger-Alert',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    addItem () {
      const pos = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(pos, 0, this.numbers.length + 1)
    },
    removeItem (index) {
      console.log('removed')
      this.numbers.splice(index, 1)
    },
    toggle () {
      this.selectedComponent === 'app-success-alert' ? this.selectedComponent = 'app-danger-alert' : this.selectedComponent = 'app-success-alert'
    },
    beforeEnter (el) {
      console.log('beforeEnter')
      this.elementWidth = 100
      el.style.width = this.elementWidth + 'px'
    },
    enter (el, done) {
      console.log('enter')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterEnter (el) {
      console.log('afterEnter')
    },
    enterCancelled (el) {
      console.log('enterCanceled')
    },
    beforeLeave (el) {
      console.log('beforeLeave')
      this.elementWidth = 300
      el.style.width = this.elementWidth + 'px'
    },
    leave (el, done) {
      console.log('done')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterLeave (el) {
      console.log('afterLeave')
    },
    leaveCancelled (el) {
      console.log('leaveCancelled')
    }
  }
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }
  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
