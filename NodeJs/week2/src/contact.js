class Contact {
  constructor(name, phone) {
      if (arguments.length !== 2) throw "Error: wrong number of arguments";
      if (typeof name !== 'string' || name.length == 0) throw "Error: name is not a string or is too short";
      if (typeof phone !== 'string' || phone.length < 8) throw "Error: phone is not a string or is too short";
      this.name = name
      this.phone = phone
  }
}

class ContactList {

  constructor() {
      this._list = []; // this will store my contacts
  }
  
  /**
   * Method for add contact
   * @param { {name: string, phone: string} } contact 
   */
  add(contact) {
      if (!(contact instanceof Contact)) throw `Error: a contact is not of type contact`
      if (typeof this.search(contact.name) == 'number') {
          throw `Error: a contact with the name ${contact.name} already exists`
      }
      if (typeof this.search(contact.phone, 'phone') == 'number') {
          throw `Error: a contact with the phone ${contact.phone} already exists`
      }
      this._list.push(contact);
  }

  // Delete
  delete(index) {
      if (index == null) {
          this._list.pop()
      } else if (typeof index == 'number') {
          if (this._list[index]) {
              this._list.splice(index, 1);
          } else {
              throw `Error: no element at index: ${index}`;
          }
      } else {
          throw `Error: index must be a number`;
      }
  }

  /**
   * 
   * @param {string} name 
   * @param {{ name?: string, phone?: string }} new_contact 
   */
  edit(name, new_contact) {
      const index = this.search(name);
      if (typeof index == 'undefined') {
          throw "Error: you must pass an index"
      } else if (typeof index == 'number') {
          if (this._list[index]) {
              const temp_contact = {...this._list[index], ...new_contact}
              this._list[index] = new Contact(temp_contact.name, temp_contact.phone);
          } else {
              throw `Error: no element at index: ${index}`;
          }
      } else {
          throw `Error: index must be a number`;
      }
  }

  /**
   * Search in the list (will search name by default)
   * @param {string} value 
   * @param {string} key 
   */
  search(value, key="name") {
      let index;
      this._list.some((contact, i) => {
          if (contact[key] === value) {
              index = i;
              return true
          }
      })
      return index;
  }

  /**
   * Returns all the contacts
   */
  getAllContacts() {
      return this._list;
  }
}

module.exports = {
  Contact,
  ContactList
}