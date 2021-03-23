import React,{useState} from 'react'
import B2petroleum from './B2petroleum'
import './B2chemicals.css'
import {Link} from 'react-router-dom'
import Example from './PModal'

function B2petroleums() {

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

        let Ptype9=[]
        let Ptype10=[]
        let Ptype11=[]
        let Ptype12=[]
        let Ptype03=[]
        let Ptype04=[]
        let Ptype05=[]

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

       Ptype9='PMADD_TO_9'
       Ptype10='PMADD_TO_10'
       Ptype11='PMADD_TO_11'
       Ptype12='PMADD_TO_12'
       Ptype03='PMADD_TO_03'
       Ptype04='PMADD_TO_04'
       Ptype05='PMADD_TO_05'

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

        Ptype9='PTADD_TO_9'
        Ptype10='PTADD_TO_10'
        Ptype11='PTADD_TO_11'
        Ptype12='PTADD_TO_12'
        Ptype03='PTADD_TO_03'
        Ptype04='PTADD_TO_04'
        Ptype05='PTADD_TO_05'

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
        type05='WADD_TO_05'
        day='Wednesday'
 
        Ptype9='PWADD_TO_9'
        Ptype10='PWADD_TO_10'
        Ptype11='PWADD_TO_11'
        Ptype12='PWADD_TO_12'
        Ptype03='PWADD_TO_03'
        Ptype04='PWADD_TO_04'
        Ptype05='PWADD_TO_05'
 
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

        Ptype9='PTHADD_TO_9'
        Ptype10='PTHADD_TO_10'
        Ptype11='PTHADD_TO_11'
        Ptype12='PTHADD_TO_12'
        Ptype03='PTHADD_TO_03'
        Ptype04='PTHADD_TO_04'
        Ptype05='PTHADD_TO_05'

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

        Ptype9='PFADD_TO_9'
        Ptype10='PFADD_TO_10'
        Ptype11='PFADD_TO_11'
        Ptype12='PFADD_TO_12'
        Ptype03='PFADD_TO_03'
        Ptype04='PFADD_TO_04'
        Ptype05='PFADD_TO_05'

        COtype9='COFADD_TO_9'
        COtype10='COFADD_TO_10'
        COtype11='COFADD_TO_11'
        COtype12='COFADD_TO_12'
        COtype03='COFADD_TO_03'
        COtype04='COFADD_TO_04'
        COtype05='COFADD_TO_05'
      }

    return type=[type9,type10,type11,type12,type03,type04,day,Ptype9,Ptype10,Ptype11,Ptype12,Ptype03,Ptype04,type05,Ptype05,COtype9,COtype10,COtype11,
    COtype12,COtype03,COtype04,COtype05]
    }

    
    return (
        <div className='b2chemicals'>
           <div className='days'>
             
             {
                 days.map((each,index)=>{
                return <div className='d'> <button onClick={typeHandler(each)}>{each}</button>
                <B2petroleum type={typeHandler(each)} /> </div>
                 })
             }   
            </div>
            <Example></Example>
        </div>
    )
}

export default B2petroleums