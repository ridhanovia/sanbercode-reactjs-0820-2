import React, {Component} from 'react';

class Tugas11 extends Component{
    constructor(props){
        super(props)
        this.state={time : new Date(), count :101, showTime : true}
    }

    clock(){
        this.setState({
            time : new Date()
        })
    }


    componentWillMount(){
        setInterval(()=>this.clock(),1000)
    }

    deleteTheTimer = ()=>{
      this.setState({
        showTime: false
      })
    }

   componentDidMount(){
     this.myInterval = setInterval(()=>{
       const {count} = this.state
       if (count > 0){
         this.setState(({count})=>({
           count:count-1
         }))
       }

       if (count === 0) {
         clearInterval(this.myInterval)
         this.deleteTheTimer()
       }
     }, 1000)
   }

   componentWillUnmount(){
     clearInterval(this.myInterval)
   }
    render(){
      const {count} = this.state
        return(
          <>
          {this.state.showTime && (
            <>
              <center>
            <h1>Sekarang jam =   
              {this.state.time.toLocaleTimeString()}
            </h1>
        <h1>{count}</h1>
            </center>
            </>
          )}
        </>
        )
      }
}

export default Tugas11;
    