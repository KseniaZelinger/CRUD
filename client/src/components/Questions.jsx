import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import e from 'express';



const Question = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/questions')
            .then(res => res.json())
            .then(res => {
                console.log(res.questions)
                let arr = res.questions
                for (let i = 0; i < arr.length; i++) {
                    arr[i].num = i + 1
                }
                setdata(arr)
            })
    }, [])

    const deleteQuestion = (id) => {
        alert(id)
    }

    const columns = [
        {
            title: 'Номер вопроса',
            dataIndex: 'num',
            key: 'num',
        },
        {
            title: 'Вопрос',
            dataIndex: 'question',
            key: 'question',
        },
        {
            title: 'Ответ',
            dataIndex: 'answer',
            key: 'answer',
        },
        {
            title: 'Действие',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <button onClick={() => alert(id)}>Delete</button>,
        },

    ];

    return (
        <Table
            columns={columns}
            expandable={{
                expandedRowRender: (record) => (
                    <p
                        style={{
                            margin: 0,
                        }}
                    >
                        {record.description}
                    </p>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
            }}

            dataSource={data}
        />
    )

};

export default Question