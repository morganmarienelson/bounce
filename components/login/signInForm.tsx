import React from 'react'
import styles from '../../css/login/signInForm.module.scss'
import {useForm} from "@mantine/form";
import {Box, Button, NumberInput, TextInput} from "@mantine/core";

const SignInForm = () =>{

    const form = useForm({
        initialValues: { email: '', password: ''},

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Please enter a valid email'),
            password: (value) => (value.length < 5 ? 'Your password must have at least 5 characters' : null),
        },
    });

    const onSubmit = () =>{
        console.log('Form was submitted');
    }

    return(
        <div className={styles.container}>
            <Box maw={320} mx="auto" my={'auto'}>
                <form onSubmit={form.onSubmit(onSubmit)}>
                    <TextInput label="Email" placeholder="Email" withAsterisk={true} {...form.getInputProps('email')} />
                    <TextInput withAsterisk={true} mt="sm" label="Password" placeholder="Password" {...form.getInputProps('password')} />
                    <Button type="submit" mt="sm">
                        Submit
                    </Button>
                </form>
            </Box>
            <div>or</div>
            <div>If you do not have an account, please</div>
        </div>
    )
}

export default SignInForm;