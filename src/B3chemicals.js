import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import B3chemical from './B3chemical'
import './B2chemicals.css'
import Example from './C3Modal'

function B2chemicals() {

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

        let C3type9=[]
        let C3type10=[]
        let C3type11=[]
        let C3type12=[]
        let C3type03=[]
        let C3type04=[]
        let C3type05=[]

     if(each===days[0]){
       type9='MADD_TO_9'
       type10='MADD_TO_10'
       type11='MADD_TO_11'
       type12='MADD_TO_12'
       type03='MADD_TO_03'
       type04='MADD_TO_04'
       type05='MADD_TO_05'
       day='Monday'

       C3type9='C3MADD_TO_9'
       C3type10='C3MADD_TO_10'
       C3type11='C3MADD_TO_11'
       C3type12='C3MADD_TO_12'
       C3type03='C3MADD_TO_03'
       C3type04='C3MADD_TO_04'
       C3type05='C3MADD_TO_05' 
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

        C3type9='C3TADD_TO_9'
        C3type10='C3TADD_TO_10'
        C3type11='C3TADD_TO_11'
        C3type12='C3TADD_TO_12'
        C3type03='C3TADD_TO_03'
        C3type04='C3TADD_TO_04'
        C3type05='C3TADD_TO_05'

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

        C3type9='C3WADD_TO_9'
        C3type10='C3WADD_TO_10'
        C3type11='C3WADD_TO_11'
        C3type12='C3WADD_TO_12'
        C3type03='C3WADD_TO_03'
        C3type04='C3WADD_TO_04'
        C3type05='C3WADD_TO_05'

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

        C3type9='C3THADD_TO_9'
        C3type10='C3THADD_TO_10'
        C3type11='C3THADD_TO_11'
        C3type12='C3THADD_TO_12'
        C3type03='C3THADD_TO_03'
        C3type04='C3THADD_TO_04'
        C3type05='C3THADD_TO_05'

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

        C3type9='C3FADD_TO_9'
        C3type10='C3FADD_TO_10'
        C3type11='C3FADD_TO_11'
        C3type12='C3FADD_TO_12'
        C3type03='C3FADD_TO_03'
        C3type04='C3FADD_TO_04'
        C3type05='C3FADD_TO_05'

      }

    return type=[type9,type10,type11,type12,type03,type04,day,C3type9,C3type10,C3type11,C3type12,C3type03,C3type04,C3type05,type05]
    }

    

    return (
        <div className='b2chemicals'>
           <div className='days'>
             {
                 days.map((each,index)=>{
                return <div className='d'> <button onClick={typeHandler(each)}>{each}</button>
                <B3chemical type={typeHandler(each)} /> </div>
                 })
             }   
             {/* <Link to='/chepreview'>Preview</Link> */}
            </div>
            <Example></Example>
            
        </div>
    )
}

export default B2chemicals
