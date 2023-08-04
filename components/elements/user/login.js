import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { useRouter } from 'next/navigation';
import UserFormData from './UserForm'

function AccountDrawer({ open, onClose }) {

    return (
        <>

            <Drawer title="New Artist" placement="right" onClose={onClose} open={open} className='p-2' width={550}>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <h3 className='text-base font-semibold'></h3>
                    <p className=' text-justify text-sm font-semibold text-gray-600 '>
                        Nous sommes ravis de vous revoir
                    </p>
                    <UserFormData />
                </div>
            </Drawer>
        </>
    );
};

export default AccountDrawer;