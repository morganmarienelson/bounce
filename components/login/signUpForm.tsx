import React from 'react'
import styles from '../../css/login/signInForm.module.scss'
import {useForm} from "@mantine/form";
import {Box, Button,Divider, PasswordInput, TextInput} from "@mantine/core";
import Link from "next/link";

const SignUpForm = () =>{

    const form = useForm({
        initialValues: { firstName: '', lastName:'', email: '', password: '', confirmPassword: ''},

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter a valid email'),
            password: (value) => (value.length < 1 ? 'Please enter your password  ' : null),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Your entered passwords did not match' : null,
            firstName: (value) => (value.length < 1 ? 'Please enter your first name  ' : null),
            lastName: (value) => (value.length < 1 ? 'Please enter your last name  ' : null),
        },
    });

    const onSubmit = (values: any) =>{
        console.log('Form was submitted');
    }

    return(
        <div className={styles.container}>
            <Box  className={styles.form}>
                <form onSubmit= {form.onSubmit((values) => onSubmit(values))}>
                    <TextInput size={"md"} className={styles.input} label="First Name" placeholder="First Name" withAsterisk={true} {...form.getInputProps('firstName')} />
                    <TextInput size={"md"} className={styles.input} label="Last Name" placeholder="Last Name" withAsterisk={true} {...form.getInputProps('lastName')} />
                    <TextInput size={"md"} className={styles.input} label="Email" placeholder="Email" withAsterisk={true} {...form.getInputProps('email')} />
                    <PasswordInput   size={"md"} className={styles.input} withAsterisk={true}  mt="sm" label="Password" placeholder="Password" {...form.getInputProps('password')} />
                    <PasswordInput   size={"md"} className={styles.input} withAsterisk={true}  mt="sm" label="Confirm Password" placeholder="Confirm Password" {...form.getInputProps('confirmPassword')} />
                    <Link href='/'>
                        <Button type="submit"  size={'md'} className={styles.button}>
                            Sign Up
                        </Button>
                    </Link>
                </form>
            </Box>
        </div>
    )
}

export default SignUpForm;