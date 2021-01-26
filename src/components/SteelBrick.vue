<template>
  <div class="red-brick brick"></div>
</template>

<script lang="ts">
// import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import BaseBrick from '../controllers/BaseBrick';

@Component({
  name: 'SteelBrick',
})
export default class RedBrick extends BaseBrick {

}
</script>