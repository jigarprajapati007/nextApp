import Register from '@/components/Register'
import axios from 'axios'
import React from 'react'
const register = (props:any) => {
  return (
    <Register countryCodes={props.data}/>
  )
}
export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:9192/CountryCode')
    const data=response.data
      return {
        props: {data},
      };
  } catch (error) {
    console.log(error)
    return {
      props: {},
    };
  }
}

export default register;