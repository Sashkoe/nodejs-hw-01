import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContactsArray = [];
    await writeContacts(JSON.stringify(emptyContactsArray, null, 2));
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
