<template>
  <div class="h-full w-full">
    <div class="w-full h-full mx-auto bg-slate-700">
      <div class="h-1/2">
        
      </div>
      <div class="h-1/2 bg-slate-600 flex flex-col">
        <div class="flex-auto flex" v-for="(tier, t) in 4" :key="tier">
          <div class="flex-auto m-1 rounded-md border relative" v-for="(section, s) in (4-t)" :key="section">
            <div class="absolute-center text-white text-3xl opacity-50">
              <f-icon icon="dice-three"/>
            </div>
          </div>
        </div>
        <div class="flex-auto flex bg-slate-500 m-1 rounded-md border">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameView',
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>