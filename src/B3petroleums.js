import React,{useState} from 'react'
import B3petroleum from './B3petroleum'
import './B2chemicals.css'
import {Link} from 'react-router-dom'
import Example from './P3Modal'

function B3petroleums() {

    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const typeHandler=(each)=>{
        let type9=[]
        let type10=[]
        let type11=[]
        let type12=[]
        let type03=[]
        let type04=[]
        let type05=[]
        let type=[]
        let day=[]

        let P3type9=[]
        let P3type10=[]
        let P3type11=[]
        let P3type12=[]
        let P3type03=[]
        let P3type04=[]
        let P3type05=[]

        let COtype9=[]
        let COtype10=[]
        let COtype11=[]
        let COtype12=[]
        let COtype03=[]
        let COtype04=[]
        let COtype05=[]

     if(each===days[0]){
       type9='MADD_TO_9'
       type10='MADD_TO_10'
       type11='MADD_TO_11'
       type12='MADD_TO_12'
       type03='MADD_TO_03'
       type04='MADD_TO_04'
       type05='MADD_TO_05'
       day='Monday'

       P3type9='P3MADD_TO_9'
       P3type10='P3MADD_TO_10'
       P3type11='P3MADD_TO_11'
       P3type12='P3MADD_TO_12'
       P3type03='P3MADD_TO_03'
       P3type04='P3MADD_TO_04'
       P3type05='P3MADD_TO_05'

       COtype9='COMADD_TO_9'
       COtype10='COMADD_TO_10'
       COtype11='COMADD_TO_11'
       COtype12='COMADD_TO_12'
       COtype03='COMADD_TO_03'
       COtype04='COMADD_TO_04'
       COtype05='COMADD_TO_05'
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

        P3type9='P3TADD_TO_9'
        P3type10='P3TADD_TO_10'
        P3type11='P3TADD_TO_11'
        P3type12='P3TADD_TO_12'
        P3type03='P3TADD_TO_03'
        P3type04='P3TADD_TO_04'
        P3type05='P3TADD_TO_05'

        COtype9='COTADD_TO_9'
        COtype10='COTADD_TO_10'
        COtype11='COTADD_TO_11'
        COtype12='COTADD_TO_12'
        COtype03='COTADD_TO_03'
        COtype04='COTADD_TO_04'
        COtype05='COTADD_TO_05'
      }

      if(each===days[2]){
        type9='WADD_TO_9'
        type10='WADD_TO_10'
        type11='WADD_TO_11'
        type12='WADD_TO_12'
        type03='WADD_TO_03'
        type04='WADD_TO_04'
        type04='WADD_TO_05'
        day='Wednesday'

        P3type9='P3WADD_TO_9'
        P3type10='P3WADD_TO_10'
        P3type11='P3WADD_TO_11'
        P3type12='P3WADD_TO_12'
        P3type03='P3WADD_TO_03'
        P3type04='P3WADD_TO_04'
        P3type05='P3WADD_TO_05'

        COtype9='COWADD_TO_9'
        COtype10='COWADD_TO_10'
        COtype11='COWADD_TO_11'
        COtype12='COWADD_TO_12'
        COtype03='COWADD_TO_03'
        COtype04='COWADD_TO_04'
        COtype05='COWADD_TO_05'
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

        P3type9='P3THADD_TO_9'
        P3type10='P3THADD_TO_10'
        P3type11='P3THADD_TO_11'
        P3type12='P3THADD_TO_12'
        P3type03='P3THADD_TO_03'
        P3type04='P3THADD_TO_04'
        P3type05='P3THADD_TO_05'

        COtype9='THADD_TO_9'
        COtype10='THADD_TO_10'
        COtype11='THADD_TO_11'
        COtype12='THADD_TO_12'
        COtype03='THADD_TO_03'
        COtype04='THADD_TO_04'
        COtype05='THADD_TO_05'
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

        P3type9='P3FADD_TO_9'
        P3type10='P3FADD_TO_10'
        P3type11='P3FADD_TO_11'
        P3type12='P3FADD_TO_12'
        P3type03='P3FADD_TO_03'
        P3type04='P3FADD_TO_04'
        P3type05='P3FADD_TO_05'

        COtype9='COFADD_TO_9'
        COtype10='COFADD_TO_10'
        COtype11='COFADD_TO_11'
        COtype12='COFADD_TO_12'
        COtype03='COFADD_TO_03'
        COtype04='COFADD_TO_04'
        COtype05='COFADD_TO_05'
      }

      return type=[type9,type10,type11,type12,type03,type04,day,P3type9,P3type10,P3type11,P3type12,P3type03,P3type04,P3type05,type05]
    }

    
    return (
        <div className='b2chemicals'>
           <div className='days'>
             
             {
                 days.map((each,index)=>{
                return <div className='d'> <button onClick={typeHandler(each)}>{each}</button>
                <B3petroleum type={typeHandler(each)} /> </div>
                 })
             }   
            </div>
            <Example></Example>
        </div>
    )
}

export default B3petroleums