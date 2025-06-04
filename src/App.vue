<script setup lang="ts">
</script>

<template>
  <nav class="position-fixed fixed-top">
    <RouterLink to="/" class="text-decoration-none">Home |</RouterLink>
    <RouterLink to="/about" class="text-decoration-none">About |</RouterLink>
    <RouterLink to="/signup" class="text-decoration-none">Signup |</RouterLink>
    <RouterLink to="/login" class="text-decoration-none">Login |</RouterLink>
    <RouterLink to="/computed" class="text-decoration-none">Computed |</RouterLink>
    <RouterLink to="/palindrome" class="text-decoration-none">Palindrome |</RouterLink>
    <RouterLink to="/blog" class="text-decoration-none">Blog |</RouterLink>
    <RouterLink to="/parent" class="text-decoration-none">Parent-Props |</RouterLink>
    <RouterLink to="/studentsignup" class="text-decoration-none">Student Sign Up |</RouterLink>
    <RouterLink to="/studentlogin" class="text-decoration-none">Student Login |</RouterLink>
    <RouterLink to="/parentEmit" class="text-decoration-none">Parent Event Emitter |</RouterLink>
    <RouterLink to="/chat" class="text-decoration-none">CHAT APP |</RouterLink>
    <RouterLink to="/pinia" class="text-decoration-none">Pinia |</RouterLink>
    <RouterLink to="/register" class="text-decoration-none">PiniaRegisterComponent |</RouterLink>
    <RouterLink to="/vuelidate" class="text-decoration-none">Vue Validation</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
