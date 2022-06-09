import React from 'react'
import {
  Card, CardHeader, CardBody, Form, FormGroup, Label, Input, FormText, Button, Alert
} from 'reactstrap'

const styles = { "backgroundColor": "#ADD8E6", "color": "#ffffff", "cursor": "pointer" };

class AddAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: "",
      patientSurname: "",
      patientEmail: "",
      patientAge: "",
      gender: "",
      aptDate: "",
      aptTime: "",
      aptNotes: "",
      formErrors: false
    };
  }

  save = (e) => {
    e.preventDefault();
    const { patientName, patientSurname, patientEmail, patientAge, gender, aptDate, aptTime, aptNotes } = this.state;
    if (patientName !== "" && patientSurname !== "" && patientEmail !== "" &&  patientAge !== "" && gender !== "" && aptDate !== "" && aptTime !== "" && aptNotes !== "") {
      let apt = {
        id: Date.now(),
        patientName: this.state.patientName,
        patientSurname: this.state.patientSurname,
        patientEmail: this.state.patientEmail,
        patientAge: this.state.patientAge,
        gender: this.state.gender,
        aptDate: this.state.aptDate + ' ' + this.state.aptTime,
        aptNotes: this.state.aptNotes
      };
      let clear = {
        patientName: "",
        patientSurname: "",
        patientEmail: "",
        patientAge: "",
        gender: "",
        aptDate: "",
        aptTime: "",
        aptNotes: "",
      };
      this.setState({
        formErrors: false,
        ...clear
      });
      this.props.saveApt(apt);
    } else {
      this.setState({
        formErrors: true
      });
    }

  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    let errors = {
      display: this.state.formErrors ? 'block' : 'none'
    };
    return (
      <>
        <div className='container'>
        <Card className="mt-4 mb-4 card-border" outline color="info">
        <CardHeader style={styles} ><i className="fas fa-plus"></i> Add New Appointment</CardHeader>
        <CardBody  id="aptBody">
          <FormText color="muted" className="mb-1">
            <span className="text-danger">*</span>All fields are required
          </FormText>
          <Form onSubmit={this.save}>
            <FormGroup>
              <Label for="patientName">Emri</Label>
              <Input type="text" id="patientName" placeholder="Shkruani emrin tuaj" value={this.state.patientName} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="patientSurname">Mbiemri</Label>
              <Input type="text" id="patientSurname" placeholder="Shkruani mbiemrin tuaj" value={this.state.patientSurname} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="patientEmail">Email</Label>
              <Input type="text" id="patientEmail" placeholder="Shkruani email-in tuaj" value={this.state.patientEmail} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="patientAge">Mosha</Label>
              <Input type="number" id="patientAge" placeholder="Zgjedhni moshen tuaj" value={this.state.patientAge} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="gender">Gjinia</Label>
              <Input type="select" id="gender" value={this.state.gender} onChange={this.handleChange} >
                <option>Selekto gjinine</option>
                <option>Femer</option>
                <option>Mashkull</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="aptDate">Data e terminit</Label>
              <Input type="date" id="aptDate" value={this.state.aptDate} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="aptTime">Ora e terminit</Label>
              <Input type="time" id="aptTime" value={this.state.aptTime} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Problemi qe keni</Label>
              <Input type="textarea" id="aptNotes" placeholder="Notes" value={this.state.aptNotes} onChange={this.handleChange} />
            </FormGroup>
            <Alert color="danger" style={errors}>
              Ju lutem plotesoni te gjitha detajet
          </Alert>
            {/* <Button type="submit" color="info" block>Add Appointment</Button> */}
            <Button variant="info" type="submit" className='info' to="/home">  
                  Cakto terminin
                </Button>
          </Form>
        </CardBody>
      </Card >
        </div>
      </>
    )
  }
}

export default AddAppointments
