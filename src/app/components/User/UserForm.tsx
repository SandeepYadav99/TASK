/* eslint-disable react-refresh/only-export-components */
import { Formik, Form, Field } from "formik";
import React, { useCallback } from 'react';

interface _props {
    count: number;
}
interface _users {
    onUserChangeNumber: (count: number) => void,
    defaultNumber: number
}

const UserForm: React.FC<_users> = ({ onUserChangeNumber, defaultNumber }) => {

    const initialValues: _props = {
        count: defaultNumber
    }

    const submitHandler = useCallback((values: _props) => {
        onUserChangeNumber(values.count)
    }, [defaultNumber])

    return (
        <div className="flex justify-center pb-5">
            <Formik initialValues={initialValues} onSubmit={submitHandler}  >
                {(formik) => {
                    const { values, handleChange } = formik;
                    return (
                        <div className="">
                            <h1 className='text-cyan-800 text-xl p-2'>Change User Number</h1>
                            <Form>
                                <Field type="number"
                                    name="count"
                                    id="count"
                                    className="border-2 p-1.5 block focus:outline-none focus:border-blue-500 rounded-md"
                                    values={values.count}
                                    onChange={handleChange}
                                    required
                                    max={50}
                                />
                            </Form>
                        </div>
                    )
                }}
            </Formik>
        </div>
    )
}

export default React.memo(UserForm);