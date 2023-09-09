import React from 'react'
import styles from '../../css/login/signInForm.module.scss'
import {useForm} from "@mantine/form";
import {Box, Button,Divider, PasswordInput, TextInput} from "@mantine/core";
import Link from "next/link";
import {UserSignUp} from "../../types/userSignUp";
const SignUpForm = () =>{

    const form = useForm({
        initialValues: { firstName: '', lastName:'', email: '', password: '', confirmPassword: '', username: ''},

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter a valid email'),
            password: (value) => (value.length < 1 ? 'Please enter your password  ' : null),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Your entered passwords did not match' : null,
            firstName: (value) => (value.length < 1 ? 'Please enter your first name  ' : null),
            lastName: (value) => (value.length < 1 ? 'Please enter your last name  ' : null),
            username: (value) => (value.length < 1 ? 'Please enter a username' : null),
        },
    });

    const onSubmit = async (values: UserSignUp) =>{
        const newUser = {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            username: values.username,
        }

        const data = await fetch('/api/route', {
            method: "POST",
            body: JSON.stringify(newUser),
        });
        const res = await data.json();
        if (!res.ok){
            console.log(res);
        }

    }

    return(
        <div className={styles.container}>
            <Box  className={styles.form}>
                <form onSubmit={form.onSubmit((values: UserSignUp) => onSubmit(values))}>
                    <TextInput size={"md"} className={styles.input} label="First Name" placeholder="First Name" withAsterisk={true} {...form.getInputProps('firstName')} />
                    <TextInput size={"md"} className={styles.input} label="Last Name" placeholder="Last Name" withAsterisk={true} {...form.getInputProps('lastName')} />
                    <TextInput size={"md"} className={styles.input} label="Username" placeholder="Username" withAsterisk={true} {...form.getInputProps('username')} />
                    <TextInput size={"md"} className={styles.input} label="Email" placeholder="Email" withAsterisk={true} {...form.getInputProps('email')} />
                    <PasswordInput   size={"md"} className={styles.input} withAsterisk={true}  mt="sm" label="Password" placeholder="Password" {...form.getInputProps('password')} />
                    <PasswordInput   size={"md"} className={styles.input} withAsterisk={true}  mt="sm" label="Confirm Password" placeholder="Confirm Password" {...form.getInputProps('confirmPassword')} />
                        <Button type="submit"  size={'md'} className={styles.button}>
                            Sign Up
                        </Button>
                </form>
                <Divider  size={'md'} my="sm" label="or" labelPosition="center"/>
                <Button type="submit"  size={'md'} className={styles.googleBtn}>
                    Sign Up with Google
                </Button>
                <div className={styles.text}>
                    <div>If you already have an account, please</div>
                    <Link href='/auth/sign-in'>
                        Sign In
                    </Link>
                </div>
            </Box>
        </div>
    )
}

export default SignUpForm;