import React from 'react'
import {Section1, Section2} from '../../components/pages/oeuvres/elements'
import  Layout_Oeuvre  from '../../layouts/Layout'
import Footer from '../../components/layouts/footer'
import SidebarOeuvre from '../../components/Oeuvres/Sidebar_Oeuvres';
import Card_two from '../../components/elements/Card_two';
import {Select,Input} from 'antd'
import {SearchOutlined} from "@ant-design/icons";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import csc from "country-state-city";
import cities from 'cities.json';
const Dashart = () => {
  const [country,setCountry]=React.useState('')

  return (
    <><React.Fragment>
      <SidebarOeuvre />
      <div className="lg:ml-60 flex flex-col lg:flex-row justify-around items-center gap-5">
        <div className="lg:w-56 h-24 bg-white border mt-5 rounded-lg shadow-md w-[97%]">
          <span>20K Views</span>
        </div>
          <div className="lg:w-56 h-24 bg-white border mt-5 rounded-lg shadow-md">
        </div>
          <div className="lg:w-56 h-24 bg-white border mt-5 rounded-lg shadow-md">
        </div>
      </div>
      <div className={'lg:ml-60 flex flex-row flex-wrap justify-around items-center gap-3 lg:gap-5 p-5 lg:p-10'}>
        <CountryDropdown classes='drop' value={country} onChange={(val) => setCountry(val)} />
        <div className={'w-62'}><Input size="large" placeholder="search....." prefix={<SearchOutlined />} className={'w-80'}/>
      </div>
      </div>
      
    <div className={'lg:ml-60 mt-10 flex flex-row flex-wrap justify-center items-center gap-5 mb-5'}>
        <Card_two />
        <Card_two />
        <Card_two />
        <Card_two />
        <Card_two />
        <Card_two />
        <Card_two />
        <Card_two />
        <Card_two />
        <Card_two />
      </div>
</React.Fragment></>
  )
}

export default Dashart