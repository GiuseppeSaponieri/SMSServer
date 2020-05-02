const cors = require ('cors');
const twilio = require ('twilio');
const express = require ('express');

const accountsid='AC5ae5323ca8929d6601a820607f83c312'
const authtoken='f46c2aa82a81df27d64488c9a39c2f2e'
const client= new twilio(accountsid,authtoken)

const app=express()


app.use(cors())
app.get('/',(req,res)=> {
    res.send('Giuseppe Saponieri SMS server with express')
})


// twilio text
app.get('/send-text', (req,res) => {
    const { recipient, textmessage} = req.query
    client.messages.create({
    body: textmessage,
    to: recipient,
    from: '+19735200461'
    }) 
})


app.listen(4000, () =>console.log('running on 4000'))

