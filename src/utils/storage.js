
const defaultContacts = [
  {
    id: 1,
    firstName: 'Carlos',
    lastName: 'Nieto',
    email: 'carlosnieto@gmail.com',
  },
  {
    id: 2,
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'Parker@gmail.com',
  },
  {
    id: 3,
    firstName: 'Danny',
    lastName: 'Smith',
    email: 'Danny_smith@hotmail.com',
  },
  {
    id: 4,
    firstName: 'Yi',
    lastName: 'ang',
    email: 'yiyiyi@hotmail.com',
  },
];

export const getContacts = () => {
  const contacts = localStorage.getItem('contacts');
  
  if (!contacts) {
    saveContacts(defaultContacts);
    return defaultContacts;
  }
  
  return JSON.parse(contacts);
}
  
export const saveContacts = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}
