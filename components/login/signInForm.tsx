import React from 'react'
import styles from '../../css/login/signInForm.module.scss'
import {useForm} from "@mantine/form";
import {Box, Button,Divider, PasswordInput, TextInput} from "@mantine/core";
import Link from "next/link";
import {UserLogin} from "../../types/userLogin";

const SignInForm = () =>{

    const form = useForm({
        initialValues: { email: '', password: ''},

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter your valid email address'),
            password: (value) => (value.length < 1 ? 'Please enter your password  ' : null),
        },
    });

    const onSubmit = (values: UserLogin) =>{
        console.log('Form was submitted');
    }

    return(
        <div className={styles.container}>
            <Box  className={styles.form}>
                <form onSubmit= {form.onSubmit((values: UserLogin) => onSubmit(values))}>
                    <TextInput size={"md"} className={styles.input} label="Email" placeholder="Email" withAsterisk={true} {...form.getInputProps('email')} />
                    <PasswordInput   size={"md"} className={styles.input} withAsterisk={true}  mt="sm" label="Password" placeholder="Password" {...form.getInputProps('password')} />
                    <Button type="submit"  size={'md'} className={styles.button}>
                        Sign In
                    </Button>
                </form>
                <Divider  size={'md'} my="sm" label="or" labelPosition="center"/>
                <Button type="submit"  size={'md'} className={styles.googleBtn}>
                    Sign In with Google
                </Button>
                <div className={styles.text}>
                    <div>If you do not have an account, please</div>
                    <Link href='/auth/sign-up'>
                        Sign Up
                    </Link>
                </div>
            </Box>
        </div>
    )
}

export default SignInForm;