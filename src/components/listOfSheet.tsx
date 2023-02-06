import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MonthBasedData } from './constant'
import { MonthBasedDataProps } from './interface'

const ListOfSheet: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {
        MonthBasedData.map((detail: MonthBasedDataProps, index: number) => <div key={detail.name} onClick={() => {
          navigate(`/spreadsheet/${detail.id}`)
        }}>
          {detail.name}
        </div>)
      }
      {/* {
        MonthBasedData.map((detail: MonthBasedDataProps, index: number) => <Link key={detail.name} to={`/spreadsheet/${detail.id}`}>
          {detail.name}
        </Link>)
      } */}
    </>
  )
}

export default ListOfSheet