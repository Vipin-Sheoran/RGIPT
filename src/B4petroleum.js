import React,{useState,useEffect} from 'react'
import './B2chemical.css'
import {useStateValue} from './StateProvider'

function B4chemical({type}) {
    const [at9,setAt9]=useState('')
    const [at10,setAt10]=useState('')
    const [at11,setAt11]=useState('')
    const [at12,setAt12]=useState('')
    const [at03,setAt03]=useState('')
    const [at04,setAt04]=useState('')
    const [at05,setAt05]=useState('')
    const [At9,setat9]=useState('')
    const [At10,setat10]=useState('')
    const [At11,setat11]=useState('')
    const [At12,setat12]=useState('')
    const [At03,setat03]=useState('')
    const [At04,setat04]=useState('')

    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const prof=['Dr. Biswas','Dr. UDD','Dr. Amit Saxena','Dr. Tushar','Dr. Shivanjali']
    const prof3=['Dr. Amit Saxena','Dr. Tushar','Dr. Shivanjali']
    const prof2=['Dr. AKS','Dr. Alpesh']
    const [{MfacultyAt9,MfacultyAt10,MfacultyAt11,MfacultyAt12,MfacultyAt04,MfacultyAt03,MfacultyAt05,
      TfacultyAt9,TfacultyAt10,TfacultyAt11,TfacultyAt12,TfacultyAt04,TfacultyAt03,TfacultyAt05,
      WfacultyAt9,WfacultyAt10,WfacultyAt11,WfacultyAt12,WfacultyAt04,WfacultyAt03,WfacultyAt05,
      THfacultyAt9,THfacultyAt10,THfacultyAt11,THfacultyAt12,THfacultyAt04,THfacultyAt03,THfacultyAt05,
      FfacultyAt9,FfacultyAt10,FfacultyAt11,FfacultyAt12,FfacultyAt04,FfacultyAt03,FfacultyAt05,
    
      P3MfacultyAt9,P3MfacultyAt10,P3MfacultyAt11,P3MfacultyAt12,P3MfacultyAt04,P3MfacultyAt03,P3MfacultyAt05,
      P3TfacultyAt9,P3TfacultyAt10,P3TfacultyAt11,P3TfacultyAt12,P3TfacultyAt04,P3TfacultyAt03,P3TfacultyAt05,
      P3WfacultyAt9,P3WfacultyAt10,P3WfacultyAt11,P3WfacultyAt12,P3WfacultyAt04,P3WfacultyAt03,P3WfacultyAt05,
      P3THfacultyAt9,P3THfacultyAt10,P3THfacultyAt11,P3THfacultyAt12,P3THfacultyAt04,P3THfacultyAt03,P3THfacultyAt05,
      P3FfacultyAt9,P3FfacultyAt10,P3FfacultyAt11,P3FfacultyAt12,P3FfacultyAt04,P3FfacultyAt03,P3FfacultyAt05,
    
      C3MfacultyAt9,C3MfacultyAt10,C3MfacultyAt11,C3MfacultyAt12,C3MfacultyAt04,C3MfacultyAt03,C3MfacultyAt05,
      C3TfacultyAt9,C3TfacultyAt10,C3TfacultyAt11,C3TfacultyAt12,C3TfacultyAt04,C3TfacultyAt03,C3TfacultyAt05,
      C3WfacultyAt9,C3WfacultyAt10,C3WfacultyAt11,C3WfacultyAt12,C3WfacultyAt04,C3WfacultyAt03,C3WfacultyAt05,
      C3THfacultyAt9,C3THfacultyAt10,C3THfacultyAt11,C3THfacultyAt12,C3THfacultyAt04,C3THfacultyAt03,C3THfacultyAt05,
      C3FfacultyAt9,C3FfacultyAt10,C3FfacultyAt11,C3FfacultyAt12,C3FfacultyAt04,C3FfacultyAt03,C3FfacultyAt05,
    
      PMfacultyAt9,PMfacultyAt10,PMfacultyAt11,PMfacultyAt12,PMfacultyAt04,PMfacultyAt03,PMfacultyAt05,
      PTfacultyAt9,PTfacultyAt10,PTfacultyAt11,PTfacultyAt12,PTfacultyAt04,PTfacultyAt03,PTfacultyAt05,
      PWfacultyAt9,PWfacultyAt10,PWfacultyAt11,PWfacultyAt12,PWfacultyAt04,PWfacultyAt03,PWfacultyAt05,
      PTHfacultyAt9,PTHfacultyAt10,PTHfacultyAt11,PTHfacultyAt12,PTHfacultyAt04,PTHfacultyAt03,PTHfacultyAt05,
      PFfacultyAt9,PFfacultyAt10,PFfacultyAt11,PFfacultyAt12,PFfacultyAt04,PFfacultyAt03,PFfacultyAt05,
    
      CMfacultyAt9,CMfacultyAt10,CMfacultyAt11,CMfacultyAt12,CMfacultyAt04,CMfacultyAt03,CMfacultyAt05,
      CTfacultyAt9,CTfacultyAt10,CTfacultyAt11,CTfacultyAt12,CTfacultyAt04,CTfacultyAt03,CTfacultyAt05,
      CWfacultyAt9,CWfacultyAt10,CWfacultyAt11,CWfacultyAt12,CWfacultyAt04,CWfacultyAt03,CWfacultyAt05,
      CTHfacultyAt9,CTHfacultyAt10,CTHfacultyAt11,CTHfacultyAt12,CTHfacultyAt04,CTHfacultyAt03,CTHfacultyAt05,
      CFfacultyAt9,CFfacultyAt10,CFfacultyAt11,CFfacultyAt12,CFfacultyAt04,CFfacultyAt03,CFfacultyAt05,
    
      COMfacultyAt9,COMfacultyAt10,COMfacultyAt11,COMfacultyAt12,COMfacultyAt03,COMfacultyAt04,COMfacultyAt05,
      COTfacultyAt9,COTfacultyAt10,COTfacultyAt11,COTfacultyAt12,COTfacultyAt04,COTfacultyAt03,COTfacultyAt05,
      COWfacultyAt9,COWfacultyAt10,COWfacultyAt11,COWfacultyAt12,COWfacultyAt04,COWfacultyAt03,COWfacultyAt05,
      COTHfacultyAt9,COTHfacultyAt10,COTHfacultyAt11,COTHfacultyAt12,COTHfacultyAt04,COTHfacultyAt03,COTHfacultyAt05,
      COFfacultyAt9,COFfacultyAt10,COFfacultyAt11,COFfacultyAt12,COFfacultyAt04,COFfacultyAt03,COFfacultyAt05,
    
      POMfacultyAt9,POMfacultyAt10,POMfacultyAt11,POMfacultyAt12,POMfacultyAt04,POMfacultyAt03,POMfacultyAt05,
      POTfacultyAt9,POTfacultyAt10,POTfacultyAt11,POTfacultyAt12,POTfacultyAt04,POTfacultyAt03,POTfacultyAt05,
      POWfacultyAt9,POWfacultyAt10,POWfacultyAt11,POWfacultyAt12,POWfacultyAt04,POWfacultyAt03,POWfacultyAt05,
      POTHfacultyAt9,POTHfacultyAt10,POTHfacultyAt11,POTHfacultyAt12,POTHfacultyAt04,POTHfacultyAt03,POTHfacultyAt05,
      POFfacultyAt9,POFfacultyAt10,POFfacultyAt11,POFfacultyAt12,POFfacultyAt04,POFfacultyAt03,POFfacultyAt05,
    
      C4MfacultyAt9,C4MfacultyAt10,C4MfacultyAt11,C4MfacultyAt12,C4MfacultyAt04,C4MfacultyAt03,C4MfacultyAt05,
      C4TfacultyAt9,C4TfacultyAt10,C4TfacultyAt11,C4TfacultyAt12,C4TfacultyAt04,C4TfacultyAt03,C4TfacultyAt05,
      C4WfacultyAt9,C4WfacultyAt10,C4WfacultyAt11,C4WfacultyAt12,C4WfacultyAt04,C4WfacultyAt03,C4WfacultyAt05,
      C4THfacultyAt9,C4THfacultyAt10,C4THfacultyAt11,C4THfacultyAt12,C4THfacultyAt04,C4THfacultyAt03,C4THfacultyAt05,
      C4FfacultyAt9,C4FfacultyAt10,C4FfacultyAt11,C4FfacultyAt12,C4FfacultyAt04,C4FfacultyAt03,C4FfacultyAt05,
    
      P4MfacultyAt9,P4MfacultyAt10,P4MfacultyAt11,P4MfacultyAt12,P4MfacultyAt04,P4MfacultyAt03,P4MfacultyAt05,
      P4TfacultyAt9,P4TfacultyAt10,P4TfacultyAt11,P4TfacultyAt12,P4TfacultyAt04,P4TfacultyAt03,P4TfacultyAt05,
      P4WfacultyAt9,P4WfacultyAt10,P4WfacultyAt11,P4WfacultyAt12,P4WfacultyAt04,P4WfacultyAt03,P4WfacultyAt05,
      P4THfacultyAt9,P4THfacultyAt10,P4THfacultyAt11,P4THfacultyAt12,P4THfacultyAt04,P4THfacultyAt03,P4THfacultyAt05,
      P4FfacultyAt9,P4FfacultyAt10,P4FfacultyAt11,P4FfacultyAt12,P4FfacultyAt04,P4FfacultyAt03,P4FfacultyAt05},dispatch]=useStateValue()
    const [disabled,setDisabled]=useState(false)
    
    const courseHandler=(each)=>{
      let course=[]
      if(each===prof[0]){
       course='Health Safety & Environment'
      }
      if(each===prof[1]){
        course='Process Dynamics & Control'
      }
      if(each===prof[2]){
        course='Offshore oil & Gas technology'
      }
      if(each===prof[3]){
        course='Well test Analysis'
      }
      if(each===prof[4]){
        course='EOR/IOR techniques'
      }
      return course
    }


  let numAt03=[]
  let numAt04=[]
  let numAt05=[]
  let numAt9=[]
  let numAt10=[]
  let numAt11=[]
  let numAt12=[]

if(type[6]===days[0]){
  if(disabled===false){


    numAt9= prof.filter((item) => { 
      return MfacultyAt9.indexOf(item) === -1 
    })
       
    numAt10= prof.filter((item) => { 
      return MfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return MfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return MfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return MfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return MfacultyAt04.indexOf(item) === -1 
    })

    numAt05= prof.filter((item) => { 
      return MfacultyAt05.indexOf(item) === -1 
    })

    if(P3MfacultyAt9[0]===prof[1]||C3MfacultyAt9[0]===prof[1]){
       numAt9=[]
    }
    if(P3MfacultyAt10[0]===prof[1]||C3MfacultyAt10[0]===prof[1]){
      numAt10=[]
   }
   if(P3MfacultyAt11[0]===prof[1]||C3MfacultyAt11[0]===prof[1]){
    numAt11=[]
 }
 if(P3MfacultyAt12[0]===prof[1]||C3MfacultyAt12[0]===prof[1]){
  numAt12=[]
}
if(P3MfacultyAt03[0]===prof[1]||C3MfacultyAt03[0]===prof[1]){
  numAt03=[]
}
if(P3MfacultyAt04[0]===prof[1]||C3MfacultyAt04[0]===prof[1]){
  numAt04=[]
}
if(P3MfacultyAt05[0]===prof[1]||C3MfacultyAt05[0]===prof[1]){
  numAt05=[]
}

if(C4MfacultyAt9.length>0){
  if(C4MfacultyAt9[0]==='Dr. UDD'){
    numAt9=['Dr. UDD']
  }else if(C4MfacultyAt9[0]==='Dr. Biswas'){
    numAt9=['Dr. Biswas']
  }else{
    numAt9= prof3.filter((item) => { 
        return MfacultyAt9.indexOf(item) === -1 
      })
  }
}

if(C4MfacultyAt10.length>0){
    if(C4MfacultyAt10[0]==='Dr. UDD'){
      numAt10=['Dr. UDD']
    }else if(C4MfacultyAt10[0]==='Dr. Biswas'){
      numAt10=['Dr. Biswas']
    }else{
      numAt10= prof3.filter((item) => { 
          return MfacultyAt10.indexOf(item) === -1 
        })
    }
  }

  if(C4MfacultyAt11.length>0){
    if(C4MfacultyAt11[0]==='Dr. UDD'){
      numAt11=['Dr. UDD']
    }else if(C4MfacultyAt11[0]==='Dr. Biswas'){
      numAt11=['Dr. Biswas']
    }else{
      numAt11= prof3.filter((item) => { 
          return MfacultyAt11.indexOf(item) === -1 
        })
    }
  }

  if(C4MfacultyAt12.length>0){
    if(C4MfacultyAt12[0]==='Dr. UDD'){
      numAt12=['Dr. UDD']
    }else if(C4MfacultyAt12[0]==='Dr. Biswas'){
      numAt12=['Dr. Biswas']
    }else{
      numAt12= prof3.filter((item) => { 
          return MfacultyAt12.indexOf(item) === -1 
        })
    }
  }
  

  if(C4MfacultyAt03.length>0){
    if(C4MfacultyAt03[0]==='Dr. UDD'){
      numAt03=['Dr. UDD']
    }else if(C4MfacultyAt03[0]==='Dr. Biswas'){
      numAt03=['Dr. Biswas']
    }else{
      numAt03= prof3.filter((item) => { 
          return MfacultyAt03.indexOf(item) === -1 
        })
    }
  }
  

  if(C4MfacultyAt04.length>0){
    if(C4MfacultyAt04[0]==='Dr. UDD'){
      numAt04=['Dr. UDD']
    }else if(C4MfacultyAt04[0]==='Dr. Biswas'){
      numAt04=['Dr. Biswas']
    }else{
      numAt04= prof3.filter((item) => { 
          return MfacultyAt04.indexOf(item) === -1 
        })
    }
  }
  
  if(C4MfacultyAt05.length>0){
    if(C4MfacultyAt05[0]==='Dr. UDD'){
      numAt05=['Dr. UDD']
    }else if(C4MfacultyAt05[0]==='Dr. Biswas'){
      numAt05=['Dr. Biswas']
    }else{
      numAt05= prof3.filter((item) => { 
          return MfacultyAt05.indexOf(item) === -1 
        })
    }
  }
  
    
     if(P4MfacultyAt9[0]&&P4MfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P4MfacultyAt10[0]&&P4MfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P4MfacultyAt11[0]&&P4MfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P4MfacultyAt12[0]&&P4MfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P4MfacultyAt03[0]&&P4MfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P4MfacultyAt04[0]&&P4MfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P4MfacultyAt05[0]&&P4MfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[P4MfacultyAt9[0]]    
    numAt10=[P4MfacultyAt10[0]]
    numAt11=[P4MfacultyAt11[0]]
    numAt12=[P4MfacultyAt12[0]]
    numAt03=[P4MfacultyAt03[0]]
    numAt04=[P4MfacultyAt04[0]]
    numAt05=[P4MfacultyAt05[0]]
  }
}


if(type[6]===days[1]){
  if(disabled===false){


    numAt9= prof.filter((item) => { 
      return TfacultyAt9.indexOf(item) === -1 
    })
       
    numAt10= prof.filter((item) => { 
      return TfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return TfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return TfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return TfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return TfacultyAt04.indexOf(item) === -1 
    })

    numAt05= prof.filter((item) => { 
      return TfacultyAt05.indexOf(item) === -1 
    })

    if(P3TfacultyAt9[0]===prof[1]||C3TfacultyAt9[0]===prof[1]){
       numAt9=[]
    }
    if(P3TfacultyAt10[0]===prof[1]||C3TfacultyAt10[0]===prof[1]){
      numAt10=[]
   }
   if(P3TfacultyAt11[0]===prof[1]||C3TfacultyAt11[0]===prof[1]){
    numAt11=[]
 }
 if(P3TfacultyAt12[0]===prof[1]||C3TfacultyAt12[0]===prof[1]){
  numAt12=[]
}
if(P3TfacultyAt03[0]===prof[1]||C3TfacultyAt03[0]===prof[1]){
  numAt03=[]
}
if(P3TfacultyAt04[0]===prof[1]||C3TfacultyAt04[0]===prof[1]){
  numAt04=[]
}
if(P3TfacultyAt05[0]===prof[1]||C3TfacultyAt05[0]===prof[1]){
  numAt05=[]
}

if(C4TfacultyAt9.length>0){
  if(C4TfacultyAt9[0]==='Dr. UDD'){
    numAt9=['Dr. UDD']
  }else if(C4TfacultyAt9[0]==='Dr. Biswas'){
    numAt9=['Dr. Biswas']
  }else{
    numAt9= prof3.filter((item) => { 
        return TfacultyAt9.indexOf(item) === -1 
      })
  }
}

if(C4TfacultyAt10.length>0){
    if(C4TfacultyAt10[0]==='Dr. UDD'){
      numAt10=['Dr. UDD']
    }else if(C4TfacultyAt10[0]==='Dr. Biswas'){
      numAt10=['Dr. Biswas']
    }else{
      numAt10= prof3.filter((item) => { 
          return TfacultyAt10.indexOf(item) === -1 
        })
    }
  }

  if(C4TfacultyAt11.length>0){
    if(C4TfacultyAt11[0]==='Dr. UDD'){
      numAt11=['Dr. UDD']
    }else if(C4TfacultyAt11[0]==='Dr. Biswas'){
      numAt11=['Dr. Biswas']
    }else{
      numAt11= prof3.filter((item) => { 
          return TfacultyAt11.indexOf(item) === -1 
        })
    }
  }

  if(C4TfacultyAt12.length>0){
    if(C4TfacultyAt12[0]==='Dr. UDD'){
      numAt12=['Dr. UDD']
    }else if(C4TfacultyAt12[0]==='Dr. Biswas'){
      numAt12=['Dr. Biswas']
    }else{
      numAt12= prof3.filter((item) => { 
          return TfacultyAt12.indexOf(item) === -1 
        })
    }
  }
  

  if(C4TfacultyAt03.length>0){
    if(C4TfacultyAt03[0]==='Dr. UDD'){
      numAt03=['Dr. UDD']
    }else if(C4TfacultyAt03[0]==='Dr. Biswas'){
      numAt03=['Dr. Biswas']
    }else{
      numAt03= prof3.filter((item) => { 
          return TfacultyAt03.indexOf(item) === -1 
        })
    }
  }
  

  if(C4TfacultyAt04.length>0){
    if(C4TfacultyAt04[0]==='Dr. UDD'){
      numAt04=['Dr. UDD']
    }else if(C4TfacultyAt04[0]==='Dr. Biswas'){
      numAt04=['Dr. Biswas']
    }else{
      numAt04= prof3.filter((item) => { 
          return TfacultyAt04.indexOf(item) === -1 
        })
    }
  }
  
  if(C4TfacultyAt05.length>0){
    if(C4TfacultyAt05[0]==='Dr. UDD'){
      numAt05=['Dr. UDD']
    }else if(C4TfacultyAt05[0]==='Dr. Biswas'){
      numAt05=['Dr. Biswas']
    }else{
      numAt05= prof3.filter((item) => { 
          return TfacultyAt05.indexOf(item) === -1 
        })
    }
  }
  
    
     if(P4TfacultyAt9[0]&&P4TfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P4TfacultyAt10[0]&&P4TfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P4TfacultyAt11[0]&&P4TfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P4TfacultyAt12[0]&&P4TfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P4TfacultyAt03[0]&&P4TfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P4TfacultyAt04[0]&&P4TfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P4TfacultyAt05[0]&&P4TfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[P4TfacultyAt9[0]]    
    numAt10=[P4TfacultyAt10[0]]
    numAt11=[P4TfacultyAt11[0]]
    numAt12=[P4TfacultyAt12[0]]
    numAt03=[P4TfacultyAt03[0]]
    numAt04=[P4TfacultyAt04[0]]
    numAt05=[P4TfacultyAt05[0]]
  }
  
// console.log(num)
 
}

if(type[6]===days[2]){
  if(disabled===false){


    numAt9= prof.filter((item) => { 
      return WfacultyAt9.indexOf(item) === -1 
    })
       
    numAt10= prof.filter((item) => { 
      return WfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return WfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return WfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return WfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return WfacultyAt04.indexOf(item) === -1 
    })

    numAt05= prof.filter((item) => { 
      return WfacultyAt05.indexOf(item) === -1 
    })

    if(P3WfacultyAt9[0]===prof[1]||C3WfacultyAt9[0]===prof[1]){
       numAt9=[]
    }
    if(P3WfacultyAt10[0]===prof[1]||C3WfacultyAt10[0]===prof[1]){
      numAt10=[]
   }
   if(P3WfacultyAt11[0]===prof[1]||C3WfacultyAt11[0]===prof[1]){
    numAt11=[]
 }
 if(P3WfacultyAt12[0]===prof[1]||C3WfacultyAt12[0]===prof[1]){
  numAt12=[]
}
if(P3WfacultyAt03[0]===prof[1]||C3WfacultyAt03[0]===prof[1]){
  numAt03=[]
}
if(P3WfacultyAt04[0]===prof[1]||C3WfacultyAt04[0]===prof[1]){
  numAt04=[]
}
if(P3WfacultyAt05[0]===prof[1]||C3WfacultyAt05[0]===prof[1]){
  numAt05=[]
}

if(C4WfacultyAt9.length>0){
  if(C4WfacultyAt9[0]==='Dr. UDD'){
    numAt9=['Dr. UDD']
  }else if(C4WfacultyAt9[0]==='Dr. Biswas'){
    numAt9=['Dr. Biswas']
  }else{
    numAt9= prof3.filter((item) => { 
        return WfacultyAt9.indexOf(item) === -1 
      })
  }
}

if(C4WfacultyAt10.length>0){
    if(C4WfacultyAt10[0]==='Dr. UDD'){
      numAt10=['Dr. UDD']
    }else if(C4WfacultyAt10[0]==='Dr. Biswas'){
      numAt10=['Dr. Biswas']
    }else{
      numAt10= prof3.filter((item) => { 
          return WfacultyAt10.indexOf(item) === -1 
        })
    }
  }

  if(C4WfacultyAt11.length>0){
    if(C4WfacultyAt11[0]==='Dr. UDD'){
      numAt11=['Dr. UDD']
    }else if(C4WfacultyAt11[0]==='Dr. Biswas'){
      numAt11=['Dr. Biswas']
    }else{
      numAt11= prof3.filter((item) => { 
          return WfacultyAt11.indexOf(item) === -1 
        })
    }
  }

  if(C4WfacultyAt12.length>0){
    if(C4WfacultyAt12[0]==='Dr. UDD'){
      numAt12=['Dr. UDD']
    }else if(C4WfacultyAt12[0]==='Dr. Biswas'){
      numAt12=['Dr. Biswas']
    }else{
      numAt12= prof3.filter((item) => { 
          return WfacultyAt12.indexOf(item) === -1 
        })
    }
  }
  

  if(C4WfacultyAt03.length>0){
    if(C4WfacultyAt03[0]==='Dr. UDD'){
      numAt03=['Dr. UDD']
    }else if(C4WfacultyAt03[0]==='Dr. Biswas'){
      numAt03=['Dr. Biswas']
    }else{
      numAt03= prof3.filter((item) => { 
          return WfacultyAt03.indexOf(item) === -1 
        })
    }
  }
  

  if(C4WfacultyAt04.length>0){
    if(C4WfacultyAt04[0]==='Dr. UDD'){
      numAt04=['Dr. UDD']
    }else if(C4WfacultyAt04[0]==='Dr. Biswas'){
      numAt04=['Dr. Biswas']
    }else{
      numAt04= prof3.filter((item) => { 
          return WfacultyAt04.indexOf(item) === -1 
        })
    }
  }
  
  if(C4WfacultyAt05.length>0){
    if(C4WfacultyAt05[0]==='Dr. UDD'){
      numAt05=['Dr. UDD']
    }else if(C4WfacultyAt05[0]==='Dr. Biswas'){
      numAt05=['Dr. Biswas']
    }else{
      numAt05= prof3.filter((item) => { 
          return WfacultyAt05.indexOf(item) === -1 
        })
    }
  }
  
    
     if(P4WfacultyAt9[0]&&P4WfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P4WfacultyAt10[0]&&P4WfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P4WfacultyAt11[0]&&P4WfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P4WfacultyAt12[0]&&P4WfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P4WfacultyAt03[0]&&P4WfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P4WfacultyAt04[0]&&P4WfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P4WfacultyAt05[0]&&P4WfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[P4WfacultyAt9[0]]    
    numAt10=[P4WfacultyAt10[0]]
    numAt11=[P4WfacultyAt11[0]]
    numAt12=[P4WfacultyAt12[0]]
    numAt03=[P4WfacultyAt03[0]]
    numAt04=[P4WfacultyAt04[0]]
    numAt05=[P4WfacultyAt05[0]]
  }
}

if(type[6]===days[3]){
  if(disabled===false){


    numAt9= prof.filter((item) => { 
      return THfacultyAt9.indexOf(item) === -1 
    })
       
    numAt10= prof.filter((item) => { 
      return THfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return THfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return THfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return THfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return THfacultyAt04.indexOf(item) === -1 
    })

    numAt05= prof.filter((item) => { 
      return THfacultyAt05.indexOf(item) === -1 
    })

    if(P3THfacultyAt9[0]===prof[1]||C3THfacultyAt9[0]===prof[1]){
       numAt9=[]
    }
    if(P3THfacultyAt10[0]===prof[1]||C3THfacultyAt10[0]===prof[1]){
      numAt10=[]
   }
   if(P3THfacultyAt11[0]===prof[1]||C3THfacultyAt11[0]===prof[1]){
    numAt11=[]
 }
 if(P3THfacultyAt12[0]===prof[1]||C3THfacultyAt12[0]===prof[1]){
  numAt12=[]
}
if(P3THfacultyAt03[0]===prof[1]||C3THfacultyAt03[0]===prof[1]){
  numAt03=[]
}
if(P3THfacultyAt04[0]===prof[1]||C3THfacultyAt04[0]===prof[1]){
  numAt04=[]
}
if(P3THfacultyAt05[0]===prof[1]||C3THfacultyAt05[0]===prof[1]){
  numAt05=[]
}

if(C4THfacultyAt9.length>0){
  if(C4THfacultyAt9[0]==='Dr. UDD'){
    numAt9=['Dr. UDD']
  }else if(C4THfacultyAt9[0]==='Dr. Biswas'){
    numAt9=['Dr. Biswas']
  }else{
    numAt9= prof3.filter((item) => { 
        return THfacultyAt9.indexOf(item) === -1 
      })
  }
}

if(C4THfacultyAt10.length>0){
    if(C4THfacultyAt10[0]==='Dr. UDD'){
      numAt10=['Dr. UDD']
    }else if(C4THfacultyAt10[0]==='Dr. Biswas'){
      numAt10=['Dr. Biswas']
    }else{
      numAt10= prof3.filter((item) => { 
          return THfacultyAt10.indexOf(item) === -1 
        })
    }
  }

  if(C4THfacultyAt11.length>0){
    if(C4THfacultyAt11[0]==='Dr. UDD'){
      numAt11=['Dr. UDD']
    }else if(C4THfacultyAt11[0]==='Dr. Biswas'){
      numAt11=['Dr. Biswas']
    }else{
      numAt11= prof3.filter((item) => { 
          return THfacultyAt11.indexOf(item) === -1 
        })
    }
  }

  if(C4THfacultyAt12.length>0){
    if(C4THfacultyAt12[0]==='Dr. UDD'){
      numAt12=['Dr. UDD']
    }else if(C4THfacultyAt12[0]==='Dr. Biswas'){
      numAt12=['Dr. Biswas']
    }else{
      numAt12= prof3.filter((item) => { 
          return THfacultyAt12.indexOf(item) === -1 
        })
    }
  }
  

  if(C4THfacultyAt03.length>0){
    if(C4THfacultyAt03[0]==='Dr. UDD'){
      numAt03=['Dr. UDD']
    }else if(C4THfacultyAt03[0]==='Dr. Biswas'){
      numAt03=['Dr. Biswas']
    }else{
      numAt03= prof3.filter((item) => { 
          return THfacultyAt03.indexOf(item) === -1 
        })
    }
  }
  

  if(C4THfacultyAt04.length>0){
    if(C4THfacultyAt04[0]==='Dr. UDD'){
      numAt04=['Dr. UDD']
    }else if(C4THfacultyAt04[0]==='Dr. Biswas'){
      numAt04=['Dr. Biswas']
    }else{
      numAt04= prof3.filter((item) => { 
          return THfacultyAt04.indexOf(item) === -1 
        })
    }
  }
  
  if(C4THfacultyAt05.length>0){
    if(C4THfacultyAt05[0]==='Dr. UDD'){
      numAt05=['Dr. UDD']
    }else if(C4THfacultyAt05[0]==='Dr. Biswas'){
      numAt05=['Dr. Biswas']
    }else{
      numAt05= prof3.filter((item) => { 
          return THfacultyAt05.indexOf(item) === -1 
        })
    }
  }
  
    
     if(P4THfacultyAt9[0]&&P4THfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P4THfacultyAt10[0]&&P4THfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P4THfacultyAt11[0]&&P4THfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P4THfacultyAt12[0]&&P4THfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P4THfacultyAt03[0]&&P4THfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P4THfacultyAt04[0]&&P4THfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P4THfacultyAt05[0]&&P4THfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[P4THfacultyAt9[0]]    
    numAt10=[P4THfacultyAt10[0]]
    numAt11=[P4THfacultyAt11[0]]
    numAt12=[P4THfacultyAt12[0]]
    numAt03=[P4THfacultyAt03[0]]
    numAt04=[P4THfacultyAt04[0]]
    numAt05=[P4THfacultyAt05[0]]
  }
}

if(type[6]===days[4]){
  if(disabled===false){


    numAt9= prof.filter((item) => { 
      return FfacultyAt9.indexOf(item) === -1 
    })
       
    numAt10= prof.filter((item) => { 
      return FfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return FfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return FfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return FfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return FfacultyAt04.indexOf(item) === -1 
    })

    numAt05= prof.filter((item) => { 
      return FfacultyAt05.indexOf(item) === -1 
    })

    if(P3FfacultyAt9[0]===prof[1]||C3FfacultyAt9[0]===prof[1]){
       numAt9=[]
    }
    if(P3FfacultyAt10[0]===prof[1]||C3FfacultyAt10[0]===prof[1]){
      numAt10=[]
   }
   if(P3FfacultyAt11[0]===prof[1]||C3FfacultyAt11[0]===prof[1]){
    numAt11=[]
 }
 if(P3FfacultyAt12[0]===prof[1]||C3FfacultyAt12[0]===prof[1]){
  numAt12=[]
}
if(P3FfacultyAt03[0]===prof[1]||C3FfacultyAt03[0]===prof[1]){
  numAt03=[]
}
if(P3FfacultyAt04[0]===prof[1]||C3FfacultyAt04[0]===prof[1]){
  numAt04=[]
}
if(P3FfacultyAt05[0]===prof[1]||C3FfacultyAt05[0]===prof[1]){
  numAt05=[]
}

if(C4FfacultyAt9.length>0){
  if(C4FfacultyAt9[0]==='Dr. UDD'){
    numAt9=['Dr. UDD']
  }else if(C4FfacultyAt9[0]==='Dr. Biswas'){
    numAt9=['Dr. Biswas']
  }else{
    numAt9= prof3.filter((item) => { 
        return FfacultyAt9.indexOf(item) === -1 
      })
  }
}

if(C4FfacultyAt10.length>0){
    if(C4FfacultyAt10[0]==='Dr. UDD'){
      numAt10=['Dr. UDD']
    }else if(C4FfacultyAt10[0]==='Dr. Biswas'){
      numAt10=['Dr. Biswas']
    }else{
      numAt10= prof3.filter((item) => { 
          return FfacultyAt10.indexOf(item) === -1 
        })
    }
  }

  if(C4FfacultyAt11.length>0){
    if(C4FfacultyAt11[0]==='Dr. UDD'){
      numAt11=['Dr. UDD']
    }else if(C4FfacultyAt11[0]==='Dr. Biswas'){
      numAt11=['Dr. Biswas']
    }else{
      numAt11= prof3.filter((item) => { 
          return FfacultyAt11.indexOf(item) === -1 
        })
    }
  }

  if(C4FfacultyAt12.length>0){
    if(C4FfacultyAt12[0]==='Dr. UDD'){
      numAt12=['Dr. UDD']
    }else if(C4FfacultyAt12[0]==='Dr. Biswas'){
      numAt12=['Dr. Biswas']
    }else{
      numAt12= prof3.filter((item) => { 
          return FfacultyAt12.indexOf(item) === -1 
        })
    }
  }
  

  if(C4FfacultyAt03.length>0){
    if(C4FfacultyAt03[0]==='Dr. UDD'){
      numAt03=['Dr. UDD']
    }else if(C4FfacultyAt03[0]==='Dr. Biswas'){
      numAt03=['Dr. Biswas']
    }else{
      numAt03= prof3.filter((item) => { 
          return FfacultyAt03.indexOf(item) === -1 
        })
    }
  }
  

  if(C4FfacultyAt04.length>0){
    if(C4FfacultyAt04[0]==='Dr. UDD'){
      numAt04=['Dr. UDD']
    }else if(C4FfacultyAt04[0]==='Dr. Biswas'){
      numAt04=['Dr. Biswas']
    }else{
      numAt04= prof3.filter((item) => { 
          return FfacultyAt04.indexOf(item) === -1 
        })
    }
  }
  
  if(C4FfacultyAt05.length>0){
    if(C4FfacultyAt05[0]==='Dr. UDD'){
      numAt05=['Dr. UDD']
    }else if(C4FfacultyAt05[0]==='Dr. Biswas'){
      numAt05=['Dr. Biswas']
    }else{
      numAt05= prof3.filter((item) => { 
          return FfacultyAt05.indexOf(item) === -1 
        })
    }
  }
  
    
     if(P4FfacultyAt9[0]&&P4FfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P4FfacultyAt10[0]&&P4FfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P4FfacultyAt11[0]&&P4FfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P4FfacultyAt12[0]&&P4FfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P4FfacultyAt03[0]&&P4FfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P4FfacultyAt04[0]&&P4FfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P4FfacultyAt05[0]&&P4FfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[P4FfacultyAt9[0]]    
    numAt10=[P4FfacultyAt10[0]]
    numAt11=[P4FfacultyAt11[0]]
    numAt12=[P4FfacultyAt12[0]]
    numAt03=[P4FfacultyAt03[0]]
    numAt04=[P4FfacultyAt04[0]]
    numAt05=[P4FfacultyAt05[0]]
  }
}


    const submitHandler=(e)=>{
      
     e.preventDefault()
    
     setDisabled(true)

    dispatch({
      type:type[0],
      item:at9
    })
  
    dispatch({
      type:type[1],
      item:at10
    })

    dispatch({
      type:type[2],
      item:at11
    })
    dispatch({
      type:type[3],
      item:at12
    })
    dispatch({
      type:type[4],
      item:at03
    })
    dispatch({
      type:type[5],
      item:at04
    })


    dispatch({
      type:type[7],
      item:at9
    })
  
    dispatch({
      type:type[8],
      item:at10
    })

    dispatch({
      type:type[9],
      item:at11
    })
    dispatch({
      type:type[10],
      item:at12
    })
    dispatch({
      type:type[11],
      item:at03
    })
    dispatch({
      type:type[12],
      item:at04
    })
    dispatch({
      type:type[13],
      item:at05
    })
    dispatch({
      type:type[14],
      item:at05
    })
    }    
    
   const handler9=(e)=>{
     console.log(PMfacultyAt9[0]==='Dr. Rakesh')
    setAt9(e.target.value) 
    setDisabled(false)
    setat9(e.target.value)
   }
   const handler10=(e)=>{
    setDisabled(false)
    setAt10(e.target.value)
    setat10(e.target.value)
   }
   const handler11=(e)=>{
    setAt11(e.target.value) 
    setDisabled(false)
    setat11(e.target.value)
   }
   const handler12=(e)=>{
    setAt12(e.target.value) 
    setDisabled(false)
    setat12(e.target.value)
   }
   const handler03=(e)=>{
    setAt03(e.target.value) 
    setDisabled(false)
    setat03(e.target.value)
   }
   const handler04=(e)=>{
    setAt04(e.target.value)
    setat04(e.target.value)
    setDisabled(false)
   }
   const handler05=(e)=>{
     setAt05(e.target.value)
     setDisabled(false)
   }

    return (
        <div class='b2chemical' > 
        <form>    
            <div className='faculty__course'>
            <div>9.00am to 10.00am</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler9}>
             <option value="" disabled selected>Slots Available</option>
          
             {    
                    numAt9.map((each,index)=>{
                      
                      {
                        return <option value={each}>{each}-{courseHandler(each)}</option>
                      }
                        
                    })
               
                 
                  }
             </select>
             </div>
           </div>
          
           

           <div className='faculty__course'>
               <div>10.15 am to 11.15am</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler10}>
             <option value="" disabled selected>Slots Available</option>
             {
                    numAt10.map((each,index)=>{
                     return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
                
                  }
                  
             </select>
             </div>
           </div> 

            <div className='faculty__course'>
               <div>11.30 am to 12.30pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler11}>
             <option value="" disabled selected>Slots Available</option>
             {
                    numAt11.map((each,index)=>{
                     return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
                
                  }
             </select>
             </div>
           </div>

           <div className='faculty__course'>
            <div>12.45pm to 1.45pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler12}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt12.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
               
                 
                  }
             </select>
             </div>
           </div>

           <div className='faculty__course'>
            <div>3.00pm to 4.00pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler03}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt03.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
               
                 
                  }
             </select>
             </div>
           </div>

           <div className='faculty__course'>
            <div>4.15pm to 5.15pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler04}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt04.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
               
                 
                  }
             </select>
             </div>
           </div>


           <div className='faculty__course'>
            <div>5.30pm to 6.30pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler05}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt05.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
               
                 
                  }
             </select>
             </div>
           </div>
           


           <input type='submit' disabled={disabled} onClick={submitHandler}></input>
           
           </form>
        </div>
    )
}

export default B4chemical
