import {React, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div `
    width: 1160px;
    padding: 0 20px;
    margin: 0 auto;
`;
const FeedbackForm = styled.div `
  background-color: #FFFFFF;
  padding-left: 150px;
`;
const FeedbackTitle = styled.div `
  font-size: 40px;
  color: #3E3E3E;
  padding-top: 180px;
  padding-bottom: 30px;
`;
const FeedbackItems = styled.form`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;
const FeedbackInput = styled.input`
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;
    width: 557px;
    height: 93px;
    margin-bottom: 10px;
`;
const Button = styled.button`
    width: 218px;
    height: 73px;
    background: #FAD34F;
    border-radius: 35px;
    margin: 10px 0px 170px;
`;
const Textarea = styled.textarea`
  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  border-radius: 10px;
  width: 557px;
  height: 93px;
  margin-bottom: 10px;
`
const Map = styled.div`
    max-width: 500px;
    width: 100%;
    height: 790px;
`;
const Footer = styled.div`
    border-top: 2px solid #acacac;
    background: #FAFAFA;
    height: 200px;
`;

function Style() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const submit= (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message
            })

        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Request successful', data);
                return data;
            })
            .catch(function(error) {
                console.log('Request failed', error)
            });
    }
    return (
        <>
            <Wrapper>
                <FeedbackForm>
                    <FeedbackTitle>Reach out to us!</FeedbackTitle>
                    <FeedbackItems onSubmit={submit}>
                        <FeedbackInput type="text" onChange={event => setName(event.target.value)} />
                        <FeedbackInput type="text"  onChange={event => setEmail(event.target.value)} />
                        <Textarea type="text"  onChange={event => setMessage(event.target.value)} />
                        <Button type="submit">Send message</Button>
                    </FeedbackItems>
                    <Map></Map>
                    <Footer></Footer>
                </FeedbackForm>
            </Wrapper>
        </>
    );
}




export default Style;
