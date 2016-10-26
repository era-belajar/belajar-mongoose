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

mobilSchema.methods.custom = function() {
	var lamborgini = this.nama ? "Nama mobil adalah " + this.nama : "Mobil tak punya nama";
	console.log(lamborgini);
}

var Mobil = mongoose.model('Mobil', mobilSchema);

var car = new Mobil({ nama: 'Ferarri' });
car.custom();



