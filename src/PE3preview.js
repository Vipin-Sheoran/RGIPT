import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function PE3preview({preview}) {

    const [{P3MfacultyAt9,P3MfacultyAt10,P3MfacultyAt11,P3MfacultyAt12,P3MfacultyAt04,P3MfacultyAt03,P3MfacultyAt05,
        P3TfacultyAt9,P3TfacultyAt10,P3TfacultyAt11,P3TfacultyAt12,P3TfacultyAt04,P3TfacultyAt03,P3TfacultyAt05,
        P3WfacultyAt9,P3WfacultyAt10,P3WfacultyAt11,P3WfacultyAt12,P3WfacultyAt04,P3WfacultyAt03,P3WfacultyAt05,
        P3THfacultyAt9,P3THfacultyAt10,P3THfacultyAt11,P3THfacultyAt12,P3THfacultyAt04,P3THfacultyAt03,P3THfacultyAt05,
        P3FfacultyAt9,P3FfacultyAt10,P3FfacultyAt11,P3FfacultyAt12,P3FfacultyAt04,P3FfacultyAt03,P3FfacultyAt05},dispatch]=useStateValue()
   
        const monday=[P3MfacultyAt9,P3MfacultyAt10,P3MfacultyAt11,P3MfacultyAt12,P3MfacultyAt03,P3MfacultyAt04,P3MfacultyAt05]
        const tuesday=[P3TfacultyAt9,P3TfacultyAt10,P3TfacultyAt11,P3TfacultyAt12,P3TfacultyAt03,P3TfacultyAt04,P3TfacultyAt05]
        const wednesday=[P3WfacultyAt9,P3WfacultyAt10,P3WfacultyAt11,P3WfacultyAt12,P3WfacultyAt03,P3WfacultyAt04,P3WfacultyAt05]
        const thursday=[P3THfacultyAt9,P3THfacultyAt10,P3THfacultyAt11,P3THfacultyAt12,P3THfacultyAt03,P3THfacultyAt04,P3THfacultyAt05]
        const friday=[P3FfacultyAt9,P3FfacultyAt10,P3FfacultyAt11,P3FfacultyAt12,P3FfacultyAt03,P3FfacultyAt04,P3FfacultyAt05]
        const prof=['Dr. Biswas','Dr. UDD','Dr. Shivanjali','Dr. SK Sinha']
      
        const courseHandler=(each)=>{
          let course=[]
            if(each[0]===prof[0]){
                course='Geoinformatics'
               }
               if(each[0]===prof[1]){
                 course='EE&Electronics'
               }
               if(each[0]===prof[2]){
                 course='Production Engineering'
               }
               if(each[0]===prof[3]){
                 course='Petrol Exploration & Prospecting'
               }
              //  if(each[0]===prof[4]){
              //    course='Mass Transfer'
              //  }
              //  if(each[0]===prof[5]){
              //    course='Chemical Reaction Engineering'
              //  }
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

export default PE3preview

