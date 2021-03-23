import React,{useState,useEffect} from 'react'
import './B2chemical.css'
import {useStateValue} from './StateProvider'
// import {Link} from 'react-router-dom'

function B2chemical({type}) {
    // const [value,setValue]=useState('helllo')
    const [at9,setAt9]=useState('')
    const [at10,setAt10]=useState('')
    const [at11,setAt11]=useState('')
    const [at12,setAt12]=useState('')
    const [at03,setAt03]=useState('')
    const [at04,setAt04]=useState('')
    const [at05,setAt05]=useState('')
    const [POAt9,setPOat9]=useState('')
    const [POAt10,setPOat10]=useState('')
    const [POAt11,setPOat11]=useState('')
    const [POAt12,setPOat12]=useState('')
    const [POAt03,setPOat03]=useState('')
    const [POAt04,setPOat04]=useState('')
    const [POAt05,setPOat05]=useState('')
    // const [preview,setpreview]=useState('')
    const nums=['numAt9','numAt10','numAt11','numAt12','numAt03','numAt04']
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const course=['HTO','CET','FFO','Petroleum Refining','Mass Transfer','SFM']
    const prof=['Dr. Amit Ranjan','Dr. Koushik','Dr. Bala','Dr. Rakesh','Dr. Gunjan']
    const timing=['9.00 to 10.00','10:15 to 11:15','11:30 to 12:30','12:45 to 1:45','3:00 to 4:00','4:15 to 5:15']
    const prof3=['Dr. Bala','Dr. Gunjan']
    const prof2=['Dr. AKS','Dr. Alpesh']
    const prof4=['Dr. Amit Ranjan','Dr. Koushik','Dr. Rakesh']
    const prof5=['Dr. Amit Ranjan','Dr. Koushik']
    const [{MfacultyAt9,MfacultyAt10,MfacultyAt11,MfacultyAt12,MfacultyAt04,MfacultyAt03,MfacultyAt05,
      TfacultyAt9,TfacultyAt10,TfacultyAt11,TfacultyAt12,TfacultyAt04,TfacultyAt03,TfacultyAt05,
      WfacultyAt9,WfacultyAt10,WfacultyAt11,WfacultyAt12,WfacultyAt04,WfacultyAt03,WfacultyAt05,
      THfacultyAt9,THfacultyAt10,THfacultyAt11,THfacultyAt12,THfacultyAt04,THfacultyAt03,THfacultyAt05,
      FfacultyAt9,FfacultyAt10,FfacultyAt11,FfacultyAt12,FfacultyAt04,FfacultyAt03,FfacultyAt05,
    
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
    
      P3MfacultyAt9,P3MfacultyAt10,P3MfacultyAt11,P3MfacultyAt12,P3MfacultyAt04,P3MfacultyAt03,P3MfacultyAt05,
      P3TfacultyAt9,P3TfacultyAt10,P3TfacultyAt11,P3TfacultyAt12,P3TfacultyAt04,P3TfacultyAt03,P3TfacultyAt05,
      P3WfacultyAt9,P3WfacultyAt10,P3WfacultyAt11,P3WfacultyAt12,P3WfacultyAt04,P3WfacultyAt03,P3WfacultyAt05,
      P3THfacultyAt9,P3THfacultyAt10,P3THfacultyAt11,P3THfacultyAt12,P3THfacultyAt04,P3THfacultyAt03,P3THfacultyAt05,
      P3FfacultyAt9,P3FfacultyAt10,P3FfacultyAt11,P3FfacultyAt12,P3FfacultyAt04,P3FfacultyAt03,P3FfacultyAt05,
    
      POMfacultyAt9,POMfacultyAt10,POMfacultyAt11,POMfacultyAt12,POMfacultyAt04,POMfacultyAt03,POMfacultyAt05,
      POTfacultyAt9,POTfacultyAt10,POTfacultyAt11,POTfacultyAt12,POTfacultyAt04,POTfacultyAt03,POTfacultyAt05,
      POWfacultyAt9,POWfacultyAt10,POWfacultyAt11,POWfacultyAt12,POWfacultyAt04,POWfacultyAt03,POWfacultyAt05,
      POTHfacultyAt9,POTHfacultyAt10,POTHfacultyAt11,POTHfacultyAt12,POTHfacultyAt04,POTHfacultyAt03,POTHfacultyAt05,
      POFfacultyAt9,POFfacultyAt10,POFfacultyAt11,POFfacultyAt12,POFfacultyAt04,POFfacultyAt03,POFfacultyAt05,
      
      C4MfacultyAt9,C4MfacultyAt10,C4MfacultyAt11,C4MfacultyAt12,C4MfacultyAt04,C4MfacultyAt03,C4MfacultyAt05,
      C4TfacultyAt9,C4TfacultyAt10,C4TfacultyAt11,C4TfacultyAt12,C4TfacultyAt04,C4TfacultyAt03,C4TfacultyAt05,
      C4WfacultyAt9,C4WfacultyAt10,C4WfacultyAt11,C4WfacultyAt12,C4WfacultyAt04,C4WfacultyAt03,C4WfacultyAt05,
      C4THfacultyAt9,C4THfacultyAt10,C4THfacultyAt11,C4THfacultyAt12,C4THfacultyAt04,C4THfacultyAt03,C4THfacultyAt05,
      C4FfacultyAt9,C4FfacultyAt10,C4FfacultyAt11,C4FfacultyAt12,C4FfacultyAt04,C4FfacultyAt03,C4FfacultyAt05,Pdisabled},dispatch]=useStateValue()
    const [disabled,setDisabled]=useState(false)
    
    const courseHandler=(each)=>{
      let course=[]
     
      if(each===prof[0]){
        course='CET'
      }
      if(each===prof[1]){
        course='FFO'
      }
      if(each===prof[2]){
        course='Petroleum Refining'
      }
      if(each===prof[3]){
        course='Mass Transfer'
      }
      if(each===prof[4]){
        course='SFM'
      }
      return course
    }

    const courseHandler2=(each)=>{
      let course=[]
     if(each==='Dr. Milan Kumar'){
       course='HTO'
     }
      return course
    }

    const courseHandler3=(each)=>{
      let course=[]
     if(each==='Dr. Milan Kumar'){
       course='Mass Transfer(TUT)'
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
  // let milan=['Dr. Milan Kumar']
  // let milan1=['Dr. Milan Kumar']
  //   let course2=['Mass Transfer(TUT)']
  //   let course3=['HTO']
  //   let milan2=['Dr. Milan Kumar']

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

    if(C4MfacultyAt9[0]&&C4MfacultyAt9[0].length>0){
      numAt9= prof4.filter((item) => { 
        return MfacultyAt9.indexOf(item) === -1 
      })
    }

    if(C4MfacultyAt10[0]&&C4MfacultyAt10[0].length>0){
      numAt10= prof4.filter((item) => { 
        return MfacultyAt10.indexOf(item) === -1 
      })
    }

    if(C4MfacultyAt11[0]&&C4MfacultyAt11[0].length>0){
      numAt11= prof4.filter((item) => { 
        return MfacultyAt11.indexOf(item) === -1 
      })
    }

    if(C4MfacultyAt12[0]&&C4MfacultyAt12[0].length>0){
      numAt12= prof4.filter((item) => { 
        return MfacultyAt12.indexOf(item) === -1 
      })
    }

    if(C4MfacultyAt03[0]&&C4MfacultyAt03[0].length>0){
      numAt03= prof4.filter((item) => { 
        return MfacultyAt03.indexOf(item) === -1 
      })
    }

    if(C4MfacultyAt04[0]&&C4MfacultyAt04[0].length>0){
      numAt04= prof4.filter((item) => { 
        return MfacultyAt04.indexOf(item) === -1 
      })
    }

    if(C4MfacultyAt05[0]&&C4MfacultyAt05[0].length>0){
      numAt05= prof4.filter((item) => { 
        return MfacultyAt05.indexOf(item) === -1 
      })
    }

    if(PMfacultyAt9[0]===prof[0]||PMfacultyAt9[0]===prof[1]||PMfacultyAt9[0]===prof[3]){
      numAt9=PMfacultyAt9
      NImilan2=[]
      NImilan1=[]
      NIcourse2=[]
      NIcourse3=[]
      }else if(PMfacultyAt9[0]===prof2[0]||PMfacultyAt9[0]===prof2[1]||PMfacultyAt9[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4MfacultyAt9[0]&&C4MfacultyAt9[0].length>0){
          numAt9=[]
          
        }else{
          numAt9=prof3.filter((item)=>{
            return MfacultyAt9.indexOf(item)===-1
          })
          
        }
      
      }else if(PMfacultyAt9[0]===milan[0]){
        numAt9=[]
      }

      if(PMfacultyAt10[0]===prof[0]||PMfacultyAt10[0]===prof[1]||PMfacultyAt10[0]===prof[3]){
        numAt10=PMfacultyAt10
        TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else if(PMfacultyAt10[0]===prof2[0]||PMfacultyAt10[0]===prof2[1]||PMfacultyAt10[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4MfacultyAt10[0]&&C4MfacultyAt10[0].length>0){
            numAt10=[]
            
          }else{
            numAt10=prof3.filter((item)=>{
              return MfacultyAt10.indexOf(item)===-1
            })
            
          }
        
        }else if(PMfacultyAt10[0]===milan[0]){
          numAt10=[]
        }


       if(PMfacultyAt11[0]===prof[0]||PMfacultyAt11[0]===prof[1]||PMfacultyAt11[0]===prof[3]){
      numAt11=PMfacultyAt11
      ELmilan2=[]
      ELmilan1=[]
      ELcourse2=[]
      ELcourse3=[]
      }else if(PMfacultyAt11[0]===prof2[0]||PMfacultyAt11[0]===prof2[1]||PMfacultyAt11[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4MfacultyAt11[0]&&C4MfacultyAt11[0].length>0){
          numAt11=[]
          
        }else{
          numAt11=prof3.filter((item)=>{
            return MfacultyAt11.indexOf(item)===-1
          })
          
        }
      
      }else if(PMfacultyAt11[0]===milan[0]){
        numAt11=[]
      }

      if(PMfacultyAt12[0]===prof[0]||PMfacultyAt12[0]===prof[1]||PMfacultyAt12[0]===prof[3]){
        numAt12=PMfacultyAt12
        TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else if(PMfacultyAt12[0]===prof2[0]||PMfacultyAt12[0]===prof2[1]||PMfacultyAt12[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4MfacultyAt12[0]&&C4MfacultyAt12[0].length>0){
            numAt12=[]
            
          }else{
            numAt12=prof3.filter((item)=>{
              return MfacultyAt12.indexOf(item)===-1
            })
            
          }
        
        }else if(PMfacultyAt12[0]===milan[0]){
          numAt12=[]
        }

        if(PMfacultyAt03[0]===prof[0]||PMfacultyAt03[0]===prof[1]||PMfacultyAt03[0]===prof[3]){
          numAt03=PMfacultyAt03
          THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(PMfacultyAt03[0]===prof2[0]||PMfacultyAt03[0]===prof2[1]||PMfacultyAt03[0]===''){
            NImilan2=[]
              NImilan1=[]
              NIcourse2=[]
              NIcourse3=[]
            if(C4MfacultyAt03[0]&&C4MfacultyAt03[0].length>0){
              numAt03=[]
              
            }else{
              numAt03=prof3.filter((item)=>{
                return MfacultyAt03.indexOf(item)===-1
              })
              
            }
          
          }else if(PMfacultyAt03[0]===milan[0]){
            numAt03=[]
          }

          if(PMfacultyAt04[0]===prof[0]||PMfacultyAt04[0]===prof[1]||PMfacultyAt04[0]===prof[3]){
            numAt04=PMfacultyAt04
            FOmilan2=[]
            FOmilan1=[]
            FOcourse2=[]
            FOcourse3=[]
            }else if(PMfacultyAt04[0]===prof2[0]||PMfacultyAt04[0]===prof2[1]||PMfacultyAt04[0]===''){
              NImilan2=[]
                NImilan1=[]
                NIcourse2=[]
                NIcourse3=[]
              if(C4MfacultyAt04[0]&&C4MfacultyAt04[0].length>0){
                numAt04=[]
                
              }else{
                numAt04=prof3.filter((item)=>{
                  return MfacultyAt04.indexOf(item)===-1
                })
                
              }
            
            }else if(PMfacultyAt04[0]===milan[0]){
              numAt04=[]
            }

            if(PMfacultyAt05[0]===prof[0]||PMfacultyAt05[0]===prof[1]||PMfacultyAt05[0]===prof[3]){
              numAt05=PMfacultyAt05
              FImilan2=[]
              FImilan1=[]
              FIcourse2=[]
              FIcourse3=[]
              }else if(PMfacultyAt05[0]===prof2[0]||PMfacultyAt05[0]===prof2[1]||PMfacultyAt05[0]===''){
                NImilan2=[]
                  NImilan1=[]
                  NIcourse2=[]
                  NIcourse3=[]
                if(C4MfacultyAt05[0]&&C4MfacultyAt05[0].length>0){
                  numAt05=[]
                  
                }else{
                  numAt05=prof3.filter((item)=>{
                    return MfacultyAt05.indexOf(item)===-1
                  })
                  
                }
              
              }else if(PMfacultyAt05[0]===milan[0]){
                numAt05=[]
              }

              if(COMfacultyAt9[0]===course2[0]||C3MfacultyAt9[0]&&C3MfacultyAt9[0].length>0){
                NImilan2=[]
                NIcourse3=[] 
               }
               
               if(COMfacultyAt10[0]===course2[0]||C3MfacultyAt10[0]&&C3MfacultyAt10[0].length>0){
                 TEmilan2=[] 
                 TEcourse3=[]
                }
                if(COMfacultyAt11[0]===course2[0]||C3MfacultyAt11[0]&&C3MfacultyAt11[0].length>0){
                  ELmilan2=[] 
                  ELcourse3=[]
                 }
                if(COMfacultyAt12[0]===course2[0]||C3MfacultyAt12[0]&&C3MfacultyAt12[0].length>0){
                 TWmilan2=[]
                 TWcourse3=[]
                }
                if(COMfacultyAt03[0]===course2[0]||C3MfacultyAt03[0]&&C3MfacultyAt03[0].length>0){
                 THmilan2=[]
                 THcourse3=[]
                }
                if(COMfacultyAt04[0]===course2[0]||C3MfacultyAt04[0]&&C3MfacultyAt04[0].length>0){
                  FOmilan2=[]
                  FOcourse3=[]
                 }
                if(COMfacultyAt05[0]===course2[0]||C3MfacultyAt05[0]&&C3MfacultyAt05[0].length>0){
                 FImilan2=[]
                 FIcourse3=[]
                }
          
                if(COMfacultyAt9[0]&&COMfacultyAt9[0]===course3[0]){
                  NIcourse2=[]
                  NImilan1=[]
                 }
                 if(COMfacultyAt10[0]&&COMfacultyAt10[0]===course3[0]){
                  TEcourse2=[]
                  TEmilan1=[]
                 }
                 if(COMfacultyAt11[0]&&COMfacultyAt11[0]===course3[0]){
                  ELcourse2=[]
                  ELmilan1=[]
                 }
                 if(COMfacultyAt12[0]&&COMfacultyAt12[0]===course3[0]){
                  TWcourse2=[]
                  TWmilan1=[]
                 }
                 if(COMfacultyAt03[0]&&COMfacultyAt03[0]===course3[0]){
                  THcourse2=[]
                  THmilan1=[]
                 }
                 if(COMfacultyAt04[0]&&COMfacultyAt04[0]===course3[0]){
                  FOcourse2=[]
                  FOmilan1=[]
                 }
                 if(COMfacultyAt05[0]&&COMfacultyAt05[0]===course3[0]){
                  FIcourse2=[]
                  FImilan1=[]
                 }


                    
      if(!PMfacultyAt9[0]){
        if(C3MfacultyAt9&&C3MfacultyAt9.length>0){
          if(C3MfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3MfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3MfacultyAt9[0]===''){
            if(C4MfacultyAt9[0]&&C4MfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return MfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4MfacultyAt9[0]&&C4MfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return MfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3MfacultyAt9[0]&&P3MfacultyAt9[0].length>0){
            if(C4MfacultyAt9[0]&&C4MfacultyAt9[0].length>0){
              numAt9= prof4.filter((item) => { 
                return MfacultyAt9.indexOf(item) === -1 
              })
            }
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
          if(C4MfacultyAt9[0]&&C4MfacultyAt9[0].length>0){
            numAt9= prof5.filter((item) => { 
              return MfacultyAt9.indexOf(item) === -1 
            })
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
          }
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!PMfacultyAt10[0]){
        if(C3MfacultyAt10&&C3MfacultyAt10.length>0){
          if(C3MfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3MfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3MfacultyAt10[0]===''){
            if(C4MfacultyAt10[0]&&C4MfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return MfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4MfacultyAt10[0]&&C4MfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return MfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3MfacultyAt10[0]&&P3MfacultyAt10[0].length>0){
            if(C4MfacultyAt10[0]&&C4MfacultyAt10[0].length>0){
              numAt10= prof4.filter((item) => { 
                return MfacultyAt10.indexOf(item) === -1 
              })
            }
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
          if(C4MfacultyAt10[0]&&C4MfacultyAt10[0].length>0){
            numAt10= prof5.filter((item) => { 
              return MfacultyAt10.indexOf(item) === -1 
            })
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4MfacultyAt11[0]&&C4MfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return MfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4MfacultyAt11[0]&&C4MfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return MfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3MfacultyAt11[0]&&P3MfacultyAt11[0].length>0){
            if(C4MfacultyAt11[0]&&C4MfacultyAt11[0].length>0){
              numAt11= prof4.filter((item) => { 
                return MfacultyAt11.indexOf(item) === -1 
              })
            }
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
          if(C4MfacultyAt11[0]&&C4MfacultyAt11[0].length>0){
            numAt11= prof5.filter((item) => { 
              return MfacultyAt11.indexOf(item) === -1 
            })
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4MfacultyAt12[0]&&C4MfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return MfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4MfacultyAt12[0]&&C4MfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return MfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3MfacultyAt12[0]&&P3MfacultyAt12[0].length>0){
            if(C4MfacultyAt12[0]&&C4MfacultyAt12[0].length>0){
              numAt12= prof4.filter((item) => { 
                return MfacultyAt12.indexOf(item) === -1 
              })
            }
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
          if(C4MfacultyAt12[0]&&C4MfacultyAt12[0].length>0){
            numAt12= prof5.filter((item) => { 
              return MfacultyAt12.indexOf(item) === -1 
            })
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4MfacultyAt03[0]&&C4MfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return MfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4MfacultyAt03[0]&&C4MfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return MfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3MfacultyAt03[0]&&P3MfacultyAt03[0].length>0){
            if(C4MfacultyAt03[0]&&C4MfacultyAt03[0].length>0){
              numAt03= prof4.filter((item) => { 
                return MfacultyAt03.indexOf(item) === -1 
              })
            }
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
          if(C4MfacultyAt03[0]&&C4MfacultyAt03[0].length>0){
            numAt03= prof5.filter((item) => { 
              return MfacultyAt03.indexOf(item) === -1 
            })
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4MfacultyAt04[0]&&C4MfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return MfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4MfacultyAt04[0]&&C4MfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return MfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3MfacultyAt04[0]&&P3MfacultyAt04[0].length>0){
            if(C4MfacultyAt04[0]&&C4MfacultyAt04[0].length>0){
              numAt04= prof4.filter((item) => { 
                return MfacultyAt04.indexOf(item) === -1 
              })
            }
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
          if(C4MfacultyAt04[0]&&C4MfacultyAt04[0].length>0){
            numAt04= prof5.filter((item) => { 
              return MfacultyAt04.indexOf(item) === -1 
            })
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4MfacultyAt05[0]&&C4MfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return MfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4MfacultyAt05[0]&&C4MfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return MfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3MfacultyAt05[0]&&P3MfacultyAt05[0].length>0){
            if(C4MfacultyAt05[0]&&C4MfacultyAt05[0].length>0){
              numAt05= prof4.filter((item) => { 
                return MfacultyAt05.indexOf(item) === -1 
              })
            }
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
          if(C4MfacultyAt05[0]&&C4MfacultyAt05[0].length>0){
            numAt05= prof5.filter((item) => { 
              return MfacultyAt05.indexOf(item) === -1 
            })
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
          }
        FImilan2=[]
          FIcourse3=[] 
        }
      }
                  
     if(CMfacultyAt9[0]&&CMfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt10[0]&&CMfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt11[0]&&CMfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt12[0]&&CMfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt03[0]&&CMfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt04[0]&&CMfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt05[0]&&CMfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[CMfacultyAt9[0]]    
    numAt10=[CMfacultyAt10[0]]
    numAt11=[CMfacultyAt11[0]]
    numAt12=[CMfacultyAt12[0]]
    numAt03=[CMfacultyAt03[0]]
    numAt04=[CMfacultyAt04[0]]
    numAt05=[CMfacultyAt05[0]]
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

    if(C4TfacultyAt9[0]&&C4TfacultyAt9[0].length>0){
      numAt9= prof4.filter((item) => { 
        return TfacultyAt9.indexOf(item) === -1 
      })
    }

    if(C4TfacultyAt10[0]&&C4TfacultyAt10[0].length>0){
      numAt10= prof4.filter((item) => { 
        return TfacultyAt10.indexOf(item) === -1 
      })
    }

    if(C4TfacultyAt11[0]&&C4TfacultyAt11[0].length>0){
      numAt11= prof4.filter((item) => { 
        return TfacultyAt11.indexOf(item) === -1 
      })
    }

    if(C4TfacultyAt12[0]&&C4TfacultyAt12[0].length>0){
      numAt12= prof4.filter((item) => { 
        return TfacultyAt12.indexOf(item) === -1 
      })
    }

    if(C4TfacultyAt03[0]&&C4TfacultyAt03[0].length>0){
      numAt03= prof4.filter((item) => { 
        return TfacultyAt03.indexOf(item) === -1 
      })
    }

    if(C4TfacultyAt04[0]&&C4TfacultyAt04[0].length>0){
      numAt04= prof4.filter((item) => { 
        return TfacultyAt04.indexOf(item) === -1 
      })
    }

    if(C4TfacultyAt05[0]&&C4TfacultyAt05[0].length>0){
      numAt05= prof4.filter((item) => { 
        return TfacultyAt05.indexOf(item) === -1 
      })
    }

    if(PTfacultyAt9[0]===prof[0]||PTfacultyAt9[0]===prof[1]||PTfacultyAt9[0]===prof[3]){
      numAt9=PTfacultyAt9
      NImilan2=[]
      NImilan1=[]
      NIcourse2=[]
      NIcourse3=[]
      }else if(PTfacultyAt9[0]===prof2[0]||PTfacultyAt9[0]===prof2[1]||PTfacultyAt9[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4TfacultyAt9[0]&&C4TfacultyAt9[0].length>0){
          numAt9=[]
          
        }else{
          numAt9=prof3.filter((item)=>{
            return TfacultyAt9.indexOf(item)===-1
          })
          
        }
      
      }else if(PTfacultyAt9[0]===milan[0]){
        numAt9=[]
      }

      if(PTfacultyAt10[0]===prof[0]||PTfacultyAt10[0]===prof[1]||PTfacultyAt10[0]===prof[3]){
        numAt10=PTfacultyAt10
        TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else if(PTfacultyAt10[0]===prof2[0]||PTfacultyAt10[0]===prof2[1]||PTfacultyAt10[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4TfacultyAt10[0]&&C4TfacultyAt10[0].length>0){
            numAt10=[]
            
          }else{
            numAt10=prof3.filter((item)=>{
              return TfacultyAt10.indexOf(item)===-1
            })
            
          }
        
        }else if(PTfacultyAt10[0]===milan[0]){
          numAt10=[]
        }


       if(PTfacultyAt11[0]===prof[0]||PTfacultyAt11[0]===prof[1]||PTfacultyAt11[0]===prof[3]){
      numAt11=PTfacultyAt11
      ELmilan2=[]
      ELmilan1=[]
      ELcourse2=[]
      ELcourse3=[]
      }else if(PTfacultyAt11[0]===prof2[0]||PTfacultyAt11[0]===prof2[1]||PTfacultyAt11[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4TfacultyAt11[0]&&C4TfacultyAt11[0].length>0){
          numAt11=[]
          
        }else{
          numAt11=prof3.filter((item)=>{
            return TfacultyAt11.indexOf(item)===-1
          })
          
        }
      
      }else if(PTfacultyAt11[0]===milan[0]){
        numAt11=[]
      }

      if(PTfacultyAt12[0]===prof[0]||PTfacultyAt12[0]===prof[1]||PTfacultyAt12[0]===prof[3]){
        numAt12=PTfacultyAt12
        TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else if(PTfacultyAt12[0]===prof2[0]||PTfacultyAt12[0]===prof2[1]||PTfacultyAt12[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4TfacultyAt12[0]&&C4TfacultyAt12[0].length>0){
            numAt12=[]
            
          }else{
            numAt12=prof3.filter((item)=>{
              return TfacultyAt12.indexOf(item)===-1
            })
            
          }
        
        }else if(PTfacultyAt12[0]===milan[0]){
          numAt12=[]
        }

        if(PTfacultyAt03[0]===prof[0]||PTfacultyAt03[0]===prof[1]||PTfacultyAt03[0]===prof[3]){
          numAt03=PTfacultyAt03
          THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(PTfacultyAt03[0]===prof2[0]||PTfacultyAt03[0]===prof2[1]||PTfacultyAt03[0]===''){
            NImilan2=[]
              NImilan1=[]
              NIcourse2=[]
              NIcourse3=[]
            if(C4TfacultyAt03[0]&&C4TfacultyAt03[0].length>0){
              numAt03=[]
              
            }else{
              numAt03=prof3.filter((item)=>{
                return TfacultyAt03.indexOf(item)===-1
              })
              
            }
          
          }else if(PTfacultyAt03[0]===milan[0]){
            numAt03=[]
          }

          if(PTfacultyAt04[0]===prof[0]||PTfacultyAt04[0]===prof[1]||PTfacultyAt04[0]===prof[3]){
            numAt04=PTfacultyAt04
            FOmilan2=[]
            FOmilan1=[]
            FOcourse2=[]
            FOcourse3=[]
            }else if(PTfacultyAt04[0]===prof2[0]||PTfacultyAt04[0]===prof2[1]||PTfacultyAt04[0]===''){
              NImilan2=[]
                NImilan1=[]
                NIcourse2=[]
                NIcourse3=[]
              if(C4TfacultyAt04[0]&&C4TfacultyAt04[0].length>0){
                numAt04=[]
                
              }else{
                numAt04=prof3.filter((item)=>{
                  return TfacultyAt04.indexOf(item)===-1
                })
                
              }
            
            }else if(PTfacultyAt04[0]===milan[0]){
              numAt04=[]
            }

            if(PTfacultyAt05[0]===prof[0]||PTfacultyAt05[0]===prof[1]||PTfacultyAt05[0]===prof[3]){
              numAt05=PTfacultyAt05
              FImilan2=[]
              FImilan1=[]
              FIcourse2=[]
              FIcourse3=[]
              }else if(PTfacultyAt05[0]===prof2[0]||PTfacultyAt05[0]===prof2[1]||PTfacultyAt05[0]===''){
                NImilan2=[]
                  NImilan1=[]
                  NIcourse2=[]
                  NIcourse3=[]
                if(C4TfacultyAt05[0]&&C4TfacultyAt05[0].length>0){
                  numAt05=[]
                  
                }else{
                  numAt05=prof3.filter((item)=>{
                    return TfacultyAt05.indexOf(item)===-1
                  })
                  
                }
              
              }else if(PTfacultyAt05[0]===milan[0]){
                numAt05=[]
              }

              if(COTfacultyAt9[0]===course2[0]||C3TfacultyAt9[0]&&C3TfacultyAt9[0].length>0){
                NImilan2=[]
                NIcourse3=[] 
               }
               
               if(COTfacultyAt10[0]===course2[0]||C3TfacultyAt10[0]&&C3TfacultyAt10[0].length>0){
                 TEmilan2=[] 
                 TEcourse3=[]
                }
                if(COTfacultyAt11[0]===course2[0]||C3TfacultyAt11[0]&&C3TfacultyAt11[0].length>0){
                  ELmilan2=[] 
                  ELcourse3=[]
                 }
                if(COTfacultyAt12[0]===course2[0]||C3TfacultyAt12[0]&&C3TfacultyAt12[0].length>0){
                 TWmilan2=[]
                 TWcourse3=[]
                }
                if(COTfacultyAt03[0]===course2[0]||C3TfacultyAt03[0]&&C3TfacultyAt03[0].length>0){
                 THmilan2=[]
                 THcourse3=[]
                }
                if(COTfacultyAt04[0]===course2[0]||C3TfacultyAt04[0]&&C3TfacultyAt04[0].length>0){
                  FOmilan2=[]
                  FOcourse3=[]
                 }
                if(COTfacultyAt05[0]===course2[0]||C3TfacultyAt05[0]&&C3TfacultyAt05[0].length>0){
                 FImilan2=[]
                 FIcourse3=[]
                }
          
                if(COTfacultyAt9[0]&&COTfacultyAt9[0]===course3[0]){
                  NIcourse2=[]
                  NImilan1=[]
                 }
                 if(COTfacultyAt10[0]&&COTfacultyAt10[0]===course3[0]){
                  TEcourse2=[]
                  TEmilan1=[]
                 }
                 if(COTfacultyAt11[0]&&COTfacultyAt11[0]===course3[0]){
                  ELcourse2=[]
                  ELmilan1=[]
                 }
                 if(COTfacultyAt12[0]&&COTfacultyAt12[0]===course3[0]){
                  TWcourse2=[]
                  TWmilan1=[]
                 }
                 if(COTfacultyAt03[0]&&COTfacultyAt03[0]===course3[0]){
                  THcourse2=[]
                  THmilan1=[]
                 }
                 if(COTfacultyAt04[0]&&COTfacultyAt04[0]===course3[0]){
                  FOcourse2=[]
                  FOmilan1=[]
                 }
                 if(COTfacultyAt05[0]&&COTfacultyAt05[0]===course3[0]){
                  FIcourse2=[]
                  FImilan1=[]
                 }


                    
      if(!PTfacultyAt9[0]){
        if(C3TfacultyAt9&&C3TfacultyAt9.length>0){
          if(C3TfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3TfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3TfacultyAt9[0]===''){
            if(C4TfacultyAt9[0]&&C4TfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return TfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4TfacultyAt9[0]&&C4TfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return TfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3TfacultyAt9[0]&&P3TfacultyAt9[0].length>0){
            if(C4TfacultyAt9[0]&&C4TfacultyAt9[0].length>0){
              numAt9= prof4.filter((item) => { 
                return TfacultyAt9.indexOf(item) === -1 
              })
            }
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
          if(C4TfacultyAt9[0]&&C4TfacultyAt9[0].length>0){
            numAt9= prof5.filter((item) => { 
              return TfacultyAt9.indexOf(item) === -1 
            })
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
          }
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!PTfacultyAt10[0]){
        if(C3TfacultyAt10&&C3TfacultyAt10.length>0){
          if(C3TfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3TfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3TfacultyAt10[0]===''){
            if(C4TfacultyAt10[0]&&C4TfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return TfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4TfacultyAt10[0]&&C4TfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return TfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3TfacultyAt10[0]&&P3TfacultyAt10[0].length>0){
            if(C4TfacultyAt10[0]&&C4TfacultyAt10[0].length>0){
              numAt10= prof4.filter((item) => { 
                return TfacultyAt10.indexOf(item) === -1 
              })
            }
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
          if(C4TfacultyAt10[0]&&C4TfacultyAt10[0].length>0){
            numAt10= prof5.filter((item) => { 
              return TfacultyAt10.indexOf(item) === -1 
            })
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4TfacultyAt11[0]&&C4TfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return TfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4TfacultyAt11[0]&&C4TfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return TfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3TfacultyAt11[0]&&P3TfacultyAt11[0].length>0){
            if(C4TfacultyAt11[0]&&C4TfacultyAt11[0].length>0){
              numAt11= prof4.filter((item) => { 
                return TfacultyAt11.indexOf(item) === -1 
              })
            }
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
          if(C4TfacultyAt11[0]&&C4TfacultyAt11[0].length>0){
            numAt11= prof5.filter((item) => { 
              return TfacultyAt11.indexOf(item) === -1 
            })
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4TfacultyAt12[0]&&C4TfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return TfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4TfacultyAt12[0]&&C4TfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return TfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3TfacultyAt12[0]&&P3TfacultyAt12[0].length>0){
            if(C4TfacultyAt12[0]&&C4TfacultyAt12[0].length>0){
              numAt12= prof4.filter((item) => { 
                return TfacultyAt12.indexOf(item) === -1 
              })
            }
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
          if(C4TfacultyAt12[0]&&C4TfacultyAt12[0].length>0){
            numAt12= prof5.filter((item) => { 
              return TfacultyAt12.indexOf(item) === -1 
            })
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4TfacultyAt03[0]&&C4TfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return TfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4TfacultyAt03[0]&&C4TfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return TfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3TfacultyAt03[0]&&P3TfacultyAt03[0].length>0){
            if(C4TfacultyAt03[0]&&C4TfacultyAt03[0].length>0){
              numAt03= prof4.filter((item) => { 
                return TfacultyAt03.indexOf(item) === -1 
              })
            }
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
          if(C4TfacultyAt03[0]&&C4TfacultyAt03[0].length>0){
            numAt03= prof5.filter((item) => { 
              return TfacultyAt03.indexOf(item) === -1 
            })
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4TfacultyAt04[0]&&C4TfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return TfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4TfacultyAt04[0]&&C4TfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return TfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3TfacultyAt04[0]&&P3TfacultyAt04[0].length>0){
            if(C4TfacultyAt04[0]&&C4TfacultyAt04[0].length>0){
              numAt04= prof4.filter((item) => { 
                return TfacultyAt04.indexOf(item) === -1 
              })
            }
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
          if(C4TfacultyAt04[0]&&C4TfacultyAt04[0].length>0){
            numAt04= prof5.filter((item) => { 
              return TfacultyAt04.indexOf(item) === -1 
            })
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4TfacultyAt05[0]&&C4TfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return TfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4TfacultyAt05[0]&&C4TfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return TfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3TfacultyAt05[0]&&P3TfacultyAt05[0].length>0){
            if(C4TfacultyAt05[0]&&C4TfacultyAt05[0].length>0){
              numAt05= prof4.filter((item) => { 
                return TfacultyAt05.indexOf(item) === -1 
              })
            }
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
          if(C4TfacultyAt05[0]&&C4TfacultyAt05[0].length>0){
            numAt05= prof5.filter((item) => { 
              return TfacultyAt05.indexOf(item) === -1 
            })
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
          }
        FImilan2=[]
          FIcourse3=[] 
        }
      }
                  
     if(CTfacultyAt9[0]&&CTfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CTfacultyAt10[0]&&CTfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CTfacultyAt11[0]&&CTfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CTfacultyAt12[0]&&CTfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CTfacultyAt03[0]&&CTfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CTfacultyAt04[0]&&CTfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(CTfacultyAt05[0]&&CTfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[CTfacultyAt9[0]]    
    numAt10=[CTfacultyAt10[0]]
    numAt11=[CTfacultyAt11[0]]
    numAt12=[CTfacultyAt12[0]]
    numAt03=[CTfacultyAt03[0]]
    numAt04=[CTfacultyAt04[0]]
    numAt05=[CTfacultyAt05[0]]
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

    if(C4WfacultyAt9[0]&&C4WfacultyAt9[0].length>0){
      numAt9= prof4.filter((item) => { 
        return WfacultyAt9.indexOf(item) === -1 
      })
    }

    if(C4WfacultyAt10[0]&&C4WfacultyAt10[0].length>0){
      numAt10= prof4.filter((item) => { 
        return WfacultyAt10.indexOf(item) === -1 
      })
    }

    if(C4WfacultyAt11[0]&&C4WfacultyAt11[0].length>0){
      numAt11= prof4.filter((item) => { 
        return WfacultyAt11.indexOf(item) === -1 
      })
    }

    if(C4WfacultyAt12[0]&&C4WfacultyAt12[0].length>0){
      numAt12= prof4.filter((item) => { 
        return WfacultyAt12.indexOf(item) === -1 
      })
    }

    if(C4WfacultyAt03[0]&&C4WfacultyAt03[0].length>0){
      numAt03= prof4.filter((item) => { 
        return WfacultyAt03.indexOf(item) === -1 
      })
    }

    if(C4WfacultyAt04[0]&&C4WfacultyAt04[0].length>0){
      numAt04= prof4.filter((item) => { 
        return WfacultyAt04.indexOf(item) === -1 
      })
    }

    if(C4WfacultyAt05[0]&&C4WfacultyAt05[0].length>0){
      numAt05= prof4.filter((item) => { 
        return WfacultyAt05.indexOf(item) === -1 
      })
    }

    if(PWfacultyAt9[0]===prof[0]||PWfacultyAt9[0]===prof[1]||PWfacultyAt9[0]===prof[3]){
      numAt9=PWfacultyAt9
      NImilan2=[]
      NImilan1=[]
      NIcourse2=[]
      NIcourse3=[]
      }else if(PWfacultyAt9[0]===prof2[0]||PWfacultyAt9[0]===prof2[1]||PWfacultyAt9[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4WfacultyAt9[0]&&C4WfacultyAt9[0].length>0){
          numAt9=[]
          
        }else{
          numAt9=prof3.filter((item)=>{
            return WfacultyAt9.indexOf(item)===-1
          })
          
        }
      
      }else if(PWfacultyAt9[0]===milan[0]){
        numAt9=[]
      }

      if(PWfacultyAt10[0]===prof[0]||PWfacultyAt10[0]===prof[1]||PWfacultyAt10[0]===prof[3]){
        numAt10=PWfacultyAt10
        TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else if(PWfacultyAt10[0]===prof2[0]||PWfacultyAt10[0]===prof2[1]||PWfacultyAt10[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4WfacultyAt10[0]&&C4WfacultyAt10[0].length>0){
            numAt10=[]
            
          }else{
            numAt10=prof3.filter((item)=>{
              return WfacultyAt10.indexOf(item)===-1
            })
            
          }
        
        }else if(PWfacultyAt10[0]===milan[0]){
          numAt10=[]
        }


       if(PWfacultyAt11[0]===prof[0]||PWfacultyAt11[0]===prof[1]||PWfacultyAt11[0]===prof[3]){
      numAt11=PWfacultyAt11
      ELmilan2=[]
      ELmilan1=[]
      ELcourse2=[]
      ELcourse3=[]
      }else if(PWfacultyAt11[0]===prof2[0]||PWfacultyAt11[0]===prof2[1]||PWfacultyAt11[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4WfacultyAt11[0]&&C4WfacultyAt11[0].length>0){
          numAt11=[]
          
        }else{
          numAt11=prof3.filter((item)=>{
            return WfacultyAt11.indexOf(item)===-1
          })
          
        }
      
      }else if(PWfacultyAt11[0]===milan[0]){
        numAt11=[]
      }

      if(PWfacultyAt12[0]===prof[0]||PWfacultyAt12[0]===prof[1]||PWfacultyAt12[0]===prof[3]){
        numAt12=PWfacultyAt12
        TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else if(PWfacultyAt12[0]===prof2[0]||PWfacultyAt12[0]===prof2[1]||PWfacultyAt12[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4WfacultyAt12[0]&&C4WfacultyAt12[0].length>0){
            numAt12=[]
            
          }else{
            numAt12=prof3.filter((item)=>{
              return WfacultyAt12.indexOf(item)===-1
            })
            
          }
        
        }else if(PWfacultyAt12[0]===milan[0]){
          numAt12=[]
        }

        if(PWfacultyAt03[0]===prof[0]||PWfacultyAt03[0]===prof[1]||PWfacultyAt03[0]===prof[3]){
          numAt03=PWfacultyAt03
          THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(PWfacultyAt03[0]===prof2[0]||PWfacultyAt03[0]===prof2[1]||PWfacultyAt03[0]===''){
            NImilan2=[]
              NImilan1=[]
              NIcourse2=[]
              NIcourse3=[]
            if(C4WfacultyAt03[0]&&C4WfacultyAt03[0].length>0){
              numAt03=[]
              
            }else{
              numAt03=prof3.filter((item)=>{
                return WfacultyAt03.indexOf(item)===-1
              })
              
            }
          
          }else if(PWfacultyAt03[0]===milan[0]){
            numAt03=[]
          }

          if(PWfacultyAt04[0]===prof[0]||PWfacultyAt04[0]===prof[1]||PWfacultyAt04[0]===prof[3]){
            numAt04=PWfacultyAt04
            FOmilan2=[]
            FOmilan1=[]
            FOcourse2=[]
            FOcourse3=[]
            }else if(PWfacultyAt04[0]===prof2[0]||PWfacultyAt04[0]===prof2[1]||PWfacultyAt04[0]===''){
              NImilan2=[]
                NImilan1=[]
                NIcourse2=[]
                NIcourse3=[]
              if(C4WfacultyAt04[0]&&C4WfacultyAt04[0].length>0){
                numAt04=[]
                
              }else{
                numAt04=prof3.filter((item)=>{
                  return WfacultyAt04.indexOf(item)===-1
                })
                
              }
            
            }else if(PWfacultyAt04[0]===milan[0]){
              numAt04=[]
            }

            if(PWfacultyAt05[0]===prof[0]||PWfacultyAt05[0]===prof[1]||PWfacultyAt05[0]===prof[3]){
              numAt05=PWfacultyAt05
              FImilan2=[]
              FImilan1=[]
              FIcourse2=[]
              FIcourse3=[]
              }else if(PWfacultyAt05[0]===prof2[0]||PWfacultyAt05[0]===prof2[1]||PWfacultyAt05[0]===''){
                NImilan2=[]
                  NImilan1=[]
                  NIcourse2=[]
                  NIcourse3=[]
                if(C4WfacultyAt05[0]&&C4WfacultyAt05[0].length>0){
                  numAt05=[]
                  
                }else{
                  numAt05=prof3.filter((item)=>{
                    return WfacultyAt05.indexOf(item)===-1
                  })
                  
                }
              
              }else if(PWfacultyAt05[0]===milan[0]){
                numAt05=[]
              }

              if(COWfacultyAt9[0]===course2[0]||C3WfacultyAt9[0]&&C3WfacultyAt9[0].length>0){
                NImilan2=[]
                NIcourse3=[] 
               }
               
               if(COWfacultyAt10[0]===course2[0]||C3WfacultyAt10[0]&&C3WfacultyAt10[0].length>0){
                 TEmilan2=[] 
                 TEcourse3=[]
                }
                if(COWfacultyAt11[0]===course2[0]||C3WfacultyAt11[0]&&C3WfacultyAt11[0].length>0){
                  ELmilan2=[] 
                  ELcourse3=[]
                 }
                if(COWfacultyAt12[0]===course2[0]||C3WfacultyAt12[0]&&C3WfacultyAt12[0].length>0){
                 TWmilan2=[]
                 TWcourse3=[]
                }
                if(COWfacultyAt03[0]===course2[0]||C3WfacultyAt03[0]&&C3WfacultyAt03[0].length>0){
                 THmilan2=[]
                 THcourse3=[]
                }
                if(COWfacultyAt04[0]===course2[0]||C3WfacultyAt04[0]&&C3WfacultyAt04[0].length>0){
                  FOmilan2=[]
                  FOcourse3=[]
                 }
                if(COWfacultyAt05[0]===course2[0]||C3WfacultyAt05[0]&&C3WfacultyAt05[0].length>0){
                 FImilan2=[]
                 FIcourse3=[]
                }
          
                if(COWfacultyAt9[0]&&COWfacultyAt9[0]===course3[0]){
                  NIcourse2=[]
                  NImilan1=[]
                 }
                 if(COWfacultyAt10[0]&&COWfacultyAt10[0]===course3[0]){
                  TEcourse2=[]
                  TEmilan1=[]
                 }
                 if(COWfacultyAt11[0]&&COWfacultyAt11[0]===course3[0]){
                  ELcourse2=[]
                  ELmilan1=[]
                 }
                 if(COWfacultyAt12[0]&&COWfacultyAt12[0]===course3[0]){
                  TWcourse2=[]
                  TWmilan1=[]
                 }
                 if(COWfacultyAt03[0]&&COWfacultyAt03[0]===course3[0]){
                  THcourse2=[]
                  THmilan1=[]
                 }
                 if(COWfacultyAt04[0]&&COWfacultyAt04[0]===course3[0]){
                  FOcourse2=[]
                  FOmilan1=[]
                 }
                 if(COWfacultyAt05[0]&&COWfacultyAt05[0]===course3[0]){
                  FIcourse2=[]
                  FImilan1=[]
                 }


                    
      if(!PWfacultyAt9[0]){
        if(C3WfacultyAt9&&C3WfacultyAt9.length>0){
          if(C3WfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3WfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3WfacultyAt9[0]===''){
            if(C4WfacultyAt9[0]&&C4WfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return WfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4WfacultyAt9[0]&&C4WfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return WfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3WfacultyAt9[0]&&P3WfacultyAt9[0].length>0){
            if(C4WfacultyAt9[0]&&C4WfacultyAt9[0].length>0){
              numAt9= prof4.filter((item) => { 
                return WfacultyAt9.indexOf(item) === -1 
              })
            }
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
          if(C4WfacultyAt9[0]&&C4WfacultyAt9[0].length>0){
            numAt9= prof5.filter((item) => { 
              return WfacultyAt9.indexOf(item) === -1 
            })
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
          }
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!PWfacultyAt10[0]){
        if(C3WfacultyAt10&&C3WfacultyAt10.length>0){
          if(C3WfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3WfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3WfacultyAt10[0]===''){
            if(C4WfacultyAt10[0]&&C4WfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return WfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4WfacultyAt10[0]&&C4WfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return WfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3WfacultyAt10[0]&&P3WfacultyAt10[0].length>0){
            if(C4WfacultyAt10[0]&&C4WfacultyAt10[0].length>0){
              numAt10= prof4.filter((item) => { 
                return WfacultyAt10.indexOf(item) === -1 
              })
            }
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
          if(C4WfacultyAt10[0]&&C4WfacultyAt10[0].length>0){
            numAt10= prof5.filter((item) => { 
              return WfacultyAt10.indexOf(item) === -1 
            })
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4WfacultyAt11[0]&&C4WfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return WfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4WfacultyAt11[0]&&C4WfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return WfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3WfacultyAt11[0]&&P3WfacultyAt11[0].length>0){
            if(C4WfacultyAt11[0]&&C4WfacultyAt11[0].length>0){
              numAt11= prof4.filter((item) => { 
                return WfacultyAt11.indexOf(item) === -1 
              })
            }
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
          if(C4WfacultyAt11[0]&&C4WfacultyAt11[0].length>0){
            numAt11= prof5.filter((item) => { 
              return WfacultyAt11.indexOf(item) === -1 
            })
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4WfacultyAt12[0]&&C4WfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return WfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4WfacultyAt12[0]&&C4WfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return WfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3WfacultyAt12[0]&&P3WfacultyAt12[0].length>0){
            if(C4WfacultyAt12[0]&&C4WfacultyAt12[0].length>0){
              numAt12= prof4.filter((item) => { 
                return WfacultyAt12.indexOf(item) === -1 
              })
            }
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
          if(C4WfacultyAt12[0]&&C4WfacultyAt12[0].length>0){
            numAt12= prof5.filter((item) => { 
              return WfacultyAt12.indexOf(item) === -1 
            })
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4WfacultyAt03[0]&&C4WfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return WfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4WfacultyAt03[0]&&C4WfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return WfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3WfacultyAt03[0]&&P3WfacultyAt03[0].length>0){
            if(C4WfacultyAt03[0]&&C4WfacultyAt03[0].length>0){
              numAt03= prof4.filter((item) => { 
                return WfacultyAt03.indexOf(item) === -1 
              })
            }
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
          if(C4WfacultyAt03[0]&&C4WfacultyAt03[0].length>0){
            numAt03= prof5.filter((item) => { 
              return WfacultyAt03.indexOf(item) === -1 
            })
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4WfacultyAt04[0]&&C4WfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return WfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4WfacultyAt04[0]&&C4WfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return WfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3WfacultyAt04[0]&&P3WfacultyAt04[0].length>0){
            if(C4WfacultyAt04[0]&&C4WfacultyAt04[0].length>0){
              numAt04= prof4.filter((item) => { 
                return WfacultyAt04.indexOf(item) === -1 
              })
            }
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
          if(C4WfacultyAt04[0]&&C4WfacultyAt04[0].length>0){
            numAt04= prof5.filter((item) => { 
              return WfacultyAt04.indexOf(item) === -1 
            })
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4WfacultyAt05[0]&&C4WfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return WfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4WfacultyAt05[0]&&C4WfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return WfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3WfacultyAt05[0]&&P3WfacultyAt05[0].length>0){
            if(C4WfacultyAt05[0]&&C4WfacultyAt05[0].length>0){
              numAt05= prof4.filter((item) => { 
                return WfacultyAt05.indexOf(item) === -1 
              })
            }
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
          if(C4WfacultyAt05[0]&&C4WfacultyAt05[0].length>0){
            numAt05= prof5.filter((item) => { 
              return WfacultyAt05.indexOf(item) === -1 
            })
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
          }
        FImilan2=[]
          FIcourse3=[] 
        }
      }
                  
     if(CWfacultyAt9[0]&&CWfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt10[0]&&CWfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt11[0]&&CWfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt12[0]&&CWfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt03[0]&&CWfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt04[0]&&CWfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt05[0]&&CWfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[CWfacultyAt9[0]]    
    numAt10=[CWfacultyAt10[0]]
    numAt11=[CWfacultyAt11[0]]
    numAt12=[CWfacultyAt12[0]]
    numAt03=[CWfacultyAt03[0]]
    numAt04=[CWfacultyAt04[0]]
    numAt05=[CWfacultyAt05[0]]
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

    if(C4THfacultyAt9[0]&&C4THfacultyAt9[0].length>0){
      numAt9= prof4.filter((item) => { 
        return THfacultyAt9.indexOf(item) === -1 
      })
    }

    if(C4THfacultyAt10[0]&&C4THfacultyAt10[0].length>0){
      numAt10= prof4.filter((item) => { 
        return THfacultyAt10.indexOf(item) === -1 
      })
    }

    if(C4THfacultyAt11[0]&&C4THfacultyAt11[0].length>0){
      numAt11= prof4.filter((item) => { 
        return THfacultyAt11.indexOf(item) === -1 
      })
    }

    if(C4THfacultyAt12[0]&&C4THfacultyAt12[0].length>0){
      numAt12= prof4.filter((item) => { 
        return THfacultyAt12.indexOf(item) === -1 
      })
    }

    if(C4THfacultyAt03[0]&&C4THfacultyAt03[0].length>0){
      numAt03= prof4.filter((item) => { 
        return THfacultyAt03.indexOf(item) === -1 
      })
    }

    if(C4THfacultyAt04[0]&&C4THfacultyAt04[0].length>0){
      numAt04= prof4.filter((item) => { 
        return THfacultyAt04.indexOf(item) === -1 
      })
    }

    if(C4THfacultyAt05[0]&&C4THfacultyAt05[0].length>0){
      numAt05= prof4.filter((item) => { 
        return THfacultyAt05.indexOf(item) === -1 
      })
    }

    if(PTHfacultyAt9[0]===prof[0]||PTHfacultyAt9[0]===prof[1]||PTHfacultyAt9[0]===prof[3]){
      numAt9=PTHfacultyAt9
      NImilan2=[]
      NImilan1=[]
      NIcourse2=[]
      NIcourse3=[]
      }else if(PTHfacultyAt9[0]===prof2[0]||PTHfacultyAt9[0]===prof2[1]||PTHfacultyAt9[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4THfacultyAt9[0]&&C4THfacultyAt9[0].length>0){
          numAt9=[]
          
        }else{
          numAt9=prof3.filter((item)=>{
            return THfacultyAt9.indexOf(item)===-1
          })
          
        }
      
      }else if(PTHfacultyAt9[0]===milan[0]){
        numAt9=[]
      }

      if(PTHfacultyAt10[0]===prof[0]||PTHfacultyAt10[0]===prof[1]||PTHfacultyAt10[0]===prof[3]){
        numAt10=PTHfacultyAt10
        TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else if(PTHfacultyAt10[0]===prof2[0]||PTHfacultyAt10[0]===prof2[1]||PTHfacultyAt10[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4THfacultyAt10[0]&&C4THfacultyAt10[0].length>0){
            numAt10=[]
            
          }else{
            numAt10=prof3.filter((item)=>{
              return THfacultyAt10.indexOf(item)===-1
            })
            
          }
        
        }else if(PTHfacultyAt10[0]===milan[0]){
          numAt10=[]
        }


       if(PTHfacultyAt11[0]===prof[0]||PTHfacultyAt11[0]===prof[1]||PTHfacultyAt11[0]===prof[3]){
      numAt11=PTHfacultyAt11
      ELmilan2=[]
      ELmilan1=[]
      ELcourse2=[]
      ELcourse3=[]
      }else if(PTHfacultyAt11[0]===prof2[0]||PTHfacultyAt11[0]===prof2[1]||PTHfacultyAt11[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4THfacultyAt11[0]&&C4THfacultyAt11[0].length>0){
          numAt11=[]
          
        }else{
          numAt11=prof3.filter((item)=>{
            return THfacultyAt11.indexOf(item)===-1
          })
          
        }
      
      }else if(PTHfacultyAt11[0]===milan[0]){
        numAt11=[]
      }

      if(PTHfacultyAt12[0]===prof[0]||PTHfacultyAt12[0]===prof[1]||PTHfacultyAt12[0]===prof[3]){
        numAt12=PTHfacultyAt12
        TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else if(PTHfacultyAt12[0]===prof2[0]||PTHfacultyAt12[0]===prof2[1]||PTHfacultyAt12[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4THfacultyAt12[0]&&C4THfacultyAt12[0].length>0){
            numAt12=[]
            
          }else{
            numAt12=prof3.filter((item)=>{
              return THfacultyAt12.indexOf(item)===-1
            })
            
          }
        
        }else if(PTHfacultyAt12[0]===milan[0]){
          numAt12=[]
        }

        if(PTHfacultyAt03[0]===prof[0]||PTHfacultyAt03[0]===prof[1]||PTHfacultyAt03[0]===prof[3]){
          numAt03=PTHfacultyAt03
          THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(PTHfacultyAt03[0]===prof2[0]||PTHfacultyAt03[0]===prof2[1]||PTHfacultyAt03[0]===''){
            NImilan2=[]
              NImilan1=[]
              NIcourse2=[]
              NIcourse3=[]
            if(C4THfacultyAt03[0]&&C4THfacultyAt03[0].length>0){
              numAt03=[]
              
            }else{
              numAt03=prof3.filter((item)=>{
                return THfacultyAt03.indexOf(item)===-1
              })
              
            }
          
          }else if(PTHfacultyAt03[0]===milan[0]){
            numAt03=[]
          }

          if(PTHfacultyAt04[0]===prof[0]||PTHfacultyAt04[0]===prof[1]||PTHfacultyAt04[0]===prof[3]){
            numAt04=PTHfacultyAt04
            FOmilan2=[]
            FOmilan1=[]
            FOcourse2=[]
            FOcourse3=[]
            }else if(PTHfacultyAt04[0]===prof2[0]||PTHfacultyAt04[0]===prof2[1]||PTHfacultyAt04[0]===''){
              NImilan2=[]
                NImilan1=[]
                NIcourse2=[]
                NIcourse3=[]
              if(C4THfacultyAt04[0]&&C4THfacultyAt04[0].length>0){
                numAt04=[]
                
              }else{
                numAt04=prof3.filter((item)=>{
                  return THfacultyAt04.indexOf(item)===-1
                })
                
              }
            
            }else if(PTHfacultyAt04[0]===milan[0]){
              numAt04=[]
            }

            if(PTHfacultyAt05[0]===prof[0]||PTHfacultyAt05[0]===prof[1]||PTHfacultyAt05[0]===prof[3]){
              numAt05=PTHfacultyAt05
              FImilan2=[]
              FImilan1=[]
              FIcourse2=[]
              FIcourse3=[]
              }else if(PTHfacultyAt05[0]===prof2[0]||PTHfacultyAt05[0]===prof2[1]||PTHfacultyAt05[0]===''){
                NImilan2=[]
                  NImilan1=[]
                  NIcourse2=[]
                  NIcourse3=[]
                if(C4THfacultyAt05[0]&&C4THfacultyAt05[0].length>0){
                  numAt05=[]
                  
                }else{
                  numAt05=prof3.filter((item)=>{
                    return THfacultyAt05.indexOf(item)===-1
                  })
                  
                }
              
              }else if(PTHfacultyAt05[0]===milan[0]){
                numAt05=[]
              }

              if(COTHfacultyAt9[0]===course2[0]||C3THfacultyAt9[0]&&C3THfacultyAt9[0].length>0){
                NImilan2=[]
                NIcourse3=[] 
               }
               
               if(COTHfacultyAt10[0]===course2[0]||C3THfacultyAt10[0]&&C3THfacultyAt10[0].length>0){
                 TEmilan2=[] 
                 TEcourse3=[]
                }
                if(COTHfacultyAt11[0]===course2[0]||C3THfacultyAt11[0]&&C3THfacultyAt11[0].length>0){
                  ELmilan2=[] 
                  ELcourse3=[]
                 }
                if(COTHfacultyAt12[0]===course2[0]||C3THfacultyAt12[0]&&C3THfacultyAt12[0].length>0){
                 TWmilan2=[]
                 TWcourse3=[]
                }
                if(COTHfacultyAt03[0]===course2[0]||C3THfacultyAt03[0]&&C3THfacultyAt03[0].length>0){
                 THmilan2=[]
                 THcourse3=[]
                }
                if(COTHfacultyAt04[0]===course2[0]||C3THfacultyAt04[0]&&C3THfacultyAt04[0].length>0){
                  FOmilan2=[]
                  FOcourse3=[]
                 }
                if(COTHfacultyAt05[0]===course2[0]||C3THfacultyAt05[0]&&C3THfacultyAt05[0].length>0){
                 FImilan2=[]
                 FIcourse3=[]
                }
          
                if(COTHfacultyAt9[0]&&COTHfacultyAt9[0]===course3[0]){
                  NIcourse2=[]
                  NImilan1=[]
                 }
                 if(COTHfacultyAt10[0]&&COTHfacultyAt10[0]===course3[0]){
                  TEcourse2=[]
                  TEmilan1=[]
                 }
                 if(COTHfacultyAt11[0]&&COTHfacultyAt11[0]===course3[0]){
                  ELcourse2=[]
                  ELmilan1=[]
                 }
                 if(COTHfacultyAt12[0]&&COTHfacultyAt12[0]===course3[0]){
                  TWcourse2=[]
                  TWmilan1=[]
                 }
                 if(COTHfacultyAt03[0]&&COTHfacultyAt03[0]===course3[0]){
                  THcourse2=[]
                  THmilan1=[]
                 }
                 if(COTHfacultyAt04[0]&&COTHfacultyAt04[0]===course3[0]){
                  FOcourse2=[]
                  FOmilan1=[]
                 }
                 if(COTHfacultyAt05[0]&&COTHfacultyAt05[0]===course3[0]){
                  FIcourse2=[]
                  FImilan1=[]
                 }


                    
      if(!PTHfacultyAt9[0]){
        if(C3THfacultyAt9&&C3THfacultyAt9.length>0){
          if(C3THfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3THfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3THfacultyAt9[0]===''){
            if(C4THfacultyAt9[0]&&C4THfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return THfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4THfacultyAt9[0]&&C4THfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return THfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3THfacultyAt9[0]&&P3THfacultyAt9[0].length>0){
            if(C4THfacultyAt9[0]&&C4THfacultyAt9[0].length>0){
              numAt9= prof4.filter((item) => { 
                return THfacultyAt9.indexOf(item) === -1 
              })
            }
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
          if(C4THfacultyAt9[0]&&C4THfacultyAt9[0].length>0){
            numAt9= prof5.filter((item) => { 
              return THfacultyAt9.indexOf(item) === -1 
            })
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
          }
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!PTHfacultyAt10[0]){
        if(C3THfacultyAt10&&C3THfacultyAt10.length>0){
          if(C3THfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3THfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3THfacultyAt10[0]===''){
            if(C4THfacultyAt10[0]&&C4THfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return THfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4THfacultyAt10[0]&&C4THfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return THfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3THfacultyAt10[0]&&P3THfacultyAt10[0].length>0){
            if(C4THfacultyAt10[0]&&C4THfacultyAt10[0].length>0){
              numAt10= prof4.filter((item) => { 
                return THfacultyAt10.indexOf(item) === -1 
              })
            }
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
          if(C4THfacultyAt10[0]&&C4THfacultyAt10[0].length>0){
            numAt10= prof5.filter((item) => { 
              return THfacultyAt10.indexOf(item) === -1 
            })
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4THfacultyAt11[0]&&C4THfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return THfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4THfacultyAt11[0]&&C4THfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return THfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3THfacultyAt11[0]&&P3THfacultyAt11[0].length>0){
            if(C4THfacultyAt11[0]&&C4THfacultyAt11[0].length>0){
              numAt11= prof4.filter((item) => { 
                return THfacultyAt11.indexOf(item) === -1 
              })
            }
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
          if(C4THfacultyAt11[0]&&C4THfacultyAt11[0].length>0){
            numAt11= prof5.filter((item) => { 
              return THfacultyAt11.indexOf(item) === -1 
            })
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4THfacultyAt12[0]&&C4THfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return THfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4THfacultyAt12[0]&&C4THfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return THfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3THfacultyAt12[0]&&P3THfacultyAt12[0].length>0){
            if(C4THfacultyAt12[0]&&C4THfacultyAt12[0].length>0){
              numAt12= prof4.filter((item) => { 
                return THfacultyAt12.indexOf(item) === -1 
              })
            }
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
          if(C4THfacultyAt12[0]&&C4THfacultyAt12[0].length>0){
            numAt12= prof5.filter((item) => { 
              return THfacultyAt12.indexOf(item) === -1 
            })
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4THfacultyAt03[0]&&C4THfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return THfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4THfacultyAt03[0]&&C4THfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return THfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3THfacultyAt03[0]&&P3THfacultyAt03[0].length>0){
            if(C4THfacultyAt03[0]&&C4THfacultyAt03[0].length>0){
              numAt03= prof4.filter((item) => { 
                return THfacultyAt03.indexOf(item) === -1 
              })
            }
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
          if(C4THfacultyAt03[0]&&C4THfacultyAt03[0].length>0){
            numAt03= prof5.filter((item) => { 
              return THfacultyAt03.indexOf(item) === -1 
            })
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4THfacultyAt04[0]&&C4THfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return THfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4THfacultyAt04[0]&&C4THfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return THfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3THfacultyAt04[0]&&P3THfacultyAt04[0].length>0){
            if(C4THfacultyAt04[0]&&C4THfacultyAt04[0].length>0){
              numAt04= prof4.filter((item) => { 
                return THfacultyAt04.indexOf(item) === -1 
              })
            }
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
          if(C4THfacultyAt04[0]&&C4THfacultyAt04[0].length>0){
            numAt04= prof5.filter((item) => { 
              return THfacultyAt04.indexOf(item) === -1 
            })
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4THfacultyAt05[0]&&C4THfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return THfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4THfacultyAt05[0]&&C4THfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return THfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3THfacultyAt05[0]&&P3THfacultyAt05[0].length>0){
            if(C4THfacultyAt05[0]&&C4THfacultyAt05[0].length>0){
              numAt05= prof4.filter((item) => { 
                return THfacultyAt05.indexOf(item) === -1 
              })
            }
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
          if(C4THfacultyAt05[0]&&C4THfacultyAt05[0].length>0){
            numAt05= prof5.filter((item) => { 
              return THfacultyAt05.indexOf(item) === -1 
            })
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
          }
        FImilan2=[]
          FIcourse3=[] 
        }
      }
                  
     if(CTHfacultyAt9[0]&&CTHfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt10[0]&&CTHfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt11[0]&&CTHfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt12[0]&&CTHfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt03[0]&&CTHfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt04[0]&&CTHfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt05[0]&&CTHfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[CTHfacultyAt9[0]]    
    numAt10=[CTHfacultyAt10[0]]
    numAt11=[CTHfacultyAt11[0]]
    numAt12=[CTHfacultyAt12[0]]
    numAt03=[CTHfacultyAt03[0]]
    numAt04=[CTHfacultyAt04[0]]
    numAt05=[CTHfacultyAt05[0]]
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

    if(C4FfacultyAt9[0]&&C4FfacultyAt9[0].length>0){
      numAt9= prof4.filter((item) => { 
        return FfacultyAt9.indexOf(item) === -1 
      })
    }

    if(C4FfacultyAt10[0]&&C4FfacultyAt10[0].length>0){
      numAt10= prof4.filter((item) => { 
        return FfacultyAt10.indexOf(item) === -1 
      })
    }

    if(C4FfacultyAt11[0]&&C4FfacultyAt11[0].length>0){
      numAt11= prof4.filter((item) => { 
        return FfacultyAt11.indexOf(item) === -1 
      })
    }

    if(C4FfacultyAt12[0]&&C4FfacultyAt12[0].length>0){
      numAt12= prof4.filter((item) => { 
        return FfacultyAt12.indexOf(item) === -1 
      })
    }

    if(C4FfacultyAt03[0]&&C4FfacultyAt03[0].length>0){
      numAt03= prof4.filter((item) => { 
        return FfacultyAt03.indexOf(item) === -1 
      })
    }

    if(C4FfacultyAt04[0]&&C4FfacultyAt04[0].length>0){
      numAt04= prof4.filter((item) => { 
        return FfacultyAt04.indexOf(item) === -1 
      })
    }

    if(C4FfacultyAt05[0]&&C4FfacultyAt05[0].length>0){
      numAt05= prof4.filter((item) => { 
        return FfacultyAt05.indexOf(item) === -1 
      })
    }

    if(PFfacultyAt9[0]===prof[0]||PFfacultyAt9[0]===prof[1]||PFfacultyAt9[0]===prof[3]){
      numAt9=PFfacultyAt9
      NImilan2=[]
      NImilan1=[]
      NIcourse2=[]
      NIcourse3=[]
      }else if(PFfacultyAt9[0]===prof2[0]||PFfacultyAt9[0]===prof2[1]||PFfacultyAt9[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4FfacultyAt9[0]&&C4FfacultyAt9[0].length>0){
          numAt9=[]
          
        }else{
          numAt9=prof3.filter((item)=>{
            return FfacultyAt9.indexOf(item)===-1
          })
          
        }
      
      }else if(PFfacultyAt9[0]===milan[0]){
        numAt9=[]
      }

      if(PFfacultyAt10[0]===prof[0]||PFfacultyAt10[0]===prof[1]||PFfacultyAt10[0]===prof[3]){
        numAt10=PFfacultyAt10
        TEmilan2=[]
        TEmilan1=[]
        TEcourse2=[]
        TEcourse3=[]
        }else if(PFfacultyAt10[0]===prof2[0]||PFfacultyAt10[0]===prof2[1]||PFfacultyAt10[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4FfacultyAt10[0]&&C4FfacultyAt10[0].length>0){
            numAt10=[]
            
          }else{
            numAt10=prof3.filter((item)=>{
              return FfacultyAt10.indexOf(item)===-1
            })
            
          }
        
        }else if(PFfacultyAt10[0]===milan[0]){
          numAt10=[]
        }


       if(PFfacultyAt11[0]===prof[0]||PFfacultyAt11[0]===prof[1]||PFfacultyAt11[0]===prof[3]){
      numAt11=PFfacultyAt11
      ELmilan2=[]
      ELmilan1=[]
      ELcourse2=[]
      ELcourse3=[]
      }else if(PFfacultyAt11[0]===prof2[0]||PFfacultyAt11[0]===prof2[1]||PFfacultyAt11[0]===''){
        NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
        if(C4FfacultyAt11[0]&&C4FfacultyAt11[0].length>0){
          numAt11=[]
          
        }else{
          numAt11=prof3.filter((item)=>{
            return FfacultyAt11.indexOf(item)===-1
          })
          
        }
      
      }else if(PFfacultyAt11[0]===milan[0]){
        numAt11=[]
      }

      if(PFfacultyAt12[0]===prof[0]||PFfacultyAt12[0]===prof[1]||PFfacultyAt12[0]===prof[3]){
        numAt12=PFfacultyAt12
        TWmilan2=[]
        TWmilan1=[]
        TWcourse2=[]
        TWcourse3=[]
        }else if(PFfacultyAt12[0]===prof2[0]||PFfacultyAt12[0]===prof2[1]||PFfacultyAt12[0]===''){
          NImilan2=[]
            NImilan1=[]
            NIcourse2=[]
            NIcourse3=[]
          if(C4FfacultyAt12[0]&&C4FfacultyAt12[0].length>0){
            numAt12=[]
            
          }else{
            numAt12=prof3.filter((item)=>{
              return FfacultyAt12.indexOf(item)===-1
            })
            
          }
        
        }else if(PFfacultyAt12[0]===milan[0]){
          numAt12=[]
        }

        if(PFfacultyAt03[0]===prof[0]||PFfacultyAt03[0]===prof[1]||PFfacultyAt03[0]===prof[3]){
          numAt03=PFfacultyAt03
          THmilan2=[]
          THmilan1=[]
          THcourse2=[]
          THcourse3=[]
          }else if(PFfacultyAt03[0]===prof2[0]||PFfacultyAt03[0]===prof2[1]||PFfacultyAt03[0]===''){
            NImilan2=[]
              NImilan1=[]
              NIcourse2=[]
              NIcourse3=[]
            if(C4FfacultyAt03[0]&&C4FfacultyAt03[0].length>0){
              numAt03=[]
              
            }else{
              numAt03=prof3.filter((item)=>{
                return FfacultyAt03.indexOf(item)===-1
              })
              
            }
          
          }else if(PFfacultyAt03[0]===milan[0]){
            numAt03=[]
          }

          if(PFfacultyAt04[0]===prof[0]||PFfacultyAt04[0]===prof[1]||PFfacultyAt04[0]===prof[3]){
            numAt04=PFfacultyAt04
            FOmilan2=[]
            FOmilan1=[]
            FOcourse2=[]
            FOcourse3=[]
            }else if(PFfacultyAt04[0]===prof2[0]||PFfacultyAt04[0]===prof2[1]||PFfacultyAt04[0]===''){
              NImilan2=[]
                NImilan1=[]
                NIcourse2=[]
                NIcourse3=[]
              if(C4FfacultyAt04[0]&&C4FfacultyAt04[0].length>0){
                numAt04=[]
                
              }else{
                numAt04=prof3.filter((item)=>{
                  return FfacultyAt04.indexOf(item)===-1
                })
                
              }
            
            }else if(PFfacultyAt04[0]===milan[0]){
              numAt04=[]
            }

            if(PFfacultyAt05[0]===prof[0]||PFfacultyAt05[0]===prof[1]||PFfacultyAt05[0]===prof[3]){
              numAt05=PFfacultyAt05
              FImilan2=[]
              FImilan1=[]
              FIcourse2=[]
              FIcourse3=[]
              }else if(PFfacultyAt05[0]===prof2[0]||PFfacultyAt05[0]===prof2[1]||PFfacultyAt05[0]===''){
                NImilan2=[]
                  NImilan1=[]
                  NIcourse2=[]
                  NIcourse3=[]
                if(C4FfacultyAt05[0]&&C4FfacultyAt05[0].length>0){
                  numAt05=[]
                  
                }else{
                  numAt05=prof3.filter((item)=>{
                    return FfacultyAt05.indexOf(item)===-1
                  })
                  
                }
              
              }else if(PFfacultyAt05[0]===milan[0]){
                numAt05=[]
              }

              if(COFfacultyAt9[0]===course2[0]||C3FfacultyAt9[0]&&C3FfacultyAt9[0].length>0){
                NImilan2=[]
                NIcourse3=[] 
               }
               
               if(COFfacultyAt10[0]===course2[0]||C3FfacultyAt10[0]&&C3FfacultyAt10[0].length>0){
                 TEmilan2=[] 
                 TEcourse3=[]
                }
                if(COFfacultyAt11[0]===course2[0]||C3FfacultyAt11[0]&&C3FfacultyAt11[0].length>0){
                  ELmilan2=[] 
                  ELcourse3=[]
                 }
                if(COFfacultyAt12[0]===course2[0]||C3FfacultyAt12[0]&&C3FfacultyAt12[0].length>0){
                 TWmilan2=[]
                 TWcourse3=[]
                }
                if(COFfacultyAt03[0]===course2[0]||C3FfacultyAt03[0]&&C3FfacultyAt03[0].length>0){
                 THmilan2=[]
                 THcourse3=[]
                }
                if(COFfacultyAt04[0]===course2[0]||C3FfacultyAt04[0]&&C3FfacultyAt04[0].length>0){
                  FOmilan2=[]
                  FOcourse3=[]
                 }
                if(COFfacultyAt05[0]===course2[0]||C3FfacultyAt05[0]&&C3FfacultyAt05[0].length>0){
                 FImilan2=[]
                 FIcourse3=[]
                }
          
                if(COFfacultyAt9[0]&&COFfacultyAt9[0]===course3[0]){
                  NIcourse2=[]
                  NImilan1=[]
                 }
                 if(COFfacultyAt10[0]&&COFfacultyAt10[0]===course3[0]){
                  TEcourse2=[]
                  TEmilan1=[]
                 }
                 if(COFfacultyAt11[0]&&COFfacultyAt11[0]===course3[0]){
                  ELcourse2=[]
                  ELmilan1=[]
                 }
                 if(COFfacultyAt12[0]&&COFfacultyAt12[0]===course3[0]){
                  TWcourse2=[]
                  TWmilan1=[]
                 }
                 if(COFfacultyAt03[0]&&COFfacultyAt03[0]===course3[0]){
                  THcourse2=[]
                  THmilan1=[]
                 }
                 if(COFfacultyAt04[0]&&COFfacultyAt04[0]===course3[0]){
                  FOcourse2=[]
                  FOmilan1=[]
                 }
                 if(COFfacultyAt05[0]&&COFfacultyAt05[0]===course3[0]){
                  FIcourse2=[]
                  FImilan1=[]
                 }


                    
      if(!PFfacultyAt9[0]){
        if(C3FfacultyAt9&&C3FfacultyAt9.length>0){
          if(C3FfacultyAt9[0]==='Dr. Rakesh'){
            numAt9=C3FfacultyAt9
            NImilan2=[]
          NImilan1=[]
          NIcourse2=[]
          NIcourse3=[]
          }else if(C3FfacultyAt9[0]===''){
            if(C4FfacultyAt9[0]&&C4FfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return FfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4FfacultyAt9[0]&&C4FfacultyAt9[0].length>0){
              numAt9= prof5.filter((item) => { 
                return FfacultyAt9.indexOf(item) === -1 
              })
            }else{
              numAt9=numAt9.filter((num)=>{
                return num!==prof[3]
              })
            }
            NImilan2=[]
            NIcourse3=[] 
          }
          }else if(P3FfacultyAt9[0]&&P3FfacultyAt9[0].length>0){
            if(C4FfacultyAt9[0]&&C4FfacultyAt9[0].length>0){
              numAt9= prof4.filter((item) => { 
                return FfacultyAt9.indexOf(item) === -1 
              })
            }
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
          if(C4FfacultyAt9[0]&&C4FfacultyAt9[0].length>0){
            numAt9= prof5.filter((item) => { 
              return FfacultyAt9.indexOf(item) === -1 
            })
          }else{
            numAt9=numAt9.filter((num)=>{
              return num!==prof[3]
            })
          }
          NImilan2=[]
          NIcourse3=[] 
        }
      }
      
      
      if(!PFfacultyAt10[0]){
        if(C3FfacultyAt10&&C3FfacultyAt10.length>0){
          if(C3FfacultyAt10[0]==='Dr. Rakesh'){
            numAt10=C3FfacultyAt10
            TEmilan2=[]
          TEmilan1=[]
          TEcourse2=[]
          TEcourse3=[]
          }else if(C3FfacultyAt10[0]===''){
            if(C4FfacultyAt10[0]&&C4FfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return FfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
             
          }else{
            if(C4FfacultyAt10[0]&&C4FfacultyAt10[0].length>0){
              numAt10= prof5.filter((item) => { 
                return FfacultyAt10.indexOf(item) === -1 
              })
            }else{
              numAt10=numAt10.filter((num)=>{
                return num!==prof[3]
              })
            }
            TEmilan2=[]
            TEcourse3=[] 
          }
          }else if(P3FfacultyAt10[0]&&P3FfacultyAt10[0].length>0){
            if(C4FfacultyAt10[0]&&C4FfacultyAt10[0].length>0){
              numAt10= prof4.filter((item) => { 
                return FfacultyAt10.indexOf(item) === -1 
              })
            }
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
          if(C4FfacultyAt10[0]&&C4FfacultyAt10[0].length>0){
            numAt10= prof5.filter((item) => { 
              return FfacultyAt10.indexOf(item) === -1 
            })
          }else{
            numAt10=numAt10.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4FfacultyAt11[0]&&C4FfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return FfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4FfacultyAt11[0]&&C4FfacultyAt11[0].length>0){
              numAt11= prof5.filter((item) => { 
                return FfacultyAt11.indexOf(item) === -1 
              })
            }else{
              numAt11=numAt11.filter((num)=>{
                return num!==prof[3]
              })
            }
            ELmilan2=[]
            ELcourse3=[] 
          }
          }else if(P3FfacultyAt11[0]&&P3FfacultyAt11[0].length>0){
            if(C4FfacultyAt11[0]&&C4FfacultyAt11[0].length>0){
              numAt11= prof4.filter((item) => { 
                return FfacultyAt11.indexOf(item) === -1 
              })
            }
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
          if(C4FfacultyAt11[0]&&C4FfacultyAt11[0].length>0){
            numAt11= prof5.filter((item) => { 
              return FfacultyAt11.indexOf(item) === -1 
            })
          }else{
            numAt11=numAt11.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4FfacultyAt12[0]&&C4FfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return FfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4FfacultyAt12[0]&&C4FfacultyAt12[0].length>0){
              numAt12= prof5.filter((item) => { 
                return FfacultyAt12.indexOf(item) === -1 
              })
            }else{
              numAt12=numAt12.filter((num)=>{
                return num!==prof[3]
              })
            }
            TWmilan2=[]
            TWcourse3=[] 
          }
          }else if(P3FfacultyAt12[0]&&P3FfacultyAt12[0].length>0){
            if(C4FfacultyAt12[0]&&C4FfacultyAt12[0].length>0){
              numAt12= prof4.filter((item) => { 
                return FfacultyAt12.indexOf(item) === -1 
              })
            }
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
          if(C4FfacultyAt12[0]&&C4FfacultyAt12[0].length>0){
            numAt12= prof5.filter((item) => { 
              return FfacultyAt12.indexOf(item) === -1 
            })
          }else{
            numAt12=numAt12.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4FfacultyAt03[0]&&C4FfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return FfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4FfacultyAt03[0]&&C4FfacultyAt03[0].length>0){
              numAt03= prof5.filter((item) => { 
                return FfacultyAt03.indexOf(item) === -1 
              })
            }else{
              numAt03=numAt03.filter((num)=>{
                return num!==prof[3]
              })
            }
            THmilan2=[]
            THcourse3=[] 
          }
          }else if(P3FfacultyAt03[0]&&P3FfacultyAt03[0].length>0){
            if(C4FfacultyAt03[0]&&C4FfacultyAt03[0].length>0){
              numAt03= prof4.filter((item) => { 
                return FfacultyAt03.indexOf(item) === -1 
              })
            }
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
          if(C4FfacultyAt03[0]&&C4FfacultyAt03[0].length>0){
            numAt03= prof5.filter((item) => { 
              return FfacultyAt03.indexOf(item) === -1 
            })
          }else{
            numAt03=numAt03.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4FfacultyAt04[0]&&C4FfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return FfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4FfacultyAt04[0]&&C4FfacultyAt04[0].length>0){
              numAt04= prof5.filter((item) => { 
                return FfacultyAt04.indexOf(item) === -1 
              })
            }else{
              numAt04=numAt04.filter((num)=>{
                return num!==prof[3]
              })
            }
            FOmilan2=[]
            FOcourse3=[] 
          }
          }else if(P3FfacultyAt04[0]&&P3FfacultyAt04[0].length>0){
            if(C4FfacultyAt04[0]&&C4FfacultyAt04[0].length>0){
              numAt04= prof4.filter((item) => { 
                return FfacultyAt04.indexOf(item) === -1 
              })
            }
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
          if(C4FfacultyAt04[0]&&C4FfacultyAt04[0].length>0){
            numAt04= prof5.filter((item) => { 
              return FfacultyAt04.indexOf(item) === -1 
            })
          }else{
            numAt04=numAt04.filter((num)=>{
              return num!==prof[3]
            })
          }
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
            if(C4FfacultyAt05[0]&&C4FfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return FfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            
          }else{
            if(C4FfacultyAt05[0]&&C4FfacultyAt05[0].length>0){
              numAt05= prof5.filter((item) => { 
                return FfacultyAt05.indexOf(item) === -1 
              })
            }else{
              numAt05=numAt05.filter((num)=>{
                return num!==prof[3]
              })
            }
            FImilan2=[]
            FIcourse3=[] 
          }
          }else if(P3FfacultyAt05[0]&&P3FfacultyAt05[0].length>0){
            if(C4FfacultyAt05[0]&&C4FfacultyAt05[0].length>0){
              numAt05= prof4.filter((item) => { 
                return FfacultyAt05.indexOf(item) === -1 
              })
            }
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
          if(C4FfacultyAt05[0]&&C4FfacultyAt05[0].length>0){
            numAt05= prof5.filter((item) => { 
              return FfacultyAt05.indexOf(item) === -1 
            })
          }else{
            numAt05=numAt05.filter((num)=>{
              return num!==prof[3]
            })
          }
        FImilan2=[]
          FIcourse3=[] 
        }
      }
                  
     if(CFfacultyAt9[0]&&CFfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt10[0]&&CFfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt11[0]&&CFfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt12[0]&&CFfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt03[0]&&CFfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt04[0]&&CFfacultyAt04[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt05[0]&&CFfacultyAt05[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[CFfacultyAt9[0]]    
    numAt10=[CFfacultyAt10[0]]
    numAt11=[CFfacultyAt11[0]]
    numAt12=[CFfacultyAt12[0]]
    numAt03=[CFfacultyAt03[0]]
    numAt04=[CFfacultyAt04[0]]
    numAt05=[CFfacultyAt05[0]]
  }
}


    const submitHandler=(e)=>{
     e.preventDefault()
    
     setDisabled(true)

    console.log(numAt04)

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
      item:POAt9
    })
  
    dispatch({
      type:type[16],
      item:POAt10
    })
  
    dispatch({
      type:type[17],
      item:POAt11
    })
    dispatch({
      type:type[18],
      item:POAt12
    })
    dispatch({
      type:type[19],
      item:POAt03
    })
    dispatch({
      type:type[20],
      item:POAt04
    })
    dispatch({
      type:type[21],
      item:POAt05
    })
    }    
    
   const handler9=(e)=>{
     console.log(PMfacultyAt9)
     
    setAt9(e.target.value.split(',')[0]) 
    setDisabled(false)
    setPOat9(e.target.value.split(',')[1])
   }
   const handler10=(e)=>{
     console.log(e.target.value.split(',')[0])
    setDisabled(false)
    setAt10(e.target.value.split(',')[0])
    setPOat10(e.target.value.split(',')[1])
   }
   const handler11=(e)=>{
    setAt11(e.target.value.split(',')[0]) 
    setDisabled(false)
    setPOat11(e.target.value.split(',')[1])
   }
   const handler12=(e)=>{
    setAt12(e.target.value.split(',')[0]) 
    setDisabled(false)
    setPOat12(e.target.value.split(',')[1])
   }
   const handler03=(e)=>{
    setAt03(e.target.value.split(',')[0]) 
    setDisabled(false)
    setPOat03(e.target.value.split(',')[1])
   }
   const handler04=(e)=>{
     console.log(PMfacultyAt04)
    setAt04(e.target.value.split(',')[0])
    setPOat04(e.target.value.split(',')[1])
    setDisabled(false)
   }
   const handler05=(e)=>{
     setAt05(e.target.value.split(',')[0])
     setPOat05(e.target.value.split(',')[1])
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
                        return <option value={[each,courseHandler(each)]}>{each}-{courseHandler(each)}</option>
                      }
                        
                    })
               
                    
                  }
                   {
                    NImilan2.map((each,index)=>{
                    return <option value={[each,courseHandler2(each)]}>{each}-{courseHandler2(each)}</option>
                    })
                  }
                  {
                    NImilan1.map((each,index)=>{
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
                     return <option value={[each,courseHandler(each)]} hello={each}>{each}-{courseHandler(each)}</option>
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
               <div>11.30 am to 12.30pm</div>
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
            <div>12.45pm to 1.45pm</div>
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

export default B2chemical
