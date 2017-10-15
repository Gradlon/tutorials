import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Items} from './items';
import {Chats} from './items';

Meteor.methods({
   createNewItem(itemOne, itemTwo) {
       check(itemOne, String);
       check(itemTwo, String);
       Items.insert({
           itemOne: {
               text:itemOne,
               value: 0
           },
           itemTwo: {
               text:itemTwo,
               value: 0
           }
       });
   },
    createNewMessage(message, time, user) {
        check(message, String);
        check(time, String);
        check(user, String);
        Chats.insert({
            chat: {
                text:message,
                time: time,
                user: user
            }
        });
    },
    voteOnItem(which, id){
       check(which,String);
       check(id, String);
       if(which === 'itemOne') {
           Items.update(id, {
               $inc:{'itemOne.value': 1}
           });
       } else {
           Items.update(id, {
               $inc:{'itemTwo.value': 1}
           });
       }
    }
});