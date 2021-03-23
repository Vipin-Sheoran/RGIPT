import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Che3preview({preview}) {

    const [{C3MfacultyAt9,C3MfacultyAt10,C3MfacultyAt11,C3MfacultyAt12,C3MfacultyAt04,C3MfacultyAt03,C3MfacultyAt05,
        C3TfacultyAt9,C3TfacultyAt10,C3TfacultyAt11,C3TfacultyAt12,C3TfacultyAt04,C3TfacultyAt03,C3TfacultyAt05,
        C3WfacultyAt9,C3WfacultyAt10,C3WfacultyAt11,C3WfacultyAt12,C3WfacultyAt04,C3WfacultyAt03,C3WfacultyAt05,
        C3THfacultyAt9,C3THfacultyAt10,C3THfacultyAt11,C3THfacultyAt12,C3THfacultyAt04,C3THfacultyAt03,C3THfacultyAt05,
        C3FfacultyAt9,C3FfacultyAt10,C3FfacultyAt11,C3FfacultyAt12,C3FfacultyAt04,C3FfacultyAt03,C3FfacultyAt05},dispatch]=useStateValue()
   
        const monday=[C3MfacultyAt9,C3MfacultyAt10,C3MfacultyAt11,C3MfacultyAt12,C3MfacultyAt03,C3MfacultyAt04,C3MfacultyAt05]
        const tuesday=[C3TfacultyAt9,C3TfacultyAt10,C3TfacultyAt11,C3TfacultyAt12,C3TfacultyAt03,C3TfacultyAt04,C3TfacultyAt05]
        const wednesday=[C3WfacultyAt9,C3WfacultyAt10,C3WfacultyAt11,C3WfacultyAt12,C3WfacultyAt03,C3WfacultyAt04,C3WfacultyAt05]
        const thursday=[C3THfacultyAt9,C3THfacultyAt10,C3THfacultyAt11,C3THfacultyAt12,C3THfacultyAt03,C3THfacultyAt04,C3THfacultyAt05]
        const friday=[C3FfacultyAt9,C3FfacultyAt10,C3FfacultyAt11,C3FfacultyAt12,C3FfacultyAt03,C3FfacultyAt04,C3FfacultyAt05]
        const prof=['Dr. UO','Dr. UDD','Dr. AKC','Dr. Bala','Dr. Rakesh','Dr. ASKS']
      
        const courseHandler=(each)=>{
          let course=[]
            if(each[0]===prof[0]){
                course='Natural Gas Processing'
               }
               if(each[0]===prof[1]){
                 course='EE&Electronics'
               }
               if(each[0]===prof[2]){
                 course='Petroleum Chemistry'
               }
               if(each[0]===prof[3]){
                 course='Petroleum Refining 2'
               }
               if(each[0]===prof[4]){
                 course='Mass Transfer'
               }
               if(each[0]===prof[5]){
                 course='Chemical Reaction Engineering'
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
        return <td>{each} <br></br>{courseHandler(each)}</td>
         })
      }
     
      
      
    </tr>
    <tr>
      <td>Tuesday</td>
      {
        tuesday.map(each=>{
         return <td>{each}<br></br> {courseHandler(each)}</td>
         })
      }
    </tr>
    <tr>
      <td>Wednesday</td>
      {
        wednesday.map(each=>{
         return <td>{each}<br></br> {courseHandler(each)}</td>
         })
      }
    </tr>
    <tr>
      <td>Thursday</td>
      {
        thursday.map(each=>{
         return <td>{each}<br></br> {courseHandler(each)}</td>
         })
      }
    </tr>
    <tr>
      <td>Friday</td>
      {
        friday.map(each=>{
         return <td>{each} <br></br>{courseHandler(each)}</td>
         })
      }
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Che3preview

