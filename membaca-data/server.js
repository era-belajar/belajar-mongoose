var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mobil');

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connection success');
});

var mobilSchema = mongoose.Schema({
	nama: String,
	merk: String,
	tahunPembuatan: Number,
	tanggalUpdate: Date,
	transmisi: {
		manual: Boolean,
		outomatic: Boolean
	}
});

var Mobil = mongoose.model('Mobil', mobilSchema);

Mobil.find(function (err, mobils) {
	if (err)
		return console.error(err);
	console.log(mobils);
})


