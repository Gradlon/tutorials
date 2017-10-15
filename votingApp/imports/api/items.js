import {mongo} from 'meteor/mongo';
import './methods';
export const Items = new Mongo.Collection('items');
export const Chats = new Mongo.Collection('chats');