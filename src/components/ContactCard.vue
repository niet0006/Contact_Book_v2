<template>
  <div class="card h-100 d-flex flex-column">
    <div class="card-body d-flex flex-column">
      <h3 class="card-title">{{ contact.firstName }} {{ contact.lastName }}</h3>
      <p class="card-text">Email: {{ contact.email }}</p>
      <router-link :to="`/contact/${contact.id}`" class="btn btn-primary mt-auto">View Details</router-link>
    </div>
  </div>
</template>


  <script>
  export default {
    name: 'ContactCard',
    props: ['contact'],
  }
  </script>
  