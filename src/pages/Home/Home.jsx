import React, { useContext, useState } from 'react'
import Form from '../../components/Form/Form'
import QuizArea from '../QuizArea/QuizArea'
import quizContext from '../../context/quizContext'
import { HashLoader } from 'react-spinners';
import { Text } from '@chakra-ui/react'
// import NavBar from '../../components/NavBar/NavBar'
// import { ToastContainer, toast } from "react-toastify"

const Home = () => {
    const context = useContext(quizContext)
    const { setUrl, url, fetchQuestions, setLoading, loading, questions } = context
    const [formData, setFormData] = useState({ number: '', category: '', difficulty: '', type: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        const { number, category, difficulty, type } = formData
        
        setUrl(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`, fetchQuestions(url))
        setLoading(true)
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
                {/* <NavBar ></NavBar> */}
            <div className="d-flex justify-content-center align-items-center ">
                <HashLoader
                    color={'#3585c1'}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    style={{ backgroundColor: '#4d4d4dcc', width: '100%', height: '100%', position: 'absolute', top: '0%' }}
                />
            </div>
            
            {
                (url === '' || questions.length === 0)
                    ?
                    <div className="container my-3 mb-0 ">
                        <Text mb={'4'} fontSize='4xl'>Start your Quiz Now</Text>
                        <hr />
                        <div className=' shadow-lg p-3 mt-3 mb-5 bg-body rounded ' style={{height:"100%;" }}>
                        <Form handleSubmit={handleSubmit} onChange={onChange} />
                        </div>
                    </div>
                    :
                    <QuizArea />
            }
            {/* <ToastContainer></ToastContainer> */}
        </>
    )
}

export default Home
