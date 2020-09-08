import React, {Component} from "react"
import './tugas12.css';

class Lists extends Component {
  
    constructor(props){
      super(props)
      this.state ={
        dataHargaBuah : [
          {nama: "Semangka", harga: 10000, berat: 1000},
          {nama: "Anggur", harga: 40000, berat: 500},
          {nama: "Strawberry", harga: 30000, berat: 400},
          {nama: "Jeruk", harga: 30000, berat: 1000},
          {nama: "Mangga", harga: 30000, berat: 500}
       ],
        inputName:"",
        inputBerat:"",
        inputHarga:""
      };
        this.inputNameChange = this.inputNameChange.bind(this);
        this.inputHargaChange = this.inputHargaChange.bind(this);
        this.inputBeratChange = this.inputBeratChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputNameChange(e){
      this.setState({
        inputName: e.target.value
      });
    }
    inputHargaChange(e){
      this.setState({
        inputHarga: e.target.value
      });
    }
    inputBeratChange(e){
      this.setState({
        inputBerat: e.target.value
      });
    }

    handleSubmit = (e) => {
      console.log("cek");
      e.preventDefault()
      this.setState({
        dataHargaBuah: [...this.state.dataHargaBuah, this.state.inputName, this.state.inputHarga, this.state.inputBerat]
      })
    }
    //hanya untuk ngecek
    componentDidUpdate(){
      console.log(this.state);
    }

    render(){
      return(
        <>
        <div className="box2">
          <center>
            <h2><b>Tabel Harga Buah</b></h2>
            </center>
            <table border="1px" className="table1">
              <thead>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </tr>
              </thead>
              <tbody>
                {this.state.dataHargaBuah.map(el=>{
                    return (
                    <tr className="table2">
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat}</td>
                    </tr>
                    )
                })}
                </tbody>
              </table>
            </div>
            <center>
              <form onSubmit={this.handleSubmit}>
              <label>Nama Buah : </label>
              <input type="text" value={this.state.inputName} onChange={this.inputNameChange}></input>
              <br></br>
              <label>Harga Buah : </label>
              <input type="text" value={this.state.inputHarga} onChange={this.inputHargaChange}></input>
              <br></br>
              <label>Berat Buah : </label>
              <input type="text" value={this.state.inputBerat} onChange={this.inputBeratChange}></input>
              <br></br>
              <button>edit</button> 
              
              </form>
            </center>
        </>
      )
    }
}
//hanya bisa disave melalui console belum bisa didisplay ke tabel
export default Lists