import React,{useState,useEffect} from 'react'
import './B2chemical.css'
import {useStateValue} from './StateProvider'

function B3petroleum({type}) {
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
    const prof=['Dr. Biswas','Dr. UDD','Dr. Shivanjali','Dr. SK Sinha']
    const prof3=['Dr. Bala','Dr. Gunjan']
    const prof2=['Dr. Vishnu']
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
       course='Geoinformatics'
      }
      if(each===prof[1]){
        course='EE&Electronics'
      }
      if(each===prof[2]){
        course='Production Engineering'
      }
      if(each===prof[3]){
        course='Petrol Exploration & Prospecting'
      }
      
      return course
    }

    const courseHandler2=(each)=>{
        let course=[]
       if(each==='Dr. Vishnu'){
         course='Applied Reservoir Engineering'
       }
        return course
      }
  
      const courseHandler3=(each)=>{
        let course=[]
       if(each==='Dr. Vishnu'){
         course='Formation Evaluation'
       }
        return course
      }

let numAt03=[]
let numAt04=[]
let numAt9=[]
let numAt10=[]
let numAt11=[]
let numAt12=[]
let numAt05=[]

let NImilan1=[]
let NImilan2=[]
let NIcourse2=['Mass Transfer(TUT)']
    let NIcourse3=['HTO']
    let TEcourse2=['Mass Transfer(TUT)']
    let TEcourse3=['HTO']
    let ELcourse2=['Mass Transfer(TUT)']
    let ELcourse3=['HTO']
    let TWcourse2=['Mass Transfer(TUT)']
    let TWcourse3=['HTO']
    let THcourse2=['Mass Transfer(TUT)']
    let THcourse3=['HTO']
    let FOcourse2=['Mass Transfer(TUT)']
    let FOcourse3=['HTO']
    let FIcourse2=['Mass Transfer(TUT)']
    let FIcourse3=['HTO']

let TEmilan1=[]
let TEmilan2=[]

let ELmilan1=[]
let ELmilan2=[]

let TWmilan1=[]
let TWmilan2=[]

let THmilan1=[]
let THmilan2=[]

let FOmilan1=[]
let FOmilan2=[]

let FImilan1=[]
let FImilan2=[]

let milan1=['Dr. Milan Kumar']
let course2=['Mass Transfer(TUT)']
let course3=['HTO']
let milan2=['Dr. Milan Kumar']

let milan=['Dr. Milan Kumar']

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

  NImilan1=prof2.filter((item)=>{
      return MfacultyAt9.indexOf(item) === -1
  })
  NImilan2=prof2.filter((item)=>{
      return MfacultyAt9.indexOf(item) === -1
  })

    if(C3MfacultyAt9.length!==0){
      if(C3MfacultyAt9[0]===prof[1]){
          numAt9=C3MfacultyAt9
          NImilan1=[]
          NImilan2=[]
      }else{
          numAt9=numAt9.filter((item)=>{
              return item!==prof[1]
          })
      }
  }
  if(PMfacultyAt9[0]==='Dr. Rakesh'||CMfacultyAt9[0]==='Dr. Rakesh'){
    numAt9=numAt9.filter((item)=>{
      return item!==prof[1]
  })
  }


TEmilan1=prof2.filter((item)=>{
    return MfacultyAt10.indexOf(item) === -1
})
TEmilan2=prof2.filter((item)=>{
    return MfacultyAt10.indexOf(item) === -1
})

  if(C3MfacultyAt10.length!==0){
    if(C3MfacultyAt10[0]===prof[1]){
        numAt10=C3MfacultyAt10
        TEmilan1=[]
        TEmilan2=[]
    }else{
        numAt10=numAt10.filter((item)=>{
            return item!==prof[1]
        })
    }
}
if(PMfacultyAt10[0]==='Dr. Rakesh'||CMfacultyAt10[0]==='Dr. Rakesh'){
  numAt10=numAt10.filter((item)=>{
    return item!==prof[1]
})
}


ELmilan1=prof2.filter((item)=>{
  return MfacultyAt11.indexOf(item) === -1
})
ELmilan2=prof2.filter((item)=>{
  return MfacultyAt11.indexOf(item) === -1
})

if(C3MfacultyAt11.length!==0){
  if(C3MfacultyAt11[0]===prof[1]){
      numAt11=C3MfacultyAt11
      ELmilan1=[]
      ELmilan2=[]
  }else{
      numAt11=numAt11.filter((item)=>{
          return item!==prof[1]
      })
  }
}
if(PMfacultyAt11[0]==='Dr. Rakesh'||CMfacultyAt11[0]==='Dr. Rakesh'){
numAt11=numAt11.filter((item)=>{
  return item!==prof[1]
})
}


TWmilan1=prof2.filter((item)=>{
  return MfacultyAt12.indexOf(item) === -1
})
TWmilan2=prof2.filter((item)=>{
  return MfacultyAt12.indexOf(item) === -1
})

if(C3MfacultyAt12.length!==0){
  if(C3MfacultyAt12[0]===prof[1]){
      numAt12=C3MfacultyAt12
      TWmilan1=[]
      TWmilan2=[]
  }else{
      numAt12=numAt12.filter((item)=>{
          return item!==prof[1]
      })
  }
}
if(PMfacultyAt12[0]==='Dr. Rakesh'||CMfacultyAt12[0]==='Dr. Rakesh'){
numAt12=numAt12.filter((item)=>{
  return item!==prof[1]
})
}


THmilan1=prof2.filter((item)=>{
  return MfacultyAt03.indexOf(item) === -1
})
THmilan2=prof2.filter((item)=>{
  return MfacultyAt03.indexOf(item) === -1
})

if(C3MfacultyAt03.length!==0){
  if(C3MfacultyAt03[0]===prof[1]){
      numAt03=C3MfacultyAt03
      THmilan1=[]
      THmilan2=[]
  }else{
      numAt03=numAt03.filter((item)=>{
          return item!==prof[1]
      })
  }
}
if(PMfacultyAt03[0]==='Dr. Rakesh'||CMfacultyAt03[0]==='Dr. Rakesh'){
numAt03=numAt03.filter((item)=>{
  return item!==prof[1]
})
}
    
FOmilan1=prof2.filter((item)=>{
  return MfacultyAt04.indexOf(item) === -1
})
FOmilan2=prof2.filter((item)=>{
  return MfacultyAt04.indexOf(item) === -1
})

if(C3MfacultyAt04.length!==0){
  if(C3MfacultyAt04[0]===prof[1]){
      numAt04=C3MfacultyAt04
      FOmilan1=[]
      FOmilan2=[]
  }else{
      numAt04=numAt04.filter((item)=>{
          return item!==prof[1]
      })
  }
}
if(PMfacultyAt04[0]==='Dr. Rakesh'||CMfacultyAt04[0]==='Dr. Rakesh'){
numAt04=numAt04.filter((item)=>{
  return item!==prof[1]
})
}

FImilan1=prof2.filter((item)=>{
  return MfacultyAt05.indexOf(item) === -1
})
FImilan2=prof2.filter((item)=>{
  return MfacultyAt05.indexOf(item) === -1
})

if(C3MfacultyAt05.length!==0){
  if(C3MfacultyAt05[0]===prof[1]){
      numAt05=C3MfacultyAt05
      FImilan1=[]
      FImilan2=[]
  }else{
      numAt05=numAt05.filter((item)=>{
          return item!==prof[1]
      })
  }
}
if(PMfacultyAt05[0]==='Dr. Rakesh'||CMfacultyAt05[0]==='Dr. Rakesh'){
numAt05=numAt05.filter((item)=>{
  return item!==prof[1]
})
}


    if(POMfacultyAt9[0]==='HTO'||COMfacultyAt9[0]==='HTO'){
        numAt9=[]
        NImilan1=[]
        NImilan2=[]
     }
     if(POMfacultyAt10[0]==='HTO'||COMfacultyAt10[0]==='HTO'){
       numAt10=[]
       TEmilan1=[]
       TEmilan2=[]
    }
    if(POMfacultyAt11[0]==='HTO'||COMfacultyAt11[0]==='HTO'){
     numAt11=[]
    ELmilan1=[]
    ELmilan2=[]
  }
  if(POMfacultyAt12[0]==='HTO'||COMfacultyAt12[0]==='HTO'){
   numAt12=[]
   TWmilan1=[]
   TWmilan2=[]
 }
 if(POMfacultyAt03[0]==='HTO'||COMfacultyAt03[0]==='HTO'){
   numAt03=[]
   THmilan1=[]
   THmilan2=[]
 }
 if(POMfacultyAt04[0]==='HTO'||COMfacultyAt04[0]==='HTO'){
   numAt04=[]
   FOmilan1=[]
   FOmilan2=[]
 }
 if(POMfacultyAt05[0]==='HTO'||COMfacultyAt05[0]==='HTO'){
   numAt05=[]
   FImilan1=[]
   FImilan2=[]
 }

 if(C4MfacultyAt9[0]&&C4MfacultyAt9[0].length>0||P4MfacultyAt9[0]&&P4MfacultyAt9[0].length>0){
  numAt9=numAt9.filter((item)=>{
    return item!==prof[1]
})
}

if(C4MfacultyAt10[0]&&C4MfacultyAt10[0].length>0||P4MfacultyAt10[0]&&P4MfacultyAt10[0].length>0){
  numAt10=numAt10.filter((item)=>{
    return item!==prof[1]
})
}

if(C4MfacultyAt11[0]&&C4MfacultyAt11[0].length>0||P4MfacultyAt11[0]&&P4MfacultyAt11[0].length>0){
  numAt11=numAt11.filter((item)=>{
    return item!==prof[1]
})
}

if(C4MfacultyAt12[0]&&C4MfacultyAt12[0].length>0||P4MfacultyAt12[0]&&P4MfacultyAt12[0].length>0){
  numAt12=numAt12.filter((item)=>{
    return item!==prof[1]
})
}

if(C4MfacultyAt03[0]&&C4MfacultyAt03[0].length>0||P4MfacultyAt03[0]&&P4MfacultyAt03[0].length>0){
  numAt03=numAt03.filter((item)=>{
    return item!==prof[1]
})
}

if(C4MfacultyAt04[0]&&C4MfacultyAt04[0].length>0||P4MfacultyAt04[0]&&P4MfacultyAt04[0].length>0){
  numAt04=numAt04.filter((item)=>{
    return item!==prof[1]
})
}

if(C4MfacultyAt05[0]&&C4MfacultyAt05[0].length>0||P4MfacultyAt05[0]&&P4MfacultyAt05[0].length>0){
  numAt05=numAt05.filter((item)=>{
    return item!==prof[1]
})
}

// if(POMfacultyAt9[0]===course2[0]||C3MfacultyAt9[0]&&C3MfacultyAt9[0].length>0){
//   NImilan2=[]
//   NIcourse3=[] 
//  }
 
//  if(POMfacultyAt10[0]===course2[0]||C3MfacultyAt10[0]&&C3MfacultyAt10[0].length>0){
//    TEmilan2=[] 
//    TEcourse3=[]
//   }
//   if(POMfacultyAt11[0]===course2[0]||C3MfacultyAt11[0]&&C3MfacultyAt11[0].length>0){
//     ELmilan2=[] 
//     ELcourse3=[]
//    }
//   if(POMfacultyAt12[0]===course2[0]||C3MfacultyAt12[0]&&C3MfacultyAt12[0].length>0){
//    TWmilan2=[]
//    TWcourse3=[]
//   }
//   if(POMfacultyAt03[0]===course2[0]||C3MfacultyAt03[0]&&C3MfacultyAt03[0].length>0){
//    THmilan2=[]
//    THcourse3=[]
//   }
//   if(POMfacultyAt04[0]===course2[0]||C3MfacultyAt04[0]&&C3MfacultyAt04[0].length>0){
//    FOmilan2=[]
//    FOcourse3=[]
//   }
//   if(POMfacultyAt05[0]===course2[0]||C3MfacultyAt05[0]&&C3MfacultyAt05[0].length>0){
//    FImilan2=[]
//    FIcourse3=[]
//   }

//   if(POMfacultyAt9[0]&&POMfacultyAt9[0]===course3[0]){
//     NIcourse2=[]
//     NImilan1=[]
//    }
//    if(POMfacultyAt10[0]&&POMfacultyAt10[0]===course3[0]){
//     TEcourse2=[]
//     TEmilan1=[]
//    }
//    if(POMfacultyAt11[0]&&POMfacultyAt11[0]===course3[0]){
//     ELcourse2=[]
//     ELmilan1=[]
//    }
//    if(POMfacultyAt12[0]&&POMfacultyAt12[0]===course3[0]){
//     TWcourse2=[]
//     TWmilan1=[]
//    }
//    if(POMfacultyAt03[0]&&POMfacultyAt03[0]===course3[0]){
//     THcourse2=[]
//     THmilan1=[]
//    }
//    if(POMfacultyAt04[0]&&POMfacultyAt04[0]===course3[0]){
//     FOcourse2=[]
//     FOmilan1=[]
//    }
//    if(POMfacultyAt05[0]&&POMfacultyAt05[0]===course3[0]){
//     FIcourse2=[]
//     FImilan1=[]
//    }
   
  

  if(P3MfacultyAt9[0]&&P3MfacultyAt9[0].length>0){
    setDisabled(true)
  }
  if(P3MfacultyAt10[0]&&P3MfacultyAt10[0].length>0){
    setDisabled(true)
  }
  if(P3MfacultyAt11[0]&&P3MfacultyAt11[0].length>0){
    setDisabled(true)
  }
  if(P3MfacultyAt12[0]&&P3MfacultyAt12[0].length>0){
    setDisabled(true)
  }
  if(P3MfacultyAt03[0]&&P3MfacultyAt03[0].length>0){
    setDisabled(true)
  }
  if(P3MfacultyAt04[0]&&P3MfacultyAt04[0].length>0){
    setDisabled(true)
  }
  if(P3MfacultyAt05[0]&&P3MfacultyAt05[0].length>0){
    setDisabled(true)
  }

  

}else{
  numAt9=[P3MfacultyAt9[0]]
  numAt10=[P3MfacultyAt10[0]]
  numAt11=[P3MfacultyAt11[0]]
  numAt12=[P3MfacultyAt12[0]]
  numAt03=[P3MfacultyAt03[0]]
  numAt04=[P3MfacultyAt04[0]]
  numAt05=[P3MfacultyAt05[0]]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
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
  
    NImilan1=prof2.filter((item)=>{
        return TfacultyAt9.indexOf(item) === -1
    })
    NImilan2=prof2.filter((item)=>{
        return TfacultyAt9.indexOf(item) === -1
    })
  
      if(C3TfacultyAt9.length!==0){
        if(C3TfacultyAt9[0]===prof[1]){
            numAt9=C3TfacultyAt9
            NImilan1=[]
            NImilan2=[]
        }else{
            numAt9=numAt9.filter((item)=>{
                return item!==prof[1]
            })
        }
    }
    if(PTfacultyAt9[0]==='Dr. Rakesh'||CTfacultyAt9[0]==='Dr. Rakesh'){
      numAt9=numAt9.filter((item)=>{
        return item!==prof[1]
    })
    }
  
  
  TEmilan1=prof2.filter((item)=>{
      return TfacultyAt10.indexOf(item) === -1
  })
  TEmilan2=prof2.filter((item)=>{
      return TfacultyAt10.indexOf(item) === -1
  })
  
    if(C3TfacultyAt10.length!==0){
      if(C3TfacultyAt10[0]===prof[1]){
          numAt10=C3TfacultyAt10
          TEmilan1=[]
          TEmilan2=[]
      }else{
          numAt10=numAt10.filter((item)=>{
              return item!==prof[1]
          })
      }
  }
  if(PTfacultyAt10[0]==='Dr. Rakesh'||CTfacultyAt10[0]==='Dr. Rakesh'){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  
  ELmilan1=prof2.filter((item)=>{
    return TfacultyAt11.indexOf(item) === -1
  })
  ELmilan2=prof2.filter((item)=>{
    return TfacultyAt11.indexOf(item) === -1
  })
  
  if(C3TfacultyAt11.length!==0){
    if(C3TfacultyAt11[0]===prof[1]){
        numAt11=C3TfacultyAt11
        ELmilan1=[]
        ELmilan2=[]
    }else{
        numAt11=numAt11.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTfacultyAt11[0]==='Dr. Rakesh'||CTfacultyAt11[0]==='Dr. Rakesh'){
  numAt11=numAt11.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  TWmilan1=prof2.filter((item)=>{
    return TfacultyAt12.indexOf(item) === -1
  })
  TWmilan2=prof2.filter((item)=>{
    return TfacultyAt12.indexOf(item) === -1
  })
  
  if(C3TfacultyAt12.length!==0){
    if(C3TfacultyAt12[0]===prof[1]){
        numAt12=C3TfacultyAt12
        TWmilan1=[]
        TWmilan2=[]
    }else{
        numAt12=numAt12.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTfacultyAt12[0]==='Dr. Rakesh'||CTfacultyAt12[0]==='Dr. Rakesh'){
  numAt12=numAt12.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  THmilan1=prof2.filter((item)=>{
    return TfacultyAt03.indexOf(item) === -1
  })
  THmilan2=prof2.filter((item)=>{
    return TfacultyAt03.indexOf(item) === -1
  })
  
  if(C3TfacultyAt03.length!==0){
    if(C3TfacultyAt03[0]===prof[1]){
        numAt03=C3TfacultyAt03
        THmilan1=[]
        THmilan2=[]
    }else{
        numAt03=numAt03.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTfacultyAt03[0]==='Dr. Rakesh'||CTfacultyAt03[0]==='Dr. Rakesh'){
  numAt03=numAt03.filter((item)=>{
    return item!==prof[1]
  })
  }
      
  FOmilan1=prof2.filter((item)=>{
    return TfacultyAt04.indexOf(item) === -1
  })
  FOmilan2=prof2.filter((item)=>{
    return TfacultyAt04.indexOf(item) === -1
  })
  
  if(C3TfacultyAt04.length!==0){
    if(C3TfacultyAt04[0]===prof[1]){
        numAt04=C3TfacultyAt04
        FOmilan1=[]
        FOmilan2=[]
    }else{
        numAt04=numAt04.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTfacultyAt04[0]==='Dr. Rakesh'||CTfacultyAt04[0]==='Dr. Rakesh'){
  numAt04=numAt04.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  FImilan1=prof2.filter((item)=>{
    return TfacultyAt05.indexOf(item) === -1
  })
  FImilan2=prof2.filter((item)=>{
    return TfacultyAt05.indexOf(item) === -1
  })
  
  if(C3TfacultyAt05.length!==0){
    if(C3TfacultyAt05[0]===prof[1]){
        numAt05=C3TfacultyAt05
        FImilan1=[]
        FImilan2=[]
    }else{
        numAt05=numAt05.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTfacultyAt05[0]==='Dr. Rakesh'||CTfacultyAt05[0]==='Dr. Rakesh'){
  numAt05=numAt05.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
      if(POTfacultyAt9[0]==='HTO'||COTfacultyAt9[0]==='HTO'){
          numAt9=[]
          NImilan1=[]
          NImilan2=[]
       }
       if(POTfacultyAt10[0]==='HTO'||COTfacultyAt10[0]==='HTO'){
         numAt10=[]
         TEmilan1=[]
         TEmilan2=[]
      }
      if(POTfacultyAt11[0]==='HTO'||COTfacultyAt11[0]==='HTO'){
       numAt11=[]
      ELmilan1=[]
      ELmilan2=[]
    }
    if(POTfacultyAt12[0]==='HTO'||COTfacultyAt12[0]==='HTO'){
     numAt12=[]
     TWmilan1=[]
     TWmilan2=[]
   }
   if(POTfacultyAt03[0]==='HTO'||COTfacultyAt03[0]==='HTO'){
     numAt03=[]
     THmilan1=[]
     THmilan2=[]
   }
   if(POTfacultyAt04[0]==='HTO'||COTfacultyAt04[0]==='HTO'){
     numAt04=[]
     FOmilan1=[]
     FOmilan2=[]
   }
   if(POTfacultyAt05[0]==='HTO'||COTfacultyAt05[0]==='HTO'){
     numAt05=[]
     FImilan1=[]
     FImilan2=[]
   }
  
   if(C4TfacultyAt9[0]&&C4TfacultyAt9[0].length>0||P4TfacultyAt9[0]&&P4TfacultyAt9[0].length>0){
    numAt9=numAt9.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4TfacultyAt10[0]&&C4TfacultyAt10[0].length>0||P4TfacultyAt10[0]&&P4TfacultyAt10[0].length>0){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4TfacultyAt11[0]&&C4TfacultyAt11[0].length>0||P4TfacultyAt11[0]&&P4TfacultyAt11[0].length>0){
    numAt11=numAt11.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4TfacultyAt12[0]&&C4TfacultyAt12[0].length>0||P4TfacultyAt12[0]&&P4TfacultyAt12[0].length>0){
    numAt12=numAt12.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4TfacultyAt03[0]&&C4TfacultyAt03[0].length>0||P4TfacultyAt03[0]&&P4TfacultyAt03[0].length>0){
    numAt03=numAt03.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4TfacultyAt04[0]&&C4TfacultyAt04[0].length>0||P4TfacultyAt04[0]&&P4TfacultyAt04[0].length>0){
    numAt04=numAt04.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4TfacultyAt05[0]&&C4TfacultyAt05[0].length>0||P4TfacultyAt05[0]&&P4TfacultyAt05[0].length>0){
    numAt05=numAt05.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  // if(POTfacultyAt9[0]===course2[0]||C3TfacultyAt9[0]&&C3TfacultyAt9[0].length>0){
  //   NImilan2=[]
  //   NIcourse3=[] 
  //  }
   
  //  if(POTfacultyAt10[0]===course2[0]||C3TfacultyAt10[0]&&C3TfacultyAt10[0].length>0){
  //    TEmilan2=[] 
  //    TEcourse3=[]
  //   }
  //   if(POTfacultyAt11[0]===course2[0]||C3TfacultyAt11[0]&&C3TfacultyAt11[0].length>0){
  //     ELmilan2=[] 
  //     ELcourse3=[]
  //    }
  //   if(POTfacultyAt12[0]===course2[0]||C3TfacultyAt12[0]&&C3TfacultyAt12[0].length>0){
  //    TWmilan2=[]
  //    TWcourse3=[]
  //   }
  //   if(POTfacultyAt03[0]===course2[0]||C3TfacultyAt03[0]&&C3TfacultyAt03[0].length>0){
  //    THmilan2=[]
  //    THcourse3=[]
  //   }
  //   if(POTfacultyAt04[0]===course2[0]||C3TfacultyAt04[0]&&C3TfacultyAt04[0].length>0){
  //    FOmilan2=[]
  //    FOcourse3=[]
  //   }
  //   if(POTfacultyAt05[0]===course2[0]||C3TfacultyAt05[0]&&C3TfacultyAt05[0].length>0){
  //    FImilan2=[]
  //    FIcourse3=[]
  //   }
  
  //   if(POTfacultyAt9[0]&&POTfacultyAt9[0]===course3[0]){
  //     NIcourse2=[]
  //     NImilan1=[]
  //    }
  //    if(POTfacultyAt10[0]&&POTfacultyAt10[0]===course3[0]){
  //     TEcourse2=[]
  //     TEmilan1=[]
  //    }
  //    if(POTfacultyAt11[0]&&POTfacultyAt11[0]===course3[0]){
  //     ELcourse2=[]
  //     ELmilan1=[]
  //    }
  //    if(POTfacultyAt12[0]&&POTfacultyAt12[0]===course3[0]){
  //     TWcourse2=[]
  //     TWmilan1=[]
  //    }
  //    if(POTfacultyAt03[0]&&POTfacultyAt03[0]===course3[0]){
  //     THcourse2=[]
  //     THmilan1=[]
  //    }
  //    if(POTfacultyAt04[0]&&POTfacultyAt04[0]===course3[0]){
  //     FOcourse2=[]
  //     FOmilan1=[]
  //    }
  //    if(POTfacultyAt05[0]&&POTfacultyAt05[0]===course3[0]){
  //     FIcourse2=[]
  //     FImilan1=[]
  //    }
     
    
  
    if(P3TfacultyAt9[0]&&P3TfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P3TfacultyAt10[0]&&P3TfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P3TfacultyAt11[0]&&P3TfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P3TfacultyAt12[0]&&P3TfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P3TfacultyAt03[0]&&P3TfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P3TfacultyAt04[0]&&P3TfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P3TfacultyAt05[0]&&P3TfacultyAt05[0].length>0){
      setDisabled(true)
    }
  
    
  
  }else{
    numAt9=[P3TfacultyAt9[0]]
    numAt10=[P3TfacultyAt10[0]]
    numAt11=[P3TfacultyAt11[0]]
    numAt12=[P3TfacultyAt12[0]]
    numAt03=[P3TfacultyAt03[0]]
    numAt04=[P3TfacultyAt04[0]]
    numAt05=[P3TfacultyAt05[0]]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  }
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
  
    NImilan1=prof2.filter((item)=>{
        return WfacultyAt9.indexOf(item) === -1
    })
    NImilan2=prof2.filter((item)=>{
        return WfacultyAt9.indexOf(item) === -1
    })
  
      if(C3WfacultyAt9.length!==0){
        if(C3WfacultyAt9[0]===prof[1]){
            numAt9=C3WfacultyAt9
            NImilan1=[]
            NImilan2=[]
        }else{
            numAt9=numAt9.filter((item)=>{
                return item!==prof[1]
            })
        }
    }
    if(PWfacultyAt9[0]==='Dr. Rakesh'||CWfacultyAt9[0]==='Dr. Rakesh'){
      numAt9=numAt9.filter((item)=>{
        return item!==prof[1]
    })
    }
  
  
  TEmilan1=prof2.filter((item)=>{
      return WfacultyAt10.indexOf(item) === -1
  })
  TEmilan2=prof2.filter((item)=>{
      return WfacultyAt10.indexOf(item) === -1
  })
  
    if(C3WfacultyAt10.length!==0){
      if(C3WfacultyAt10[0]===prof[1]){
          numAt10=C3WfacultyAt10
          TEmilan1=[]
          TEmilan2=[]
      }else{
          numAt10=numAt10.filter((item)=>{
              return item!==prof[1]
          })
      }
  }
  if(PWfacultyAt10[0]==='Dr. Rakesh'||CWfacultyAt10[0]==='Dr. Rakesh'){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  
  ELmilan1=prof2.filter((item)=>{
    return WfacultyAt11.indexOf(item) === -1
  })
  ELmilan2=prof2.filter((item)=>{
    return WfacultyAt11.indexOf(item) === -1
  })
  
  if(C3WfacultyAt11.length!==0){
    if(C3WfacultyAt11[0]===prof[1]){
        numAt11=C3WfacultyAt11
        ELmilan1=[]
        ELmilan2=[]
    }else{
        numAt11=numAt11.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PWfacultyAt11[0]==='Dr. Rakesh'||CWfacultyAt11[0]==='Dr. Rakesh'){
  numAt11=numAt11.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  TWmilan1=prof2.filter((item)=>{
    return WfacultyAt12.indexOf(item) === -1
  })
  TWmilan2=prof2.filter((item)=>{
    return WfacultyAt12.indexOf(item) === -1
  })
  
  if(C3WfacultyAt12.length!==0){
    if(C3WfacultyAt12[0]===prof[1]){
        numAt12=C3WfacultyAt12
        TWmilan1=[]
        TWmilan2=[]
    }else{
        numAt12=numAt12.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PWfacultyAt12[0]==='Dr. Rakesh'||CWfacultyAt12[0]==='Dr. Rakesh'){
  numAt12=numAt12.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  THmilan1=prof2.filter((item)=>{
    return WfacultyAt03.indexOf(item) === -1
  })
  THmilan2=prof2.filter((item)=>{
    return WfacultyAt03.indexOf(item) === -1
  })
  
  if(C3WfacultyAt03.length!==0){
    if(C3WfacultyAt03[0]===prof[1]){
        numAt03=C3WfacultyAt03
        THmilan1=[]
        THmilan2=[]
    }else{
        numAt03=numAt03.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PWfacultyAt03[0]==='Dr. Rakesh'||CWfacultyAt03[0]==='Dr. Rakesh'){
  numAt03=numAt03.filter((item)=>{
    return item!==prof[1]
  })
  }
      
  FOmilan1=prof2.filter((item)=>{
    return WfacultyAt04.indexOf(item) === -1
  })
  FOmilan2=prof2.filter((item)=>{
    return WfacultyAt04.indexOf(item) === -1
  })
  
  if(C3WfacultyAt04.length!==0){
    if(C3WfacultyAt04[0]===prof[1]){
        numAt04=C3WfacultyAt04
        FOmilan1=[]
        FOmilan2=[]
    }else{
        numAt04=numAt04.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PWfacultyAt04[0]==='Dr. Rakesh'||CWfacultyAt04[0]==='Dr. Rakesh'){
  numAt04=numAt04.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  FImilan1=prof2.filter((item)=>{
    return WfacultyAt05.indexOf(item) === -1
  })
  FImilan2=prof2.filter((item)=>{
    return WfacultyAt05.indexOf(item) === -1
  })
  
  if(C3WfacultyAt05.length!==0){
    if(C3WfacultyAt05[0]===prof[1]){
        numAt05=C3WfacultyAt05
        FImilan1=[]
        FImilan2=[]
    }else{
        numAt05=numAt05.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PWfacultyAt05[0]==='Dr. Rakesh'||CWfacultyAt05[0]==='Dr. Rakesh'){
  numAt05=numAt05.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
      if(POWfacultyAt9[0]==='HTO'||COWfacultyAt9[0]==='HTO'){
          numAt9=[]
          NImilan1=[]
          NImilan2=[]
       }
       if(POWfacultyAt10[0]==='HTO'||COWfacultyAt10[0]==='HTO'){
         numAt10=[]
         TEmilan1=[]
         TEmilan2=[]
      }
      if(POWfacultyAt11[0]==='HTO'||COWfacultyAt11[0]==='HTO'){
       numAt11=[]
      ELmilan1=[]
      ELmilan2=[]
    }
    if(POWfacultyAt12[0]==='HTO'||COWfacultyAt12[0]==='HTO'){
     numAt12=[]
     TWmilan1=[]
     TWmilan2=[]
   }
   if(POWfacultyAt03[0]==='HTO'||COWfacultyAt03[0]==='HTO'){
     numAt03=[]
     THmilan1=[]
     THmilan2=[]
   }
   if(POWfacultyAt04[0]==='HTO'||COWfacultyAt04[0]==='HTO'){
     numAt04=[]
     FOmilan1=[]
     FOmilan2=[]
   }
   if(POWfacultyAt05[0]==='HTO'||COWfacultyAt05[0]==='HTO'){
     numAt05=[]
     FImilan1=[]
     FImilan2=[]
   }
  
   if(C4WfacultyAt9[0]&&C4WfacultyAt9[0].length>0||P4WfacultyAt9[0]&&P4WfacultyAt9[0].length>0){
    numAt9=numAt9.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4WfacultyAt10[0]&&C4WfacultyAt10[0].length>0||P4WfacultyAt10[0]&&P4WfacultyAt10[0].length>0){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4WfacultyAt11[0]&&C4WfacultyAt11[0].length>0||P4WfacultyAt11[0]&&P4WfacultyAt11[0].length>0){
    numAt11=numAt11.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4WfacultyAt12[0]&&C4WfacultyAt12[0].length>0||P4WfacultyAt12[0]&&P4WfacultyAt12[0].length>0){
    numAt12=numAt12.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4WfacultyAt03[0]&&C4WfacultyAt03[0].length>0||P4WfacultyAt03[0]&&P4WfacultyAt03[0].length>0){
    numAt03=numAt03.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4WfacultyAt04[0]&&C4WfacultyAt04[0].length>0||P4WfacultyAt04[0]&&P4WfacultyAt04[0].length>0){
    numAt04=numAt04.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4WfacultyAt05[0]&&C4WfacultyAt05[0].length>0||P4WfacultyAt05[0]&&P4WfacultyAt05[0].length>0){
    numAt05=numAt05.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  // if(POWfacultyAt9[0]===course2[0]||C3WfacultyAt9[0]&&C3WfacultyAt9[0].length>0){
  //   NImilan2=[]
  //   NIcourse3=[] 
  //  }
   
  //  if(POWfacultyAt10[0]===course2[0]||C3WfacultyAt10[0]&&C3WfacultyAt10[0].length>0){
  //    TEmilan2=[] 
  //    TEcourse3=[]
  //   }
  //   if(POWfacultyAt11[0]===course2[0]||C3WfacultyAt11[0]&&C3WfacultyAt11[0].length>0){
  //     ELmilan2=[] 
  //     ELcourse3=[]
  //    }
  //   if(POWfacultyAt12[0]===course2[0]||C3WfacultyAt12[0]&&C3WfacultyAt12[0].length>0){
  //    TWmilan2=[]
  //    TWcourse3=[]
  //   }
  //   if(POWfacultyAt03[0]===course2[0]||C3WfacultyAt03[0]&&C3WfacultyAt03[0].length>0){
  //    THmilan2=[]
  //    THcourse3=[]
  //   }
  //   if(POWfacultyAt04[0]===course2[0]||C3WfacultyAt04[0]&&C3WfacultyAt04[0].length>0){
  //    FOmilan2=[]
  //    FOcourse3=[]
  //   }
  //   if(POWfacultyAt05[0]===course2[0]||C3WfacultyAt05[0]&&C3WfacultyAt05[0].length>0){
  //    FImilan2=[]
  //    FIcourse3=[]
  //   }
  
  //   if(POWfacultyAt9[0]&&POWfacultyAt9[0]===course3[0]){
  //     NIcourse2=[]
  //     NImilan1=[]
  //    }
  //    if(POWfacultyAt10[0]&&POWfacultyAt10[0]===course3[0]){
  //     TEcourse2=[]
  //     TEmilan1=[]
  //    }
  //    if(POWfacultyAt11[0]&&POWfacultyAt11[0]===course3[0]){
  //     ELcourse2=[]
  //     ELmilan1=[]
  //    }
  //    if(POWfacultyAt12[0]&&POWfacultyAt12[0]===course3[0]){
  //     TWcourse2=[]
  //     TWmilan1=[]
  //    }
  //    if(POWfacultyAt03[0]&&POWfacultyAt03[0]===course3[0]){
  //     THcourse2=[]
  //     THmilan1=[]
  //    }
  //    if(POWfacultyAt04[0]&&POWfacultyAt04[0]===course3[0]){
  //     FOcourse2=[]
  //     FOmilan1=[]
  //    }
  //    if(POWfacultyAt05[0]&&POWfacultyAt05[0]===course3[0]){
  //     FIcourse2=[]
  //     FImilan1=[]
  //    }
     
    
  
    if(P3WfacultyAt9[0]&&P3WfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P3WfacultyAt10[0]&&P3WfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P3WfacultyAt11[0]&&P3WfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P3WfacultyAt12[0]&&P3WfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P3WfacultyAt03[0]&&P3WfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P3WfacultyAt04[0]&&P3WfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P3WfacultyAt05[0]&&P3WfacultyAt05[0].length>0){
      setDisabled(true)
    }
  
    
  
  }else{
    numAt9=[P3WfacultyAt9[0]]
    numAt10=[P3WfacultyAt10[0]]
    numAt11=[P3WfacultyAt11[0]]
    numAt12=[P3WfacultyAt12[0]]
    numAt03=[P3WfacultyAt03[0]]
    numAt04=[P3WfacultyAt04[0]]
    numAt05=[P3WfacultyAt05[0]]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
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
  
    NImilan1=prof2.filter((item)=>{
        return THfacultyAt9.indexOf(item) === -1
    })
    NImilan2=prof2.filter((item)=>{
        return THfacultyAt9.indexOf(item) === -1
    })
  
      if(C3THfacultyAt9.length!==0){
        if(C3THfacultyAt9[0]===prof[1]){
            numAt9=C3THfacultyAt9
            NImilan1=[]
            NImilan2=[]
        }else{
            numAt9=numAt9.filter((item)=>{
                return item!==prof[1]
            })
        }
    }
    if(PTHfacultyAt9[0]==='Dr. Rakesh'||CTHfacultyAt9[0]==='Dr. Rakesh'){
      numAt9=numAt9.filter((item)=>{
        return item!==prof[1]
    })
    }
  
  
  TEmilan1=prof2.filter((item)=>{
      return THfacultyAt10.indexOf(item) === -1
  })
  TEmilan2=prof2.filter((item)=>{
      return THfacultyAt10.indexOf(item) === -1
  })
  
    if(C3THfacultyAt10.length!==0){
      if(C3THfacultyAt10[0]===prof[1]){
          numAt10=C3THfacultyAt10
          TEmilan1=[]
          TEmilan2=[]
      }else{
          numAt10=numAt10.filter((item)=>{
              return item!==prof[1]
          })
      }
  }
  if(PTHfacultyAt10[0]==='Dr. Rakesh'||CTHfacultyAt10[0]==='Dr. Rakesh'){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  
  ELmilan1=prof2.filter((item)=>{
    return THfacultyAt11.indexOf(item) === -1
  })
  ELmilan2=prof2.filter((item)=>{
    return THfacultyAt11.indexOf(item) === -1
  })
  
  if(C3THfacultyAt11.length!==0){
    if(C3THfacultyAt11[0]===prof[1]){
        numAt11=C3THfacultyAt11
        ELmilan1=[]
        ELmilan2=[]
    }else{
        numAt11=numAt11.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTHfacultyAt11[0]==='Dr. Rakesh'||CTHfacultyAt11[0]==='Dr. Rakesh'){
  numAt11=numAt11.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  TWmilan1=prof2.filter((item)=>{
    return THfacultyAt12.indexOf(item) === -1
  })
  TWmilan2=prof2.filter((item)=>{
    return THfacultyAt12.indexOf(item) === -1
  })
  
  if(C3THfacultyAt12.length!==0){
    if(C3THfacultyAt12[0]===prof[1]){
        numAt12=C3THfacultyAt12
        TWmilan1=[]
        TWmilan2=[]
    }else{
        numAt12=numAt12.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTHfacultyAt12[0]==='Dr. Rakesh'||CTHfacultyAt12[0]==='Dr. Rakesh'){
  numAt12=numAt12.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  THmilan1=prof2.filter((item)=>{
    return THfacultyAt03.indexOf(item) === -1
  })
  THmilan2=prof2.filter((item)=>{
    return THfacultyAt03.indexOf(item) === -1
  })
  
  if(C3THfacultyAt03.length!==0){
    if(C3THfacultyAt03[0]===prof[1]){
        numAt03=C3THfacultyAt03
        THmilan1=[]
        THmilan2=[]
    }else{
        numAt03=numAt03.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTHfacultyAt03[0]==='Dr. Rakesh'||CTHfacultyAt03[0]==='Dr. Rakesh'){
  numAt03=numAt03.filter((item)=>{
    return item!==prof[1]
  })
  }
      
  FOmilan1=prof2.filter((item)=>{
    return THfacultyAt04.indexOf(item) === -1
  })
  FOmilan2=prof2.filter((item)=>{
    return THfacultyAt04.indexOf(item) === -1
  })
  
  if(C3THfacultyAt04.length!==0){
    if(C3THfacultyAt04[0]===prof[1]){
        numAt04=C3THfacultyAt04
        FOmilan1=[]
        FOmilan2=[]
    }else{
        numAt04=numAt04.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTHfacultyAt04[0]==='Dr. Rakesh'||CTHfacultyAt04[0]==='Dr. Rakesh'){
  numAt04=numAt04.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  FImilan1=prof2.filter((item)=>{
    return THfacultyAt05.indexOf(item) === -1
  })
  FImilan2=prof2.filter((item)=>{
    return THfacultyAt05.indexOf(item) === -1
  })
  
  if(C3THfacultyAt05.length!==0){
    if(C3THfacultyAt05[0]===prof[1]){
        numAt05=C3THfacultyAt05
        FImilan1=[]
        FImilan2=[]
    }else{
        numAt05=numAt05.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PTHfacultyAt05[0]==='Dr. Rakesh'||CTHfacultyAt05[0]==='Dr. Rakesh'){
  numAt05=numAt05.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
      if(POTHfacultyAt9[0]==='HTO'||COTHfacultyAt9[0]==='HTO'){
          numAt9=[]
          NImilan1=[]
          NImilan2=[]
       }
       if(POTHfacultyAt10[0]==='HTO'||COTHfacultyAt10[0]==='HTO'){
         numAt10=[]
         TEmilan1=[]
         TEmilan2=[]
      }
      if(POTHfacultyAt11[0]==='HTO'||COTHfacultyAt11[0]==='HTO'){
       numAt11=[]
      ELmilan1=[]
      ELmilan2=[]
    }
    if(POTHfacultyAt12[0]==='HTO'||COTHfacultyAt12[0]==='HTO'){
     numAt12=[]
     TWmilan1=[]
     TWmilan2=[]
   }
   if(POTHfacultyAt03[0]==='HTO'||COTHfacultyAt03[0]==='HTO'){
     numAt03=[]
     THmilan1=[]
     THmilan2=[]
   }
   if(POTHfacultyAt04[0]==='HTO'||COTHfacultyAt04[0]==='HTO'){
     numAt04=[]
     FOmilan1=[]
     FOmilan2=[]
   }
   if(POTHfacultyAt05[0]==='HTO'||COTHfacultyAt05[0]==='HTO'){
     numAt05=[]
     FImilan1=[]
     FImilan2=[]
   }
  
   if(C4THfacultyAt9[0]&&C4THfacultyAt9[0].length>0||P4THfacultyAt9[0]&&P4THfacultyAt9[0].length>0){
    numAt9=numAt9.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4THfacultyAt10[0]&&C4THfacultyAt10[0].length>0||P4THfacultyAt10[0]&&P4THfacultyAt10[0].length>0){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4THfacultyAt11[0]&&C4THfacultyAt11[0].length>0||P4THfacultyAt11[0]&&P4THfacultyAt11[0].length>0){
    numAt11=numAt11.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4THfacultyAt12[0]&&C4THfacultyAt12[0].length>0||P4THfacultyAt12[0]&&P4THfacultyAt12[0].length>0){
    numAt12=numAt12.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4THfacultyAt03[0]&&C4THfacultyAt03[0].length>0||P4THfacultyAt03[0]&&P4THfacultyAt03[0].length>0){
    numAt03=numAt03.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4THfacultyAt04[0]&&C4THfacultyAt04[0].length>0||P4THfacultyAt04[0]&&P4THfacultyAt04[0].length>0){
    numAt04=numAt04.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4THfacultyAt05[0]&&C4THfacultyAt05[0].length>0||P4THfacultyAt05[0]&&P4THfacultyAt05[0].length>0){
    numAt05=numAt05.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  // if(POTHfacultyAt9[0]===course2[0]||C3THfacultyAt9[0]&&C3THfacultyAt9[0].length>0){
  //   NImilan2=[]
  //   NIcourse3=[] 
  //  }
   
  //  if(POTHfacultyAt10[0]===course2[0]||C3THfacultyAt10[0]&&C3THfacultyAt10[0].length>0){
  //    TEmilan2=[] 
  //    TEcourse3=[]
  //   }
  //   if(POTHfacultyAt11[0]===course2[0]||C3THfacultyAt11[0]&&C3THfacultyAt11[0].length>0){
  //     ELmilan2=[] 
  //     ELcourse3=[]
  //    }
  //   if(POTHfacultyAt12[0]===course2[0]||C3THfacultyAt12[0]&&C3THfacultyAt12[0].length>0){
  //    TWmilan2=[]
  //    TWcourse3=[]
  //   }
  //   if(POTHfacultyAt03[0]===course2[0]||C3THfacultyAt03[0]&&C3THfacultyAt03[0].length>0){
  //    THmilan2=[]
  //    THcourse3=[]
  //   }
  //   if(POTHfacultyAt04[0]===course2[0]||C3THfacultyAt04[0]&&C3THfacultyAt04[0].length>0){
  //    FOmilan2=[]
  //    FOcourse3=[]
  //   }
  //   if(POTHfacultyAt05[0]===course2[0]||C3THfacultyAt05[0]&&C3THfacultyAt05[0].length>0){
  //    FImilan2=[]
  //    FIcourse3=[]
  //   }
  
  //   if(POTHfacultyAt9[0]&&POTHfacultyAt9[0]===course3[0]){
  //     NIcourse2=[]
  //     NImilan1=[]
  //    }
  //    if(POTHfacultyAt10[0]&&POTHfacultyAt10[0]===course3[0]){
  //     TEcourse2=[]
  //     TEmilan1=[]
  //    }
  //    if(POTHfacultyAt11[0]&&POTHfacultyAt11[0]===course3[0]){
  //     ELcourse2=[]
  //     ELmilan1=[]
  //    }
  //    if(POTHfacultyAt12[0]&&POTHfacultyAt12[0]===course3[0]){
  //     TWcourse2=[]
  //     TWmilan1=[]
  //    }
  //    if(POTHfacultyAt03[0]&&POTHfacultyAt03[0]===course3[0]){
  //     THcourse2=[]
  //     THmilan1=[]
  //    }
  //    if(POTHfacultyAt04[0]&&POTHfacultyAt04[0]===course3[0]){
  //     FOcourse2=[]
  //     FOmilan1=[]
  //    }
  //    if(POTHfacultyAt05[0]&&POTHfacultyAt05[0]===course3[0]){
  //     FIcourse2=[]
  //     FImilan1=[]
  //    }
     
    
  
    if(P3THfacultyAt9[0]&&P3THfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P3THfacultyAt10[0]&&P3THfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P3THfacultyAt11[0]&&P3THfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P3THfacultyAt12[0]&&P3THfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P3THfacultyAt03[0]&&P3THfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P3THfacultyAt04[0]&&P3THfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P3THfacultyAt05[0]&&P3THfacultyAt05[0].length>0){
      setDisabled(true)
    }
  
    
  
  }else{
    numAt9=[P3THfacultyAt9[0]]
    numAt10=[P3THfacultyAt10[0]]
    numAt11=[P3THfacultyAt11[0]]
    numAt12=[P3THfacultyAt12[0]]
    numAt03=[P3THfacultyAt03[0]]
    numAt04=[P3THfacultyAt04[0]]
    numAt05=[P3THfacultyAt05[0]]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
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
  
    NImilan1=prof2.filter((item)=>{
        return FfacultyAt9.indexOf(item) === -1
    })
    NImilan2=prof2.filter((item)=>{
        return FfacultyAt9.indexOf(item) === -1
    })
  
      if(C3FfacultyAt9.length!==0){
        if(C3FfacultyAt9[0]===prof[1]){
            numAt9=C3FfacultyAt9
            NImilan1=[]
            NImilan2=[]
        }else{
            numAt9=numAt9.filter((item)=>{
                return item!==prof[1]
            })
        }
    }
    if(PFfacultyAt9[0]==='Dr. Rakesh'||CFfacultyAt9[0]==='Dr. Rakesh'){
      numAt9=numAt9.filter((item)=>{
        return item!==prof[1]
    })
    }
  
  
  TEmilan1=prof2.filter((item)=>{
      return FfacultyAt10.indexOf(item) === -1
  })
  TEmilan2=prof2.filter((item)=>{
      return FfacultyAt10.indexOf(item) === -1
  })
  
    if(C3FfacultyAt10.length!==0){
      if(C3FfacultyAt10[0]===prof[1]){
          numAt10=C3FfacultyAt10
          TEmilan1=[]
          TEmilan2=[]
      }else{
          numAt10=numAt10.filter((item)=>{
              return item!==prof[1]
          })
      }
  }
  if(PFfacultyAt10[0]==='Dr. Rakesh'||CFfacultyAt10[0]==='Dr. Rakesh'){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  
  ELmilan1=prof2.filter((item)=>{
    return FfacultyAt11.indexOf(item) === -1
  })
  ELmilan2=prof2.filter((item)=>{
    return FfacultyAt11.indexOf(item) === -1
  })
  
  if(C3FfacultyAt11.length!==0){
    if(C3FfacultyAt11[0]===prof[1]){
        numAt11=C3FfacultyAt11
        ELmilan1=[]
        ELmilan2=[]
    }else{
        numAt11=numAt11.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PFfacultyAt11[0]==='Dr. Rakesh'||CFfacultyAt11[0]==='Dr. Rakesh'){
  numAt11=numAt11.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  TWmilan1=prof2.filter((item)=>{
    return FfacultyAt12.indexOf(item) === -1
  })
  TWmilan2=prof2.filter((item)=>{
    return FfacultyAt12.indexOf(item) === -1
  })
  
  if(C3FfacultyAt12.length!==0){
    if(C3FfacultyAt12[0]===prof[1]){
        numAt12=C3FfacultyAt12
        TWmilan1=[]
        TWmilan2=[]
    }else{
        numAt12=numAt12.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PFfacultyAt12[0]==='Dr. Rakesh'||CFfacultyAt12[0]==='Dr. Rakesh'){
  numAt12=numAt12.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
  THmilan1=prof2.filter((item)=>{
    return FfacultyAt03.indexOf(item) === -1
  })
  THmilan2=prof2.filter((item)=>{
    return FfacultyAt03.indexOf(item) === -1
  })
  
  if(C3FfacultyAt03.length!==0){
    if(C3FfacultyAt03[0]===prof[1]){
        numAt03=C3FfacultyAt03
        THmilan1=[]
        THmilan2=[]
    }else{
        numAt03=numAt03.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PFfacultyAt03[0]==='Dr. Rakesh'||CFfacultyAt03[0]==='Dr. Rakesh'){
  numAt03=numAt03.filter((item)=>{
    return item!==prof[1]
  })
  }
      
  FOmilan1=prof2.filter((item)=>{
    return FfacultyAt04.indexOf(item) === -1
  })
  FOmilan2=prof2.filter((item)=>{
    return FfacultyAt04.indexOf(item) === -1
  })
  
  if(C3FfacultyAt04.length!==0){
    if(C3FfacultyAt04[0]===prof[1]){
        numAt04=C3FfacultyAt04
        FOmilan1=[]
        FOmilan2=[]
    }else{
        numAt04=numAt04.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PFfacultyAt04[0]==='Dr. Rakesh'||CFfacultyAt04[0]==='Dr. Rakesh'){
  numAt04=numAt04.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  FImilan1=prof2.filter((item)=>{
    return FfacultyAt05.indexOf(item) === -1
  })
  FImilan2=prof2.filter((item)=>{
    return FfacultyAt05.indexOf(item) === -1
  })
  
  if(C3FfacultyAt05.length!==0){
    if(C3FfacultyAt05[0]===prof[1]){
        numAt05=C3FfacultyAt05
        FImilan1=[]
        FImilan2=[]
    }else{
        numAt05=numAt05.filter((item)=>{
            return item!==prof[1]
        })
    }
  }
  if(PFfacultyAt05[0]==='Dr. Rakesh'||CFfacultyAt05[0]==='Dr. Rakesh'){
  numAt05=numAt05.filter((item)=>{
    return item!==prof[1]
  })
  }
  
  
      if(POFfacultyAt9[0]==='HTO'||COFfacultyAt9[0]==='HTO'){
          numAt9=[]
          NImilan1=[]
          NImilan2=[]
       }
       if(POFfacultyAt10[0]==='HTO'||COFfacultyAt10[0]==='HTO'){
         numAt10=[]
         TEmilan1=[]
         TEmilan2=[]
      }
      if(POFfacultyAt11[0]==='HTO'||COFfacultyAt11[0]==='HTO'){
       numAt11=[]
      ELmilan1=[]
      ELmilan2=[]
    }
    if(POFfacultyAt12[0]==='HTO'||COFfacultyAt12[0]==='HTO'){
     numAt12=[]
     TWmilan1=[]
     TWmilan2=[]
   }
   if(POFfacultyAt03[0]==='HTO'||COFfacultyAt03[0]==='HTO'){
     numAt03=[]
     THmilan1=[]
     THmilan2=[]
   }
   if(POFfacultyAt04[0]==='HTO'||COFfacultyAt04[0]==='HTO'){
     numAt04=[]
     FOmilan1=[]
     FOmilan2=[]
   }
   if(POFfacultyAt05[0]==='HTO'||COFfacultyAt05[0]==='HTO'){
     numAt05=[]
     FImilan1=[]
     FImilan2=[]
   }
  
   if(C4FfacultyAt9[0]&&C4FfacultyAt9[0].length>0||P4FfacultyAt9[0]&&P4FfacultyAt9[0].length>0){
    numAt9=numAt9.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4FfacultyAt10[0]&&C4FfacultyAt10[0].length>0||P4FfacultyAt10[0]&&P4FfacultyAt10[0].length>0){
    numAt10=numAt10.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4FfacultyAt11[0]&&C4FfacultyAt11[0].length>0||P4FfacultyAt11[0]&&P4FfacultyAt11[0].length>0){
    numAt11=numAt11.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4FfacultyAt12[0]&&C4FfacultyAt12[0].length>0||P4FfacultyAt12[0]&&P4FfacultyAt12[0].length>0){
    numAt12=numAt12.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4FfacultyAt03[0]&&C4FfacultyAt03[0].length>0||P4FfacultyAt03[0]&&P4FfacultyAt03[0].length>0){
    numAt03=numAt03.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4FfacultyAt04[0]&&C4FfacultyAt04[0].length>0||P4FfacultyAt04[0]&&P4FfacultyAt04[0].length>0){
    numAt04=numAt04.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  if(C4FfacultyAt05[0]&&C4FfacultyAt05[0].length>0||P4FfacultyAt05[0]&&P4FfacultyAt05[0].length>0){
    numAt05=numAt05.filter((item)=>{
      return item!==prof[1]
  })
  }
  
  // if(POFfacultyAt9[0]===course2[0]||C3FfacultyAt9[0]&&C3FfacultyAt9[0].length>0){
  //   NImilan2=[]
  //   NIcourse3=[] 
  //  }
   
  //  if(POFfacultyAt10[0]===course2[0]||C3FfacultyAt10[0]&&C3FfacultyAt10[0].length>0){
  //    TEmilan2=[] 
  //    TEcourse3=[]
  //   }
  //   if(POFfacultyAt11[0]===course2[0]||C3FfacultyAt11[0]&&C3FfacultyAt11[0].length>0){
  //     ELmilan2=[] 
  //     ELcourse3=[]
  //    }
  //   if(POFfacultyAt12[0]===course2[0]||C3FfacultyAt12[0]&&C3FfacultyAt12[0].length>0){
  //    TWmilan2=[]
  //    TWcourse3=[]
  //   }
  //   if(POFfacultyAt03[0]===course2[0]||C3FfacultyAt03[0]&&C3FfacultyAt03[0].length>0){
  //    THmilan2=[]
  //    THcourse3=[]
  //   }
  //   if(POFfacultyAt04[0]===course2[0]||C3FfacultyAt04[0]&&C3FfacultyAt04[0].length>0){
  //    FOmilan2=[]
  //    FOcourse3=[]
  //   }
  //   if(POFfacultyAt05[0]===course2[0]||C3FfacultyAt05[0]&&C3FfacultyAt05[0].length>0){
  //    FImilan2=[]
  //    FIcourse3=[]
  //   }
  
  //   if(POFfacultyAt9[0]&&POFfacultyAt9[0]===course3[0]){
  //     NIcourse2=[]
  //     NImilan1=[]
  //    }
  //    if(POFfacultyAt10[0]&&POFfacultyAt10[0]===course3[0]){
  //     TEcourse2=[]
  //     TEmilan1=[]
  //    }
  //    if(POFfacultyAt11[0]&&POFfacultyAt11[0]===course3[0]){
  //     ELcourse2=[]
  //     ELmilan1=[]
  //    }
  //    if(POFfacultyAt12[0]&&POFfacultyAt12[0]===course3[0]){
  //     TWcourse2=[]
  //     TWmilan1=[]
  //    }
  //    if(POFfacultyAt03[0]&&POFfacultyAt03[0]===course3[0]){
  //     THcourse2=[]
  //     THmilan1=[]
  //    }
  //    if(POFfacultyAt04[0]&&POFfacultyAt04[0]===course3[0]){
  //     FOcourse2=[]
  //     FOmilan1=[]
  //    }
  //    if(POFfacultyAt05[0]&&POFfacultyAt05[0]===course3[0]){
  //     FIcourse2=[]
  //     FImilan1=[]
  //    }
     
    
  
    if(P3FfacultyAt9[0]&&P3FfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(P3FfacultyAt10[0]&&P3FfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(P3FfacultyAt11[0]&&P3FfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(P3FfacultyAt12[0]&&P3FfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(P3FfacultyAt03[0]&&P3FfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(P3FfacultyAt04[0]&&P3FfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(P3FfacultyAt05[0]&&P3FfacultyAt05[0].length>0){
      setDisabled(true)
    }
  
    
  
  }else{
    numAt9=[P3FfacultyAt9[0]]
    numAt10=[P3FfacultyAt10[0]]
    numAt11=[P3FfacultyAt11[0]]
    numAt12=[P3FfacultyAt12[0]]
    numAt03=[P3FfacultyAt03[0]]
    numAt04=[P3FfacultyAt04[0]]
    numAt05=[P3FfacultyAt05[0]]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  }
}


const submitHandler=(e)=>{
e.preventDefault()
console.log(PTfacultyAt04[0],COMfacultyAt04[0])
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
setAt9(e.target.value.split(',')[0]) 


}
const handler10=(e)=>{


setAt10(e.target.value.split(',')[0])

}
const handler11=(e)=>{
setAt11(e.target.value.split(',')[0]) 


}
const handler12=(e)=>{
setAt12(e.target.value.split(',')[0]) 


}
const handler03=(e)=>{
setAt03(e.target.value.split(',')[0]) 


}
const handler04=(e)=>{
setAt04(e.target.value.split(',')[0])

}
const handler05=(e)=>{
 setAt05(e.target.value.split(',')[0])

}
return (
    <div>
        <form>
       <div className='faculty__course'>
           <div>9.00 am to 10.00am</div>
         <div className='faculty'>
         <select className="browser-default custom-select" onChange={handler9}>
             <option value="" disabled selected>Slots Available</option>
              {
                numAt9.map((each,index)=>{
                 return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                })
              }
            {
                NImilan1.map((each,index)=>{
                return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                })
              }
              {
                NImilan2.map((each,index)=>{
                return <option value={[each,courseHandler3(each)]}>{each}-{courseHandler3(each)}</option>
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
                 return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                })                
              }
               {
                TEmilan1.map((each,index)=>{
                return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                })
              }
              {
                TEmilan2.map((each,index)=>{
                return <option value={[each,courseHandler3(each)]}>{each}-{courseHandler3(each)}</option>
                })
              }
         </select>
         </div>
       </div>

       <div className='faculty__course'>
           <div>11.30 am to 12.30am</div>
         <div className='faculty'>
         <select className="browser-default custom-select" onChange={handler11}>
         <option value="" disabled selected>Slots Available</option>
         
              {
                numAt11.map((each,index)=>{
                 return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                })
            
              }
              {
                ELmilan1.map((each,index)=>{
                return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                })
              }
              {
                ELmilan2.map((each,index)=>{
                return <option value={[each,courseHandler3(each)]}>{each}-{courseHandler3(each)}</option>
                })
              }
            
         </select>
         </div>
       </div>

       
       <div className='faculty__course'>
        <div>12.45am to 1.45pm</div>
         <div className='faculty'>
         <select className="browser-default custom-select" onChange={handler12}>
         <option value="" disabled selected>Slots Available</option>
         {    
                numAt12.map((each,index)=>{
                return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                })
           
             
              }
              {
                TWmilan1.map((each,index)=>{
                return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                })
              }
              {
                TWmilan2.map((each,index)=>{
                return <option value={[each,courseHandler3(each)]}>{each}-{courseHandler3(each)}</option>
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
                return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                })
           
             
              }
             {
                THmilan1.map((each,index)=>{
                return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                })
              }
              {
                THmilan2.map((each,index)=>{
                return <option value={[each,courseHandler3(each)]}>{each}-{courseHandler3(each)}</option>
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
                return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                })
           
             
              }
               {
                FOmilan1.map((each,index)=>{
                return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                })
              }
              {
                FOmilan2.map((each,index)=>{
                return <option value={[each,courseHandler3(each)]}>{each}-{courseHandler3(each)}</option>
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
                return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                })
           
             
              }
             {
                FImilan1.map((each,index)=>{
                return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                })
              }
              {
                FImilan2.map((each,index)=>{
                return <option value={[each,courseHandler3(each)]}>{each}-{courseHandler3(each)}</option>
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

export default B3petroleum
