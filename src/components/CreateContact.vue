<template>
  <div class="container mt-4">
    <h2>Add New Contact</h2>
    <form @submit.prevent="addContact">
      <div class="mb-3">
        <label class="form-label">First Name:</label>
        <input class="form-control" v-model="newContact.firstName" required/>
      </div>
      <div class="mb-3">
        <label class="form-label">Last Name:</label>
        <input class="form-control" v-model="newContact.lastName" required/>
      </div>
      <div class="mb-3">
        <label class="form-label">Email:</label>
        <input class="form-control" v-model="newContact.email" required/>
      </div>
      <button class="btn btn-primary" type="submit">Add Contact</button>
    </form>
  </div>
</template>
<script>
import { getContacts, saveContacts } from '../utils/storage'

export default {
  data() {
    return {
      newContact: {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
      }
    }
  },
  methods: {
    createContact() {
      const contacts = getContacts();
      this.newContact.id = contacts.length ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
      contacts.push(this.newContact);
      saveContacts(contacts);
      this.$emit('refreshContacts');
      this.newContact = { id: null, firstName: '', lastName: '', email: '' };
    }
  }
}
</script>
