import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';

function SaveQuestion() {


    const onFinish = async (values) => {
        console.log('Success:', values);
        const reqComparison = await fetch(
            'http://localhost:5000/savequestion',

            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(values)
            });
        const arrSortUserId = await reqComparison.json();
        console.log(arrSortUserId)
        if (arrSortUserId.response === 'success') { message.success('сохранено успешно') }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Вопрос"
                    name="question"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your question!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ответ"
                    name="answer"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your answer!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >

                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default SaveQuestion