<template>
  <div class="container mt-4">
    <h1>Contact Details</h1>
    <div class="card">
      <div class="card-body">
        <p><strong>First Name:</strong> {{ contact.firstName }}</p>
        <p><strong>Last Name:</strong> {{ contact.lastName }}</p>
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <button class="btn btn-primary" @click="editing = true">Edit Contact</button>
        <button class="btn btn-danger" @click="deleteContact">Delete Contact</button>
      </div>
    </div>

    <div v-if="editing" class="mt-4">
      <h2>Edit Contact</h2>
      <form @submit.prevent="updateContact">
        <div class="mb-3">
          <label class="form-label">First Name:</label>
          <input class="form-control" v-model="contact.firstName" required/>
        </div>
        <div class="mb-3">
          <label class="form-label">Last Name:</label>
          <input class="form-control" v-model="contact.lastName" required/>
        </div>
        <div class="mb-3">
          <label class="form-label">Email:</label>
          <input class="form-control" v-model="contact.email" required/>
        </div>
        <button class="btn btn-success" type="submit">Save Changes</button>
      </form>
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
      };
    },
    created() {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
    this.contacts = JSON.parse(storedContacts);
    this.contact = this.contacts.find(contact => contact.id === Number(this.$route.params.id));
  }
}
,
    methods: {
      updateContact() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts.map(contact => contact.id == this.contact.id ? {...this.contact} : contact )));
        this.editing = false;
      },
      deleteContact() {
        this.contacts = this.contacts.filter(contact => contact.id != this.contact.id);
        saveContacts(this.contacts);
        this.$router.push('/contacts');
      },
    }
  }
  </script>
  