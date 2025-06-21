import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// ✅ Fixed Validation Schema
const signupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name too short').required('Full name required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm your password'),
});

const SignupScreen = ({ navigation }) => {
  const handleSignup = (values) => {
    console.log('Signup data:', values);
    alert('Account created successfully ✅');
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Formik
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={signupSchema}
        onSubmit={handleSignup}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <Text style={styles.labelfullname}>Full Name</Text>
            <TextInput
              placeholder="Enter your name"
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.errorname}>{errors.name}</Text>}

            <Text style={styles.labelemail}>Email</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && <Text style={styles.erroremail}>{errors.email}</Text>}

            <Text style={styles.labelpassword}>Create Password</Text>
            <TextInput
              placeholder="Create a Password"
              style={styles.input}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.errorpassword}>{errors.password}</Text>}

            <Text style={styles.labelconfirm}>Confirm Password</Text>
            <TextInput
              placeholder="Re-enter your Password"
              style={styles.input}
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorconfirm}>{errors.confirmPassword}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008b8b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#fff',
  },
  labelfullname: {
    fontSize: 12,
    color: '#fff',
    marginLeft: -210,
    paddingVertical: 2,
  },
  labelemail: {
    fontSize: 12,
    color: '#fff',
    marginLeft: -235,
    paddingVertical: 2,
    marginTop: 5,
  },
  labelpassword: {
    fontSize: 12,
    color: '#fff',
    marginLeft: -180,
    paddingVertical: 2,
    marginTop: 5,
  },
  labelconfirm: {
    fontSize: 12,
    color: '#fff',
    marginLeft: -170,
    paddingVertical: 2,
    marginTop: 5,
  },
  input: {
    backgroundColor: '#333',
    padding: 10,
    width: '90%',
    borderRadius: 15,
    elevation: 5,
    color: '#fff',
  },
  errorname: {
    fontSize: 8,
    color: '#7fffd4',
    marginLeft: -210,
  },
  erroremail: {
    fontSize: 8,
    color: '#7fffd4',
    marginLeft: -220,
  },
  errorpassword: {
    fontSize: 8,
    color: '#7fffd4',
    marginLeft: -205,
  },
  errorconfirm: {
    fontSize: 8,
    color: '#7fffd4',
    marginLeft: -190,
  },
  button: {
    backgroundColor: '#b0e0e6',
    marginTop: 40,
    padding: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SignupScreen;
