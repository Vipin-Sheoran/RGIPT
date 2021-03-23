import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Chepreview({preview}) {

    const [{PMfacultyAt9,PMfacultyAt10,PMfacultyAt11,PMfacultyAt12,PMfacultyAt04,PMfacultyAt03,PMfacultyAt05,
        PTfacultyAt9,PTfacultyAt10,PTfacultyAt11,PTfacultyAt12,PTfacultyAt04,PTfacultyAt03,PTfacultyAt05,
        PWfacultyAt9,PWfacultyAt10,PWfacultyAt11,PWfacultyAt12,PWfacultyAt04,PWfacultyAt03,PWfacultyAt05,
        PTHfacultyAt9,PTHfacultyAt10,PTHfacultyAt11,PTHfacultyAt12,PTHfacultyAt04,PTHfacultyAt03,PTHfacultyAt05,
        PFfacultyAt9,PFfacultyAt10,PFfacultyAt11,PFfacultyAt12,PFfacultyAt04,PFfacultyAt03,PFfacultyAt05,
      
        COMfacultyAt9,COMfacultyAt10,COMfacultyAt11,COMfacultyAt12,COMfacultyAt03,COMfacultyAt04,COMfacultyAt05,
        COTfacultyAt9,COTfacultyAt10,COTfacultyAt11,COTfacultyAt12,COTfacultyAt04,COTfacultyAt03,COTfacultyAt05,
        COWfacultyAt9,COWfacultyAt10,COWfacultyAt11,COWfacultyAt12,COWfacultyAt04,COWfacultyAt03,COWfacultyAt05,
        COTHfacultyAt9,COTHfacultyAt10,COTHfacultyAt11,COTHfacultyAt12,COTHfacultyAt04,COTHfacultyAt03,COTHfacultyAt05,
        COFfacultyAt9,COFfacultyAt10,COFfacultyAt11,COFfacultyAt12,COFfacultyAt04,COFfacultyAt03,COFfacultyAt05},dispatch]=useStateValue()
   
        const monday=[PMfacultyAt9,PMfacultyAt10,PMfacultyAt11,PMfacultyAt12,PMfacultyAt03,PMfacultyAt04,PMfacultyAt05]
        const tuesday=[PTfacultyAt9,PTfacultyAt10,PTfacultyAt11,PTfacultyAt12,PTfacultyAt03,PTfacultyAt04,PTfacultyAt05]
        const wednesday=[PWfacultyAt9,PWfacultyAt10,PWfacultyAt11,PWfacultyAt12,PWfacultyAt03,PWfacultyAt04,PWfacultyAt05]
        const thursday=[PTHfacultyAt9,PTHfacultyAt10,PTHfacultyAt11,PTHfacultyAt12,PTHfacultyAt03,PTHfacultyAt04,PTHfacultyAt05]
        const friday=[PFfacultyAt9,PFfacultyAt10,PFfacultyAt11,PFfacultyAt12,PFfacultyAt03,PFfacultyAt04,PFfacultyAt05]

        const courseM=[COMfacultyAt9,COMfacultyAt10,COMfacultyAt11,COMfacultyAt12,COMfacultyAt03,COMfacultyAt04,COMfacultyAt05]
        const courseT=[COTfacultyAt9,COTfacultyAt10,COTfacultyAt11,COTfacultyAt12,COTfacultyAt03,COTfacultyAt04,COTfacultyAt05]
        const courseW=[COWfacultyAt9,COWfacultyAt10,COWfacultyAt11,COWfacultyAt12,COWfacultyAt03,COWfacultyAt04,COWfacultyAt05]
        const courseTH=[COTHfacultyAt9,COTHfacultyAt10,COTHfacultyAt11,COTHfacultyAt12,COTHfacultyAt03,COTHfacultyAt04,COTHfacultyAt05]
        const courseF=[COFfacultyAt9,COFfacultyAt10,COFfacultyAt11,COFfacultyAt12,COFfacultyAt03,COFfacultyAt04,COFfacultyAt05]
        const prof=['Dr. Milan Kumar','Dr. Amit Ranjan','Dr. Koushik','Dr. Alpesh','Dr. Rakesh','Dr. AKS',]
      
        const courseHandler=(each)=>{
          let course=[]
          if(each[0]===prof[0]){
           course='HTO'
          }
          if(each[0]===prof[1]){
            course='CET'
          }
          if(each[0]===prof[2]){
            course='FFO'
          }
          if(each[0]===prof[3]){
            course='Mathematics'
          }
          if(each[0]===prof[4]){
            course='Mass Transfer'
          }
          if(each[0]===prof[5]){
            course='Zeology'
          }
          return course
        }
      

    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>days</th>
      <th>9.00am to 10.00am</th>
      <th>10.15am to 11.15am</th>
      <th>11.30am  to 12.30am</th>
      <th>12.45pm to 1.45pm</th>
      <th>3.00pm  to 4.00pm</th>
      <th>4.15pm  to 5.15pm</th>
      <th>5.30pm  to 6.30pm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      {
        monday.map((each,index)=>{
        return <td>{each} <br></br>{courseM[index]}</td>
         })
      }
     
      
      
    </tr>
    <tr>
      <td>Tuesday</td>
      {
        tuesday.map((each,index)=>{
         return <td>{each}<br></br> {courseT[index]}</td>
         })
      }
    </tr>
    <tr>
      <td>Wednesday</td>
      {
        wednesday.map((each,index)=>{
         return <td>{each}<br></br> {courseW[index]}</td>
         })
      }
    </tr>
    <tr>
      <td>Thursday</td>
      {
        thursday.map((each,index)=>{
         return <td>{each}<br></br> {courseTH[index]}</td>
         })
      }
    </tr>
    <tr>
      <td>Friday</td>
      {
        friday.map((each,index)=>{
         return <td>{each} <br></br>{courseF[index]}</td>
         })
      }
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Chepreview

