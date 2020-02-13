var mongoose = require('mongoose');

console.log('Initializing books schema');

var bookSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    country: { type: String, default: 'NL' },
    ranking: { type: Number, unique: true, min: 1 },
    books: [{ type: String, ref: 'Book' }]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

/*
TODO: 5 - Virtual property totalNumberOfPages, opgebouwd uit numberOfPages van chapters)
- De benodigde extra validation
- De benodigde query methods
- De benodigde instance methods
*/

mongoose.model('Book', bookSchema);




