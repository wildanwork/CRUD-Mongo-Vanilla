-- ini buat table inti dari entitas entitas
create table jurusan (
    kode_jurusan varchar (50) primary key not null,
    nama_jurusan text
);

create table mahasiswa(
    nim varchar(10) primary key not null,
    name varchar (50) not null,
    address text,
    jurusan varchar(50),
    foreign key (jurusan) references jurusan(kode_jurusan)
);

create table dosen (
    nid varchar(8) primary key not null,
    name varchar(50) not null
);

create table matakuliah(
    kode_matkul varchar(10) primary key not null,
    nama_matkul varchar(150),
    jumlah_sks integer
);

-- hubungan antara tabel  (many to many)
create table kontrak(
    id integer primary key autoincrement,
    nim varchar(10) not null,
    kode_matkul varchar(10) not null,
    id_dosen_pengampu varchar(20) not null,
    nilai varchar(2),
    foreign key (nim) references mahasiswa(nim) foreign key (kode_matkul) references matakuliah(kode_matkul) foreign key (id_dosen_pengampu) references dosen(nid)
);

--contoh entry data
insert into
    jurusan (kode_jurusan, nama_jurusan)
values
    ('BA22', 'Rekayasa Pertanian');

insert into
    jurusan (kode_jurusan, nama_jurusan)
values
    ('BE22', 'Rekayasa Hayati');

insert into
    mahasiswa(nim, name, address, jurusan)
values
    (
        '11421067',
        'Wildan Ismail',
        'jalan kopo sayati komp sukamenak indah blok b nomor 4',
        'BA22'
    );

insert into
    mahasiswa(nim, name, address, jurusan)
values
    (
        '11221068',
        'Rosdiana Anjelina',
        'jalan kopo sayati komp sukamenak indah blok b nomor 4',
        'BE22'
    );

insert into
    dosen (nid, name)
values
    ('0001', 'Arbie Rizqi');

insert into
    dosen (nid, name)
values
    ('0002', 'Yusuf Hafidh');

insert into
    matakuliah (kode_matkul, nama_matkul, jumlah_sks)
values
    ('BA2103', 'Kimia Pertanian', 3);

insert into
    matakuliah (kode_matkul, nama_matkul, jumlah_sks)
values
    ('BE2103', 'Termodinamika Sistem Hayati', 3);

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11421067', 'BA2103', '0001', 'A');

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11221068', 'BE2103', '0002', 'A');

update
    mahasiswa
set
    name = 'Rizka Kalsani'
where
    nim = '11221068';

.mode column.width 12 -6.width.mode markdown.modebox
insert into
    jurusan (kode_jurusan, nama_jurusan)
values
    ('BA22', 'Rekayasa Pertanian');

insert into
    jurusan (kode_jurusan, nama_jurusan)
values
    ('BE22', 'Rekayasa Hayati');

insert into
    mahasiswa(nim, name, address, jurusan)
values
    (
        '11421067',
        'Wildan Ismail',
        'jalan kopo sayati komp sukamenak indah blok b nomor 4',
        'BA22'
    );

insert into
    mahasiswa(nim, name, address, jurusan)
values
    (
        '11221068',
        'Rosdiana Anjelina',
        'jalan kopo sayati komp sukamenak indah blok b nomor 4',
        'BE22'
    );

insert into
    dosen (nid, name)
values
    ('0001', 'Arbie Rizqi');

insert into
    dosen (nid, name)
values
    ('0002', 'Yusuf Hafidh');

insert into
    matakuliah (kode_matkul, nama_matkul, jumlah_sks)
values
    ('BA2103', 'Kimia Pertanian', 3);

insert into
    matakuliah (kode_matkul, nama_matkul, jumlah_sks)
values
    ('BE2103', 'Termodinamika Sistem Hayati', 3);

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11421067', 'BA2103', '0001', 'A');

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11221068', 'BE2103', '0002', 'A');

update
    mahasiswa
set
    name = 'Rizka Kalsani'
where
    nim = '11221068';

.mode column.width 12 -6.width.mode markdown.mode table.mode box -- menampilkan seluruh data mahasiswa beserta jurusannya
select
    mahasiswa.nim,
    mahasiswa.name,
    mahasiswa.jurusan
from
    mahasiswa
    join jurusan on mahasiswa.jurusan = jurusan.kode_jurusan;

ALTER TABLE
    mahasiswa
ADD
    COLUMN umur integer
update
    mahasiswa
set
    umur = 18
where
    nim = '11421067';

update
    mahasiswa
set
    umur = 17
where
    nim = '11221068';

--untuk nomor 1 (menampilkan data mahasiswa dgn jurusan
select
    mahasiswa.nim,
    mahasiswa.name,
    jurusan.kode_jurusan,
    jurusan.nama_jurusan
from
    mahasiswa
    join jurusan on mahasiswa.jurusan = jurusan.kode_jurusan;

-- nomor 2 mahasiswa yg berumur kurang dari 20
select
    *
from
    mahasiswa
where
    umur < 20;

--nomor 3 mahasiswa dengan indeks lebih baik dari B
select
    kontrak.id,
    kontrak.nim,
    mahasiswa.name,
    kontrak.kode_matkul,
    kontrak.id_dosen_pengampu,
    kontrak.nilai,
    matakuliah.nama_matkul
from
    kontrak
    join matakuliah on matakuliah.kode_matkul = kontrak.kode_matkul
    join mahasiswa on mahasiswa.nim = kontrak.nim
where
    kontrak.nilai = 'A'
    or kontrak.nilai = 'AB';

-- nambah data lagi biar seru
insert into
    jurusan (kode_jurusan, nama_jurusan)
values
    ('BW22', 'Rekayasa kehutanan');

insert into
    mahasiswa (nim, name, address, jurusan, umur)
values
    (
        '11521067',
        'Rodrigo Ignasius',
        'Ciparay',
        'BW22',
        18
    );

insert into
    matakuliah(kode_matkul, nama_matkul, jumlah_sks)
values
    ('BW2101', 'Taksonomi Hewan', 3);

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11521067', 'BW2101', '0001', 'AB');

insert into
    dosen (nid, name)
values
    ('0003', 'Fainan Failani');

insert into
    matakuliah(kode_matkul, nama_matkul, jumlah_sks)
values
    ('KP3102', 'Kerja Praktek', 10);

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11421067', 'KP3102', '0003', 'A');

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11221068', 'KP3102', '0003', 'C');

insert into
    matakuliah(kode_matkul, nama_matkul, jumlah_sks)
values
    ('DM2103', 'Data Mining', '4');

insert into
    kontrak(nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11421067', 'DM2103', '0003', 'A');

insert into
    kontrak(nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11221068', 'DM2103', '0003', 'A');

-- nomor 4 menampilkan mahasiswa yang mengambil lebih dari 10 sks
select
    kontrak.id,
    kontrak.nim,
    mahasiswa.name,
    sum(matakuliah.jumlah_sks) as total_sks
from
    kontrak
    join matakuliah on matakuliah.kode_matkul = kontrak.kode_matkul
    join mahasiswa on mahasiswa.nim = kontrak.nim
group by
    name
having
    sum(matakuliah.jumlah_sks) > 10;

-- nomor 5 menampilkan mahasiswa yang mengambil matkul Data Mining
select
    kontrak.id,
    kontrak.nim,
    mahasiswa.name,
    matakuliah.nama_matkul
from
    kontrak
    join matakuliah on matakuliah.kode_matkul = kontrak.kode_matkul
    join mahasiswa on mahasiswa.nim = kontrak.nim
where
    matakuliah.kode_matkul = 'DM2103';

-- nomor 6 menampilkan jumlah mahasiswa untuk setiap dosen
select
     dosen.name,
    dosen.nid,
    count( distinct kontrak.nim) as jumlah_mahasiswa
from
    kontrak
    join dosen on kontrak.id_dosen_pengampu = dosen.nidm’at di awal waktu, maka ia seperti berqurban dengan u
    join mahasiswa on mahasiswa.nim = kontrak.nim
group by
    dosen.nid;

-- nomor 7 urutkan mahasiswa berdasarkan umurnya
select
    *
from
    mahasiswa
order by
    mahasiswa.umur desc;

-- nomor 8 tampilkan matkul yg harus diulang (indeks D/E) dan tampilkan mahasiswa,jurusan dan dosen secara lengkap
insert into
    matakuliah(kode_matkul, nama_matkul, jumlah_sks)
values
    ('KU1201', 'Pendidikan Adab', 2);

insert into
    matakuliah(kode_matkul, nama_matkul, jumlah_sks)
values
    ('KU2101', 'Pendidikan Bahasa Arab', 3);

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11221068', 'KU1201', '0001', 'D');

insert into
    kontrak (nim, kode_matkul, id_dosen_pengampu, nilai)
values
    ('11421067', 'KU2101', '0002', 'E');

update
    kontrak
set
    nim = '11521067'
where
    id = 9;

update
    mahasiswa
set
    address = 'moh toha'
where
    nim = '11221068';

--biar ga sama alamatnya
-- jawaban nomor 8
select
    mahasiswa.nim,
    mahasiswa.name,
    mahasiswa.address,
    mahasiswa.jurusan,
    jurusan.nama_jurusan,
    mahasiswa.umur,
    kontrak.kode_matkul,
    kontrak.id_dosen_pengampu,
    matakuliah.nama_matkul,
    kontrak.nilai,
    dosen.name as dosen_pengampu
from
    mahasiswa
    join kontrak using (nim)
    join dosen on kontrak.id_dosen_pengampu = dosen.nid
    join jurusan on mahasiswa.jurusan = jurusan.kode_jurusan
    join matakuliah on kontrak.kode_matkul = matakuliah.kode_matkul
where
    kontrak.nilai = 'D'
    or kontrak.nilai = 'E'
order by
    mahasiswa.name desc;

    -- cara nampilin umur biar tahun depan umur berubah
    ALTER TABLE mahasiswa update 