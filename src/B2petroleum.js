import React,{useState} from 'react'
import {useStateValue} from './StateProvider'

function B2petroleum({type}) {
    const [at9,setAt9]=useState('')
    const [at10,setAt10]=useState('')
    const [at11,setAt11]=useState('')
    const [at12,setAt12]=useState('')
    const [at03,setAt03]=useState('')
    const [at04,setAt04]=useState('')
    const [at05,setAt05]=useState('')
    const [COAt9,setCOat9]=useState('')
    const [COAt10,setCOat10]=useState('')
    const [COAt11,setCOat11]=useState('')
    const [COAt12,setCOat12]=useState('')
    const [COAt03,setCOat03]=useState('')
    const [COAt04,setCOat04]=useState('')
    const [COAt05,setCOat05]=useState('')
    const [disabled,setDisabled]=useState(false)
    const nums=['numAt9','numAt10','numAt11','numAt12','numAt03','numAt04']
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const course=['HTO','CET','FFO','Mathematics','Mass Transfer','Zeology']
    const prof=['Dr. Amit Ranjan','Dr. Koushik','Dr. Alpesh','Dr. Rakesh','Dr. AKS']
    const prof2=['Dr. Bala','Dr. Gunjan']
    const prof3=['Dr. AKS','Dr. Alpesh']
    const timing=['9.00 to 10.00','10:15 to 11:15','11:30 to 12:30','12:45 to 1:45','3:00 to 4:00','4:15 to 5:15']
    const [{MfacultyAt9,MfacultyAt10,MfacultyAt11,MfacultyAt12,MfacultyAt04,MfacultyAt03,MfacultyAt05,
      TfacultyAt9,TfacultyAt10,TfacultyAt11,TfacultyAt12,TfacultyAt04,TfacultyAt03,TfacultyAt05,
      WfacultyAt9,WfacultyAt10,WfacultyAt11,WfacultyAt12,WfacultyAt04,WfacultyAt03,WfacultyAt05,
      THfacultyAt9,THfacultyAt10,THfacultyAt11,THfacultyAt12,THfacultyAt04,THfacultyAt03,THfacultyAt05,
      FfacultyAt9,FfacultyAt10,FfacultyAt11,FfacultyAt12,FfacultyAt04,FfacultyAt03,FfacultyAt05,
    
      CMfacultyAt9,CMfacultyAt10,CMfacultyAt11,CMfacultyAt12,CMfacultyAt04,CMfacultyAt03,CMfacultyAt05,
      CTfacultyAt9,CTfacultyAt10,CTfacultyAt11,CTfacultyAt12,CTfacultyAt04,CTfacultyAt03,CTfacultyAt05,
      CWfacultyAt9,CWfacultyAt10,CWfacultyAt11,CWfacultyAt12,CWfacultyAt04,CWfacultyAt03,CWfacultyAt05,
      CTHfacultyAt9,CTHfacultyAt10,CTHfacultyAt11,CTHfacultyAt12,CTHfacultyAt04,CTHfacultyAt03,CTHfacultyAt05,
      CFfacultyAt9,CFfacultyAt10,CFfacultyAt11,CFfacultyAt12,CFfacultyAt04,CFfacultyAt03,CFfacultyAt05,
    
      PMfacultyAt9,PMfacultyAt10,PMfacultyAt11,PMfacultyAt12,PMfacultyAt04,PMfacultyAt03,PMfacultyAt05,
      PTfacultyAt9,PTfacultyAt10,PTfacultyAt11,PTfacultyAt12,PTfacultyAt04,PTfacultyAt03,PTfacultyAt05,
      PWfacultyAt9,PWfacultyAt10,PWfacultyAt11,PWfacultyAt12,PWfacultyAt04,PWfacultyAt03,PWfacultyAt05,
      PTHfacultyAt9,PTHfacultyAt10,PTHfacultyAt11,PTHfacultyAt12,PTHfacultyAt04,PTHfacultyAt03,PTHfacultyAt05,
      PFfacultyAt9,PFfacultyAt10,PFfacultyAt11,PFfacultyAt12,PFfacultyAt04,PFfacultyAt03,PFfacultyAt05,
    
      C3MfacultyAt9,C3MfacultyAt10,C3MfacultyAt11,C3MfacultyAt12,C3MfacultyAt04,C3MfacultyAt03,C3MfacultyAt05,
      C3TfacultyAt9,C3TfacultyAt10,C3TfacultyAt11,C3TfacultyAt12,C3TfacultyAt04,C3TfacultyAt03,C3TfacultyAt05,
      C3WfacultyAt9,C3WfacultyAt10,C3WfacultyAt11,C3WfacultyAt12,C3WfacultyAt04,C3WfacultyAt03,C3WfacultyAt05,
      C3THfacultyAt9,C3THfacultyAt10,C3THfacultyAt11,C3THfacultyAt12,C3THfacultyAt04,C3THfacultyAt03,C3THfacultyAt05,
      C3FfacultyAt9,C3FfacultyAt10,C3FfacultyAt11,C3FfacultyAt12,C3FfacultyAt04,C3FfacultyAt03,C3FfacultyAt05,
      
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
    
      P3MfacultyAt9,P3MfacultyAt10,P3MfacultyAt11,P3MfacultyAt12,P3MfacultyAt04,P3MfacultyAt03,P3MfacultyAt05,
      P3TfacultyAt9,P3TfacultyAt10,P3TfacultyAt11,P3TfacultyAt12,P3TfacultyAt04,P3TfacultyAt03,P3TfacultyAt05,
      P3WfacultyAt9,P3WfacultyAt10,P3WfacultyAt11,P3WfacultyAt12,P3WfacultyAt04,P3WfacultyAt03,P3WfacultyAt05,
      P3THfacultyAt9,P3THfacultyAt10,P3THfacultyAt11,P3THfacultyAt12,P3THfacultyAt04,P3THfacultyAt03,P3THfacultyAt05,
      P3FfacultyAt9,P3FfacultyAt10,P3FfacultyAt11,P3FfacultyAt12,P3FfacultyAt04,P3FfacultyAt03,P3FfacultyAt05,},dispatch]=useStateValue()


 const courseHandler=(each)=>{
  let course=[]
 
  if(each===prof[0]){
    course='CET'
  }
  if(each===prof[1]){
    course='FFO'
  }
  if(each===prof[2]){
    course='Mathematics'
  }
  if(each===prof[3]){
    course='Mass Transfer'
  }
  if(each===prof[4]){
    course='Geology'
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

    let NImilan1=['Dr. Milan Kumar']
    let NIcourse2=['Mass Transfer(TUT)']
    let NIcourse3=['HTO']
    let NImilan2=['Dr. Milan Kumar']

    let TEmilan1=['Dr. Milan Kumar']
    let TEcourse2=['Mass Transfer(TUT)']
    let TEcourse3=['HTO']
    let TEmilan2=['Dr. Milan Kumar']

    let ELmilan1=['Dr. Milan Kumar']
    let ELcourse2=['Mass Transfer(TUT)']
    let ELcourse3=['HTO']
    let ELmilan2=['Dr. Milan Kumar']

    let TWmilan1=['Dr. Milan Kumar']
    let TWcourse2=['Mass Transfer(TUT)']
    let TWcourse3=['HTO']
    let TWmilan2=['Dr. Milan Kumar']

    let THmilan1=['Dr. Milan Kumar']
    let THcourse2=['Mass Transfer(TUT)']
    let THcourse3=['HTO']
    let THmilan2=['Dr. Milan Kumar']

    let FOmilan1=['Dr. Milan Kumar']
    let FOcourse2=['Mass Transfer(TUT)']
    let FOcourse3=['HTO']
    let FOmilan2=['Dr. Milan Kumar']

    let FImilan1=['Dr. Milan Kumar']
    let FIcourse2=['Mass Transfer(TUT)']
    let FIcourse3=['HTO']
    let FImilan2=['Dr. Milan Kumar']

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

        if(CMfacultyAt9[0]===prof[0]||CMfacultyAt9[0]===prof[1]||CMfacultyAt9[0]===prof[3]){
          numAt9=CMfacultyAt9
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CMfacultyAt9[0]===prof2[0]||CMfacultyAt9[0]===prof2[1]||CMfacultyAt9[0]===''){
          numAt9=prof3.filter((item)=>{
            return MfacultyAt9.indexOf(item)===-1
          })
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CMfacultyAt9[0]===milan[0]){
            numAt9=[]
          }
    
          if(CMfacultyAt10[0]===prof[0]||CMfacultyAt10[0]===prof[1]||CMfacultyAt10[0]===prof[3]){
            numAt10=CMfacultyAt10
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CMfacultyAt10[0]===prof2[0]||CMfacultyAt10[0]===prof2[1]||CMfacultyAt10[0]===''){
              numAt10=prof3.filter((item)=>{
                return MfacultyAt10.indexOf(item)===-1
              })
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CMfacultyAt10[0]===milan[0]){
              numAt10=[]
            }
    
           if(CMfacultyAt11[0]===prof[0]||CMfacultyAt11[0]===prof[1]||CMfacultyAt11[0]===prof[3]){
          numAt11=CMfacultyAt11
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CMfacultyAt11[0]===prof2[0]||CMfacultyAt11[0]===prof2[1]||CMfacultyAt11[0]===''){
            numAt11=prof3.filter((item)=>{
              return MfacultyAt11.indexOf(item)===-1
            })
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CMfacultyAt11[0]===milan[0]){
            numAt11=[]
          }
    
          if(CMfacultyAt12[0]===prof[0]||CMfacultyAt12[0]===prof[1]||CMfacultyAt12[0]===prof[3]){
            numAt12=CMfacultyAt12
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CMfacultyAt12[0]===prof2[0]||CMfacultyAt12[0]===prof2[1]||CMfacultyAt12[0]===''){
              numAt12=prof3.filter((item)=>{
                return MfacultyAt12.indexOf(item)===-1
              })
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CMfacultyAt12[0]===milan[0]){
              numAt12=[]
            }
    
            if(CMfacultyAt03[0]===prof[0]||CMfacultyAt03[0]===prof[1]||CMfacultyAt03[0]===prof[3]){
              numAt03=CMfacultyAt03
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CMfacultyAt03[0]===prof2[0]||CMfacultyAt03[0]===prof2[1]||CMfacultyAt03[0]===''){
                numAt03=prof3.filter((item)=>{
                  return MfacultyAt03.indexOf(item)===-1
                })
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CMfacultyAt03[0]===milan[0]){
                numAt03=[]
              }
    
              if(CMfacultyAt04[0]===prof[0]||CMfacultyAt04[0]===prof[1]||CMfacultyAt04[0]===prof[3]){
                numAt04=CMfacultyAt04
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CMfacultyAt04[0]===prof2[0]||CMfacultyAt04[0]===prof2[1]||CMfacultyAt04[0]===''){
                  numAt04=prof3.filter((item)=>{
                    return MfacultyAt04.indexOf(item)===-1
                  })
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CMfacultyAt04[0]===milan[0]){
                  numAt04=[]
                }
    
                if(CMfacultyAt05[0]===prof[0]||CMfacultyAt05[0]===prof[1]||CMfacultyAt05[0]===prof[3]){
                  numAt05=CMfacultyAt05
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CMfacultyAt05[0]===prof2[0]||CMfacultyAt05[0]===prof2[1]||CMfacultyAt05[0]===''){
                    numAt05=prof3.filter((item)=>{
                      return MfacultyAt05.indexOf(item)===-1
                    })
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CMfacultyAt05[0]===milan[0]){
                    numAt05=[]
                  }
  

    if(!CMfacultyAt03){
      if(C3MfacultyAt03[0]&&C3MfacultyAt03[0].length>0){

        if(C3MfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3MfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }
        else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
        }
        }
       
    }
      
  if(!CMfacultyAt04){
    if(C3MfacultyAt04[0]&&C3MfacultyAt04[0].length>0){
      if(C3MfacultyAt04[0]==='Dr. Rakesh'){
        numAt04=C3MfacultyAt04
        FOmilan2=[]
      FOmilan1=[]
      FOcourse2=[]
      FOcourse3=[]
      }else{
        numAt04=numAt04.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }

  if(!CMfacultyAt05){
    if(C3MfacultyAt05[0]&&C3MfacultyAt05[0].length>0){
      if(C3MfacultyAt05[0]==='Dr. Rakesh'){
        numAt05=C3MfacultyAt05
        FImilan2=[]
      FImilan1=[]
      FIcourse2=[]
      FIcourse3=[]
      }else{
        numAt05=numAt05.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }
      

      if(!CMfacultyAt9[0]){
        if(C3MfacultyAt9&&C3MfacultyAt9.length>0){
          if(C3MfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3MfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3MfacultyAt9[0]===''){
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3MfacultyAt9[0]&&P3MfacultyAt9[0].length>0){
            NImilan2=[]
            NIcourse3=[] 
          }
      }

      if(C3MfacultyAt9&&C3MfacultyAt9.length>0&&P3MfacultyAt9[0]&&P3MfacultyAt9[0].length>0){
        if(C3MfacultyAt9[0]==='Dr. Rakesh'){
          numAt9=C3MfacultyAt9
          NImilan2=[]
        NImilan1=[]
        NIcourse2=[]
        NIcourse3=[]
        }else{
          numAt9=numAt9.filter((num)=>{
            return num!==prof[3]
          })
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!CMfacultyAt10[0]){
        if(C3MfacultyAt10&&C3MfacultyAt10.length>0){
          if(C3MfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3MfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3MfacultyAt10[0]===''){
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3MfacultyAt10[0]&&P3MfacultyAt10[0].length>0){
            TEmilan2=[]
            TEcourse3=[] 
          }
      }

      if(C3MfacultyAt10&&C3MfacultyAt10.length>0&&P3MfacultyAt10[0]&&P3MfacultyAt10[0].length>0){
        if(C3MfacultyAt10[0]==='Dr. Rakesh'){
          numAt10=C3MfacultyAt10
          TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else{
          numAt10=numAt10.filter((num)=>{
            return num!==prof[3]
          })
          TEmilan2=[]
          TEcourse3=[] 
        }
      }
      

      if(!CMfacultyAt11[0]){
        if(C3MfacultyAt11&&C3MfacultyAt11.length>0){
          if(C3MfacultyAt11[0]==='Dr. Rakesh'){
            numAt11=C3MfacultyAt11
            ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(C3MfacultyAt11[0]===''){
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3MfacultyAt11[0]&&P3MfacultyAt11[0].length>0){
            ELmilan2=[]
            ELcourse3=[] 
          }
      }

      if(C3MfacultyAt11&&C3MfacultyAt11.length>0&&P3MfacultyAt11[0]&&P3MfacultyAt11[0].length>0){
        if(C3MfacultyAt11[0]==='Dr. Rakesh'){
          numAt11=C3MfacultyAt11
          ELmilan2=[]
        ELmilan1=[]
        ELcourse2=[]
        ELcourse3=[]
        }else{
          numAt11=numAt11.filter((num)=>{
            return num!==prof[3]
          })
          ELmilan2=[]
          ELcourse3=[] 
        }
      }
      

      if(!CMfacultyAt12[0]){
        if(C3MfacultyAt12&&C3MfacultyAt12.length>0){
          if(C3MfacultyAt12[0]==='Dr. Rakesh'){
            numAt12=C3MfacultyAt12
            TWmilan2=[]
          TWmilan1=[]
          TWcourse2=[]
          TWcourse3=[]
          }else if(C3MfacultyAt12[0]===''){
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3MfacultyAt12[0]&&P3MfacultyAt12[0].length>0){
            TWmilan2=[]
            TWcourse3=[] 
          }
      }

      if(C3MfacultyAt12&&C3MfacultyAt12.length>0&&P3MfacultyAt12[0]&&P3MfacultyAt12[0].length>0){
        if(C3MfacultyAt12[0]==='Dr. Rakesh'){
          numAt12=C3MfacultyAt12
          TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else{
          numAt12=numAt12.filter((num)=>{
            return num!==prof[3]
          })
          TWmilan2=[]
          TWcourse3=[] 
        }
      }

      if(!CMfacultyAt03[0]){
        if(C3MfacultyAt03&&C3MfacultyAt03.length>0){
          if(C3MfacultyAt03[0]==='Dr. Rakesh'){
            numAt03=C3MfacultyAt03
            THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(C3MfacultyAt03[0]===''){
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3MfacultyAt03[0]&&P3MfacultyAt03[0].length>0){
            THmilan2=[]
            THcourse3=[] 
          }
      }

      if(C3MfacultyAt03&&C3MfacultyAt03.length>0&&P3MfacultyAt03[0]&&P3MfacultyAt03[0].length>0){
        if(C3MfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3MfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
          THmilan2=[]
          THcourse3=[] 
        }
      }
      
      if(!CMfacultyAt04[0]){
        if(C3MfacultyAt04&&C3MfacultyAt04.length>0){
          if(C3MfacultyAt04[0]==='Dr. Rakesh'){
            numAt04=C3MfacultyAt04
            FOmilan2=[]
          FOmilan1=[]
          FOcourse2=[]
          FOcourse3=[]
          }else if(C3MfacultyAt04[0]===''){
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3MfacultyAt04[0]&&P3MfacultyAt04[0].length>0){
            FOmilan2=[]
            FOcourse3=[] 
          }
      }

      if(C3MfacultyAt04&&C3MfacultyAt04.length>0&&P3MfacultyAt04[0]&&P3MfacultyAt04[0].length>0){
        if(C3MfacultyAt04[0]==='Dr. Rakesh'){
          numAt04=C3MfacultyAt04
          FOmilan2=[]
        FOmilan1=[]
        FOcourse2=[]
        FOcourse3=[]
        }else{
          numAt04=numAt04.filter((num)=>{
            return num!==prof[3]
          })
          FOmilan2=[]
          FOcourse3=[] 
        }
      }
       

      if(!CMfacultyAt05[0]){
        if(C3MfacultyAt05&&C3MfacultyAt05.length>0){
          if(C3MfacultyAt05[0]==='Dr. Rakesh'){
            numAt05=C3MfacultyAt05
            FImilan2=[]
          FImilan1=[]
          FIcourse2=[]
          FIcourse3=[]
          }else if(C3MfacultyAt05[0]===''){
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3MfacultyAt05[0]&&P3MfacultyAt05[0].length>0){
            FImilan2=[]
            FIcourse3=[] 
          }
      }

      if(C3MfacultyAt05&&C3MfacultyAt05.length>0&&P3MfacultyAt05[0]&&P3MfacultyAt05[0].length>0){
        if(C3MfacultyAt05[0]==='Dr. Rakesh'){
          numAt05=C3MfacultyAt05
          FImilan2=[]
        FImilan1=[]
        FIcourse2=[]
        FIcourse3=[]
        }else{
          numAt05=numAt05.filter((num)=>{
            return num!==prof[3]
          })
        FImilan2=[]
          FIcourse3=[] 
        }
      }
      

    if(POMfacultyAt9[0]===course2[0]||C3MfacultyAt9[0]){
      NImilan2=[]
      NIcourse3=[] 
     }
     
     if(POMfacultyAt10[0]===course2[0]||C3MfacultyAt10[0]&&C3MfacultyAt10[0].length>0||P3MfacultyAt10[0]&&P3MfacultyAt10[0].length>0){
       TEmilan2=[] 
       TEcourse3=[]
      }
      if(POMfacultyAt11[0]===course2[0]||C3MfacultyAt11[0]&&C3MfacultyAt11[0].length>0||P3MfacultyAt11[0]&&P3MfacultyAt11[0].length>0){
        ELmilan2=[] 
        ELcourse3=[]
       }
      if(POMfacultyAt12[0]===course2[0]||C3MfacultyAt12[0]&&C3MfacultyAt12[0].length>0||P3MfacultyAt12[0]&&P3MfacultyAt12[0].length>0){
       TWmilan2=[]
       TWcourse3=[]
      }
      if(POMfacultyAt03[0]===course2[0]||C3MfacultyAt03[0]&&C3MfacultyAt03[0].length>0||P3MfacultyAt03[0]&&P3MfacultyAt03[0].length>0){
       THmilan2=[]
       THcourse3=[]
      }
      if(POMfacultyAt04[0]===course2[0]||C3MfacultyAt04[0]&&C3MfacultyAt04[0].length>0||P3MfacultyAt04[0]&&P3MfacultyAt04[0].length>0){
       FOmilan2=[]
       FOcourse3=[]
      }
      if(POMfacultyAt05[0]===course2[0]||C3MfacultyAt05[0]&&C3MfacultyAt05[0].length>0||P3MfacultyAt05[0]&&P3MfacultyAt05[0].length>0){
       FImilan2=[]
       FIcourse3=[]
      }

      if(POMfacultyAt9[0]&&POMfacultyAt9[0]===course3[0]){
        NIcourse2=[]
        NImilan1=[]
       }
       if(POMfacultyAt10[0]&&POMfacultyAt10[0]===course3[0]){
        TEcourse2=[]
        TEmilan1=[]
       }
       if(POMfacultyAt11[0]&&POMfacultyAt11[0]===course3[0]){
        ELcourse2=[]
        ELmilan1=[]
       }
       if(POMfacultyAt12[0]&&POMfacultyAt12[0]===course3[0]){
        TWcourse2=[]
        TWmilan1=[]
       }
       if(POMfacultyAt03[0]&&POMfacultyAt03[0]===course3[0]){
        THcourse2=[]
        THmilan1=[]
       }
       if(POMfacultyAt04[0]&&POMfacultyAt04[0]===course3[0]){
        FOcourse2=[]
        FOmilan1=[]
       }
       if(POMfacultyAt05[0]&&POMfacultyAt05[0]===course3[0]){
        FIcourse2=[]
        FImilan1=[]
       }
       
      

      if(PMfacultyAt9[0]&&PMfacultyAt9[0].length>0){
        setDisabled(true)
      }
      if(PMfacultyAt10[0]&&PMfacultyAt10[0].length>0){
        setDisabled(true)
      }
      if(PMfacultyAt11[0]&&PMfacultyAt11[0].length>0){
        setDisabled(true)
      }
      if(PMfacultyAt12[0]&&PMfacultyAt12[0].length>0){
        setDisabled(true)
      }
      if(PMfacultyAt03[0]&&PMfacultyAt03[0].length>0){
        setDisabled(true)
      }
      if(PMfacultyAt04[0]&&PMfacultyAt04[0].length>0){
        setDisabled(true)
      }
      if(PMfacultyAt05[0]&&PMfacultyAt05[0].length>0){
        setDisabled(true)
      }

      
  
    }else{
      numAt9=[PMfacultyAt9[0]]
      numAt10=[PMfacultyAt10[0]]
      numAt11=[PMfacultyAt11[0]]
      numAt12=[PMfacultyAt12[0]]
      numAt03=[PMfacultyAt03[0]]
      numAt04=[PMfacultyAt04[0]]
      numAt05=[PMfacultyAt05[0]]
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

        if(CTfacultyAt9[0]===prof[0]||CTfacultyAt9[0]===prof[1]||CTfacultyAt9[0]===prof[3]){
          numAt9=CTfacultyAt9
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CTfacultyAt9[0]===prof2[0]||CTfacultyAt9[0]===prof2[1]||CTfacultyAt9[0]===''){
          numAt9=prof3.filter((item)=>{
            return TfacultyAt9.indexOf(item)===-1
          })
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CTfacultyAt9[0]===milan[0]){
            numAt9=[]
          }
    
          if(CTfacultyAt10[0]===prof[0]||CTfacultyAt10[0]===prof[1]||CTfacultyAt10[0]===prof[3]){
            numAt10=CTfacultyAt10
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CTfacultyAt10[0]===prof2[0]||CTfacultyAt10[0]===prof2[1]||CTfacultyAt10[0]===''){
              numAt10=prof3.filter((item)=>{
                return TfacultyAt10.indexOf(item)===-1
              })
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CTfacultyAt10[0]===milan[0]){
              numAt10=[]
            }
    
           if(CTfacultyAt11[0]===prof[0]||CTfacultyAt11[0]===prof[1]||CTfacultyAt11[0]===prof[3]){
          numAt11=CTfacultyAt11
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CTfacultyAt11[0]===prof2[0]||CTfacultyAt11[0]===prof2[1]||CTfacultyAt11[0]===''){
            numAt11=prof3.filter((item)=>{
              return TfacultyAt11.indexOf(item)===-1
            })
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CTfacultyAt11[0]===milan[0]){
            numAt11=[]
          }
    
          if(CTfacultyAt12[0]===prof[0]||CTfacultyAt12[0]===prof[1]||CTfacultyAt12[0]===prof[3]){
            numAt12=CTfacultyAt12
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CTfacultyAt12[0]===prof2[0]||CTfacultyAt12[0]===prof2[1]||CTfacultyAt12[0]===''){
              numAt12=prof3.filter((item)=>{
                return TfacultyAt12.indexOf(item)===-1
              })
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CTfacultyAt12[0]===milan[0]){
              numAt12=[]
            }
    
            if(CTfacultyAt03[0]===prof[0]||CTfacultyAt03[0]===prof[1]||CTfacultyAt03[0]===prof[3]){
              numAt03=CTfacultyAt03
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CTfacultyAt03[0]===prof2[0]||CTfacultyAt03[0]===prof2[1]||CTfacultyAt03[0]===''){
                numAt03=prof3.filter((item)=>{
                  return TfacultyAt03.indexOf(item)===-1
                })
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CTfacultyAt03[0]===milan[0]){
                numAt03=[]
              }
    
              if(CTfacultyAt04[0]===prof[0]||CTfacultyAt04[0]===prof[1]||CTfacultyAt04[0]===prof[3]){
                numAt04=CTfacultyAt04
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CTfacultyAt04[0]===prof2[0]||CTfacultyAt04[0]===prof2[1]||CTfacultyAt04[0]===''){
                  numAt04=prof3.filter((item)=>{
                    return TfacultyAt04.indexOf(item)===-1
                  })
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CTfacultyAt04[0]===milan[0]){
                  numAt04=[]
                }
    
                if(CTfacultyAt05[0]===prof[0]||CTfacultyAt05[0]===prof[1]||CTfacultyAt05[0]===prof[3]){
                  numAt05=CTfacultyAt05
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CTfacultyAt05[0]===prof2[0]||CTfacultyAt05[0]===prof2[1]||CTfacultyAt05[0]===''){
                    numAt05=prof3.filter((item)=>{
                      return TfacultyAt05.indexOf(item)===-1
                    })
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CTfacultyAt05[0]===milan[0]){
                    numAt05=[]
                  }
  

    if(!CTfacultyAt03){
      if(C3TfacultyAt03[0]&&C3TfacultyAt03[0].length>0){

        if(C3TfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3TfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }
        else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
        }
        }
       
    }
      
  if(!CTfacultyAt04){
    if(C3TfacultyAt04[0]&&C3TfacultyAt04[0].length>0){
      if(C3TfacultyAt04[0]==='Dr. Rakesh'){
        numAt04=C3TfacultyAt04
        FOmilan2=[]
      FOmilan1=[]
      FOcourse2=[]
      FOcourse3=[]
      }else{
        numAt04=numAt04.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }

  if(!CTfacultyAt05){
    if(C3TfacultyAt05[0]&&C3TfacultyAt05[0].length>0){
      if(C3TfacultyAt05[0]==='Dr. Rakesh'){
        numAt05=C3TfacultyAt05
        FImilan2=[]
      FImilan1=[]
      FIcourse2=[]
      FIcourse3=[]
      }else{
        numAt05=numAt05.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }
      

      if(!CTfacultyAt9[0]){
        if(C3TfacultyAt9&&C3TfacultyAt9.length>0){
          if(C3TfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3TfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3TfacultyAt9[0]===''){
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3TfacultyAt9[0]&&P3TfacultyAt9[0].length>0){
            NImilan2=[]
            NIcourse3=[] 
          }
      }

      if(C3TfacultyAt9&&C3TfacultyAt9.length>0&&P3TfacultyAt9[0]&&P3TfacultyAt9[0].length>0){
        if(C3TfacultyAt9[0]==='Dr. Rakesh'){
          numAt9=C3TfacultyAt9
          NImilan2=[]
        NImilan1=[]
        NIcourse2=[]
        NIcourse3=[]
        }else{
          numAt9=numAt9.filter((num)=>{
            return num!==prof[3]
          })
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!CTfacultyAt10[0]){
        if(C3TfacultyAt10&&C3TfacultyAt10.length>0){
          if(C3TfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3TfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3TfacultyAt10[0]===''){
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3TfacultyAt10[0]&&P3TfacultyAt10[0].length>0){
            TEmilan2=[]
            TEcourse3=[] 
          }
      }

      if(C3TfacultyAt10&&C3TfacultyAt10.length>0&&P3TfacultyAt10[0]&&P3TfacultyAt10[0].length>0){
        if(C3TfacultyAt10[0]==='Dr. Rakesh'){
          numAt10=C3TfacultyAt10
          TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else{
          numAt10=numAt10.filter((num)=>{
            return num!==prof[3]
          })
          TEmilan2=[]
          TEcourse3=[] 
        }
      }
      

      if(!CTfacultyAt11[0]){
        if(C3TfacultyAt11&&C3TfacultyAt11.length>0){
          if(C3TfacultyAt11[0]==='Dr. Rakesh'){
            numAt11=C3TfacultyAt11
            ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(C3TfacultyAt11[0]===''){
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3TfacultyAt11[0]&&P3TfacultyAt11[0].length>0){
            ELmilan2=[]
            ELcourse3=[] 
          }
      }

      if(C3TfacultyAt11&&C3TfacultyAt11.length>0&&P3TfacultyAt11[0]&&P3TfacultyAt11[0].length>0){
        if(C3TfacultyAt11[0]==='Dr. Rakesh'){
          numAt11=C3TfacultyAt11
          ELmilan2=[]
        ELmilan1=[]
        ELcourse2=[]
        ELcourse3=[]
        }else{
          numAt11=numAt11.filter((num)=>{
            return num!==prof[3]
          })
          ELmilan2=[]
          ELcourse3=[] 
        }
      }
      

      if(!CTfacultyAt12[0]){
        if(C3TfacultyAt12&&C3TfacultyAt12.length>0){
          if(C3TfacultyAt12[0]==='Dr. Rakesh'){
            numAt12=C3TfacultyAt12
            TWmilan2=[]
          TWmilan1=[]
          TWcourse2=[]
          TWcourse3=[]
          }else if(C3TfacultyAt12[0]===''){
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3TfacultyAt12[0]&&P3TfacultyAt12[0].length>0){
            TWmilan2=[]
            TWcourse3=[] 
          }
      }

      if(C3TfacultyAt12&&C3TfacultyAt12.length>0&&P3TfacultyAt12[0]&&P3TfacultyAt12[0].length>0){
        if(C3TfacultyAt12[0]==='Dr. Rakesh'){
          numAt12=C3TfacultyAt12
          TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else{
          numAt12=numAt12.filter((num)=>{
            return num!==prof[3]
          })
          TWmilan2=[]
          TWcourse3=[] 
        }
      }

      if(!CTfacultyAt03[0]){
        if(C3TfacultyAt03&&C3TfacultyAt03.length>0){
          if(C3TfacultyAt03[0]==='Dr. Rakesh'){
            numAt03=C3TfacultyAt03
            THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(C3TfacultyAt03[0]===''){
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3TfacultyAt03[0]&&P3TfacultyAt03[0].length>0){
            THmilan2=[]
            THcourse3=[] 
          }
      }

      if(C3TfacultyAt03&&C3TfacultyAt03.length>0&&P3TfacultyAt03[0]&&P3TfacultyAt03[0].length>0){
        if(C3TfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3TfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
          THmilan2=[]
          THcourse3=[] 
        }
      }
      
      if(!CTfacultyAt04[0]){
        if(C3TfacultyAt04&&C3TfacultyAt04.length>0){
          if(C3TfacultyAt04[0]==='Dr. Rakesh'){
            numAt04=C3TfacultyAt04
            FOmilan2=[]
          FOmilan1=[]
          FOcourse2=[]
          FOcourse3=[]
          }else if(C3TfacultyAt04[0]===''){
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3TfacultyAt04[0]&&P3TfacultyAt04[0].length>0){
            FOmilan2=[]
            FOcourse3=[] 
          }
      }

      if(C3TfacultyAt04&&C3TfacultyAt04.length>0&&P3TfacultyAt04[0]&&P3TfacultyAt04[0].length>0){
        if(C3TfacultyAt04[0]==='Dr. Rakesh'){
          numAt04=C3TfacultyAt04
          FOmilan2=[]
        FOmilan1=[]
        FOcourse2=[]
        FOcourse3=[]
        }else{
          numAt04=numAt04.filter((num)=>{
            return num!==prof[3]
          })
          FOmilan2=[]
          FOcourse3=[] 
        }
      }
       

      if(!CTfacultyAt05[0]){
        if(C3TfacultyAt05&&C3TfacultyAt05.length>0){
          if(C3TfacultyAt05[0]==='Dr. Rakesh'){
            numAt05=C3TfacultyAt05
            FImilan2=[]
          FImilan1=[]
          FIcourse2=[]
          FIcourse3=[]
          }else if(C3TfacultyAt05[0]===''){
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3TfacultyAt05[0]&&P3TfacultyAt05[0].length>0){
            FImilan2=[]
            FIcourse3=[] 
          }
      }

      if(C3TfacultyAt05&&C3TfacultyAt05.length>0&&P3TfacultyAt05[0]&&P3TfacultyAt05[0].length>0){
        if(C3TfacultyAt05[0]==='Dr. Rakesh'){
          numAt05=C3TfacultyAt05
          FImilan2=[]
        FImilan1=[]
        FIcourse2=[]
        FIcourse3=[]
        }else{
          numAt05=numAt05.filter((num)=>{
            return num!==prof[3]
          })
        FImilan2=[]
          FIcourse3=[] 
        }
      }
      

    if(POTfacultyAt9[0]===course2[0]||C3TfacultyAt9[0]){
      NImilan2=[]
      NIcourse3=[] 
     }
     
     if(POTfacultyAt10[0]===course2[0]||C3TfacultyAt10[0]&&C3TfacultyAt10[0].length>0||P3TfacultyAt10[0]&&P3TfacultyAt10[0].length>0){
       TEmilan2=[] 
       TEcourse3=[]
      }
      if(POTfacultyAt11[0]===course2[0]||C3TfacultyAt11[0]&&C3TfacultyAt11[0].length>0||P3TfacultyAt11[0]&&P3TfacultyAt11[0].length>0){
        ELmilan2=[] 
        ELcourse3=[]
       }
      if(POTfacultyAt12[0]===course2[0]||C3TfacultyAt12[0]&&C3TfacultyAt12[0].length>0||P3TfacultyAt12[0]&&P3TfacultyAt12[0].length>0){
       TWmilan2=[]
       TWcourse3=[]
      }
      if(POTfacultyAt03[0]===course2[0]||C3TfacultyAt03[0]&&C3TfacultyAt03[0].length>0||P3TfacultyAt03[0]&&P3TfacultyAt03[0].length>0){
       THmilan2=[]
       THcourse3=[]
      }
      if(POTfacultyAt04[0]===course2[0]||C3TfacultyAt04[0]&&C3TfacultyAt04[0].length>0||P3TfacultyAt04[0]&&P3TfacultyAt04[0].length>0){
       FOmilan2=[]
       FOcourse3=[]
      }
      if(POTfacultyAt05[0]===course2[0]||C3TfacultyAt05[0]&&C3TfacultyAt05[0].length>0||P3TfacultyAt05[0]&&P3TfacultyAt05[0].length>0){
       FImilan2=[]
       FIcourse3=[]
      }

      if(POTfacultyAt9[0]&&POTfacultyAt9[0]===course3[0]){
        NIcourse2=[]
        NImilan1=[]
       }
       if(POTfacultyAt10[0]&&POTfacultyAt10[0]===course3[0]){
        TEcourse2=[]
        TEmilan1=[]
       }
       if(POTfacultyAt11[0]&&POTfacultyAt11[0]===course3[0]){
        ELcourse2=[]
        ELmilan1=[]
       }
       if(POTfacultyAt12[0]&&POTfacultyAt12[0]===course3[0]){
        TWcourse2=[]
        TWmilan1=[]
       }
       if(POTfacultyAt03[0]&&POTfacultyAt03[0]===course3[0]){
        THcourse2=[]
        THmilan1=[]
       }
       if(POTfacultyAt04[0]&&POTfacultyAt04[0]===course3[0]){
        FOcourse2=[]
        FOmilan1=[]
       }
       if(POTfacultyAt05[0]&&POTfacultyAt05[0]===course3[0]){
        FIcourse2=[]
        FImilan1=[]
       }
       
      

      if(PTfacultyAt9[0]&&PTfacultyAt9[0].length>0){
        setDisabled(true)
      }
      if(PTfacultyAt10[0]&&PTfacultyAt10[0].length>0){
        setDisabled(true)
      }
      if(PTfacultyAt11[0]&&PTfacultyAt11[0].length>0){
        setDisabled(true)
      }
      if(PTfacultyAt12[0]&&PTfacultyAt12[0].length>0){
        setDisabled(true)
      }
      if(PTfacultyAt03[0]&&PTfacultyAt03[0].length>0){
        setDisabled(true)
      }
      if(PTfacultyAt04[0]&&PTfacultyAt04[0].length>0){
        setDisabled(true)
      }
      if(PTfacultyAt05[0]&&PTfacultyAt05[0].length>0){
        setDisabled(true)
      }

      
  
    }else{
      numAt9=[PTfacultyAt9[0]]
      numAt10=[PTfacultyAt10[0]]
      numAt11=[PTfacultyAt11[0]]
      numAt12=[PTfacultyAt12[0]]
      numAt03=[PTfacultyAt03[0]]
      numAt04=[PTfacultyAt04[0]]
      numAt05=[PTfacultyAt05[0]]
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

        if(CWfacultyAt9[0]===prof[0]||CWfacultyAt9[0]===prof[1]||CWfacultyAt9[0]===prof[3]){
          numAt9=CWfacultyAt9
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CWfacultyAt9[0]===prof2[0]||CWfacultyAt9[0]===prof2[1]||CWfacultyAt9[0]===''){
          numAt9=prof3.filter((item)=>{
            return WfacultyAt9.indexOf(item)===-1
          })
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CWfacultyAt9[0]===milan[0]){
            numAt9=[]
          }
    
          if(CWfacultyAt10[0]===prof[0]||CWfacultyAt10[0]===prof[1]||CWfacultyAt10[0]===prof[3]){
            numAt10=CWfacultyAt10
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CWfacultyAt10[0]===prof2[0]||CWfacultyAt10[0]===prof2[1]||CWfacultyAt10[0]===''){
              numAt10=prof3.filter((item)=>{
                return WfacultyAt10.indexOf(item)===-1
              })
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CWfacultyAt10[0]===milan[0]){
              numAt10=[]
            }
    
           if(CWfacultyAt11[0]===prof[0]||CWfacultyAt11[0]===prof[1]||CWfacultyAt11[0]===prof[3]){
          numAt11=CWfacultyAt11
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CWfacultyAt11[0]===prof2[0]||CWfacultyAt11[0]===prof2[1]||CWfacultyAt11[0]===''){
            numAt11=prof3.filter((item)=>{
              return WfacultyAt11.indexOf(item)===-1
            })
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CWfacultyAt11[0]===milan[0]){
            numAt11=[]
          }
    
          if(CWfacultyAt12[0]===prof[0]||CWfacultyAt12[0]===prof[1]||CWfacultyAt12[0]===prof[3]){
            numAt12=CWfacultyAt12
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CWfacultyAt12[0]===prof2[0]||CWfacultyAt12[0]===prof2[1]||CWfacultyAt12[0]===''){
              numAt12=prof3.filter((item)=>{
                return WfacultyAt12.indexOf(item)===-1
              })
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CWfacultyAt12[0]===milan[0]){
              numAt12=[]
            }
    
            if(CWfacultyAt03[0]===prof[0]||CWfacultyAt03[0]===prof[1]||CWfacultyAt03[0]===prof[3]){
              numAt03=CWfacultyAt03
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CWfacultyAt03[0]===prof2[0]||CWfacultyAt03[0]===prof2[1]||CWfacultyAt03[0]===''){
                numAt03=prof3.filter((item)=>{
                  return WfacultyAt03.indexOf(item)===-1
                })
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CWfacultyAt03[0]===milan[0]){
                numAt03=[]
              }
    
              if(CWfacultyAt04[0]===prof[0]||CWfacultyAt04[0]===prof[1]||CWfacultyAt04[0]===prof[3]){
                numAt04=CWfacultyAt04
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CWfacultyAt04[0]===prof2[0]||CWfacultyAt04[0]===prof2[1]||CWfacultyAt04[0]===''){
                  numAt04=prof3.filter((item)=>{
                    return WfacultyAt04.indexOf(item)===-1
                  })
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CWfacultyAt04[0]===milan[0]){
                  numAt04=[]
                }
    
                if(CWfacultyAt05[0]===prof[0]||CWfacultyAt05[0]===prof[1]||CWfacultyAt05[0]===prof[3]){
                  numAt05=CWfacultyAt05
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CWfacultyAt05[0]===prof2[0]||CWfacultyAt05[0]===prof2[1]||CWfacultyAt05[0]===''){
                    numAt05=prof3.filter((item)=>{
                      return WfacultyAt05.indexOf(item)===-1
                    })
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CWfacultyAt05[0]===milan[0]){
                    numAt05=[]
                  }
  

    if(!CWfacultyAt03){
      if(C3WfacultyAt03[0]&&C3WfacultyAt03[0].length>0){

        if(C3WfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3WfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }
        else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
        }
        }
       
    }
      
  if(!CWfacultyAt04){
    if(C3WfacultyAt04[0]&&C3WfacultyAt04[0].length>0){
      if(C3WfacultyAt04[0]==='Dr. Rakesh'){
        numAt04=C3WfacultyAt04
        FOmilan2=[]
      FOmilan1=[]
      FOcourse2=[]
      FOcourse3=[]
      }else{
        numAt04=numAt04.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }

  if(!CWfacultyAt05){
    if(C3WfacultyAt05[0]&&C3WfacultyAt05[0].length>0){
      if(C3WfacultyAt05[0]==='Dr. Rakesh'){
        numAt05=C3WfacultyAt05
        FImilan2=[]
      FImilan1=[]
      FIcourse2=[]
      FIcourse3=[]
      }else{
        numAt05=numAt05.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }
      

      if(!CWfacultyAt9[0]){
        if(C3WfacultyAt9&&C3WfacultyAt9.length>0){
          if(C3WfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3WfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3WfacultyAt9[0]===''){
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3WfacultyAt9[0]&&P3WfacultyAt9[0].length>0){
            NImilan2=[]
            NIcourse3=[] 
          }
      }

      if(C3WfacultyAt9&&C3WfacultyAt9.length>0&&P3WfacultyAt9[0]&&P3WfacultyAt9[0].length>0){
        if(C3WfacultyAt9[0]==='Dr. Rakesh'){
          numAt9=C3WfacultyAt9
          NImilan2=[]
        NImilan1=[]
        NIcourse2=[]
        NIcourse3=[]
        }else{
          numAt9=numAt9.filter((num)=>{
            return num!==prof[3]
          })
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!CWfacultyAt10[0]){
        if(C3WfacultyAt10&&C3WfacultyAt10.length>0){
          if(C3WfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3WfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3WfacultyAt10[0]===''){
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3WfacultyAt10[0]&&P3WfacultyAt10[0].length>0){
            TEmilan2=[]
            TEcourse3=[] 
          }
      }

      if(C3WfacultyAt10&&C3WfacultyAt10.length>0&&P3WfacultyAt10[0]&&P3WfacultyAt10[0].length>0){
        if(C3WfacultyAt10[0]==='Dr. Rakesh'){
          numAt10=C3WfacultyAt10
          TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else{
          numAt10=numAt10.filter((num)=>{
            return num!==prof[3]
          })
          TEmilan2=[]
          TEcourse3=[] 
        }
      }
      

      if(!CWfacultyAt11[0]){
        if(C3WfacultyAt11&&C3WfacultyAt11.length>0){
          if(C3WfacultyAt11[0]==='Dr. Rakesh'){
            numAt11=C3WfacultyAt11
            ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(C3WfacultyAt11[0]===''){
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3WfacultyAt11[0]&&P3WfacultyAt11[0].length>0){
            ELmilan2=[]
            ELcourse3=[] 
          }
      }

      if(C3WfacultyAt11&&C3WfacultyAt11.length>0&&P3WfacultyAt11[0]&&P3WfacultyAt11[0].length>0){
        if(C3WfacultyAt11[0]==='Dr. Rakesh'){
          numAt11=C3WfacultyAt11
          ELmilan2=[]
        ELmilan1=[]
        ELcourse2=[]
        ELcourse3=[]
        }else{
          numAt11=numAt11.filter((num)=>{
            return num!==prof[3]
          })
          ELmilan2=[]
          ELcourse3=[] 
        }
      }
      

      if(!CWfacultyAt12[0]){
        if(C3WfacultyAt12&&C3WfacultyAt12.length>0){
          if(C3WfacultyAt12[0]==='Dr. Rakesh'){
            numAt12=C3WfacultyAt12
            TWmilan2=[]
          TWmilan1=[]
          TWcourse2=[]
          TWcourse3=[]
          }else if(C3WfacultyAt12[0]===''){
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3WfacultyAt12[0]&&P3WfacultyAt12[0].length>0){
            TWmilan2=[]
            TWcourse3=[] 
          }
      }

      if(C3WfacultyAt12&&C3WfacultyAt12.length>0&&P3WfacultyAt12[0]&&P3WfacultyAt12[0].length>0){
        if(C3WfacultyAt12[0]==='Dr. Rakesh'){
          numAt12=C3WfacultyAt12
          TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else{
          numAt12=numAt12.filter((num)=>{
            return num!==prof[3]
          })
          TWmilan2=[]
          TWcourse3=[] 
        }
      }

      if(!CWfacultyAt03[0]){
        if(C3WfacultyAt03&&C3WfacultyAt03.length>0){
          if(C3WfacultyAt03[0]==='Dr. Rakesh'){
            numAt03=C3WfacultyAt03
            THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(C3WfacultyAt03[0]===''){
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3WfacultyAt03[0]&&P3WfacultyAt03[0].length>0){
            THmilan2=[]
            THcourse3=[] 
          }
      }

      if(C3WfacultyAt03&&C3WfacultyAt03.length>0&&P3WfacultyAt03[0]&&P3WfacultyAt03[0].length>0){
        if(C3WfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3WfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
          THmilan2=[]
          THcourse3=[] 
        }
      }
      
      if(!CWfacultyAt04[0]){
        if(C3WfacultyAt04&&C3WfacultyAt04.length>0){
          if(C3WfacultyAt04[0]==='Dr. Rakesh'){
            numAt04=C3WfacultyAt04
            FOmilan2=[]
          FOmilan1=[]
          FOcourse2=[]
          FOcourse3=[]
          }else if(C3WfacultyAt04[0]===''){
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3WfacultyAt04[0]&&P3WfacultyAt04[0].length>0){
            FOmilan2=[]
            FOcourse3=[] 
          }
      }

      if(C3WfacultyAt04&&C3WfacultyAt04.length>0&&P3WfacultyAt04[0]&&P3WfacultyAt04[0].length>0){
        if(C3WfacultyAt04[0]==='Dr. Rakesh'){
          numAt04=C3WfacultyAt04
          FOmilan2=[]
        FOmilan1=[]
        FOcourse2=[]
        FOcourse3=[]
        }else{
          numAt04=numAt04.filter((num)=>{
            return num!==prof[3]
          })
          FOmilan2=[]
          FOcourse3=[] 
        }
      }
       

      if(!CWfacultyAt05[0]){
        if(C3WfacultyAt05&&C3WfacultyAt05.length>0){
          if(C3WfacultyAt05[0]==='Dr. Rakesh'){
            numAt05=C3WfacultyAt05
            FImilan2=[]
          FImilan1=[]
          FIcourse2=[]
          FIcourse3=[]
          }else if(C3WfacultyAt05[0]===''){
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3WfacultyAt05[0]&&P3WfacultyAt05[0].length>0){
            FImilan2=[]
            FIcourse3=[] 
          }
      }

      if(C3WfacultyAt05&&C3WfacultyAt05.length>0&&P3WfacultyAt05[0]&&P3WfacultyAt05[0].length>0){
        if(C3WfacultyAt05[0]==='Dr. Rakesh'){
          numAt05=C3WfacultyAt05
          FImilan2=[]
        FImilan1=[]
        FIcourse2=[]
        FIcourse3=[]
        }else{
          numAt05=numAt05.filter((num)=>{
            return num!==prof[3]
          })
        FImilan2=[]
          FIcourse3=[] 
        }
      }
      

    if(POWfacultyAt9[0]===course2[0]||C3WfacultyAt9[0]){
      NImilan2=[]
      NIcourse3=[] 
     }
     
     if(POWfacultyAt10[0]===course2[0]||C3WfacultyAt10[0]&&C3WfacultyAt10[0].length>0||P3WfacultyAt10[0]&&P3WfacultyAt10[0].length>0){
       TEmilan2=[] 
       TEcourse3=[]
      }
      if(POWfacultyAt11[0]===course2[0]||C3WfacultyAt11[0]&&C3WfacultyAt11[0].length>0||P3WfacultyAt11[0]&&P3WfacultyAt11[0].length>0){
        ELmilan2=[] 
        ELcourse3=[]
       }
      if(POWfacultyAt12[0]===course2[0]||C3WfacultyAt12[0]&&C3WfacultyAt12[0].length>0||P3WfacultyAt12[0]&&P3WfacultyAt12[0].length>0){
       TWmilan2=[]
       TWcourse3=[]
      }
      if(POWfacultyAt03[0]===course2[0]||C3WfacultyAt03[0]&&C3WfacultyAt03[0].length>0||P3WfacultyAt03[0]&&P3WfacultyAt03[0].length>0){
       THmilan2=[]
       THcourse3=[]
      }
      if(POWfacultyAt04[0]===course2[0]||C3WfacultyAt04[0]&&C3WfacultyAt04[0].length>0||P3WfacultyAt04[0]&&P3WfacultyAt04[0].length>0){
       FOmilan2=[]
       FOcourse3=[]
      }
      if(POWfacultyAt05[0]===course2[0]||C3WfacultyAt05[0]&&C3WfacultyAt05[0].length>0||P3WfacultyAt05[0]&&P3WfacultyAt05[0].length>0){
       FImilan2=[]
       FIcourse3=[]
      }

      if(POWfacultyAt9[0]&&POWfacultyAt9[0]===course3[0]){
        NIcourse2=[]
        NImilan1=[]
       }
       if(POWfacultyAt10[0]&&POWfacultyAt10[0]===course3[0]){
        TEcourse2=[]
        TEmilan1=[]
       }
       if(POWfacultyAt11[0]&&POWfacultyAt11[0]===course3[0]){
        ELcourse2=[]
        ELmilan1=[]
       }
       if(POWfacultyAt12[0]&&POWfacultyAt12[0]===course3[0]){
        TWcourse2=[]
        TWmilan1=[]
       }
       if(POWfacultyAt03[0]&&POWfacultyAt03[0]===course3[0]){
        THcourse2=[]
        THmilan1=[]
       }
       if(POWfacultyAt04[0]&&POWfacultyAt04[0]===course3[0]){
        FOcourse2=[]
        FOmilan1=[]
       }
       if(POWfacultyAt05[0]&&POWfacultyAt05[0]===course3[0]){
        FIcourse2=[]
        FImilan1=[]
       }
       
      

      if(PWfacultyAt9[0]&&PWfacultyAt9[0].length>0){
        setDisabled(true)
      }
      if(PWfacultyAt10[0]&&PWfacultyAt10[0].length>0){
        setDisabled(true)
      }
      if(PWfacultyAt11[0]&&PWfacultyAt11[0].length>0){
        setDisabled(true)
      }
      if(PWfacultyAt12[0]&&PWfacultyAt12[0].length>0){
        setDisabled(true)
      }
      if(PWfacultyAt03[0]&&PWfacultyAt03[0].length>0){
        setDisabled(true)
      }
      if(PWfacultyAt04[0]&&PWfacultyAt04[0].length>0){
        setDisabled(true)
      }
      if(PWfacultyAt05[0]&&PWfacultyAt05[0].length>0){
        setDisabled(true)
      }

      
  
    }else{
      numAt9=[PWfacultyAt9[0]]
      numAt10=[PWfacultyAt10[0]]
      numAt11=[PWfacultyAt11[0]]
      numAt12=[PWfacultyAt12[0]]
      numAt03=[PWfacultyAt03[0]]
      numAt04=[PWfacultyAt04[0]]
      numAt05=[PWfacultyAt05[0]]
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

        if(CTHfacultyAt9[0]===prof[0]||CTHfacultyAt9[0]===prof[1]||CTHfacultyAt9[0]===prof[3]){
          numAt9=CTHfacultyAt9
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CTHfacultyAt9[0]===prof2[0]||CTHfacultyAt9[0]===prof2[1]||CTHfacultyAt9[0]===''){
          numAt9=prof3.filter((item)=>{
            return THfacultyAt9.indexOf(item)===-1
          })
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CTHfacultyAt9[0]===milan[0]){
            numAt9=[]
          }
    
          if(CTHfacultyAt10[0]===prof[0]||CTHfacultyAt10[0]===prof[1]||CTHfacultyAt10[0]===prof[3]){
            numAt10=CTHfacultyAt10
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CTHfacultyAt10[0]===prof2[0]||CTHfacultyAt10[0]===prof2[1]||CTHfacultyAt10[0]===''){
              numAt10=prof3.filter((item)=>{
                return THfacultyAt10.indexOf(item)===-1
              })
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CTHfacultyAt10[0]===milan[0]){
              numAt10=[]
            }
    
           if(CTHfacultyAt11[0]===prof[0]||CTHfacultyAt11[0]===prof[1]||CTHfacultyAt11[0]===prof[3]){
          numAt11=CTHfacultyAt11
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CTHfacultyAt11[0]===prof2[0]||CTHfacultyAt11[0]===prof2[1]||CTHfacultyAt11[0]===''){
            numAt11=prof3.filter((item)=>{
              return THfacultyAt11.indexOf(item)===-1
            })
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CTHfacultyAt11[0]===milan[0]){
            numAt11=[]
          }
    
          if(CTHfacultyAt12[0]===prof[0]||CTHfacultyAt12[0]===prof[1]||CTHfacultyAt12[0]===prof[3]){
            numAt12=CTHfacultyAt12
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CTHfacultyAt12[0]===prof2[0]||CTHfacultyAt12[0]===prof2[1]||CTHfacultyAt12[0]===''){
              numAt12=prof3.filter((item)=>{
                return THfacultyAt12.indexOf(item)===-1
              })
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CTHfacultyAt12[0]===milan[0]){
              numAt12=[]
            }
    
            if(CTHfacultyAt03[0]===prof[0]||CTHfacultyAt03[0]===prof[1]||CTHfacultyAt03[0]===prof[3]){
              numAt03=CTHfacultyAt03
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CTHfacultyAt03[0]===prof2[0]||CTHfacultyAt03[0]===prof2[1]||CTHfacultyAt03[0]===''){
                numAt03=prof3.filter((item)=>{
                  return THfacultyAt03.indexOf(item)===-1
                })
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CTHfacultyAt03[0]===milan[0]){
                numAt03=[]
              }
    
              if(CTHfacultyAt04[0]===prof[0]||CTHfacultyAt04[0]===prof[1]||CTHfacultyAt04[0]===prof[3]){
                numAt04=CTHfacultyAt04
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CTHfacultyAt04[0]===prof2[0]||CTHfacultyAt04[0]===prof2[1]||CTHfacultyAt04[0]===''){
                  numAt04=prof3.filter((item)=>{
                    return THfacultyAt04.indexOf(item)===-1
                  })
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CTHfacultyAt04[0]===milan[0]){
                  numAt04=[]
                }
    
                if(CTHfacultyAt05[0]===prof[0]||CTHfacultyAt05[0]===prof[1]||CTHfacultyAt05[0]===prof[3]){
                  numAt05=CTHfacultyAt05
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CTHfacultyAt05[0]===prof2[0]||CTHfacultyAt05[0]===prof2[1]||CTHfacultyAt05[0]===''){
                    numAt05=prof3.filter((item)=>{
                      return THfacultyAt05.indexOf(item)===-1
                    })
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CTHfacultyAt05[0]===milan[0]){
                    numAt05=[]
                  }
  

    if(!CTHfacultyAt03){
      if(C3THfacultyAt03[0]&&C3THfacultyAt03[0].length>0){

        if(C3THfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3THfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }
        else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
        }
        }
       
    }
      
  if(!CTHfacultyAt04){
    if(C3THfacultyAt04[0]&&C3THfacultyAt04[0].length>0){
      if(C3THfacultyAt04[0]==='Dr. Rakesh'){
        numAt04=C3THfacultyAt04
        FOmilan2=[]
      FOmilan1=[]
      FOcourse2=[]
      FOcourse3=[]
      }else{
        numAt04=numAt04.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }

  if(!CTHfacultyAt05){
    if(C3THfacultyAt05[0]&&C3THfacultyAt05[0].length>0){
      if(C3THfacultyAt05[0]==='Dr. Rakesh'){
        numAt05=C3THfacultyAt05
        FImilan2=[]
      FImilan1=[]
      FIcourse2=[]
      FIcourse3=[]
      }else{
        numAt05=numAt05.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }
      

      if(!CTHfacultyAt9[0]){
        if(C3THfacultyAt9&&C3THfacultyAt9.length>0){
          if(C3THfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3THfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3THfacultyAt9[0]===''){
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3THfacultyAt9[0]&&P3THfacultyAt9[0].length>0){
            NImilan2=[]
            NIcourse3=[] 
          }
      }

      if(C3THfacultyAt9&&C3THfacultyAt9.length>0&&P3THfacultyAt9[0]&&P3THfacultyAt9[0].length>0){
        if(C3THfacultyAt9[0]==='Dr. Rakesh'){
          numAt9=C3THfacultyAt9
          NImilan2=[]
        NImilan1=[]
        NIcourse2=[]
        NIcourse3=[]
        }else{
          numAt9=numAt9.filter((num)=>{
            return num!==prof[3]
          })
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!CTHfacultyAt10[0]){
        if(C3THfacultyAt10&&C3THfacultyAt10.length>0){
          if(C3THfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3THfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3THfacultyAt10[0]===''){
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3THfacultyAt10[0]&&P3THfacultyAt10[0].length>0){
            TEmilan2=[]
            TEcourse3=[] 
          }
      }

      if(C3THfacultyAt10&&C3THfacultyAt10.length>0&&P3THfacultyAt10[0]&&P3THfacultyAt10[0].length>0){
        if(C3THfacultyAt10[0]==='Dr. Rakesh'){
          numAt10=C3THfacultyAt10
          TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else{
          numAt10=numAt10.filter((num)=>{
            return num!==prof[3]
          })
          TEmilan2=[]
          TEcourse3=[] 
        }
      }
      

      if(!CTHfacultyAt11[0]){
        if(C3THfacultyAt11&&C3THfacultyAt11.length>0){
          if(C3THfacultyAt11[0]==='Dr. Rakesh'){
            numAt11=C3THfacultyAt11
            ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(C3THfacultyAt11[0]===''){
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3THfacultyAt11[0]&&P3THfacultyAt11[0].length>0){
            ELmilan2=[]
            ELcourse3=[] 
          }
      }

      if(C3THfacultyAt11&&C3THfacultyAt11.length>0&&P3THfacultyAt11[0]&&P3THfacultyAt11[0].length>0){
        if(C3THfacultyAt11[0]==='Dr. Rakesh'){
          numAt11=C3THfacultyAt11
          ELmilan2=[]
        ELmilan1=[]
        ELcourse2=[]
        ELcourse3=[]
        }else{
          numAt11=numAt11.filter((num)=>{
            return num!==prof[3]
          })
          ELmilan2=[]
          ELcourse3=[] 
        }
      }
      

      if(!CTHfacultyAt12[0]){
        if(C3THfacultyAt12&&C3THfacultyAt12.length>0){
          if(C3THfacultyAt12[0]==='Dr. Rakesh'){
            numAt12=C3THfacultyAt12
            TWmilan2=[]
          TWmilan1=[]
          TWcourse2=[]
          TWcourse3=[]
          }else if(C3THfacultyAt12[0]===''){
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3THfacultyAt12[0]&&P3THfacultyAt12[0].length>0){
            TWmilan2=[]
            TWcourse3=[] 
          }
      }

      if(C3THfacultyAt12&&C3THfacultyAt12.length>0&&P3THfacultyAt12[0]&&P3THfacultyAt12[0].length>0){
        if(C3THfacultyAt12[0]==='Dr. Rakesh'){
          numAt12=C3THfacultyAt12
          TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else{
          numAt12=numAt12.filter((num)=>{
            return num!==prof[3]
          })
          TWmilan2=[]
          TWcourse3=[] 
        }
      }

      if(!CTHfacultyAt03[0]){
        if(C3THfacultyAt03&&C3THfacultyAt03.length>0){
          if(C3THfacultyAt03[0]==='Dr. Rakesh'){
            numAt03=C3THfacultyAt03
            THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(C3THfacultyAt03[0]===''){
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3THfacultyAt03[0]&&P3THfacultyAt03[0].length>0){
            THmilan2=[]
            THcourse3=[] 
          }
      }

      if(C3THfacultyAt03&&C3THfacultyAt03.length>0&&P3THfacultyAt03[0]&&P3THfacultyAt03[0].length>0){
        if(C3THfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3THfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
          THmilan2=[]
          THcourse3=[] 
        }
      }
      
      if(!CTHfacultyAt04[0]){
        if(C3THfacultyAt04&&C3THfacultyAt04.length>0){
          if(C3THfacultyAt04[0]==='Dr. Rakesh'){
            numAt04=C3THfacultyAt04
            FOmilan2=[]
          FOmilan1=[]
          FOcourse2=[]
          FOcourse3=[]
          }else if(C3THfacultyAt04[0]===''){
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3THfacultyAt04[0]&&P3THfacultyAt04[0].length>0){
            FOmilan2=[]
            FOcourse3=[] 
          }
      }

      if(C3THfacultyAt04&&C3THfacultyAt04.length>0&&P3THfacultyAt04[0]&&P3THfacultyAt04[0].length>0){
        if(C3THfacultyAt04[0]==='Dr. Rakesh'){
          numAt04=C3THfacultyAt04
          FOmilan2=[]
        FOmilan1=[]
        FOcourse2=[]
        FOcourse3=[]
        }else{
          numAt04=numAt04.filter((num)=>{
            return num!==prof[3]
          })
          FOmilan2=[]
          FOcourse3=[] 
        }
      }
       

      if(!CTHfacultyAt05[0]){
        if(C3THfacultyAt05&&C3THfacultyAt05.length>0){
          if(C3THfacultyAt05[0]==='Dr. Rakesh'){
            numAt05=C3THfacultyAt05
            FImilan2=[]
          FImilan1=[]
          FIcourse2=[]
          FIcourse3=[]
          }else if(C3THfacultyAt05[0]===''){
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3THfacultyAt05[0]&&P3THfacultyAt05[0].length>0){
            FImilan2=[]
            FIcourse3=[] 
          }
      }

      if(C3THfacultyAt05&&C3THfacultyAt05.length>0&&P3THfacultyAt05[0]&&P3THfacultyAt05[0].length>0){
        if(C3THfacultyAt05[0]==='Dr. Rakesh'){
          numAt05=C3THfacultyAt05
          FImilan2=[]
        FImilan1=[]
        FIcourse2=[]
        FIcourse3=[]
        }else{
          numAt05=numAt05.filter((num)=>{
            return num!==prof[3]
          })
        FImilan2=[]
          FIcourse3=[] 
        }
      }
      

    if(POTHfacultyAt9[0]===course2[0]||C3THfacultyAt9[0]){
      NImilan2=[]
      NIcourse3=[] 
     }
     
     if(POTHfacultyAt10[0]===course2[0]||C3THfacultyAt10[0]&&C3THfacultyAt10[0].length>0||P3THfacultyAt10[0]&&P3THfacultyAt10[0].length>0){
       TEmilan2=[] 
       TEcourse3=[]
      }
      if(POTHfacultyAt11[0]===course2[0]||C3THfacultyAt11[0]&&C3THfacultyAt11[0].length>0||P3THfacultyAt11[0]&&P3THfacultyAt11[0].length>0){
        ELmilan2=[] 
        ELcourse3=[]
       }
      if(POTHfacultyAt12[0]===course2[0]||C3THfacultyAt12[0]&&C3THfacultyAt12[0].length>0||P3THfacultyAt12[0]&&P3THfacultyAt12[0].length>0){
       TWmilan2=[]
       TWcourse3=[]
      }
      if(POTHfacultyAt03[0]===course2[0]||C3THfacultyAt03[0]&&C3THfacultyAt03[0].length>0||P3THfacultyAt03[0]&&P3THfacultyAt03[0].length>0){
       THmilan2=[]
       THcourse3=[]
      }
      if(POTHfacultyAt04[0]===course2[0]||C3THfacultyAt04[0]&&C3THfacultyAt04[0].length>0||P3THfacultyAt04[0]&&P3THfacultyAt04[0].length>0){
       FOmilan2=[]
       FOcourse3=[]
      }
      if(POTHfacultyAt05[0]===course2[0]||C3THfacultyAt05[0]&&C3THfacultyAt05[0].length>0||P3THfacultyAt05[0]&&P3THfacultyAt05[0].length>0){
       FImilan2=[]
       FIcourse3=[]
      }

      if(POTHfacultyAt9[0]&&POTHfacultyAt9[0]===course3[0]){
        NIcourse2=[]
        NImilan1=[]
       }
       if(POTHfacultyAt10[0]&&POTHfacultyAt10[0]===course3[0]){
        TEcourse2=[]
        TEmilan1=[]
       }
       if(POTHfacultyAt11[0]&&POTHfacultyAt11[0]===course3[0]){
        ELcourse2=[]
        ELmilan1=[]
       }
       if(POTHfacultyAt12[0]&&POTHfacultyAt12[0]===course3[0]){
        TWcourse2=[]
        TWmilan1=[]
       }
       if(POTHfacultyAt03[0]&&POTHfacultyAt03[0]===course3[0]){
        THcourse2=[]
        THmilan1=[]
       }
       if(POTHfacultyAt04[0]&&POTHfacultyAt04[0]===course3[0]){
        FOcourse2=[]
        FOmilan1=[]
       }
       if(POTHfacultyAt05[0]&&POTHfacultyAt05[0]===course3[0]){
        FIcourse2=[]
        FImilan1=[]
       }
       
      

      if(PTHfacultyAt9[0]&&PTHfacultyAt9[0].length>0){
        setDisabled(true)
      }
      if(PTHfacultyAt10[0]&&PTHfacultyAt10[0].length>0){
        setDisabled(true)
      }
      if(PTHfacultyAt11[0]&&PTHfacultyAt11[0].length>0){
        setDisabled(true)
      }
      if(PTHfacultyAt12[0]&&PTHfacultyAt12[0].length>0){
        setDisabled(true)
      }
      if(PTHfacultyAt03[0]&&PTHfacultyAt03[0].length>0){
        setDisabled(true)
      }
      if(PTHfacultyAt04[0]&&PTHfacultyAt04[0].length>0){
        setDisabled(true)
      }
      if(PTHfacultyAt05[0]&&PTHfacultyAt05[0].length>0){
        setDisabled(true)
      }

      
  
    }else{
      numAt9=[PTHfacultyAt9[0]]
      numAt10=[PTHfacultyAt10[0]]
      numAt11=[PTHfacultyAt11[0]]
      numAt12=[PTHfacultyAt12[0]]
      numAt03=[PTHfacultyAt03[0]]
      numAt04=[PTHfacultyAt04[0]]
      numAt05=[PTHfacultyAt05[0]]
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

        if(CFfacultyAt9[0]===prof[0]||CFfacultyAt9[0]===prof[1]||CFfacultyAt9[0]===prof[3]){
          numAt9=CFfacultyAt9
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CFfacultyAt9[0]===prof2[0]||CFfacultyAt9[0]===prof2[1]||CFfacultyAt9[0]===''){
          numAt9=prof3.filter((item)=>{
            return FfacultyAt9.indexOf(item)===-1
          })
          NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(CFfacultyAt9[0]===milan[0]){
            numAt9=[]
          }
    
          if(CFfacultyAt10[0]===prof[0]||CFfacultyAt10[0]===prof[1]||CFfacultyAt10[0]===prof[3]){
            numAt10=CFfacultyAt10
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CFfacultyAt10[0]===prof2[0]||CFfacultyAt10[0]===prof2[1]||CFfacultyAt10[0]===''){
              numAt10=prof3.filter((item)=>{
                return FfacultyAt10.indexOf(item)===-1
              })
            TEmilan2=[]
            TEmilan1=[]
            TEcourse2=[]
            TEcourse3=[]
            }else if(CFfacultyAt10[0]===milan[0]){
              numAt10=[]
            }
    
           if(CFfacultyAt11[0]===prof[0]||CFfacultyAt11[0]===prof[1]||CFfacultyAt11[0]===prof[3]){
          numAt11=CFfacultyAt11
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CFfacultyAt11[0]===prof2[0]||CFfacultyAt11[0]===prof2[1]||CFfacultyAt11[0]===''){
            numAt11=prof3.filter((item)=>{
              return FfacultyAt11.indexOf(item)===-1
            })
          ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(CFfacultyAt11[0]===milan[0]){
            numAt11=[]
          }
    
          if(CFfacultyAt12[0]===prof[0]||CFfacultyAt12[0]===prof[1]||CFfacultyAt12[0]===prof[3]){
            numAt12=CFfacultyAt12
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CFfacultyAt12[0]===prof2[0]||CFfacultyAt12[0]===prof2[1]||CFfacultyAt12[0]===''){
              numAt12=prof3.filter((item)=>{
                return FfacultyAt12.indexOf(item)===-1
              })
            TWmilan2=[]
            TWmilan1=[]
            TWcourse2=[]
            TWcourse3=[]
            }else if(CFfacultyAt12[0]===milan[0]){
              numAt12=[]
            }
    
            if(CFfacultyAt03[0]===prof[0]||CFfacultyAt03[0]===prof[1]||CFfacultyAt03[0]===prof[3]){
              numAt03=CFfacultyAt03
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CFfacultyAt03[0]===prof2[0]||CFfacultyAt03[0]===prof2[1]||CFfacultyAt03[0]===''){
                numAt03=prof3.filter((item)=>{
                  return FfacultyAt03.indexOf(item)===-1
                })
              THmilan2=[]
              THmilan1=[]
              THcourse2=[]
              THcourse3=[]
              }else if(CFfacultyAt03[0]===milan[0]){
                numAt03=[]
              }
    
              if(CFfacultyAt04[0]===prof[0]||CFfacultyAt04[0]===prof[1]||CFfacultyAt04[0]===prof[3]){
                numAt04=CFfacultyAt04
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CFfacultyAt04[0]===prof2[0]||CFfacultyAt04[0]===prof2[1]||CFfacultyAt04[0]===''){
                  numAt04=prof3.filter((item)=>{
                    return FfacultyAt04.indexOf(item)===-1
                  })
                FOmilan2=[]
                FOmilan1=[]
                FOcourse2=[]
                FOcourse3=[]
                }else if(CFfacultyAt04[0]===milan[0]){
                  numAt04=[]
                }
    
                if(CFfacultyAt05[0]===prof[0]||CFfacultyAt05[0]===prof[1]||CFfacultyAt05[0]===prof[3]){
                  numAt05=CFfacultyAt05
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CFfacultyAt05[0]===prof2[0]||CFfacultyAt05[0]===prof2[1]||CFfacultyAt05[0]===''){
                    numAt05=prof3.filter((item)=>{
                      return FfacultyAt05.indexOf(item)===-1
                    })
                  FImilan2=[]
                  FImilan1=[]
                  FIcourse2=[]
                  FIcourse3=[]
                  }else if(CFfacultyAt05[0]===milan[0]){
                    numAt05=[]
                  }
  

    if(!CFfacultyAt03){
      if(C3FfacultyAt03[0]&&C3FfacultyAt03[0].length>0){

        if(C3FfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3FfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }
        else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
        }
        }
       
    }
      
  if(!CFfacultyAt04){
    if(C3FfacultyAt04[0]&&C3FfacultyAt04[0].length>0){
      if(C3FfacultyAt04[0]==='Dr. Rakesh'){
        numAt04=C3FfacultyAt04
        FOmilan2=[]
      FOmilan1=[]
      FOcourse2=[]
      FOcourse3=[]
      }else{
        numAt04=numAt04.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }

  if(!CFfacultyAt05){
    if(C3FfacultyAt05[0]&&C3FfacultyAt05[0].length>0){
      if(C3FfacultyAt05[0]==='Dr. Rakesh'){
        numAt05=C3FfacultyAt05
        FImilan2=[]
      FImilan1=[]
      FIcourse2=[]
      FIcourse3=[]
      }else{
        numAt05=numAt05.filter((num)=>{
          return num!==prof[3]
        })
      }
      }
      
  }
      

      if(!CFfacultyAt9[0]){
        if(C3FfacultyAt9&&C3FfacultyAt9.length>0){
          if(C3FfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3FfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3FfacultyAt9[0]===''){
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3FfacultyAt9[0]&&P3FfacultyAt9[0].length>0){
            NImilan2=[]
            NIcourse3=[] 
          }
      }

      if(C3FfacultyAt9&&C3FfacultyAt9.length>0&&P3FfacultyAt9[0]&&P3FfacultyAt9[0].length>0){
        if(C3FfacultyAt9[0]==='Dr. Rakesh'){
          numAt9=C3FfacultyAt9
          NImilan2=[]
        NImilan1=[]
        NIcourse2=[]
        NIcourse3=[]
        }else{
          numAt9=numAt9.filter((num)=>{
            return num!==prof[3]
          })
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!CFfacultyAt10[0]){
        if(C3FfacultyAt10&&C3FfacultyAt10.length>0){
          if(C3FfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3FfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3FfacultyAt10[0]===''){
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3FfacultyAt10[0]&&P3FfacultyAt10[0].length>0){
            TEmilan2=[]
            TEcourse3=[] 
          }
      }

      if(C3FfacultyAt10&&C3FfacultyAt10.length>0&&P3FfacultyAt10[0]&&P3FfacultyAt10[0].length>0){
        if(C3FfacultyAt10[0]==='Dr. Rakesh'){
          numAt10=C3FfacultyAt10
          TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else{
          numAt10=numAt10.filter((num)=>{
            return num!==prof[3]
          })
          TEmilan2=[]
          TEcourse3=[] 
        }
      }
      

      if(!CFfacultyAt11[0]){
        if(C3FfacultyAt11&&C3FfacultyAt11.length>0){
          if(C3FfacultyAt11[0]==='Dr. Rakesh'){
            numAt11=C3FfacultyAt11
            ELmilan2=[]
          ELmilan1=[]
          ELcourse2=[]
          ELcourse3=[]
          }else if(C3FfacultyAt11[0]===''){
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3FfacultyAt11[0]&&P3FfacultyAt11[0].length>0){
            ELmilan2=[]
            ELcourse3=[] 
          }
      }

      if(C3FfacultyAt11&&C3FfacultyAt11.length>0&&P3FfacultyAt11[0]&&P3FfacultyAt11[0].length>0){
        if(C3FfacultyAt11[0]==='Dr. Rakesh'){
          numAt11=C3FfacultyAt11
          ELmilan2=[]
        ELmilan1=[]
        ELcourse2=[]
        ELcourse3=[]
        }else{
          numAt11=numAt11.filter((num)=>{
            return num!==prof[3]
          })
          ELmilan2=[]
          ELcourse3=[] 
        }
      }
      

      if(!CFfacultyAt12[0]){
        if(C3FfacultyAt12&&C3FfacultyAt12.length>0){
          if(C3FfacultyAt12[0]==='Dr. Rakesh'){
            numAt12=C3FfacultyAt12
            TWmilan2=[]
          TWmilan1=[]
          TWcourse2=[]
          TWcourse3=[]
          }else if(C3FfacultyAt12[0]===''){
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3FfacultyAt12[0]&&P3FfacultyAt12[0].length>0){
            TWmilan2=[]
            TWcourse3=[] 
          }
      }

      if(C3FfacultyAt12&&C3FfacultyAt12.length>0&&P3FfacultyAt12[0]&&P3FfacultyAt12[0].length>0){
        if(C3FfacultyAt12[0]==='Dr. Rakesh'){
          numAt12=C3FfacultyAt12
          TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else{
          numAt12=numAt12.filter((num)=>{
            return num!==prof[3]
          })
          TWmilan2=[]
          TWcourse3=[] 
        }
      }

      if(!CFfacultyAt03[0]){
        if(C3FfacultyAt03&&C3FfacultyAt03.length>0){
          if(C3FfacultyAt03[0]==='Dr. Rakesh'){
            numAt03=C3FfacultyAt03
            THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(C3FfacultyAt03[0]===''){
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3FfacultyAt03[0]&&P3FfacultyAt03[0].length>0){
            THmilan2=[]
            THcourse3=[] 
          }
      }

      if(C3FfacultyAt03&&C3FfacultyAt03.length>0&&P3FfacultyAt03[0]&&P3FfacultyAt03[0].length>0){
        if(C3FfacultyAt03[0]==='Dr. Rakesh'){
          numAt03=C3FfacultyAt03
          THmilan2=[]
        THmilan1=[]
        THcourse2=[]
        THcourse3=[]
        }else{
          numAt03=numAt03.filter((num)=>{
            return num!==prof[3]
          })
          THmilan2=[]
          THcourse3=[] 
        }
      }
      
      if(!CFfacultyAt04[0]){
        if(C3FfacultyAt04&&C3FfacultyAt04.length>0){
          if(C3FfacultyAt04[0]==='Dr. Rakesh'){
            numAt04=C3FfacultyAt04
            FOmilan2=[]
          FOmilan1=[]
          FOcourse2=[]
          FOcourse3=[]
          }else if(C3FfacultyAt04[0]===''){
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3FfacultyAt04[0]&&P3FfacultyAt04[0].length>0){
            FOmilan2=[]
            FOcourse3=[] 
          }
      }

      if(C3FfacultyAt04&&C3FfacultyAt04.length>0&&P3FfacultyAt04[0]&&P3FfacultyAt04[0].length>0){
        if(C3FfacultyAt04[0]==='Dr. Rakesh'){
          numAt04=C3FfacultyAt04
          FOmilan2=[]
        FOmilan1=[]
        FOcourse2=[]
        FOcourse3=[]
        }else{
          numAt04=numAt04.filter((num)=>{
            return num!==prof[3]
          })
          FOmilan2=[]
          FOcourse3=[] 
        }
      }
       

      if(!CFfacultyAt05[0]){
        if(C3FfacultyAt05&&C3FfacultyAt05.length>0){
          if(C3FfacultyAt05[0]==='Dr. Rakesh'){
            numAt05=C3FfacultyAt05
            FImilan2=[]
          FImilan1=[]
          FIcourse2=[]
          FIcourse3=[]
          }else if(C3FfacultyAt05[0]===''){
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3FfacultyAt05[0]&&P3FfacultyAt05[0].length>0){
            FImilan2=[]
            FIcourse3=[] 
          }
      }

      if(C3FfacultyAt05&&C3FfacultyAt05.length>0&&P3FfacultyAt05[0]&&P3FfacultyAt05[0].length>0){
        if(C3FfacultyAt05[0]==='Dr. Rakesh'){
          numAt05=C3FfacultyAt05
          FImilan2=[]
        FImilan1=[]
        FIcourse2=[]
        FIcourse3=[]
        }else{
          numAt05=numAt05.filter((num)=>{
            return num!==prof[3]
          })
        FImilan2=[]
          FIcourse3=[] 
        }
      }
      

    if(POFfacultyAt9[0]===course2[0]||C3FfacultyAt9[0]){
      NImilan2=[]
      NIcourse3=[] 
     }
     
     if(POFfacultyAt10[0]===course2[0]||C3FfacultyAt10[0]&&C3FfacultyAt10[0].length>0||P3FfacultyAt10[0]&&P3FfacultyAt10[0].length>0){
       TEmilan2=[] 
       TEcourse3=[]
      }
      if(POFfacultyAt11[0]===course2[0]||C3FfacultyAt11[0]&&C3FfacultyAt11[0].length>0||P3FfacultyAt11[0]&&P3FfacultyAt11[0].length>0){
        ELmilan2=[] 
        ELcourse3=[]
       }
      if(POFfacultyAt12[0]===course2[0]||C3FfacultyAt12[0]&&C3FfacultyAt12[0].length>0||P3FfacultyAt12[0]&&P3FfacultyAt12[0].length>0){
       TWmilan2=[]
       TWcourse3=[]
      }
      if(POFfacultyAt03[0]===course2[0]||C3FfacultyAt03[0]&&C3FfacultyAt03[0].length>0||P3FfacultyAt03[0]&&P3FfacultyAt03[0].length>0){
       THmilan2=[]
       THcourse3=[]
      }
      if(POFfacultyAt04[0]===course2[0]||C3FfacultyAt04[0]&&C3FfacultyAt04[0].length>0||P3FfacultyAt04[0]&&P3FfacultyAt04[0].length>0){
       FOmilan2=[]
       FOcourse3=[]
      }
      if(POFfacultyAt05[0]===course2[0]||C3FfacultyAt05[0]&&C3FfacultyAt05[0].length>0||P3FfacultyAt05[0]&&P3FfacultyAt05[0].length>0){
       FImilan2=[]
       FIcourse3=[]
      }

      if(POFfacultyAt9[0]&&POFfacultyAt9[0]===course3[0]){
        NIcourse2=[]
        NImilan1=[]
       }
       if(POFfacultyAt10[0]&&POFfacultyAt10[0]===course3[0]){
        TEcourse2=[]
        TEmilan1=[]
       }
       if(POFfacultyAt11[0]&&POFfacultyAt11[0]===course3[0]){
        ELcourse2=[]
        ELmilan1=[]
       }
       if(POFfacultyAt12[0]&&POFfacultyAt12[0]===course3[0]){
        TWcourse2=[]
        TWmilan1=[]
       }
       if(POFfacultyAt03[0]&&POFfacultyAt03[0]===course3[0]){
        THcourse2=[]
        THmilan1=[]
       }
       if(POFfacultyAt04[0]&&POFfacultyAt04[0]===course3[0]){
        FOcourse2=[]
        FOmilan1=[]
       }
       if(POFfacultyAt05[0]&&POFfacultyAt05[0]===course3[0]){
        FIcourse2=[]
        FImilan1=[]
       }
       
      

      if(PFfacultyAt9[0]&&PFfacultyAt9[0].length>0){
        setDisabled(true)
      }
      if(PFfacultyAt10[0]&&PFfacultyAt10[0].length>0){
        setDisabled(true)
      }
      if(PFfacultyAt11[0]&&PFfacultyAt11[0].length>0){
        setDisabled(true)
      }
      if(PFfacultyAt12[0]&&PFfacultyAt12[0].length>0){
        setDisabled(true)
      }
      if(PFfacultyAt03[0]&&PFfacultyAt03[0].length>0){
        setDisabled(true)
      }
      if(PFfacultyAt04[0]&&PFfacultyAt04[0].length>0){
        setDisabled(true)
      }
      if(PFfacultyAt05[0]&&PFfacultyAt05[0].length>0){
        setDisabled(true)
      }

      
  
    }else{
      numAt9=[PFfacultyAt9[0]]
      numAt10=[PFfacultyAt10[0]]
      numAt11=[PFfacultyAt11[0]]
      numAt12=[PFfacultyAt12[0]]
      numAt03=[PFfacultyAt03[0]]
      numAt04=[PFfacultyAt04[0]]
      numAt05=[PFfacultyAt05[0]]
    }
  }
  

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(C3THfacultyAt9&&C3MfacultyAt9.length>0&&P3MfacultyAt9[0]&&P3MfacultyAt9[0].length>0)
    setDisabled(true)

    dispatch({
      type:'DISABLED',
      item:true
    })
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

  dispatch({
    type:type[15],
    item:COAt9
  })

  dispatch({
    type:type[16],
    item:COAt10
  })

  dispatch({
    type:type[17],
    item:COAt11
  })
  dispatch({
    type:type[18],
    item:COAt12
  })
  dispatch({
    type:type[19],
    item:COAt03
  })
  dispatch({
    type:type[20],
    item:COAt04
  })
  dispatch({
    type:type[21],
    item:COAt05
  })
  
   
   } 
   const handler9=(e)=>{
    setAt9(e.target.value.split(',')[0]) 
    setCOat9(e.target.value.split(',')[1])

   }
   const handler10=(e)=>{
   
    setCOat10(e.target.value.split(',')[1]) 
    setAt10(e.target.value.split(',')[0])

   }
   const handler11=(e)=>{
    setAt11(e.target.value.split(',')[0]) 
    setCOat11(e.target.value.split(',')[1])

   }
   const handler12=(e)=>{
    setAt12(e.target.value.split(',')[0]) 
    setCOat12(e.target.value.split(',')[1])
   
   }
   const handler03=(e)=>{
    setAt03(e.target.value.split(',')[0]) 
    setCOat03(e.target.value.split(',')[1])
    
   }
   const handler04=(e)=>{
    setAt04(e.target.value.split(',')[0])
    setCOat04(e.target.value.split(',')[1])
   }
   const handler05=(e)=>{
     setAt05(e.target.value.split(',')[0])
     setCOat05(e.target.value.split(',')[1])
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
                    NIcourse2.map((each,index)=>{
                    return <option value={[NImilan1[index],each]}>{NImilan1[index]}-{each}</option>
                    })
                  }
                  {
                    NIcourse3.map((each,index)=>{
                    return <option value={[NImilan2[index],each]}>{NImilan2[index]}-{each}</option>
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
                    TEcourse2.map((each,index)=>{
                    return <option value={[TEmilan1[index],each]}>{TEmilan1[index]}-{each}</option>
                    })
                  }
                  {
                    TEcourse3.map((each,index)=>{
                    return <option value={[TEmilan2[index],each]}>{TEmilan2[index]}-{each}</option>
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
                    ELcourse2.map((each,index)=>{
                    return <option value={[ELmilan1[index],each]}>{ELmilan1[index]}-{each}</option>
                    })
                  }
                  {
                    ELcourse3.map((each,index)=>{
                    return <option value={[ELmilan2[index],each]}>{ELmilan2[index]}-{each}</option>
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
                    TWcourse2.map((each,index)=>{
                    return <option value={[TWmilan1[index],each]}>{TWmilan1[index]}-{each}</option>
                    })
                  }
                  {
                    TWcourse3.map((each,index)=>{
                    return <option value={[TWmilan2[index],each]}>{TWmilan2[index]}-{each}</option>
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
                    THcourse2.map((each,index)=>{
                    return <option value={[THmilan1[index],each]}>{THmilan1[index]}-{each}</option>
                    })
                  }
                  {
                    THcourse3.map((each,index)=>{
                    return <option value={[THmilan2[index],each]}>{THmilan2[index]}-{each}</option>
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
                    FOcourse2.map((each,index)=>{
                    return <option value={[FOmilan1[index],each]}>{FOmilan1[index]}-{each}</option>
                    })
                  }
                  {
                    FOcourse3.map((each,index)=>{
                    return <option value={[FOmilan2[index],each]}>{FOmilan2[index]}-{each}</option>
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
                    FIcourse2.map((each,index)=>{
                    return <option value={[FImilan1[index],each]}>{FImilan1[index]}-{each}</option>
                    })
                  }
                  {
                    FIcourse3.map((each,index)=>{
                    return <option value={[FImilan2[index],each]}>{FImilan2[index]}-{each}</option>
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

export default B2petroleum
