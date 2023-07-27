<template>
  <div>
    <h2>Search Contacts</h2>
    <input v-model="searchQuery">
  </div>
</template>

<script>
import { getContacts } from '../utils/storage';

export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  watch: {
    searchQuery() {
      this.$emit('update:contacts', this.searchContacts);
    }
  },
  computed: {
    searchContacts() {
      let lowerCaseSearchQuery = this.searchQuery.toLowerCase();
      return getContacts().filter(contact =>
        contact.firstName.toLowerCase().includes(lowerCaseSearchQuery) ||
        contact.lastName.toLowerCase().includes(lowerCaseSearchQuery)
      );
    }
  }
}
</script>
