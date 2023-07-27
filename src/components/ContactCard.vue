<template>
    <div class="contact-card">
      <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
      <p>Email: {{ contact.email }}</p>
      <router-link :to="`/contact/${contact.id}`">View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactCard',
    props: ['contact'],
  }
  </script>
  