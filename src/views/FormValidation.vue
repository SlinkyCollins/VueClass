<template>
  <div class="mt-5">
    <form @submit.prevent="submitForm">
      <input type="text" placeholder="Firstname" name="firstname" v-model="form.firstname">
      <div v-if="v$.form.firstname.$dirty">
        <div v-for="(error, index) in v$.form.firstname.$errors" :key="index">
          <p>{{ error.$message }}</p>
        </div>
      </div>

      <input type="email" placeholder="Email Address" name="email" v-model="form.email">
      <div v-if="v$.form.email.$dirty">
        <div v-for="(error, index) in v$.form.email.$errors" :key="index">
          <p>{{ error.$message }}</p>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      form: {
        firstname: '',
        email: ''
      },
      v$: {} as ReturnType<typeof useVuelidate>
    }
  },
  validations() {
    return {
      form: {
        firstname: { required, minLength: minLength(3) },
        email: { required, email }
      }
    }
  },
  created() {
    this.v$ = useVuelidate()
  },
  methods: {
    submitForm() {
      this.v$.$touch()
      if (this.v$.$invalid) {
        console.log('form is invalid')
      } else {
        console.log('form is valid')
      }
    }
  }
})
</script>
