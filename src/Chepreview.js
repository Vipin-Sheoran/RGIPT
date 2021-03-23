import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Chepreview({preview}) {

    const [{CMfacultyAt9,CMfacultyAt10,CMfacultyAt11,CMfacultyAt12,CMfacultyAt04,CMfacultyAt03,CMfacultyAt05,
        CTfacultyAt9,CTfacultyAt10,CTfacultyAt11,CTfacultyAt12,CTfacultyAt04,CTfacultyAt03,CTfacultyAt05,
        CWfacultyAt9,CWfacultyAt10,CWfacultyAt11,CWfacultyAt12,CWfacultyAt04,CWfacultyAt03,CWfacultyAt05,
        CTHfacultyAt9,CTHfacultyAt10,CTHfacultyAt11,CTHfacultyAt12,CTHfacultyAt04,CTHfacultyAt03,CTHfacultyAt05,
        CFfacultyAt9,CFfacultyAt10,CFfacultyAt11,CFfacultyAt12,CFfacultyAt04,CFfacultyAt03,CFfacultyAt05,
      
        POMfacultyAt9,POMfacultyAt10,POMfacultyAt11,POMfacultyAt12,POMfacultyAt04,POMfacultyAt03,POMfacultyAt05,
        POTfacultyAt9,POTfacultyAt10,POTfacultyAt11,POTfacultyAt12,POTfacultyAt04,POTfacultyAt03,POTfacultyAt05,
        POWfacultyAt9,POWfacultyAt10,POWfacultyAt11,POWfacultyAt12,POWfacultyAt04,POWfacultyAt03,POWfacultyAt05,
        POTHfacultyAt9,POTHfacultyAt10,POTHfacultyAt11,POTHfacultyAt12,POTHfacultyAt04,POTHfacultyAt03,POTHfacultyAt05,
        POFfacultyAt9,POFfacultyAt10,POFfacultyAt11,POFfacultyAt12,POFfacultyAt04,POFfacultyAt03,POFfacultyAt05},dispatch]=useStateValue()
   
        const monday=[CMfacultyAt9,CMfacultyAt10,CMfacultyAt11,CMfacultyAt12,CMfacultyAt03,CMfacultyAt04,CMfacultyAt05]
        const courseM=[POMfacultyAt9,POMfacultyAt10,POMfacultyAt11,POMfacultyAt12,POMfacultyAt03,POMfacultyAt04,POMfacultyAt05]
        const courseT=[POTfacultyAt9,POTfacultyAt10,POTfacultyAt11,POTfacultyAt12,POTfacultyAt03,POTfacultyAt04,POTfacultyAt05]
        const courseW=[POWfacultyAt9,POWfacultyAt10,POWfacultyAt11,POWfacultyAt12,POWfacultyAt03,POWfacultyAt04,POWfacultyAt05]
        const courseTH=[POTHfacultyAt9,POTHfacultyAt10,POTHfacultyAt11,POTHfacultyAt12,POTHfacultyAt03,POTHfacultyAt04,POTHfacultyAt05]
        const courseF=[POFfacultyAt9,POFfacultyAt10,POFfacultyAt11,POFfacultyAt12,POFfacultyAt03,POFfacultyAt04,POFfacultyAt05]
        const tuesday=[CTfacultyAt9,CTfacultyAt10,CTfacultyAt11,CTfacultyAt12,CTfacultyAt03,CTfacultyAt04,CTfacultyAt05]
        const wednesday=[CWfacultyAt9,CWfacultyAt10,CWfacultyAt11,CWfacultyAt12,CWfacultyAt03,CWfacultyAt04,CWfacultyAt05]
        const thursday=[CTHfacultyAt9,CTHfacultyAt10,CTHfacultyAt11,CTHfacultyAt12,CTHfacultyAt03,CTHfacultyAt04,CTHfacultyAt05]
        const friday=[CFfacultyAt9,CFfacultyAt10,CFfacultyAt11,CFfacultyAt12,CFfacultyAt03,CFfacultyAt04,CFfacultyAt05]
        const prof=['Dr. Milan Kumar','Dr. Amit Ranjan','Dr. Koushik','Dr. Bala','Dr. Rakesh','Dr. Gunjan']
      
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
            course='Petroleum Refining'
          }
          if(each[0]===prof[4]){
            course='Mass Transfer'
          }
          if(each[0]===prof[5]){
            course='SFM'
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

