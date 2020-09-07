import React, {Component} from 'react';
import './tugas10.css';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class Tugas10 extends React.Component{
    render(){
        return (
            <>
            
            <div className="box2">
                <center>
                  <h2><b>Tabel Harga Buah</b></h2>
                </center>
                <table border="1px" className="table1">
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </tr>
                {dataHargaBuah.map(el=>{
                    return (
                    <tr className="table2">
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat/1000} kg</td>
                    </tr>
                    )
                })}
                </table>
            </div>
            
            </>
        )
    }
}

export default Tugas10;