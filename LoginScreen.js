import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password required'),
});

const LoginScreen = ({ navigation }) => {
  const handleLogin = (values) => {
    console.log('Login value:', values);
    alert('Login Successful ✅');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Hassan.png')} style={styles.logo} />
      <Text style={styles.title}>Login to your account</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <Text style={styles.erroremail}>{errors.email}</Text>}

            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorpassword}>{errors.password}</Text>
            )}

            <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.buttonsignup}>Don't have an account? Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008b8b',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  logo: {
    height: 90,
    width: 90,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 12,
    width: '90%',
    margin: 10,
    color: '#fff',
  },
  erroremail: {
    color: '#fff',
    marginLeft: -185,
    fontSize: 12,
  },
  errorpassword: {
    color: '#fff',
    marginLeft: -160,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#b0e0e6',
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    width: '50%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  signupbutton: {
    marginTop: 10,
  },
  buttonsignup: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
