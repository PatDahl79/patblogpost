import React, { useContext } from "react";
import { Card, CardHeader, CardBody, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import MyContext from "../context/myContext";

export default function Signup() {
    const context = useContext(MyContext);
    const { mode } = context;

    return (
        <div className={`flex justify-center items-center h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Card className={`w-full max-w-md ${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <CardHeader
                    floated={false}
                    shadow={false}
                    className={`m-0 grid place-items-center rounded-b-none py-8 px-4 text-center ${mode === 'dark' ? 'bg-gray-200' : 'bg-gray-700'}`}
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" alt="User Icon" className="h-20 w-20" />
                    </div>
                    <Typography variant="h4" className={mode === 'dark' ? 'text-gray-900' : 'text-gray-100'}>
                        Sign Up
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form className="flex flex-col gap-4">
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            className={mode === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-gray-900'}
                        />
                        <Input
                            type="password"
                            label="Password"
                            className={mode === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-gray-900'}
                        />
                        <Input
                            type="confirmpassword"
                            label="Confirm Password"
                            className={mode === 'dark' ? 'bg-gray-600 text-white' : 'bg-white text-gray-900'}
                        />
                        <Button
                            className="mt-6"
                            style={{
                                backgroundColor: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
                            }}
                        >
                            Sign Up
                        </Button>
                        <Typography className={`mt-6 text-center ${mode === 'dark' ? 'text-gray-200' : 'text-gray-700'} text-xl`}>
                            Alredy have an account?
                            <Link to="/login" className={`underline ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'} text-xl ml-1`}>
                                Login
                            </Link>
                        </Typography>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
