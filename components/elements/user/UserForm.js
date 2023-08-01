'use client'

import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import React, { useState } from 'react';

const { TextArea } = Input;


const UserFormData = () => {
  return (
    <div className='' >
      <Form
        labelCol={{ span: 8 }}
        // wrapperCol={{ span: 14 }}
        layout="vertical"
        // disabled={true}
        className=' p-4 border rounded-md flex flex-col '
      >
        <Form.Item label="Username ">
          <Input />
        </Form.Item>
        <Form.Item label="Password ">
          <Input />
        </Form.Item>

          <Button type='primary' size='small' className='w-min bg-gray-800 text-gray-50 rounded-sm  items-center  self-end'>Valider</Button>
      </Form>
    </div>
  );
};

export default UserFormData;