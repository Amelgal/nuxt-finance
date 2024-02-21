<template>
  <div>
    <div class="font-bold" :class="{
          'green': trend,
          'red': !trend,
        }">
      {{ title }}
    </div>

    <div class="text-2xl font-bold" :class="{
          'green': trend,
          'red': !trend,
        }">
      <USkeleton v-if="loading" class="h-8 w-full mb-1"/>
      <div v-else class="space-y-2">
        {{ currency }}
      </div>
    </div>

    <div>
      <USkeleton v-if="loading" class="h-6 w-full"/>
      <div v-else class="flex space-x-1 items-center text-sm">
        <!--    https://icones.js.org/    -->
        <UIcon :name="trendIcon" class="w-6 h-6" :class="{
          'green': trend,
          'red': !trend,
        }"/>
        <div class="text-gray-500 dark:text-gray-400">
          {{ percentageTrend }} vs last period
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  lastAmount: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})

const trend = computed(
    () => props.amount > props.lastAmount
)

const trendIcon = computed(
    () => trend.value ? 'i-heroicons-arrow-trending-up' : 'i-heroicons-arrow-trending-down'
)

const {currency} = useCurrency(props.amount)

const percentageTrend = computed(
    () => {
      if (props.amount === 0 || props.lastAmount === 0) return 'inf'

      const bigger = Math.max(props.amount, props.lastAmount)
      const smaller = Math.min(props.amount, props.lastAmount)

      return `${((bigger - smaller) / smaller * 100).toFixed(2)}%`
    }
)
</script>

<style scoped>
.green {
  @apply text-green-600 dark:text-green-400;
}

.red {
  @apply text-red-600 dark:text-red-400;
}
</style>