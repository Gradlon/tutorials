import {mongo} from 'meteor/mongo';
export const Items = new Mongo.Collection('items');
export const Chats = new Mongo.Collection('chats');