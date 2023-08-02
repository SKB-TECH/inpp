import React from 'react'
import {Section1, Section2} from '../../components/pages/oeuvres/elements'
import  Layout_Oeuvre  from '../../layouts/Layout'
import Footer from '../../components/layouts/footer'
import SidebarOeuvre from '../../components/Oeuvres/Sidebar_Oeuvres';
import NavbarOeuvre from '../../components/Oeuvres/Navbar_Oeuvre';
import Card_two from '../../components/elements/Card_two';
import {Select,Input} from 'antd'
import {SearchOutlined} from "@ant-design/icons";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import csc from "country-state-city";
import cities from 'cities.json';
const Oeuvres = () => {
  const [country,setCountry]=React.useState('')

  return (
    <React.Fragment>
      <SidebarOeuvre />
      <div className={'lg:ml-60 flex flex-row flex-wrap justify-around items-center gap-3 lg:gap-5 p-5 lg:p-10'}>
          <div><Select options={[{
            value:"All",label:"All"
          },{
            value:"City",label:"City"
          },
          {
            value:"Country",label:"Country"
          }]} className={'w-44 h-10 border-none'} size='large'/></div>
          <div>
          <CountryDropdown classes='drop' value={country}  onChange={(val) => setCountry(val)}/>
          </div>
          <div className={'w-62'}><Input size="large" placeholder="search....." prefix={<SearchOutlined/>} className={'w-80'}/></div>
      </div>
      <div className={'lg:ml-60 mt-10 flex flex-row flex-wrap justify-center items-center gap-5 mb-5'}>
          <Card_two />
          <Card_two/>
          <Card_two/>
          <Card_two/>
          <Card_two/>
          <Card_two/>
          <Card_two/>
          <Card_two/>
          <Card_two/>
          <Card_two/>
      </div>
</React.Fragment>
  )
}

export default Oeuvres