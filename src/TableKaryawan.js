import React from 'react';
import './styles.css'; // Import file CSS

// Contoh data karyawan
const karyawanData = [
  {
    no: 1,
    foto: '/Foto%20karyawan/ely.png',
    nama: 'John Doe',
    id: 'JD001',
    gaji: 5000000,
    bonus: 500000
  },
  {
    no: 2,
    foto: '/Foto%20karyawan/mie.jpeg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  },
  {
    no: 3,
    foto: '/Foto%20karyawan/nur.jpg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  },
  {
    no: 4,
    foto: '/Foto%20karyawan/yin.jpg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  },
  {
    no: 5,
    foto: '/Foto%20karyawan/mie2.jpg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  },
  {
    no: 6,
    foto: '/Foto%20karyawan/ely.png',
    nama: 'John Doe',
    id: 'JD001',
    gaji: 5000000,
    bonus: 500000
  },
  {
    no: 7,
    foto: '/Foto%20karyawan/mie.jpeg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  },
  {
    no: 8,
    foto: '/Foto%20karyawan/nur.jpg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  },
  {
    no: 9,
    foto: '/Foto%20karyawan/yin.jpg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  },
  {
    no: 10,
    foto: '/Foto%20karyawan/mie2.jpg',
    nama: 'Jane Smith',
    id: 'JS002',
    gaji: 6000000,
    bonus: 600000
  }
];

function TableKaryawan() {
  return (
    <div className="table-container">
      <table className="table-auto">
        <thead>
          <tr>
            <th>No</th>
            <th>Foto</th>
            <th>Nama</th>
            <th>ID</th>
            <th>Gaji</th>
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>
          {karyawanData.map((karyawan) => (
            <tr key={karyawan.id}>
              <td>{karyawan.no}</td>
              <td><img src={karyawan.foto} alt={karyawan.nama} className="photo" /></td>
              <td>{karyawan.nama}</td>
              <td>{karyawan.id}</td>
              <td>Rp {karyawan.gaji.toLocaleString('id-ID')}</td>
              <td>Rp {karyawan.bonus.toLocaleString('id-ID')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableKaryawan;
