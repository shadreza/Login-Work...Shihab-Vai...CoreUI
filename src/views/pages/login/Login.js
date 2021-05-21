import React , { useContext } from 'react';
import { Link , useHistory } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import './Login.css';
import CIcon from '@coreui/icons-react';
import { ContextForDashboard , ContextForUserInfo } from 'src/App';

const Login = () => {

  const dashboardContext = useContext(ContextForDashboard);
  const userInfoContext = useContext(ContextForUserInfo);

  let history = useHistory();

  let nameFromInput = '';
  let jobFromInput = '';

  const clickedLoginButton = () => {
    nameFromInput = document.getElementById('input-name').value;
    jobFromInput = document.getElementById('input-job').value;

    if(typeof nameFromInput !== 'undefined' && nameFromInput !== null && nameFromInput.length > 0 && typeof jobFromInput !== 'undefined' && jobFromInput !== null && jobFromInput.length > 0) {

      console.log(`{
  name : "${nameFromInput}",
  job : "${jobFromInput}"
}`);

      const dummyEmail = "eve.holt@reqres.in";
      const dummyPassword = "cityslicka";

      userInfoContext[0][1](true);
      userInfoContext[1][1](nameFromInput);
      userInfoContext[2][1](jobFromInput);
      userInfoContext[3][1](dummyEmail);
      userInfoContext[4][1](dummyPassword);

      const url = 'https://reqres.in/api/login';
      // data to be sent to the POST request
      let _data = {
        "email": dummyEmail,
        "password": dummyPassword
      }

      try{
        fetch(url, {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(data => {
          // console.log(data);
          if(typeof(data.error)!=='undefined' && data.error.length>0){
            // error
            history.replace('/register');
          }
          else if(typeof(data.token) !== 'undefined' && data.token.length>0){
            // success
            dashboardContext[1](false);
            history.replace('/');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
      catch(err){
        console.log('Problem With The Server');
      }
    }

    else{
      return;
    }
    
  }

  let togglerSwitchCount=0;

  const togglerClicked = () => {
    togglerSwitchCount=(togglerSwitchCount+1)%2;
    if(togglerSwitchCount === 1){
      document.getElementById('text-Personal').style.color="gray";
      document.getElementById('text-Company').style.color="#321fdb";
      document.getElementById('dummy').style.display="inline-block";
    }
    else if(togglerSwitchCount === 0){
      document.getElementById('text-Personal').style.color="#321fdb";
      document.getElementById('text-Company').style.color="gray";
      document.getElementById('dummy').style.display="none";
    }
    else{

    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <div className="muted-text-and-toggler-div">
                      <div className="muted-text-on-left">
                        <p className="text-muted">Sign In to your account</p>
                      </div>
                      <div className="toggler-on-right">
                        <div className="toggler-switch">
                          <p className="text-toggler" id="text-Personal">Personal</p>
                          <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"  id="switch-btn" onClick={()=>togglerClicked()}/>
                          </label>
                          <p className="text-toggler" id="text-Company">Company</p>
                        </div>
                      </div>
                    </div>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Name" autoComplete="name" id="input-name" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          {/* <CIcon name="cil-card-travel" /> */}
                          <img src="https://image.flaticon.com/icons/png/512/639/639394.png" alt="" className="briefcase-icon" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Job" autoComplete="job" id="input-job"/>
                    </CInputGroup>
                    <div id="dummy">
                      <CInputGroup className="mb-4 dummy-class">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Dummy" autoComplete="dummy" id="input-dummy"/>
                      </CInputGroup>
                    </div>
                    
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={() => clickedLoginButton()}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
