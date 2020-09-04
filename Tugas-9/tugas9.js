import React, {Component} from 'react';

class Tugas9 extends React.Component{
    render(){
        return (
            <div className="App">
            <header className="App-header">
              <div className="box">
                <center>
                  <h2><b>Form Pembelian Buah</b></h2>
                </center>
                <form>
                  <label for="NaPel" id="teks"><b>Nama Pelanggan</b></label>
                  <input type="text" id="NaPel" name="NaPel"></input>
                </form>
                <table>
                  <tr>
                    <td></td>
                    <td>
                      <form>
                      <input type="checkbox" id="buah1" name="buah1"></input>
                      <label for="buah1">Semangka</label>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <form>
                      <input type="checkbox" id="buah2" name="buah2"></input>
                      <label for="buah2">Jeruk</label>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <form>
                      <input type="checkbox" id="buah3" name="buah3"></input>
                      <label for="buah3">Nanas</label>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <form>
                      <input type="checkbox" id="buah4" name="buah4"></input>
                      <label for="buah4">Salak</label>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td id="td1"><b>Daftar Item</b></td>
                    <td>
                      <form>
                      <input type="checkbox" id="buah5" name="buah5"></input>
                      <label for="buah5">Anggur</label>
                      </form>
                    </td>
                  </tr>
                </table>
                <button type="button">Kirim</button> 
              </div>
            </header>
          </div>
        )
    }
} 

export default Tugas9;