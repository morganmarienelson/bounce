import React from 'react'
import styles from '../../css/login/signInForm.module.scss'
import {useForm} from "@mantine/form";
import {Box, Button, NumberInput, PasswordInput, TextInput} from "@mantine/core";
import Link from "next/link";

const SignInForm = () =>{

    const form = useForm({
        initialValues: { email: '', password: ''},

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter a valid email'),
            password: (value) => (value.length < 1 ? 'Please enter your password  ' : null),
        },
    });

    const onSubmit = (values: any) =>{
        console.log('Form was submitted');
    }

    return(
        <div className={styles.container}>
            <Box maw={320} mx="auto" my={'auto'}>
                <form onSubmit= {form.onSubmit((values) => onSubmit(values))}>
                    <TextInput label="Email" placeholder="Email" withAsterisk={true} {...form.getInputProps('email')} />
                    <PasswordInput withAsterisk={true}  mt="sm" label="Password" placeholder="Password" {...form.getInputProps('password')} />
                    <Button type="submit" mt="sm">
                        Sign In
                    </Button>
                </form>
                <div>or</div>
                <div>If you do not have an account, please</div>
                <Link href='/auth/sign-up'>
                    Sign Up
                </Link>
            </Box>
        </div>
    )
}

export default SignInForm;