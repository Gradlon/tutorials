import {Template} from 'meteor/templating';
import {Items} from '../api/items';
import './item.html';

Template.item.events({
    'click .vote-one'(evnet) {
    Meteor.call('voteOnItem', 'itemOne', this._id);
    },
    'click .vote-two'(evnet) {
        Meteor.call('voteOnItem', 'itemTwo', this._id);
    }
});