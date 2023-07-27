<template>
  <div class="container my-3">
    <h2 class="my-3">Search Contacts</h2>
    <div class="input-group">
      <input type="text" class="form-control" v-model="searchQuery" @input="updateSearch" placeholder="Search contacts...">
    </div>
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
