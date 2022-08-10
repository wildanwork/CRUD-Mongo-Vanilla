class Tyre {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    }
}

class Car {
    constructor(tyre, seat, door, variant, year) {
        this.tyre = tyre
        this.seat = seat
        this.door = door
        this.variant = variant
        this.productionYear = year
        this.enginecode = CarFactory.generateUUID()
    }


}

class avanza extends Car {
    constructor(year) {
        super(new Tyre('Dunloop', 15), 7, 4, 'Avanza', year)
        this.garansi = 5
    }

}




class agya extends Car {
    constructor(year) {
        super(new Tyre('Bridgestone', 14), 5, 4, 'Agya', year)
        this.garansi = 4
    }

}



class CarFactory {
    constructor(company) {
        this.cars = []
        this.company = company
    }

    static generateUUID() { // Public Domain/MIT
        var d = new Date().getTime(); //Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16; //random number between 0 and 16
            if (d > 0) { //Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else { //Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    static random() {
        return Math.floor(Math.random() * 50) + 1

    }
    produksi(year) {
        let awal = 0;
        for (let i = 0; i < CarFactory.random(); i++) {
            const mobil1 = new agya(year)
            this.cars.push(mobil1)
            awal++
        }
        let awal1 = 0;
        for (let i = 0; i < CarFactory.random(); i++) {
            const mobil2 = new avanza(year)
            this.cars.push(mobil2)
            awal1++
        }
        console.log(`pada tahun ${year} perusahaan ${this.company} memproduksi sebanyak ${awal} mobil agya dan ${awal1} mobil avanza `)
        console.log(this.cars[0].garansi + this.cars[0].productionYear)
    }

    tesGaransi(year) {
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].variant == 'Avanza') {
                if (this.cars[i].productionYear + 5 < year) {
                    console.log(`\n Garansi mobil Avanza\n dengan tahun produksi : ${this.cars[i].productionYear}\n dan nomor mesin : ${this.cars[i].enginecode}\n sudah habis`)
                } else {
                    console.log(`\n Garansi mobil Avanza\n dengan tahun produksi : ${this.cars[i].productionYear}\n dan nomor mesin : ${this.cars[i].enginecode} \n masih tersedia`)
                }
            } else if (this.cars[i].variant == 'Agya') {
                if (this.cars[i].productionYear + 4 < year) {
                    console.log(`\n Garansi mobil Agya\n dengan tahun produksi : ${this.cars[i].productionYear}\n dan nomor mesin : ${this.cars[i].enginecode} \n sudah habis`)
                } else {
                    console.log(`\n Garansi mobil Agya\n dengan tahun produksi : ${this.cars[i].productionYear} \n dan nomor mesin : ${this.cars[i].enginecode} \n masih tersedia`)
                }
            }
        }


    }
}


// const x = new avanza()
// console.log(x.tyre)
// const y = new agya()
// console.log(y.seat)
const pabrik = new CarFactory('toyota')
pabrik.produksi(2022)
pabrik.tesGaransi(2027)