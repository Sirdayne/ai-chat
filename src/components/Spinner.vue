<script setup>
</script>

<template>
  <div class="ai-spinner"></div>
</template>

<style>
.ai-spinner {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #1b84ff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
