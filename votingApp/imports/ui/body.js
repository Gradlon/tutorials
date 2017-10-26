import {Template} from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Session} from 'meteor/session';

import {Items} from '../api/items';
import './body.html';
import './item.js';
import './chat.js';

Template.body.onCreated(function () {
    this.state = new ReactiveDict();
    Meteor.subscribe('allItems');
    Meteor.subscribe('allChats');
});
Template.body.helpers({
    items() {
        return Items.find({}, {
            limit: 6,
            sort: { lastUpdated: -1 }
        });
    },
    loggedIn() {
        return Meteor.userId();
    },
    showForm() {
        const instance = Template.instance();
        return instance.state.get('showForm');
    },
    bgColor() {
        return Session.get('bgColor');
    }
});

Template.body.events({
    'click .show-form'(event, instance) {
        Session.set('bgColor', 'green');
        instance.state.set('showForm', true);
    },
    'submit .new-items'(event, instance) {
        event.preventDefault();
        Meteor.call('createNewItem', event.target.item1.value, event.target.item2.value, (err, res)=>{
            if(err) {
                console.log(err)
            } else {
                Session.set('bgColor', 'white');
                instance.state.set('showForm', false);
                event.target.item1.value = '';
                event.target.item2.value = '';
            }
        });
    }
});
