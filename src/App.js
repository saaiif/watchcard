import React,{Component} from 'react';
import BlogCard from './BlogCard';
import {isArrEmpty} from './utiliz';

import New from './BlogCard.module.css';

import './App.css';

 
class App extends Component{
   state={
      showBlogs:true
   }
    blogArr =[
      {
         id:'1',
         title:'Blog List 1',
   description:'Lorom Ipsum Dolor Lorom Ipsum Dolor Lorom Ipsum Dolor',         
         likecount:0,
      },
      {
         id:'2',
         title:'Blog List 2',
   description:'Lorom Ipsum Dolor Lorom Ipsum Dolor Lorom Ipsum Dolor',         
   likecount:0,
      },
      {
         id:'3',
           title:'Blog List 3',
   description:' Lorom Ipsum Dolor Lorom Ipsum Dolor Lorom Ipsum Dolor',         
   likecount:0,
      }
   ]

   onButtonClick=(pos)=>{
      alert('Like btn clicked at pos=' + pos);
   }

    blogCards=isArrEmpty(this.blogArr)? []: this.blogArr.map((pop,pos) =>{
         
   
   
         return(
            
            <BlogCard className="New" key={pos} title= {pop.title} description={pop.description} onButtonClick={this.onButtonClick} position={pos}/>
               
            // <div className="BlogCard" key={pop.title}>
            // <h3>{pop.title}</h3>
            // <p>{pop.description}</p>
            // </div> 
         )
      
   })
   

     onBtnClick = ()=>{
         // let updateList = !this.state.showBlogs; // this method will not give you current value evrytime

         this.setState((prevState,prevProps) => {          //this method gives current value everytime.
            return({showBlogs:!prevState.showBlogs})
         });

       
      

      console.log(this.showBlogs);
       
    }

   render()
   
{
   console.log('Render Checked') //it prints when render value is checked
   return(
      <div className="App">
         
         <button onClick={this.onBtnClick} className="btn">{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
         <br></br>
         {
            this.state.showBlogs ? this.blogCards : null
            }
      </div>
   )
}
   
   
   //  return(
   //     <div>
   //    {/* <div className='BlogCard'>
   //       {/* <h3>{blogObj.title}</h3>
   //       <p>{blogObj.description}</p>
   //    </div>  */} */
   //    </div>
    
    }
   
export default App;