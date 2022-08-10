-- ini buat table inti dari entitas entitas
create table jurusan (kode_jurusan varchar (50) primary key not null , nama_jurusan text);
create table mahasiswa(nim varchar(10) primary key not null,name varchar (50) not null , address text,jurusan varchar(50),foreign key (jurusan) references jurusan(kode_jurusan));
create table dosen (nid varchar(8) primary key not null , name varchar(50)not null);
create table matakuliah(kode_matkul varchar(10) primary key not null, nama_matkul varchar(150),jumlah_sks integer);
-- hubungan antara tabel  (many to many)
create table kontrak(
    id integer primary key autoincrement,
    nim varchar(10) not null,
    kode_matkul varchar(10) not null,
    id_dosen_pengampu varchar(20) not null,
    nilai varchar(2),
    foreign key (nim) references mahasiswa(nim)
    foreign key (kode_matkul) references matakuliah(kode_matkul)
    foreign key (id_dosen_pengampu) references dosen(nid)
);
--contoh entry data
insert into jurusan (kode_jurusan,nama_jurusan) values('BA22','Rekayasa Pertanian');
insert into jurusan (kode_jurusan,nama_jurusan) values('BE22','Rekayasa Hayati');
insert into mahasiswa(nim,name,address,jurusan) values ('11421067','Wildan Ismail','jalan kopo sayati komp sukamenak indah blok b nomor 4','BA22');
insert into mahasiswa(nim,name,address,jurusan) values ('11221068','Rosdiana Anjelina','jalan kopo sayati komp sukamenak indah blok b nomor 4','BE22');
insert into dosen (nid,name) values ('0001','Arbie Rizqi');
insert into dosen (nid,name) values ('0002','Yusuf Hafidh');
insert into matakuliah (kode_matkul,nama_matkul,jumlah_sks)values ('BA2103','Kimia Pertanian',3);
insert into matakuliah (kode_matkul,nama_matkul,jumlah_sks)values ('BE2103','Termodinamika Sistem Hayati',3);
insert into kontrak (nim,kode_matkul,id_dosen_pengampu,nilai)values ('11421067','BA2103','0001','A');
insert into kontrak (nim,kode_matkul,id_dosen_pengampu,nilai)values ('11221068','BE2103','0002','A');
update mahasiswa set name = 'Rizka Kalsani' where nim = '11221068';
.mode column
.width 12 -6
.width
.mode markdown
.mode table 
.mode box
