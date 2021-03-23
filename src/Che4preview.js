import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Che4preview({preview}) {

    const [{C4MfacultyAt9,C4MfacultyAt10,C4MfacultyAt11,C4MfacultyAt12,C4MfacultyAt04,C4MfacultyAt03,C4MfacultyAt05,
        C4TfacultyAt9,C4TfacultyAt10,C4TfacultyAt11,C4TfacultyAt12,C4TfacultyAt04,C4TfacultyAt03,C4TfacultyAt05,
        C4WfacultyAt9,C4WfacultyAt10,C4WfacultyAt11,C4WfacultyAt12,C4WfacultyAt04,C4WfacultyAt03,C4WfacultyAt05,
        C4THfacultyAt9,C4THfacultyAt10,C4THfacultyAt11,C4THfacultyAt12,C4THfacultyAt04,C4THfacultyAt03,C4THfacultyAt05,
        C4FfacultyAt9,C4FfacultyAt10,C4FfacultyAt11,C4FfacultyAt12,C4FfacultyAt04,C4FfacultyAt03,C4FfacultyAt05},dispatch]=useStateValue()
   
        const monday=[C4MfacultyAt9,C4MfacultyAt10,C4MfacultyAt11,C4MfacultyAt12,C4MfacultyAt03,C4MfacultyAt04,C4MfacultyAt05]
        const tuesday=[C4TfacultyAt9,C4TfacultyAt10,C4TfacultyAt11,C4TfacultyAt12,C4TfacultyAt03,C4TfacultyAt04,C4TfacultyAt05]
        const wednesday=[C4WfacultyAt9,C4WfacultyAt10,C4WfacultyAt11,C4WfacultyAt12,C4WfacultyAt03,C4WfacultyAt04,C4WfacultyAt05]
        const thursday=[C4THfacultyAt9,C4THfacultyAt10,C4THfacultyAt11,C4THfacultyAt12,C4THfacultyAt03,C4THfacultyAt04,C4THfacultyAt05]
        const friday=[C4FfacultyAt9,C4FfacultyAt10,C4FfacultyAt11,C4FfacultyAt12,C4FfacultyAt03,C4FfacultyAt04,C4FfacultyAt05]
        const prof=['Dr. Biswas','Dr. UDD','Dr. Koushik','Dr. VSS','Dr. Rakesh']
      
        const courseHandler=(each)=>{
            let course=[]
            if(each[0]===prof[0]){
             course='Health Safety & Environment'
            }
            if(each[0]===prof[1]){
              course='Process Dynamics & Control'
            }
            if(each[0]===prof[2]){
              course='Chemical Process Technology'
            }
            if(each[0]===prof[3]){
              course='Mass Transfer Operation-2'
            }
            if(each[0]===prof[4]){
              course='Plant Design'
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

export default Che4preview

