<template>
  <div class="container my-3">
    <h1 class="text-center">Contact List</h1>
    <ContactSearch @update:contacts="updateContacts"/>
    <div class="row justify-content-center">
      <ContactCard 
        v-for="contact in filteredContacts" 
        :key="contact.id"
        :contact="contact"
        class="col-sm-6 col-md-4 col-lg-3 mb-4"
      />
    </div>
    <CreateContact @refreshContacts="getContactsFromStorage"/>
  </div>
</template>

<script>
import { getContacts } from '../utils/storage'
import ContactSearch from '../components/ContactSearch.vue'
import ContactCard from '../components/ContactCard.vue'
import CreateContact from '../components/CreateContact.vue'


export default {
  data() {
    return {
      contacts: [],
      search: '',
    }
  },
  components: {
    ContactSearch,
    CreateContact,
    ContactCard
  },
  computed: {
    filteredContacts() {
      if (this.search) {
        return this.contacts.filter(contact => contact.firstName.toLowerCase().includes(this.search.toLowerCase()) || contact.lastName.toLowerCase().includes(this.search.toLowerCase()));
      } else {
        return this.contacts;
      }
    }
  },
  methods: {
    getContactsFromStorage() {
      this.contacts = getContacts();
    },
    updateContacts(contacts) {
      this.contacts = contacts;
    }
  },
  created() {
    this.getContactsFromStorage();
  }
}
</script>

<style scoped>
</style>
