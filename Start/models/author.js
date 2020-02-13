var mongoose = require('mongoose');

console.log('Initializing author schema');

var authorSchema = new mongoose.Schema({
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

authorSchema.virtual('fullName').get(function () {
    var fullName = this.firstName + ' ';
    if (this.middleName && this.middleName.length) {
        fullName += this.middleName + ' ';
    }
    fullName += this.lastName;

    return fullName;
});


authorSchema.virtual('age').get(function (){
    var ageDifMs = Date.now() - this.birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    
});

authorSchema.virtual('numberOfBooks').get(function (){
    return this.books.length;
});
/*
    TODO: 7 - Projecting:
    - fullname is een property die opgehaald wordt
    - age is een property die opgehaald wordt
    - numberOfBooks is een property die opgehaald wordt
*/

mongoose.model('Author', authorSchema);