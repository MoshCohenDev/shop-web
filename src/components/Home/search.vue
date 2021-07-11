<template>
  <div class="q-pt-lg q-ma-sm col">
    <q-select
      v-model="model"
      use-input
      hide-selected
      label="מה תרצה לחפש"
      fill-input
      rounded outlined
      input-debounce="0"
      :options="options"
      @filter="filterFn">
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            No results
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>
<script>
import {ref} from 'vue'

const stringOptions = []
const options = ref(stringOptions)
export default {
  data() {
    return {
      model: ref(null), options,
      filterFn(val, update) {
        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  },
}
</script>

<style scoped>

</style>
