import React, { useState } from 'react';
import '../Assets/Styles/Signup.css'
import Layout from '../Components/Layout';

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [userType, setUserType] = useState('');
    const [maleDhol, setMaleDhol] = useState('');
    const [femaleDhol, setFemaleDhol] = useState('');
    const [maleTasha, setMaleTasha] = useState('');
    const [femaleTasha, setFemaleTasha] = useState('');
    const [city, setCity] = useState('');
    const [videoLink, setVideoLink] = useState('');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            name,
            email,
            password,
            mobile,
            userType,
            maleDhol,
            femaleDhol,
            maleTasha,
            femaleTasha,
            city,
            videoLink
        });
    };

    return (
        <Layout>

            <form onSubmit={handleSubmit}>
                <h1>Sign Up Form</h1>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Mobile:
                        <input type="tel" value={mobile} onChange={(event) => setMobile(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        User Type:
                    </label>
                    <label>
                        <input type="radio" name="user-type" value="customer" checked={userType === 'customer'} onChange={handleUserTypeChange} />
                        Customer
                    </label>
                    <label>
                        <input type="radio" name="user-type" value="team" checked={userType === 'team'} onChange={handleUserTypeChange} />
                        Team
                    </label>
                </div>
                {userType === 'team' && (
                    <>
                        <div>
                            <label>
                                Male Dhol:
                                <input type="text" value={maleDhol} onChange={(event) => setMaleDhol(event.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Female Dhol:
                                <input type="text" value={femaleDhol} onChange={(event) => setFemaleDhol(event.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Male Tasha:
                                <input type="text" value={maleTasha} onChange={(event) => setMaleTasha(event.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Female
                                Tasha:
                                <input type="text" value={femaleTasha} onChange={(event) => setFemaleTasha(event.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                City:
                                <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                Video Link:
                                <input type="url" value={videoLink} onChange={(event) => setVideoLink(event.target.value)} />
                            </label>
                        </div>
                    </>
                )}
                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}

export default SignUpForm;