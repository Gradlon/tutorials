import {Template} from 'meteor/templating';
import {Chats} from '../api/items';
import './chat.html';

Template.body.helpers({
    chats() {
        return Chats.find({});
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
        Chats.insert({
            chat: {
                text:event.target.nachricht.value,
                name:event.target.name.value,
                time: h + ':' + m + ':' + s
            }
        });
        event.target.nachricht.value = '';
    }
});