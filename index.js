// const express = require('express');
// const mongoose = require('mongoose');
// const Event = require('./Event'); 


// mongoose.connect('mongodb://127.0.0.1:27017/restaurant0')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.log(err));

// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");


// app.get('/', async (req, res) => {
//     const events = await Event.find({});
//     res.render('home', { events });
// });


// app.get('/form', (req, res) => {
//     res.render('form');
// });


// app.post('/events', async (req, res) => {
//     const { eventname, price, image, } = req.body;
//     const event = new Event({ eventname, price, image });
//     await event.save();
//     res.redirect('/');
// });


// app.post('/events/delete/:id', async (req, res) => {
//     await Event.findByIdAndDelete(req.params.id);
//     res.redirect('/');
// });


// app.get('/events/edit/:id', async (req, res) => {
//     const event = await Event.findById(req.params.id);
//     res.render('edit', { event });
// });


// app.post('/events/update/:id', async (req, res) => {
//     const { eventname, price, image} = req.body;
//     await Dish.findByIdAndUpdate(req.params.id, { eventname, price, image });
//     res.redirect('/');
// });

// app.listen(1700, () => {
//     console.log('Server running on port 1700');
// });
import express from 'express';
const mongoose = require('mongoose');
const Event = require('./Event'); 

mongoose.connect('mongodb+srv://joshnamula2005:P6zUzRE5VBiNXnqz@cluster0.rrurj.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Middleware to disable caching for all responses
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
});

// Home route to display events
app.get('/', async (req, res) => {
    // Fetch the latest events
    const events = await Event.find({});
    console.log('Fetched events:', events);  // Log to verify fresh data
    res.render('home', { events });  // Send the updated events to the view
});

// Route to delete an event by ID
app.post('/events/delete/:id', async (req, res) => {
    console.log(`Deleting event with ID: ${req.params.id}`);
    await Event.findByIdAndDelete(req.params.id); // Delete the event from MongoDB
    res.redirect('/');  // Redirect to the home page to show the updated list
});

// Listen on the specified port
app.listen(1700, () => {
    console.log('Server running on port 1700');
});
