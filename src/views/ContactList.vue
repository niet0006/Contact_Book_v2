<template>
  <div>
    <h1>Contact List</h1>
    <ContactSearch @update:contacts="updateContacts"/>
    <CreateContact @refreshContacts="getContactsFromStorage"/>
    <div class="row">
      <div v-for="contact in filteredContacts" :key="contact.id" class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <router-link :to="`/contact/${contact.id}`">
                {{ contact.firstName }} {{ contact.lastName }}
              </router-link>
            </h5>
            <p class="card-text">{{ contact.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContacts } from '../utils/storage'
import ContactSearch from '../components/ContactSearch.vue'
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
    CreateContact
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
