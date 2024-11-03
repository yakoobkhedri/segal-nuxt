<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} || سگال` : 'سگال'
    }
  })
</script>