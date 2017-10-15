import {Template} from 'meteor/templating';
import {Items} from '../api/items';
import {Chats} from '../api/items';

import './body.html';
import './item.js';
import './chat.js';

Template.body.helpers({
    items() {
        return Items.find({});
    },
    loggedIn() {
        return Meteor.userId();
    }
});

Template.body.events({
    'submit .new-items'(event) {
        event.preventDefault();
        Meteor.call('createNewItem', event.target.item1.value, event.target.item2.value, (err, res)=>{
            if(err) {
                console.log(err)
            } else {
                event.target.item1.value = '';
                event.target.item2.value = '';
            }
        });
    }
});
