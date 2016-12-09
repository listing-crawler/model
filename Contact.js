'use strict';

class Contact {
    static type_agent = 'agent';
    static type_seller = 'seller';

    constructor() {
        this.id = null;
        this.name = null;
        this.address = null;
        this.gps = null;
        this.www = null;
        this.type = null;
        this.emails = [];
        this.phones = [];
    }

    addEmail(email)
    {
        this.emails.push(email);
    }

    addPhone(phone)
    {
        this.phones.push(phone);
    }
}

module.exports = Agent;
