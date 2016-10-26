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

var lamborgini = new Mobil({
	nama: 'Aventador',
	merk: 'Lamborgini',
	tahunPembuatan: 2015,
	tanggalUpdate: new Date(),
	transmisi: {
		manual: true,
		outomatic: false
	}
});

console.log(lamborgini);

lamborgini.save(function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log('berhasil menyimpan');
	}
});


