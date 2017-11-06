import {mongo} from 'meteor/mongo';
import './methods';
export const Items = new Mongo.Collection('items');
export const Chats = new Mongo.Collection('chats');

if(Meteor.isServer) {
    Meteor.publish('allItems', function() {
        return Items.find({});
    });
    Meteor.publish('allChats', function () {
        return Chats.find({});
    });
}