<template>
  <div class="mt-5">
    <form @submit.prevent="submitForm">
      <input type="text" placeholder="Firstname" v-model="form.firstname" />
      <div v-if="v$.form.firstname.$dirty">
        <div v-for="(error, index) in v$.form.firstname.$errors" :key="index">
          <p>{{ error.$message }}</p>
        </div>
      </div>

      <input type="email" placeholder="Email Address" v-model="form.email" />
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
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

export default {
  setup() {
    const form = reactive({
      firstname: '',
      email: ''
    })

    const rules = {
      form: {
        firstname: { required, minLength: minLength(3) },
        email: { required, email }
      }
    }

    const v$ = useVuelidate(rules, { form })

    const submitForm = () => {
      v$?.value.$touch()
      if (v$?.value.$invalid) {
        console.log('form is invalid')
      } else {
        console.log('form is valid')
      }
    }

    return {
      form,
      v$,
      submitForm
    }
  }
}
</script>
