import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function PE4preview({preview}) {

    const [{P4MfacultyAt9,P4MfacultyAt10,P4MfacultyAt11,P4MfacultyAt12,P4MfacultyAt04,P4MfacultyAt03,P4MfacultyAt05,
        P4TfacultyAt9,P4TfacultyAt10,P4TfacultyAt11,P4TfacultyAt12,P4TfacultyAt04,P4TfacultyAt03,P4TfacultyAt05,
        P4WfacultyAt9,P4WfacultyAt10,P4WfacultyAt11,P4WfacultyAt12,P4WfacultyAt04,P4WfacultyAt03,P4WfacultyAt05,
        P4THfacultyAt9,P4THfacultyAt10,P4THfacultyAt11,P4THfacultyAt12,P4THfacultyAt04,P4THfacultyAt03,P4THfacultyAt05,
        P4FfacultyAt9,P4FfacultyAt10,P4FfacultyAt11,P4FfacultyAt12,P4FfacultyAt04,P4FfacultyAt03,P4FfacultyAt05},dispatch]=useStateValue()
   
        const monday=[P4MfacultyAt9,P4MfacultyAt10,P4MfacultyAt11,P4MfacultyAt12,P4MfacultyAt03,P4MfacultyAt04,P4MfacultyAt05]
        const tuesday=[P4TfacultyAt9,P4TfacultyAt10,P4TfacultyAt11,P4TfacultyAt12,P4TfacultyAt03,P4TfacultyAt04,P4TfacultyAt05]
        const wednesday=[P4WfacultyAt9,P4WfacultyAt10,P4WfacultyAt11,P4WfacultyAt12,P4WfacultyAt03,P4WfacultyAt04,P4WfacultyAt05]
        const thursday=[P4THfacultyAt9,P4THfacultyAt10,P4THfacultyAt11,P4THfacultyAt12,P4THfacultyAt03,P4THfacultyAt04,P4THfacultyAt05]
        const friday=[P4FfacultyAt9,P4FfacultyAt10,P4FfacultyAt11,P4FfacultyAt12,P4FfacultyAt03,P4FfacultyAt04,P4FfacultyAt05]
        const prof=['Dr. Biswas','Dr. UDD','Dr. Amit Saxena','Dr. Tushar','Dr. Shivanjali']
      
        const courseHandler=(each)=>{
            let course=[]
            if(each[0]===prof[0]){
             course='Health Safety & Environment'
            }
            if(each[0]===prof[1]){
              course='Process Dynamics & Control'
            }
            if(each[0]===prof[2]){
              course='Offshore oil & Gas technology'
            }
            if(each[0]===prof[3]){
              course='Well test Analysis'
            }
            if(each[0]===prof[4]){
              course='EOR/IOR techniques'
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

export default PE4preview

