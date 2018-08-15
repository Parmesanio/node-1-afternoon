const express       = require('express');

let messagesArray   = [],
    id              = 0;

    module.exports = {
        create: (req, res) => {
            const {text, time} = req.body;
            messagesArray.push({id, text, time});
            id++;
            res.status(200).send( messagesArray );
        },
        read: (req, res) => {
            res.status(200).send(messagesArray);
        },
        update: (req, res) => {
            const { id } = req.params;
            const { text } = req.body;
            let index = messagesArray.findIndex(message => message.id == id);
            if (index !== -1) {
                messagesArray[index].text = text;
                res.status(200).send(messagesArray);
            } else {
                res.status(400).send('No no no');
            }
        },
        delete: (req, res) => {
            const { id } = req.params;
            let index = messagesArray.findIndex(message => message.id == id);
            if (index !== -1) {
                messagesArray.splice(index, 1);
                res.status(200).send(messagesArray);
            } else {
                res.status(400).send('No such message exists');
            }
        }
    }