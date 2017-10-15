import {Template} from 'meteor/templating';
import {Chats} from '../api/items';
import './chat.html';

Template.body.helpers({
    chats() {
        return Chats.find({});
    },
    userName() {
        return Meter.user().emails[0].address;
    }
});

Template.body.events({
    'submit .chat'(event) {
        event.preventDefault();
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        time = h + ':' + m + ':' + s;

        Meteor.call('createNewMessage', event.target.nachricht.value, time, Meteor.user().emails[0].address, (err, res)=>{
            if(err) {
                console.log(err)
            } else {
                event.target.nachricht.value = '';
            }
        });
    }
});