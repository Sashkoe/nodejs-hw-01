import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
    const buffer = await readContacts();
    const prevContacts = buffer ? JSON.parse(buffer) : [];
    const updatedContacts = [...prevContacts, createFakeContact()];
    await writeContacts(JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};
addOneContact();
