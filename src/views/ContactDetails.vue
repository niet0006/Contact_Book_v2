<template>
  <div class="container mt-4">
    <h1 class="text-center">Contact Details</h1>
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">{{ contact.firstName }} {{ contact.lastName }}</h5>
        <p class="card-text">Email: {{ contact.email }}</p>
        <button class="btn btn-primary mr-2" @click="editing = true">Edit Contact</button>
        <button class="btn btn-danger" @click="deleteContact">Delete Contact</button>
      </div>
    </div>
    
    <div v-if="editing" class="card mt-4">
      <div class="card-body">
        <h2>Edit Contact</h2>
        <form @submit.prevent="updateContact">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" v-model="contact.firstName" required/>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="contact.lastName" required/>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="contact.email" required/>
          </div>
          <button type="submit" class="btn btn-success mt-3">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      contact: {},
      contacts: [],
      editing: false,
    }
  },
  created() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
      this.contact = this.contacts.find(contact => contact.id === Number(this.$route.params.id));
    }
  },
  methods: {
    updateContact() {
      localStorage.setItem('contacts', JSON.stringify(this.contacts.map(contact => contact.id === this.contact.id ? { ...this.contact } : contact)));
      this.editing = false;
    },
    deleteContact() {
      this.contacts = this.contacts.filter(contact => contact.id !== this.contact.id);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      this.$router.push('/'); 
    },
  },
}
</script>
