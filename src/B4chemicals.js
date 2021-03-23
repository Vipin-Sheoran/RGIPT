import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import B4chemical from './B4chemical'
import './B2chemicals.css'
import Example from './C4Modal'

function B4chemicals() {

    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const typeHandler=(each)=>{
        let type9=[]
        let type10=[]
        let type11=[]
        let type12=[]
        let type03=[]
        let type04=[]
        let type05=[]
        let day=[]
        let type=[]

        let C4type9=[]
        let C4type10=[]
        let C4type11=[]
        let C4type12=[]
        let C4type03=[]
        let C4type04=[]
        let C4type05=[]

     if(each===days[0]){
       type9='MADD_TO_9'
       type10='MADD_TO_10'
       type11='MADD_TO_11'
       type12='MADD_TO_12'
       type03='MADD_TO_03'
       type04='MADD_TO_04'
       type05='MADD_TO_05'
       day='Monday'

       C4type9='C4MADD_TO_9'
       C4type10='C4MADD_TO_10'
       C4type11='C4MADD_TO_11'
       C4type12='C4MADD_TO_12'
       C4type03='C4MADD_TO_03'
       C4type04='C4MADD_TO_04'
       C4type05='C4MADD_TO_05' 
     }

     if(each===days[1]){
        type9='TADD_TO_9'
        type10='TADD_TO_10'
        type11='TADD_TO_11'
        type12='TADD_TO_12'
        type03='TADD_TO_03'
        type04='TADD_TO_04'
        type05='TADD_TO_05'
        day='Tuesday'

        C4type9='C4TADD_TO_9'
        C4type10='C4TADD_TO_10'
        C4type11='C4TADD_TO_11'
        C4type12='C4TADD_TO_12'
        C4type03='C4TADD_TO_03'
        C4type04='C4TADD_TO_04'
        C4type05='C4TADD_TO_05'

      }

      if(each===days[2]){
        type9='WADD_TO_9'
        type10='WADD_TO_10'
        type11='WADD_TO_11'
        type12='WADD_TO_12'
        type03='WADD_TO_03'
        type04='WADD_TO_04'
        type05='WADD_TO_05'
        day='Wednesday'

        C4type9='C4WADD_TO_9'
        C4type10='C4WADD_TO_10'
        C4type11='C4WADD_TO_11'
        C4type12='C4WADD_TO_12'
        C4type03='C4WADD_TO_03'
        C4type04='C4WADD_TO_04'
        C4type05='C4WADD_TO_05'

      }

      if(each===days[3]){
        type9='THADD_TO_9'
        type10='THADD_TO_10'
        type11='THADD_TO_11'
        type12='THADD_TO_12'
        type03='THADD_TO_03'
        type04='THADD_TO_04'
        type05='THADD_TO_05'
        day='Thursday'

        C4type9='C4THADD_TO_9'
        C4type10='C4THADD_TO_10'
        C4type11='C4THADD_TO_11'
        C4type12='C4THADD_TO_12'
        C4type03='C4THADD_TO_03'
        C4type04='C4THADD_TO_04'
        C4type05='C4THADD_TO_05'

      }

      if(each===days[4]){
        type9='FADD_TO_9'
        type10='FADD_TO_10'
        type11='FADD_TO_11'
        type12='FADD_TO_12'
        type03='FADD_TO_03'
        type04='FADD_TO_04'
        type05='FADD_TO_05'
        day='Friday'

        C4type9='C4FADD_TO_9'
        C4type10='C4FADD_TO_10'
        C4type11='C4FADD_TO_11'
        C4type12='C4FADD_TO_12'
        C4type03='C4FADD_TO_03'
        C4type04='C4FADD_TO_04'
        C4type05='C4FADD_TO_05'

      }

    return type=[type9,type10,type11,type12,type03,type04,day,C4type9,C4type10,C4type11,C4type12,C4type03,C4type04,C4type05,type05]
    }

    

    return (
        <div className='b2chemicals'>
           <div className='days'>
             {
                 days.map((each,index)=>{
                return <div className='d'> <button onClick={typeHandler(each)}>{each}</button>
                <B4chemical type={typeHandler(each)} /> </div>
                 })
             }   
             {/* <Link to='/chepreview'>Preview</Link> */}
            </div>
            <Example></Example>
            
        </div>
    )
}

export default B4chemicals
