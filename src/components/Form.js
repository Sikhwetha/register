import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    course: '',
    gender: '',
    checked: false,
    email: '',
    password: '',
    date: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setSubmittedData(formData);
  };

  return (
    <div style={styles.container}>
     <div>
     <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.formLabel}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.inputField} required />
        </label>

        <label style={styles.formLabel}>
          Surname:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} style={styles.inputField} required />
        </label>

        <label style={styles.formLabel}>
          Course:
          <input type="text" name="course" value={formData.course} onChange={handleChange} style={styles.inputField} required />
        </label>

        <div style={styles.formLabel}>
          Gender:
          <div style={styles.genderButtons}>
            <button
              name="gender"
              value="male"
              onClick={handleChange}
              style={formData.gender === 'male' ? styles.selectedButton : styles.button}
            >
              Male
            </button>
            <button
              name="gender"
              value="female"
              onClick={handleChange}
              style={formData.gender === 'female' ? styles.selectedButton : styles.button}
            >
              Female
            </button>
          </div>
        </div>

        <label style={styles.formLabel}>
          <input
            type="checkbox"
            name="checked"
            checked={formData.checked}
            onChange={handleChange}
            required
          />
          Agree to Terms
        </label>

        <label style={styles.formLabel}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.inputField} required />
        </label>

        <label style={styles.formLabel}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.inputField}
            required
          />
        </label>

        <label style={styles.formLabel}>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} style={styles.inputField} required />
        </label>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
     </div>

      {submittedData && (
        <div style={styles.submittedData}>
          <h2>Submitted Information:</h2>
          {Object.entries(submittedData).map(([key, value]) => (
            <p key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
              {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
  
    marginTop:'-70%',
    marginLeft:'25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
   
  },
  form: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   marginLeft:'-35rem'
  },
  button: {
    padding: '8px 12px',
    margin: '0 5px',
    cursor: 'pointer',
  },
  selectedButton: {
    padding: '8px 12px',
    margin: '0 5px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
  },
  genderButtons: {
    display: 'flex',
  },
  submittedData: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #2ecc71',
    borderRadius: '5px',
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    position:'absolute',
    top:'10rem',
    left:'40rem'

  },
  submitButton: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  formLabel: {
    display: 'block',
    marginBottom: '10px',
    width: '100%',
  },
  inputField: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '14px',
  },
};

export default Form;
